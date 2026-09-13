import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="p-10 border-t border-black flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center"
    >
      <div className="text-center md:text-left">
        <h2 className="text-2xl tracking-[0.3em]">SAPIR SKINCARE</h2>
        <p className="text-xs font-light mt-1">421 North Rodeo Drive, Beverly Hills, CA 90210</p>
      </div>

      <nav aria-label="Footer" className="flex gap-6 text-xs font-light">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/service" className="hover:underline">Services</Link>
        <Link to="/consultation" className="hover:underline">Consultation</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      <div className="flex flex-col items-center md:items-end gap-3">
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/sapirskincare/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sapir Skincare on Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/sapir.segev.52"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sapir Skincare on Facebook"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs font-light">&copy; {year} Sapir Skincare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
