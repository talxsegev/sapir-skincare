
const Process = () => {
  return (
    <div
      className="pt-15 pb-15 flex flex-col items-center"
      style={{ backgroundColor: "rgb(255, 253, 245)" }}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center">
          <h1
            className="text-6xl md:text-8xl font-light"
          >
            PROCESS
          </h1>
          <span className="text-xs font-semibold ">
            HOW BOOKING WORKS STEP BY STEP
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center">
  <div className="w-full md:w-1/3 p-15 border-1 min-h-[250px] max-h-[250px] border-r-1 md:border-r-0 border-black flex flex-col gap-5">
    <h3 className="text-xl text-center">STEP ONE</h3>
    <span className="text-xs font-light">
      Consultation Inquiry: Contact us via our website or phone to discuss your skincare <br /> goals and get recommendations for treatments.
    </span>
  </div>
  <div className="w-full md:w-1/3 p-15 border-1 min-h-[250px] max-h-[250px] border-r-1 md:border-r-0  border-black flex flex-col gap-5">
    <h3 className="text-xl text-center">STEP TWO</h3>
    <span className="text-xs font-light">
      Schedule Your Visit: Use our online booking system or call 818-266-2387 to set up your<br /> appointment at a convenient time.
    </span>
  </div>
  <div className="w-full md:w-1/3 p-15 border-1 min-h-[250px] max-h-[250px] border-r-1 md:border-r-0  border-black flex flex-col gap-5">
    <h3 className="text-xl text-center">STEP THREE</h3>
    <span className="text-xs font-light">
      Prepare for Your Appointment: Review any pre-treatment instructions, arrive a few minutes early, and feel free to ask questions. We can’t wait to help you achieve glowing, healthy skin!
    </span>
  </div>
</div>
</div>
    </div>
  );
};

export default Process;
