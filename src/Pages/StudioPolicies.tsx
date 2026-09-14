import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";
import LegalLayout from "../components_test/LegalPageComponents/LegalLayout";

const StudioPolicies = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)", fontFamily: "Wix Madefor Text sans-serif" }}>
      <SEO
        title="Studio Policies"
        description="Our studio's code of conduct, appointment, and respectful-space policies for clients and visitors."
        path="/studio-policies"
      />
      <LegalLayout title="Studio Policies" lastUpdated="September 13, 2026">
        <p>
          Sapir Skincare is a small, personal studio, and we want every client to feel safe, respected, and cared
          for while they're with us. These policies apply to anyone visiting our studio at 421 North Rodeo Drive,
          Beverly Hills, CA 90210, or interacting with us online.
        </p>

        <h2>Respectful Conduct</h2>
        <ul>
          <li>We treat every client with kindness, respect, and confidentiality, regardless of age, race, ethnicity, religion, gender identity, sexual orientation, disability, or body type.</li>
          <li>We ask the same of our clients toward our staff and other visitors. Harassment, discrimination, or abusive behavior toward staff or other clients will not be tolerated, and may result in ending the appointment or being asked not to return.</li>
          <li>Your skin, your history, and anything you share with us during a consultation is kept confidential and used only to provide your care, as described in our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</li>
        </ul>

        <h2>Appointments</h2>
        <ul>
          <li>Please arrive on time; arriving significantly late may require shortening or rescheduling your service so we can stay on schedule for other clients.</li>
          <li>We ask for at least 24 hours' notice to reschedule or cancel where possible. See our <a href="/terms-of-service" className="underline">Terms of Service</a> for details.</li>
          <li>Please let us know about any allergies, medications, pregnancy, breastfeeding, or medical conditions before your appointment, even if you already mentioned them in your consultation survey — things change, and your safety comes first.</li>
        </ul>

        <h2>A Safe, Comfortable Space</h2>
        <p>
          We want our studio to feel calm and welcoming. Please be considerate of other clients' privacy and
          relaxation — for example, by keeping phone calls and photography of other clients to a minimum without
          asking first.
        </p>

        <h2>Questions or Concerns</h2>
        <p>
          If something about your visit or experience with us didn't feel right, please tell us — we want to make
          it right. Email{" "}
          <a href="mailto:sapirskincarela@gmail.com" className="underline">sapirskincarela@gmail.com</a> or call{" "}
          <a href="tel:+18182662387" className="underline">(818) 266-2387</a>.
        </p>
      </LegalLayout>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default StudioPolicies;
