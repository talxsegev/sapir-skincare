import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";
import ConsultationSurvey from "../components_test/ConsultationPageComponents/ConsultationSurvey";

const Consultation = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)", fontFamily: "Wix Madefor Text sans-serif" }}>
      <SEO
        title="Skin Consultation"
        description="Take Sapir Skincare's personalized skin consultation to get a professional assessment and product recommendations tailored to your skin, goals, and lifestyle."
        path="/consultation"
      />
      <div className="py-16">
        <ConsultationSurvey />
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Consultation;
