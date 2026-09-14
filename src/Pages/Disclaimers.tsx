import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";
import LegalLayout from "../components_test/LegalPageComponents/LegalLayout";

const Disclaimers = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)", fontFamily: "Wix Madefor Text sans-serif" }}>
      <SEO
        title="Disclaimers"
        description="Important disclaimers about the Ingredient Checker, skin consultation, and other tools on the Sapir Skincare website."
        path="/disclaimers"
      />
      <LegalLayout title="Disclaimers" lastUpdated="September 13, 2026">
        <p>
          This page summarizes the key limitations of the tools and information on sapir-skincare.com. It works
          alongside, and doesn't replace, our{" "}
          <a href="/terms-of-service" className="underline">Terms of Service</a> and{" "}
          <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </p>

        <h2>Not Medical Advice</h2>
        <p>
          Nothing on this website is medical advice, a medical diagnosis, or a treatment plan. Sapir Skincare
          offers cosmetic skincare services and general information only. Always see a licensed dermatologist or
          physician for any medical concern, and tell them about any product or treatment you're considering.
        </p>

        <h2>Ingredient Checker</h2>
        <p>
          The Ingredient Checker cross-references ingredient names you type or that our tool reads from a photo
          against a general-reference list of commonly discussed pore-clogging and active ingredients. It:
        </p>
        <ul>
          <li>Is not a complete or scientifically exhaustive database of every ingredient or product.</li>
          <li>May miss ingredients, misread a photo (via on-device text recognition), or reflect outdated concentration or formulation science.</li>
          <li>Does not know your individual skin type, allergies, or medical history, and cannot tell you whether a specific product is right for you.</li>
          <li>Should never replace reading the actual product label or checking with your dermatologist, especially if you have known allergies or sensitivities.</li>
        </ul>
        <p>Photos you scan are processed entirely in your own browser and are never uploaded to us or stored anywhere.</p>

        <h2>Skin Consultation Survey</h2>
        <p>
          The consultation survey and any assessment we send you afterward are based only on the answers and
          photos you provide at that point in time. They are a cosmetic opinion, not a diagnosis. Please tell us
          right away, and before starting any recommended product or treatment, if you become pregnant or
          breastfeeding, are newly diagnosed with a skin or health condition, start a new medication, or discover
          a new allergy.
        </p>

        <h2>Patch Test Recommendation</h2>
        <p>
          Before using any new product — whether recommended through a consultation or found using the
          Ingredient Checker — we recommend patch testing on a small area of skin and waiting 24–48 hours to
          check for a reaction, especially if you have sensitive skin, known allergies, or are trying an active
          ingredient for the first time.
        </p>

        <h2>Results May Vary</h2>
        <p>
          Any before/after examples, testimonials, or results described on this site or on our social media
          reflect individual experiences. Results vary from person to person, and we cannot guarantee a specific
          outcome from any product or service.
        </p>

        <h2>Photos and Testimonials</h2>
        <p>
          We only ever share a client's photos, story, or testimonial publicly (for example, on our website or
          social media) with that client's separate, explicit permission. Submitting consultation photos to us
          for your assessment does not, by itself, give us permission to use them publicly.
        </p>

        <h2>Pricing and Availability</h2>
        <p>
          Service pricing, descriptions, and availability on this site are provided for general information and
          may change without notice. Please confirm current pricing and availability with us directly when
          booking.
        </p>

        <h2>External Links</h2>
        <p>
          This site may link to third-party websites or services (such as Instagram or Facebook). We aren't
          responsible for the content, accuracy, or privacy practices of sites we don't operate.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about any of these disclaimers? Email{" "}
          <a href="mailto:sapirskincarela@gmail.com" className="underline">sapirskincarela@gmail.com</a>.
        </p>
      </LegalLayout>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Disclaimers;
