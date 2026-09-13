import SegevPhoto8 from "../../assets/SegevPhoto8.avif";
import SegevChildLiam from "../../assets/SegevChildLiam.avif";
import SegevChildMila from "../../assets/SegevChildMila.avif";

const TheTeam = () => {
  const arr = [
    {
      img: SegevPhoto8,
      title: "SAPIR",
      subTitle: "Founder of Sapir skincare Beverly hills",
    },
    {
      img: SegevChildLiam,
      title: "Liam",
      subTitle: "CEO OF HAPPINES",
    },
    {
      img: SegevChildMila,
      title: "Mila",
      subTitle: "President of JOY",
    },
  ];
  return (
    <div
      className="hidden p-20 lg:flex flex-col gap-15"
      style={{ backgroundColor: "rgb(255, 253, 245)" }}
    >
      <div className="flex items-center justify-center gap-10">
        <div>
          <h1
            className="text-7xl"
          >
            THE TEAM
          </h1>
        </div>
        <div className="border-b-1 border-black min-w-[200px]"></div>
        <div>
          <h3
            className="text-4xl"
          >
            We are the team that can
            <br /> make it happen for you
          </h3>
        </div>
      </div>
      <div className="flex justify-center gap-15">
        {arr.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-2">
            <img
              src={item.img}
              className="min-w-[230px] max-w-[230px] min-h-[230px] max-h-[230px]"
              alt={item.title}
              loading="lazy"
              decoding="async"
            />
            <h4>{item.title}</h4>
            <p className="font-light">{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
