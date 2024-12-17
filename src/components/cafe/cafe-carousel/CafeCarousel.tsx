import { Card, CardContent } from "@/components/ui/card";
import { CafeProps } from "@/types/cafe/cafe.types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { dataCafe as data } from "@/constants/Mockdata.constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CafeCarousel.style.scss";

const CafeCarousel = () => {
  const [dataCafe, setDataCafe] = useState<CafeProps>();
  useEffect(() => {
    const fetchDataCafe = async () => {
      data.map((item) => {
        return setDataCafe(item);
      });
    };

    fetchDataCafe();
  }, []);

  if (dataCafe) {
    return (
      <Swiper
        speed={1600}
        parallax={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full relative rounded-2xl mx-auto"
        slidesPerView={1}
        modules={[Parallax, Pagination, Autoplay]}
      >
        <div className="w-full h-full rounded-2xl">
          {data.map((item, index) => {
            return (
              <SwiperSlide key={item.id} className="rounded-2xl w-full">
                <Card className="border-slate-900 hover:border-slate-900 w-full rounded-2xl font-light">
                  <CardContent className="relative group p-0 flex items-center justify-center h-[650px] aspect-video w-full rounded-2xl">
                    <div className="block w-full h-[660px] bg-black absolute opacity-50 group-hover:opacity-60 transition-all"></div>
                    <Image
                      alt="Cafe thumbnail"
                      height={900}
                      width={1600}
                      layout="responsive"
                      sizes="(max-width: 650px) 100vw, 1600px"
                      src={item.cafeDetails.thumbnail}
                      className="h-full w-full object-cover bg-no-repeat"
                    />
                    <div className="text-slate-200 absolute bottom-8 left-12 p-10 flex flex-col">
                      <div
                        className="text-xl line-clamp-2"
                        data-swiper-parallax="-300"
                      >
                        <span className="font-bold">Opening hour: </span>
                        {item.cafeDetails.cafeOperation.openingTime} -{" "}
                        {item.cafeDetails.cafeOperation.closingTime}
                      </div>
                      <div
                        data-swiper-parallax="-200"
                        className="text-2xl lg:text-5xl py-4 font-bold"
                      >
                        {item.cafeDetails.title}
                      </div>
                      <div
                        className="text-sm lg:text-xl line-clamp-2"
                        data-swiper-parallax="-100"
                      >
                        <span className="font-bold">Address: </span>
                        <span>{item.cafeDetails.cafeLocation.street}</span>
                        {item.cafeDetails.cafeLocation.district && (
                          <span>
                            , {item.cafeDetails.cafeLocation.district}
                          </span>
                        )}
                        {item.cafeDetails.cafeLocation.ward && (
                          <span>
                            , Phường {item.cafeDetails.cafeLocation.ward}
                          </span>
                        )}
                        {item.cafeDetails.cafeLocation.city && (
                          <span>, {item.cafeDetails.cafeLocation.city}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    );
  }
};

export default CafeCarousel;
