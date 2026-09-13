import SegevClients8 from "../../assets/SegevClinets8.avif";
import SegevClients9 from "../../assets/SegevClinets9.avif";
import SegevWorks1 from "../../assets/SegevWorks1.avif";

const PackagesAreComing = () => {
  return (
    <div className="p-1 md:p-30 flex flex-col items-center">
      <div className="flex flex-col gap-0 md:gap-15">
        <div className="relative pb-10 pl-10 w-full  border-black border flex gap-5 justify-between">
            <div className="flex flex-col gap-0 md:flex-row md:gap-10">
          <div className="max-w-[400px] max-h-[300px]">
            <img src={SegevWorks1} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h3
              className="text-2xl"
            >
              Packages are coming soon
            </h3>
            <p className="text-sm">stay tuned!</p>
          </div>
          </div>
          <div className="flex flex-col min-h-[160px] items-center justify-center border-1 border-t-0 border-r-0 border-b-0 border-black">
            <span className="min-w-[160px] rotate-90 text-xl">Schedule a free call</span>
          </div>
        </div>
        <div className="pb-10 pr-10  border-black border flex gap-5 flex-row-reverse justify-between">
            <div className="flex flex-col gap-0 md:flex-row-reverse md:gap-10">
          <div className="max-w-[400px] max-h-[300px]">
            <img src={SegevClients8} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h3
              className="text-2xl"
            >
              Memberships are coming soon
            </h3>
            <p className="text-sm">stay tuned!</p>
          </div>
          </div>
          <div className="flex flex-col min-h-[160px] items-center justify-center border-1 border-t-0 border-l-0 border-b-0 border-black">
            <span className="min-w-[160px]  rotate-270 text-xl">Schedule a free call</span>
          </div>
        </div>
        <div className="pb-10 pl-10 border-black border flex gap-5 justify-between">
            <div className="flex flex-col gap-0 md:flex-row md:gap-10">
          <div className="max-w-[400px] max-h-[300px]">
            <img src={SegevClients9} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <h3
              className="text-2xl"
            >
              Education classes are coming soon
            </h3>
            <p className="text-sm">stay tuned!</p>
          </div>
          </div>
          <div className="flex flex-col min-h-[160px] items-center justify-center border-1 border-t-0 border-r-0 border-b-0 border-black">
            <span className="min-w-[160px] rotate-90 text-xl inline">Schedule a free call</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesAreComing;
