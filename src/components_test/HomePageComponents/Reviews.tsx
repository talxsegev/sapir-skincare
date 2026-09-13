import SegevReviews from "../../assets/SegevReviews.avif";

const Reviews = () => {
  return (
    <div className="relative">
      <div>
        <img
          src={SegevReviews}
          className="opacity-40 object-cover w-full min-h-[650px] md:h-full"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div
        className="absolute w-full h-full top-0 flex justify-between items-center p-4"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between h-full w-full  gap-5">
          <div className=" flex justify-center items-end md:w-[20%] w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl mb-5 p-5 text-white">
              REVIEWS
            </h1>
          </div>

          <div className=" md:w-[60%] w-full flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col gap-5 font-sans">
              <h4 className="underline text-lg italic font-light">Yaara N.</h4>
              <span className="text-sm font-light font-sans">
                I’ve had by far the best experience ever. Your skincare
                treatment was an absolute gem!
              </span>
            </div>
            <div className="flex flex-col gap-5 font-sans">
              <h4 className="underline text-lg italic font-light">Dana D.</h4>
              <span className="text-sm font-light">
                The best facial I've ever had. My skin glows for weeks after I
                do treatments with Sapir.
              </span>
            </div>
            <div className="flex flex-col gap-5 font-sans">
              <h4 className="underline text-lg italic font-light">
                REBECCA S.
              </h4>
              <span className="text-sm font-light">
                Thank god for Sapir’s body treatment! I’m a mom of 2 and my pre
                baby body is back!
              </span>
            </div>
          </div>

          <div className=" md:w-[30%] w-full text-center flex flex-col gap-3 md:gap-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl  text-white">REVIEWS</h1>
            <h3 className="text-2xl md:text-3xl  text-white text-center">
              Don't just take
              <br /> our word for it
            </h3>
            <h6 className="block text-sm  text-white text-center">
              LISTEN TO WHAT OUR <br /> CLIENTS ARE SAYING
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
