import Voyage from "../../assets/Voyage.avif";
import AsBell from "../../assets/AsBeel.avif";
import SegevCients1 from "../../assets/SegevClients1.avif";
import SegevCients2 from "../../assets/SegevClients2.avif";
import SegevCients3 from "../../assets/SegevClients3.avif";
import SegevCients4 from "../../assets/SegevClients4.avif";
import SegevCients5 from "../../assets/SegevClients5.avif";
import SegevCients6 from "../../assets/SegevClients6.avif";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const AsSeenOn = () => {
  const clientImages = [
    SegevCients1,
    SegevCients2,
    SegevCients3,
    SegevCients4,
    SegevCients5,
    SegevCients6,
  ];

  return (
    <div className="p-5 md:p-10 flex flex-col gap-20 items-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h3
          className="font-extrabold text-4xl"
          style={{ color: "rgb(178,176,171)" }}
        >
          AS SEEN ON:
        </h3>
        <div className="flex gap-5">
          <img
            src={Voyage}
            className="max-w-[150px] md:max-w-[216px] max-h-[56px]"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            src={AsBell}
            className="max-w-[150px] md:max-w-[216px] max-h-[56px]"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1
          className="text-5xl text- md:text-left md:text-6xl"
          style={{
            fontWeight: "lighter",
          }}
        >
          BEFORE & AFTER
        </h1>
      </div>
      <div>
        <Carousel className="w-full  max-w-6xl">
          <CarouselContent className="-ml-1">
            {clientImages.map((img, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-1/ lg:basis-1/3"
              >
                <div className="">
                  <Card className="rounded-full aspect-square overflow-hidden">
                    <CardContent className="p-0 flex items-center justify-center ">
                      <img
                        src={img}
                        alt={`Before & After ${index + 1}`}
                        className="object-fill hover:opacity-20 transition-opacity duration-1000"
                        loading="lazy"
                        decoding="async"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:flex flex-col" />
          <CarouselNext className="hidden xl:flex flex-col" />
        </Carousel>
      </div>
    </div>
  );
};

export default AsSeenOn;
