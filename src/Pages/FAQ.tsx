import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";
import LegalLayout from "../components_test/LegalPageComponents/LegalLayout";

const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "Reach out through our Contact page, email sapirskincarela@gmail.com, or call (818) 266-2387. For a personalized starting point, you can also fill out our free skin consultation first.",
  },
  {
    question: "What is the skin consultation, and is it required before booking?",
    answer:
      "It's a short survey about your skin, goals, and history that lets us personally review your answers and photos before recommending treatments or products. It's optional but a great way to get tailored advice before your first visit.",
  },
  {
    question: "Is the skin consultation a substitute for seeing a dermatologist?",
    answer:
      "No. It's a cosmetic assessment, not a medical diagnosis. Please see a licensed dermatologist or physician for any medical skin concern.",
  },
  {
    question: "What happens to the photos I upload in the consultation?",
    answer:
      "They're submitted securely and reviewed only by us, solely to assess your skin and provide recommendations. See our Privacy Policy for full details, or email us anytime to request they be deleted.",
  },
  {
    question: "How accurate is the Ingredient Checker?",
    answer:
      "It's a helpful general-reference tool, not an exhaustive scientific database. It may not catch every ingredient, and photo scanning can occasionally misread a label. Always double check against the physical product and your own dermatologist's advice, especially if you have known allergies.",
  },
  {
    question: "Do you store the ingredient photos I scan?",
    answer:
      "No. Photo scanning happens entirely in your own browser using on-device text recognition — nothing is uploaded to us or any server.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours' notice to reschedule or cancel where possible, so we can offer the time to another client. See our Terms of Service and Studio Policies pages for more.",
  },
  {
    question: "I'm pregnant or breastfeeding — can I still book a service?",
    answer:
      "Please tell us before your appointment (and update your consultation answers if you've already submitted one) so we can recommend treatments and products that are appropriate for you.",
  },
  {
    question: "Where is your studio located?",
    answer: "421 North Rodeo Drive, Beverly Hills, CA 90210.",
  },
];

const FAQ = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)", fontFamily: "Wix Madefor Text sans-serif" }}>
      <SEO
        title="FAQs"
        description="Answers to common questions about booking, the skin consultation, and the Ingredient Checker."
        path="/faq"
      />
      <LegalLayout title="Frequently Asked Questions" lastUpdated="September 13, 2026">
        <div className="flex flex-col gap-6">
          {faqs.map((item) => (
            <div key={item.question} className="flex flex-col gap-1">
              <h2 className="!mt-0">{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <p>
          Don't see your question here? Email{" "}
          <a href="mailto:sapirskincarela@gmail.com" className="underline">sapirskincarela@gmail.com</a> or call{" "}
          <a href="tel:+18182662387" className="underline">(818) 266-2387</a>.
        </p>
      </LegalLayout>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default FAQ;
