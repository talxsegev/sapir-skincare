import { Link } from "react-router-dom";

const ConsultationCta = () => {
  return (
    <div className="p-10 md:p-20 flex flex-col items-center gap-5 text-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <h2 className="text-3xl md:text-4xl font-light">Not sure where to start?</h2>
      <p className="max-w-[500px] text-sm">
        Take our personalized skin consultation and I'll personally review your answers and photos to send you a
        professional assessment and product recommendations tailored to your skin.
      </p>
      <Link to="/consultation">
        <button className="bg-black text-white px-8 py-3 rounded-full text-sm cursor-pointer hover:opacity-80 transition-opacity duration-300">
          Start My Skin Consultation
        </button>
      </Link>
    </div>
  );
};

export default ConsultationCta;
