import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "FullName" | "PhoneNumber" | "Email";

const Details = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    FullName: false,
    PhoneNumber: false,
    Email: false,
  });

  const [value, setValue] = useState({
    FullName: "",
    PhoneNumber: "",
    Email: "",
    Service: "",
    Message: "",
  });

  const markTouched = (field: FieldName) => setTouched((t) => ({ ...t, [field]: true }));
  const showError = (field: FieldName) => (touched[field] || submitAttempted) && value[field].trim() === "";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!form.current) return;

    // Honeypot: bots fill every field, real visitors never see or fill this one.
    const honeypot = (form.current.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    if (value.FullName.trim() === "" || value.PhoneNumber.trim() === "" || value.Email.trim() === "") {
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS configuration environment variables.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setSubmitAttempted(false);
        setTouched({ FullName: false, PhoneNumber: false, Email: false });
        form.current!.reset();
        setValue({
          FullName: "",
          PhoneNumber: "",
          Email: "",
          Service: "",
          Message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error);
        setStatus("error");
      });
  };

  const errorClass = "border border-red-600 pr-40 p-1";
  const okClass = "border border-black pr-40 p-1";

  return (
    <div className="p-20 flex justify-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5" noValidate>
        {/* Honeypot field: hidden from sighted and screen-reader users, bots tend to fill it anyway */}
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-10 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="FullName" className="font-light text-sm text-gray-600">Full Name *</label>
            <input
              id="FullName"
              value={value.FullName}
              onChange={(e) => setValue({ ...value, FullName: e.target.value })}
              onBlur={() => markTouched("FullName")}
              type="text"
              name="FullName"
              required
              autoComplete="name"
              aria-invalid={showError("FullName")}
              className={showError("FullName") ? errorClass : okClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="PhoneNumber" className="font-light text-sm text-gray-600">Phone Number *</label>
            <input
              id="PhoneNumber"
              value={value.PhoneNumber}
              onChange={(e) => setValue({ ...value, PhoneNumber: e.target.value })}
              onBlur={() => markTouched("PhoneNumber")}
              type="tel"
              inputMode="tel"
              name="PhoneNumber"
              required
              autoComplete="tel"
              placeholder="(818) 266-2387"
              aria-invalid={showError("PhoneNumber")}
              className={showError("PhoneNumber") ? errorClass : okClass}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 gap-5">
          <div className="flex flex-col gap-2 w-full" >
            <label htmlFor="Email" className="font-light text-sm text-gray-600">Email *</label>
            <input
              id="Email"
              value={value.Email}
              onChange={(e) => setValue({ ...value, Email: e.target.value })}
              onBlur={() => markTouched("Email")}
              type="email"
              name="Email"
              required
              autoComplete="email"
              aria-invalid={showError("Email")}
              className={showError("Email") ? "border border-red-600 pr-40 p-1" : "border border-black pr-30 p-1"}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="Service" className="font-light text-sm text-gray-600">Choose a service </label>
            <select
              id="Service"
              onChange={(e) => setValue({ ...value, Service: e.target.value })}
              value={value.Service}
              name="Service"
              className="border border-black min-h-[33px] w-full text-sm font-light"
            >
              <option value="">Select...</option>
              <option value="Deep cleaning facial">Deep cleaning facial</option>
              <option value="Chemical peel">Chemical peel</option>
              <option value="Microneedling">Microneedling</option>
              <option value="Radio Frequency">Radio Frequency</option>
              <option value="Non surgical eyelift">Non surgical eyelift</option>
              <option value="Cosmelan">Cosmelan</option>
              <option value="Body Treatment">Body Treatment</option>
              <option value="I'm not sure">I'm not sure</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Message" className="font-light text-sm text-gray-600">Message </label>
              <textarea
                id="Message"
                className="border border-black p-10"
                value={value.Message}
                onChange={(e) => setValue({ ...value, Message: e.target.value })}
                name="Message"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#EDEBE4] p-1 pr-10 pl-10 cursor-pointer text-xs font-light border-1 border-black hover:bg-black duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "SENDING..." : "SUBMIT"}
            </button>
            <div role="status" aria-live="polite" className="text-center text-sm">
              {status === "success" && (
                <p className="text-green-700">Thank you! Your message has been sent — we'll get back to you shortly.</p>
              )}
              {status === "error" && (
                <p className="text-red-600">Something went wrong sending your message. Please try again, or email us directly at sapirskincarela@gmail.com.</p>
              )}
              {status === "idle" && submitAttempted && (value.FullName.trim() === "" || value.PhoneNumber.trim() === "" || value.Email.trim() === "") && (
                <p className="text-red-600">Please fill in all required fields.</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
