import { Button } from "@/components/ui/button";
import {
  PiArrowFatUpFill,
  PiArrowFatDownFill,
  PiShareFatFill,
} from "react-icons/pi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { FaComments, FaStar } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { CafeLocationProps, CafeProps } from "@/types/cafe/cafe.types";
import { formatNumber } from "@/utils/format-number.utils";

export default function CafeCardItem({
  data,
}: {
  data: CafeProps;
}) {
  const [cafeLocation, setCafeLocation] =
    useState<CafeLocationProps>();

  useEffect(() => {
    setCafeLocation(data.cafeDetails.cafeLocation)
  }, [data.cafeDetails.cafeLocation]);

  return (
    <Card
      className={`flex flex-col justify-between w-[300px] h-full group ${
        data.isHoldingEvents
          ? "hover:shadow-red-500 shadow-[0_0px_12px_0px_rgba(0,0,0,0.1)] hover:border-red-600"
          : ""
      } ${data.isOnPromotion ? "hover:border-orange-500" : ""}`}
    >
      <CardHeader className="flex flex-col h-full justify-between">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row w-full gap-1 items-center">
            {data.isTodayMenu && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge className="w-auto bg-yellow-500 rounded text-slate-900 hover:bg-yellow-200">
                      Today pick
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="bg-yellow-500 font-bold text-slate-900">
                    <p>Currently chose by team for ordering</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {data.isOnPromotion && (
              <Badge className="animate-pulse transition-all w-auto bg-orange-500 rounded text-slate-50 hover:bg-orange-200 hover:text-slate-900">
                Promotions
              </Badge>
            )}
            {data.isHoldingEvents && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge className="animate-pulse transition-all w-auto bg-red-500 rounded text-slate-50 hover:bg-red-200 hover:text-slate-900">
                      Event
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="bg-red-500 font-bold">
                    <p>Cafe is holding an event. Click for more details.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="hover:text-yellow-100 text-yellow-300 animate-glow transition-all">
                  <FaStar />
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-yellow-500 font-bold text-slate-900">
                <p>Best choice</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardTitle className="text-slate-50">
          <span className="text-xl line-clamp-2">{data.cafeDetails.title}</span>
        </CardTitle>
        <CardDescription className="text-slate-200 flex items-start h-full">
          <span className="text-wrap line-clamp-2 text-ellipsis">
            {data.cafeDetails.content}
          </span>
        </CardDescription>
        <div className="text-[12px] text-wrap line-clamp-2 text-ellipsis h-full text-yellow-300">
          <span>Đ/C: {cafeLocation?.street}</span>
          {cafeLocation?.district && <span>, {cafeLocation?.district}</span>}
          {cafeLocation?.ward && <span>, Phường {cafeLocation?.ward}</span>}
          {cafeLocation?.city && <span>, {cafeLocation?.city}</span>}
        </div>
        <div className="flex flex-row gap-1 text-white">
          <span>#</span>
          {data.cafeDetails.cafeCategory.map((item) => (
            <Badge
              key={item.id}
              className="w-auto bg-orange-800 rounded-xl text-slate-50 hover:bg-orange-600"
            >
              {item.cafeCategoryName}
            </Badge>
          ))}
        </div>
        <div className="flex w-full h-full py-2">
          <Image
            className="rounded-sm h-[200px]"
            alt=""
            src={data.cafeDetails.thumbnail}
            height={600}
            width={600}
          />
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-between p-0 mx-3 mb-3">
        <div className="flex gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-slate-900 border border-slate-800 hover:bg-green-900">
                  <PiArrowFatUpFill className="text-1xl text-green-600" />
                  <span>{formatNumber(data.totalLike)}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upvote</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-slate-900 hover:bg-red-900 border border-slate-800">
                  <PiArrowFatDownFill className="text-1xl text-red-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Downvote</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex justify-center gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-slate-900 hover:bg-cyan-900 border border-slate-800">
                  <FaComments className="text-lg text-cyan-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="bg-slate-900 hover:bg-purple-900 hover:text-purple-900 border border-slate-800">
                  <PiShareFatFill className="text-lg text-purple-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}
