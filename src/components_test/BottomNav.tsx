import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="hidden md:flex border-t border-black p-5 justify-center items-center">
      <ul className="flex gap-6 lg:gap-16 xl:gap-30">
        <Link to="/">
          <li>
            <h2 className="text-xs font-light text-black hover:text-[#c3c2bcf6] transition-colors duration-300">
              HOME
            </h2>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <h2 className="text-xs font-light text-black hover:text-[#c3c2bcf6] transition-colors duration-300">
              ABOUT
            </h2>
          </li>
        </Link>
        <Link to="/service">
          <li className="hover:">
            <h2 className="text-xs font-light text-black hover:text-[#c3c2bcf6] transition-colors duration-300">
              SERVICE
            </h2>
          </li>
        </Link>
        <Link to="/consultation">
          <li>
            <h2 className="text-xs font-light text-black hover:text-[#c3c2bcf6] transition-colors duration-300">
              CONSULTATION
            </h2>
          </li>
        </Link>
        <Link to="/blog">
          <li>
            <h2 className="text-xs font-light text-black hover:text-[#c3c2bcf6] transition-colors duration-300">
              BLOG
            </h2>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <h2 className="text-xs font-light text-black hover:text-[#c3c2bcf6] transition-colors duration-300">
              CONTACT
            </h2>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BottomNav;
