import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";
import LegalLayout from "../components_test/LegalPageComponents/LegalLayout";

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)", fontFamily: "Wix Madefor Text sans-serif" }}>
      <SEO
        title="Privacy Policy"
        description="How Sapir Skincare collects, uses, and protects your personal information."
        path="/privacy-policy"
      />
      <LegalLayout title="Privacy Policy" lastUpdated="September 13, 2026">
        <p>
          Sapir Skincare ("we," "us," "our") operates sapir-skincare.com and provides skincare services from our
          studio at 421 North Rodeo Drive, Beverly Hills, CA 90210. This policy explains what personal information
          we collect through this website, how we use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us through this site:</p>
        <ul>
          <li><strong>Contact form:</strong> your name, phone number, email address, service of interest, and message.</li>
          <li>
            <strong>Skin consultation survey:</strong> your name, age, phone number, email, and detailed answers
            about your skin, lifestyle, medical history, current medications, and skincare routine — including,
            where relevant, whether you are pregnant, breastfeeding, or have certain medical conditions or
            allergies. We ask for this information because it directly affects which treatments and products are
            appropriate for you. We also collect photos you upload of your skin for this purpose.
          </li>
          <li>
            <strong>Ingredient Checker:</strong> ingredient text you type or a photo you choose to scan. Scanned
            photos are processed entirely in your own browser (for text recognition) and are never uploaded to us
            or any server.
          </li>
        </ul>
        <p>
          We do not currently use analytics, advertising, or tracking cookies on this site, and we do not sell
          your personal information to anyone.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries and schedule appointments.</li>
          <li>To personally review your skin consultation answers and photos and provide you with a skincare assessment and recommendations.</li>
          <li>To contact you about your consultation, appointment, or a question you've submitted.</li>
          <li>If you've opted in, to send you occasional marketing updates by email or SMS. You can opt out at any time by replying "stop" or emailing us.</li>
        </ul>

        <h2>How Your Information Is Handled</h2>
        <p>
          Contact form messages are delivered to us via EmailJS, a third-party email delivery service. Skin
          consultation submissions, including uploaded photos, are delivered and stored via Netlify Forms, the
          hosting provider for this website. We review submissions personally; we do not share your consultation
          answers or photos with any other third party, and we do not use them for any purpose beyond providing
          you with a skincare assessment, unless you separately consent (for example, to a testimonial).
        </p>

        <h2>Your Choices and Rights</h2>
        <p>
          You may ask us at any time to access, correct, or delete the personal information we hold about you,
          including consultation photos, by emailing{" "}
          <a href="mailto:sapirskincarela@gmail.com" className="underline">sapirskincarela@gmail.com</a>. If you
          are a California resident, you have rights under the California Consumer Privacy Act (CCPA) to know
          what personal information we collect and to request its deletion; we honor these requests for all
          visitors regardless of location.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain consultation answers and photos for as long as reasonably necessary to provide your
          assessment and any related follow-up care, or until you ask us to delete them.
        </p>

        <h2>Children's Privacy</h2>
        <p>This site and our services are intended for adults. We do not knowingly collect information from anyone under 18.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy from time to time. The "Last updated" date above reflects the most recent revision.</p>

        <h2>Contact Us</h2>
        <p>
          Questions about this policy or your information? Email{" "}
          <a href="mailto:sapirskincarela@gmail.com" className="underline">sapirskincarela@gmail.com</a> or call{" "}
          <a href="tel:+18182662387" className="underline">(818) 266-2387</a>.
        </p>
      </LegalLayout>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
