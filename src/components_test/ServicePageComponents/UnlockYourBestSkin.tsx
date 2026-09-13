import ImgUnlock1 from "../../assets/ImgUnlock1.avif";
import ImgUnlock2 from "../../assets/ImgUnlock2.avif";
import { Link } from "react-router-dom";

const UnlockYourBestSkin = () => {
  return (
    <div className="relative ">
      <div className="flex flex-col md:flex-row w-full ">
        <div className="w-full md:w-1/2  max-h-[400px]">
          <img
            src={ImgUnlock1}
            className="w-full max-h-[230px] md:max-h-[430px]"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={ImgUnlock2}
            className="w-full max-h-[230px] md:max-h-[430px]"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  p-6 md:p-10 flex flex-col justify-center items-center 
  max-w-[90vw] md:max-w-[300px] w-[90vw]"
          >
            <div className="flex flex-col gap-6 ">
              <h3
                className="text-2xl md:text-3xl font-light text-center"
                style={{
                  fontWeight: "lighter",
                  color: "rgb(255,253,245)",
                }}
              >
                UNLOCK YOUR BEST SKIN!
              </h3>
              <span
                className="font-light text-xs "
                style={{ color: "rgb(255,253,245)" }}
              >
                Join our community by signing up with your email! Be the first
                to receive exclusive skincare tips, special offers, and updates
                on our latest treatments. Don’t miss out on the chance to
                enhance your beauty journey with personalized insights just for
                you. Enter your email below and start glowing today
              </span>
              <div className="flex justify-center">
                <Link to="/contact">
                  <button className="px-6 py-2 cursor-pointer text-sm font-light bg-white border border-transparent hover:border-black">
                    Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockYourBestSkin;
