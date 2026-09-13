import ImgUnlock1 from "../../assets/ImgUnlock1.avif";
import ImgUnlock2 from "../../assets/ImgUnlock2.avif";
import { RiMailOpenFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const ConnectDesktop = () => {
  return (
    <div className="hidden md:block lg:block pb-15">
      <div className="">
        <div className="relative flex flex-col gap-10 items-center pt-30 pb-15">
          <h3 className="absolute xl:left-2/8 md:left-1/8 top-1/6 z-50 text-7xl font-light">
            CONNECT
          </h3>
          <div className="flex justify-between relative gap-5">
            <div>
              <img src={ImgUnlock1} className="max-h-[330px]" alt="" loading="lazy" decoding="async" />
            </div>
            <div
              className=" p-5 absolute  max-h-[150px] min-w-[300px] xl:left-2/2 md:left-1/2  xl:top-0/2 md:top-2/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
              style={{ backgroundColor: "rgb(255, 253, 245)" }}
            >
              <p className="font-light text-xs">
                We are dedicated to delivering expert services, combining
                advanced techniques and personalized care to transform your skin
                and reveal your true beauty
              </p>
            </div>
            <div>
              <img src={ImgUnlock2} className="max-h-[330px]" alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-20 ">
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl ">
              Sapir Skincare <br /> Beverly Hills
            </h3>
            <span className="text-xs font-light">
              Have a question? I'd love to hear from you!
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center mt-2">
              <a href="mailto:sapirskincarela@gmail.com" className="flex gap-2">
                <RiMailOpenFill />
                <span className="text-xs font-light">
                  sapirskincarela@gmail.com
                </span>
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <a href="tel:+18182662387" className="flex gap-2">
                <FaPhoneAlt />
                <span className="text-xs font-light">(818) 266-2387</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col ">
              <h4 className="text-sm">Working Hours:</h4>
              <div className="flex flex-col">
                <span className="text-xs font-light">
                  MON - FRI: 9:00 am - 8:00 pm
                </span>
                <span className="text-xs font-light">SAT: Closed</span>
                <span className="text-xs font-light">
                  SUN: 10:00 am - 4:00pm
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h4 className="text-sm">Address:</h4>
                <span className="text-xs font-light">
                  421 North Rodeo Drive. Beverly Hills, CA
                  <br />
                  90210
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDesktop;
