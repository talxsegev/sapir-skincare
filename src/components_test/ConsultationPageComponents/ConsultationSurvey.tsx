import { useMemo, useRef, useState } from "react";
import { surveySteps, type QuestionDef, type StepDef } from "./surveyData";
import Question from "./Question";

type SubmitStatus = "idle" | "sending" | "success" | "error";

function isAnswered(question: QuestionDef, value: unknown, otherText: string): boolean {
  if (question.optional) return true;
  switch (question.type) {
    case "multi":
      return ((value as string[] | undefined)?.length ?? 0) > 0 || otherText.trim().length > 0;
    case "photo":
      return ((value as string[] | undefined)?.length ?? 0) > 0;
    case "scale":
      return typeof value === "number";
    default:
      return typeof value === "string" && value.trim().length > 0;
  }
}

function findUnanswered(
  step: StepDef,
  answers: Record<string, unknown>,
  otherTexts: Record<string, string>
): QuestionDef | null {
  return step.questions.find((q) => !isAnswered(q, answers[q.id], otherTexts[q.id] ?? "")) ?? null;
}

const ConsultationSurvey = () => {
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [otherTexts, setOtherTexts] = useState<Record<string, string>>({});
  const [consentChecked, setConsentChecked] = useState(false);
  const [photosConsentChecked, setPhotosConsentChecked] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [stepError, setStepError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const visibleSteps = useMemo(() => surveySteps.filter((s) => !s.showIf || s.showIf(answers)), [answers]);
  const totalSteps = visibleSteps.length + 1; // +1 for the final photos+consent handled as last visible step already, so this is steps + review/submit screen
  const isLastStep = stepIndex === visibleSteps.length - 1;
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const setAnswer = (id: string, value: unknown) => setAnswers((prev) => ({ ...prev, [id]: value }));
  const setOtherText = (id: string, text: string) => setOtherTexts((prev) => ({ ...prev, [id]: text }));

  // Every step stays mounted the whole time (only visually hidden) so file
  // inputs on the photos step survive navigating back and forth -- but that
  // means native HTML5 "required" validation can't be trusted: if a required
  // field is missing on a step the user already left, the browser tries to
  // focus it to show the error and silently fails, since a hidden element
  // can't be focused, leaving the user stuck with no visible feedback at all.
  // So validation is handled manually, one step at a time, instead.
  const validateStep = (step: StepDef) => {
    const missing = findUnanswered(step, answers, otherTexts);
    if (missing) {
      setStepError(`Please answer "${missing.label}" before continuing.`);
      return false;
    }
    setStepError(null);
    return true;
  };

  const goNext = () => {
    if (!validateStep(visibleSteps[stepIndex])) return;
    setStepIndex((i) => Math.min(i + 1, visibleSteps.length - 1));
  };
  const goBack = () => {
    setStepError(null);
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(visibleSteps[stepIndex])) return;
    if (!consentChecked || !photosConsentChecked) return;
    if (!formRef.current) return;

    setStatus("sending");
    try {
      // Submits to Netlify's built-in form handler (see the hidden static
      // twin of this form in index.html) rather than EmailJS: EmailJS caps
      // total request size at 50KB, which real skin photos blow through
      // immediately, while Netlify Forms supports file uploads natively.
      const formData = new FormData(formRef.current);
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`Netlify Forms responded with ${response.status}`);
      setStatus("success");
    } catch (error) {
      console.error("Consultation submission failed:", error);
      setStatus("error");
    }
  };

  if (!started) {
    return (
      <div className="flex flex-col items-center gap-8 text-center p-10 max-w-[600px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-light">Hi girl, how can I make you feel good about your skin?</h1>
        <p className="text-md leading-relaxed">
          My goal is to understand not just how your skin looks today, but also when the change started, what
          might be affecting it, and how your skin reacts to the products you use.
        </p>
        <p className="text-md leading-relaxed">
          After I personally review your answers and photos, I'll send you a professional assessment and
          recommendations tailored to your skin, your goals, and your lifestyle.
        </p>
        <p className="text-sm opacity-70">Estimated time to complete: 6–8 minutes.</p>
        <button
          onClick={() => setStarted(true)}
          className="bg-[#EDEBE4] border border-black px-10 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Start My Consultation
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center p-10 max-w-[600px] mx-auto">
        <h2 className="text-3xl font-light">Thank you!</h2>
        <p>
          I've received your answers and photos and will personally review them. You'll hear back from me soon
          with your skin assessment and recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[650px] mx-auto p-5 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
          <div className="h-full bg-black transition-all duration-300" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="text-xs opacity-60 text-center">
          Step {stepIndex + 1} of {visibleSteps.length}
        </span>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="consultation"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
        className="flex flex-col gap-10"
      >
        <input type="hidden" name="form-name" value="consultation" />
        <p hidden>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        {visibleSteps.map((step, index) => (
          <div key={step.id} hidden={index !== stepIndex} className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-light">{step.title}</h2>
              {step.description && <p className="text-sm opacity-70 mt-1">{step.description}</p>}
            </div>
            {step.questions.map((q) => (
              <Question
                key={q.id}
                question={q}
                value={answers[q.id]}
                otherText={otherTexts[q.id] ?? ""}
                onChange={setAnswer}
                onOtherTextChange={setOtherText}
              />
            ))}
          </div>
        ))}

        {isLastStep && (
          <div className="flex flex-col gap-4 border-t border-black/10 pt-6">
            <h3 className="text-xl font-light">Before you submit</h3>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                required
                className="mt-1"
              />
              <span>
                I understand this consultation is for a cosmetic assessment and skincare recommendation. It is
                not a medical diagnosis, medical treatment, or a substitute for a visit to a dermatologist or
                licensed medical professional. I confirm the information I provided is true and complete, and I
                understand I must update Sapir Skincare about pregnancy, breastfeeding, allergies, medications,
                or any medical change before starting any products or treatments.
              </span>
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={photosConsentChecked}
                onChange={(e) => setPhotosConsentChecked(e.target.checked)}
                required
                className="mt-1"
              />
              <span>I agree that Sapir Skincare may store and review my photos solely for the purpose of this consultation.</span>
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input type="hidden" name="marketingOptIn" value={marketingOptIn ? "Yes" : "No"} />
              <input
                type="checkbox"
                checked={marketingOptIn}
                onChange={(e) => setMarketingOptIn(e.target.checked)}
                className="mt-1"
              />
              <span>I'd like to receive marketing updates by email or SMS (optional).</span>
            </label>

            {status === "error" && (
              <p className="text-red-600 text-sm" role="alert">
                Something went wrong sending your consultation. Please try again, or email us directly at
                sapirskincarela@gmail.com.
              </p>
            )}
          </div>
        )}

        {stepError && (
          <p className="text-red-600 text-sm text-center" role="alert">
            {stepError}
          </p>
        )}

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="px-6 py-2 rounded-full border border-black/30 text-sm disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            Back
          </button>
          {isLastStep ? (
            <button
              type="submit"
              disabled={status === "sending" || !consentChecked || !photosConsentChecked}
              className="px-8 py-2 rounded-full bg-black text-white text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Submit My Consultation"}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="px-8 py-2 rounded-full bg-black text-white text-sm cursor-pointer"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ConsultationSurvey;
