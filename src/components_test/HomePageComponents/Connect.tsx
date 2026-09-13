import SegevPeople7 from "../../assets/SegevPhoto7.avif";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="p-20" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="flex flex-col justify-center gap-30 md:flex-row">
        <div className="relative">
          <h2 className="absolute -top-10 md:-top-10 -left-10 text-7xl md:text-8xl">CONNECT</h2>
          <img
            src={SegevPeople7}
            className="max-w-[250px] md:max-w-[300px] max-h-[300px]"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div className="flex gap-5 mt-5 justify-center">
            <a
              href="https://www.instagram.com/sapirskincare/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram  className="w-4 h-4 bg-white" />
            </a>
            <div className="cursor-pointer">
            <a
              href="https://www.facebook.com/sapir.segev.52"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-w-[630px] md:h-full  md:max-h-[270px]  border border-black p-5 md:p-10 text-center">
            <h3 className="text-4xl">Join Our Glow Community</h3>
            <p>Don't Miss Out!</p>
            <p className="font-light text-xs">Join our newsletter for exclusive skincare tips, product<br /> recommendations, and special offers delivered straight to your <br/> inbox. Don't miss out on your journey to glowing, healthy skin!</p>
            <Link to="/contact"><button className="border p-1 pr-3 pl-3 cursor-pointer hover:border-black font-light text-sm" style={{backgroundColor:"#EDEBE4"}}>Subscribe and save 10% your first visit</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
