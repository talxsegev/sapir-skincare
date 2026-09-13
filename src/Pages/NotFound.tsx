import { Link } from "react-router-dom";
import SEO from "../components_test/SEO";
import BottomNav from "../components_test/BottomNav";
import Footer from "../components_test/Footer";

const NotFound = () => {
  return (
    <div style={{ backgroundColor: "rgba(237, 235, 228, 1)"}}>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <div className="flex flex-col items-center justify-center gap-8 text-center p-20 min-h-[60vh]">
        <h1 className="text-6xl md:text-8xl font-light">404</h1>
        <p className="text-xl">We couldn't find the page you were looking for.</p>
        <Link to="/">
          <button className="bg-white cursor-pointer text-sm md:text-lg p-2 px-10 rounded-full border border-transparent hover:border-black transition-colors duration-300">
            BACK TO HOME
          </button>
        </Link>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default NotFound;
