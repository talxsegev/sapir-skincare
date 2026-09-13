import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";
import LegalLayout from "../components_test/LegalPageComponents/LegalLayout";

const Terms = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)", fontFamily: "Wix Madefor Text sans-serif" }}>
      <SEO
        title="Terms of Service"
        description="The terms that govern your use of the Sapir Skincare website and booking of services."
        path="/terms-of-service"
      />
      <LegalLayout title="Terms of Service" lastUpdated="September 13, 2026">
        <p>
          These terms govern your use of sapir-skincare.com and any services you book with Sapir Skincare ("we,"
          "us," "our"), located at 421 North Rodeo Drive, Beverly Hills, CA 90210. By using this site or booking a
          service, you agree to these terms.
        </p>

        <h2>Not Medical Advice</h2>
        <p>
          Sapir Skincare provides cosmetic skincare services, consultations, and product recommendations. Nothing
          on this website, in our Ingredient Checker tool, or in a skin consultation is a medical diagnosis,
          medical treatment, or a substitute for advice from a licensed physician or dermatologist. Always consult
          a qualified medical professional about any skin condition, allergy, medication, or health concern,
          especially if you are pregnant or breastfeeding.
        </p>

        <h2>The Ingredient Checker Tool</h2>
        <p>
          The Ingredient Checker is a free reference tool intended to help you learn about commonly known
          pore-clogging and active ingredients. It is not exhaustive, may not recognize every ingredient or
          product formulation, and its optical character recognition (photo scanning) feature can misread text.
          Always verify ingredients against the actual product label and use your own judgment or a
          professional's advice before using any product.
        </p>

        <h2>The Skin Consultation Survey</h2>
        <p>
          The consultation survey collects information about your skin, lifestyle, and relevant health history so
          we can provide a personalized cosmetic assessment. Recommendations we provide are based solely on the
          information and photos you submit; we are not responsible for outcomes resulting from inaccurate,
          incomplete, or outdated information you provide, or from a change in your health after you submit the
          survey that you do not tell us about.
        </p>

        <h2>Appointments and Cancellations</h2>
        <p>
          Please contact us as soon as possible if you need to reschedule or cancel an appointment. We ask for at
          least 24 hours' notice where possible so we can offer the time to another client. Please confirm any
          cancellation window or fee with us directly at booking, as they may vary by service.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The text, images, and design of this website belong to Sapir Skincare unless otherwise noted, and may
          not be copied or reused without our permission.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Sapir Skincare is not liable for any indirect, incidental, or
          consequential damages arising from your use of this website or its tools. Our services are provided on
          an "as is" basis, and your use of any recommendation is at your own discretion.
        </p>

        <h2>Changes to These Terms</h2>
        <p>We may update these terms from time to time. The "Last updated" date above reflects the most recent revision.</p>

        <h2>Contact Us</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:sapirskincarela@gmail.com" className="underline">sapirskincarela@gmail.com</a> or call{" "}
          <a href="tel:+18182662387" className="underline">(818) 266-2387</a>.
        </p>
      </LegalLayout>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Terms;
