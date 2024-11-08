"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  PiArrowFatUpBold,
  PiArrowFatDownBold,
  PiShareFatBold,
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
import { FaComments } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ProductCardItem() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="py-1 text-slate-50 flex flex-row items-center gap-3">
          <Avatar>
            <AvatarImage src="https://cdn1.iconfinder.com/data/icons/coffee-shop-12/64/barista-Shop_Owner-Avatar-Man-Hipster-512.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-2xl text-slate-50 font-normal overflow-hidden line-clamp-1">
              Trà sữa Phúc Long (L)
            </span>
            <span className="text-xl text-green-600 font-normal">50.000đ</span>
          </div>
        </CardTitle>
        <CardDescription className="text-slate-400 py-3 flex items-center">
          <span className="text-wrap line-clamp-2 text-ellipsis ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </CardDescription>
        <div className="flex w-[200px] h-full m-auto">
          <Image
            className="rounded-sm"
            alt=""
            src={
              "https://hcm.fstorage.vn/images/2022/65000094-65000102-tra-sua-phuc-long-_3682b729-4ffc-4956-abb3-7026070663c2-og.png"
            }
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
        </div>
      </CardFooter>
    </Card>
  );
}
