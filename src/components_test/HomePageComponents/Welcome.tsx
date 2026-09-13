import type { FC } from "react";
import SegevPhoto3 from "../../assets/SegevPhoto3.avif";
import { Link } from "react-router-dom";

const Welcome : FC = () => {
  return (
    <div className="relative p-25  grid gap-20 justify-center md:flex md:gap-50">
      <div className="min-w-[350px] md:min-w-[480px] p-3 md:p-0">
        <div>
          <h2
            className="absolute top-20 md:top-16  font-light text-5xl md:text-7xl"
            style={{
              fontWeight: "lighter",
            }}
          >
            WELCOME
          </h2>
        </div>
        <div className="flex items-start justify-center md:justify-end">
          <img src={SegevPhoto3} className="max-w-[307px] md:max-w-[407px]" alt="" loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="p-10 flex flex-col justify-center max-w-[465px] md:p-0">
        <div className="flex flex-col gap-8">
          <h3
            className="text-4xl font-light"
            style={{
              fontWeight: "lighter",
            }}
          >
            Sapir Skincare, your new home for advanced aesthetic services
          </h3>
          <span
            className="font-light text-md"
          >
            Sapir Skincare is located in the prestigious Rodeo Drive complex in
            the heart of the city and has been successfully operating for five
            years. Led by the expert and renowned cosmetologist, Sapir Gumerove,
            the successful clinic offers a wide range of innovative and advanced
            treatments in the field of skincare and beauty. At Sapir Skincare,
            you will enjoy a variety of personalized skincare services tailored
            to each patient
          </span>
          <div className="flex flex-col justify-center items-center">
            <Link to="/about"><button className="p-2 cursor-pointer text-sm font-extralight bg-white border border-transparent hover:border-black">
              GET TO KNOW US MORE
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
