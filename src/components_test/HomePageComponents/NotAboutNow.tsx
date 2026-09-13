import SegevPhoto1 from "../../assets/SegevPhoto.avif";
import SegevPhotos2 from "../../assets/SegevPhotos2.avif";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";


const NotAboutNow = () => {
  return (
    <Zoom>
    <div className="pt-5">
      <div className="flex flex-col-reverse w-full border md:flex-row md:max-h-[500px] border-b-1 border-b-black">
        <div className="relative md:w-1/2 ">
          <img
            src={SegevPhoto1}
            alt=""
            className="w-full h-full opacity-15 object-cover"
          />
          <div className="flex flex-col gap-5 md:gap-5 absolute top-15 p-1 text-center xl:top-0 xl:p-20 md:p-0">
            <h2
              className="text-white text-3xl font-mono xl:text-4xl md:text-2xl"
            >
              ITS NOT ABOUT HOW YOU LOOK, ITS <br /> ABOUT HOW YOU FEEL
            </h2>
            <div>
              <span className="text-sm text-white">
                SAPIR SKINCARE BEVERLY HILLS
              </span>
            </div>
            <div>
              <span className="text-sm text-white text-center">
                A RENOWNED FACE AND BODY CLINIC IN THE HEART OF <br />
                RODEO DRIVE
              </span>
            </div>
            <div>
              <Link to="/contact">
                <button className="bg-white cursor-pointer text-sm md:text-lg p-2 px-10 rounded-full hover:text-white hover:bg-blue-300 transition-colors duration-300">
                  CONNECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-2/2 md:w-1/2 ">
          <img
            src={SegevPhotos2}
            alt=""
            className=" w-full md:h-full md:object-cover"
          />
        </div>
      </div>
      <div className="hidden md:flex p-5 border-t-2 border-b-1 border-black">
        <div className="flex flex-col w-1/3  items-center">
          <h3 className="font-semibold text-2xl">10+</h3>
          <h4 className="font-sans text-sm">Years of Experience</h4>
          <span className="font-light text-xs max-w-55">
            Benefit from over a decade of hands-on expertise in skincare,
            ensuring you receive treatments perfected through years of practice
            and refinement
          </span>
        </div>
        <div className="flex flex-col w-1/3  items-center">
          <h3 className="font-semibold text-2xl">100%</h3>
          <h4 className="font-sans text-sm">Personalized Care</h4>
          <span className="font-light text-xs max-w-55">
            Every treatment plan is tailored to your unique skin type and
            goals, never a one-size-fits-all approach
          </span>
        </div>
        <div className="flex flex-col w-1/3  items-center">
          <h3 className="font-semibold text-2xl">3</h3>
          <h4 className="font-sans text-sm">Continents of Sourcing</h4>
          <span className="font-light text-xs max-w-55">
            Clinical and medical-grade products sourced from Europe, Israel,
            and the USA, tailored to your treatment and after-care
          </span>
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default NotAboutNow;
