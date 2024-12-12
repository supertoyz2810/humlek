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
    <Card className="w-[280px]">
      <CardHeader>
        <CardTitle className="py-1 text-slate-50 flex flex-row items-center gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xl text-slate-50 font-normal">
              Trà sữa Phúc Long - Phúc Long - Phúc Long (L)
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
    </Card>
  );
}
