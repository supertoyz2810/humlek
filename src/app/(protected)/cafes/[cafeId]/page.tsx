"use client";

import Autoplay from "embla-carousel-autoplay";
import { ProductCardMain } from "@/components/foods";
import { Input } from "@/components/ui/input";
import { FaComments, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { dataCafe } from "@/constants/Mockdata.constants";
import { Button } from "@/components/ui/button";
import { BiDislike, BiLike } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CafeProps } from "@/types/cafe/cafe.types";

type CafeDetailPageProps = {
  params: {
    cafeId: string;
  };
};

export default function CafeDetailPage({
  params,
}: CafeDetailPageProps) {
  const { cafeId } = params;
  const [cafeprimaryColor, setCafeprimaryColor] =
    useState<string>();
  const [cafeData, setCafeData] = useState<CafeProps>();
  useEffect(() => {
    const fetchCafeById = async () => {
      setCafeData(
        dataCafe.find((item) => item.id === cafeId)
      );
    };
    fetchCafeById();
  }, [cafeData, cafeId, cafeprimaryColor]);

  useLayoutEffect(() => {
    const fetchCafeById = async () => {
      setCafeprimaryColor(
        dataCafe.find((item) => item.id === cafeId)
          ?.cafeDetails.cafeTheme.primaryColor
      );
    };
    fetchCafeById();
  }, [cafeData, cafeId, cafeprimaryColor]);

  if (!cafeData) {
    return <>Loading...</>;
  }
  return (
    <div className="container w-full mx-auto">
      <div
        style={{
          boxShadow: `${cafeprimaryColor} 0px -10px 10px -8px inset`,
        }}
        className="px-8 py-10 flex flex-col lg:flex-row relative gap-6 w-full m-auto"
      >
        <div className="gap-4 flex flex-col">
          <div className="group relative flex w-full lg:w-[400px] h-full lg:max-h-[300px] aspect-auto bg-no-repeat m-auto border-2 rounded border-slate-700 hover:cursor-pointer transition-all">
            <div className="block w-full h-full bg-black absolute opacity-0 group-hover:opacity-60 transition-all"></div>
            <Image
              className="rounded-sm w-full h-full object-fill"
              alt=""
              src={cafeData?.cafeDetails.thumbnail || ""}
              height={800}
              width={800}
            />
          </div>
          <div className="flex flex-row gap-3">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent>
                {cafeData?.cafeDetails.contentImg.map(
                  (imgSrc, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div
                        key={index}
                        className="group relative flex items-center w-full h-[100px] border-2 rounded border-slate-700 hover:cursor-pointer transition-all"
                      >
                        <div className="block w-full h-full bg-black absolute opacity-0 group-hover:opacity-60 transition-all"></div>
                        <Image
                          className="rounded-sm object-cover bg-no-repeat w-full h-full"
                          alt=""
                          src={imgSrc}
                          height={600}
                          width={600}
                        />
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col py-3 gap-3 justify-between">
          <div className="flex flex-col gap-3">
            {/* Title */}
            <div className="flex flex-row justify-between items-center">
              <div
                style={{ color: `${cafeprimaryColor}` }}
                className={`text-4xl max-lg:text-2xl font-semibold flex`}
              >
                {cafeData?.cafeDetails.title}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild className="hover:cursor-pointer">
                      <p>⭐</p>
                    </TooltipTrigger>
                    <TooltipContent className="bg-yellow-500 font-bold text-slate-900">
                      <p>Best choice</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            {/* Content */}
            <p className="text-slate-200">
              {cafeData?.cafeDetails.content}
            </p>
          </div>
          {/* User Interact */}
          <div className="flex flex-col lg:flex-row items-start lg:gap-0 gap-4 lg:items-center justify-between">
            <div className="flex flex-row gap-3">
              <span className="text-2xl animate-glow transition-all">
                <BiLike className="scale-125 text-slate-200" />
              </span>
              <span className="text-green-500 text-xl">75%</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-1 lg:gap-4">
              <Button className="group bg-slate-800 transition-all w-[60px] text-1xl flex justify-center items-center hover:bg-green-900 hover:text-green-200 active:bg-green-600">
                <div className="group-hover:animate-bounce-zoom-icon group-active:scale-[3] group-active:animate-none transition-all">
                  <BiLike className="scale-125" />
                </div>
                {cafeData?.totalLike}
              </Button>
              <div className="w-[1px] bg-slate-600 h-6"></div>
              <Button className="group bg-slate-800 w-[60px] transition-all text-1xl flex justify-center items-center hover:bg-red-900 hover:text-red-200 active:bg-red-600">
                <div className="group-hover:animate-bounce-zoom-icon group-active:scale-[3] group-active:animate-none transition-all">
                  <BiDislike className="scale-125" />
                </div>
                {cafeData?.totalDislike}
              </Button>
              <div className="w-[1px] bg-slate-600 h-6"></div>
              <Button
                // onClick={() => setToggleComments((prev) => !prev)}
                className="bg-slate-800 w-[60px] text-1xl flex justify-center items-center hover:bg-blue-900 hover:text-blue-200 active:bg-blue-600"
              >
                <FaComments />
                {cafeData?.totalComment}
              </Button>
              <div className="w-[1px] bg-slate-600 h-6"></div>
              <Button className="bg-slate-800 w-[60px] text-1xl flex justify-center items-center hover:bg-purple-900 hover:text-purple-200 active:bg-purple-600">
                <PiShareFatFill />
                {cafeData?.totalShare}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Category Section */}
      <div className="w-full flex flex-col gap-4 pb-5">
        <div className="bg-slate-950 p-3 rounded-md flex items-center justify-between">
          <div className="w-full lg:w-1/4 flex items-center relative">
            <Input
              type="text"
              placeholder="Search products name"
              className="border-slate-700 border-2"
            />
            <span className="absolute right-0 mx-3">
              <FaSearch />
            </span>
          </div>
          <div>
            <Select>
              <SelectTrigger
                className={`w-[300px] bg-slate-800 border-none shadow-[-6px_-8px_16px_rgba(0,_0,_0,_0.2)_inset] text-white text-md`}
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent
                className={`bg-slate-800 border-slate-600 text-white`}
              >
                <SelectItem value="light">Trà sữa</SelectItem>
                <SelectItem value="dark">Yogurt</SelectItem>
                <SelectItem value="system">Thức uống mang đi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Product  */}
        {/* <div className="flex flex-col lg:flex-row rounded gap-6">
          <ProductCardMain cafeId={cafeId} />
        </div> */}
      </div>

      {/* Product Section */}
      <div className="w-full flex flex-col gap-4 pb-5">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-slate-950 text-white">
            <TabsTrigger value="all">All Products</TabsTrigger>
            {cafeData.isOnPromotion && (
              <TabsTrigger value="promotion">Promotions</TabsTrigger>
            )}
            {cafeData.isHoldingEvents && (
              <TabsTrigger value="events">Events</TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="all">
            <ProductCardMain cafeId={cafeId} />
          </TabsContent>
          {cafeData.isOnPromotion && (
            <TabsContent value="promotion">
              Change your password here.
            </TabsContent>
          )}
          {cafeData.isHoldingEvents && (
            <TabsContent value="events">Change your events here.</TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}
