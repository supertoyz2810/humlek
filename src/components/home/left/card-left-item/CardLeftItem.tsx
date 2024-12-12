"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { FaComments, FaStar } from "react-icons/fa";
import {
  PiArrowFatDownFill,
  PiArrowFatUpFill,
  PiShareFatFill,
} from "react-icons/pi";

export default function CardLeftItem() {
    return (
      <Card className="w-full shadow-md hover:shadow-lg hover:shadow-orange-400 transition-all group">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <Badge className="w-1/3 bg-yellow-500 rounded-xl text-slate-900 group-hover:bg-yellow-200">
              Today pick
            </Badge>
            <span className="hover:text-yellow-100 text-yellow-300">
              <FaStar />
            </span>
          </div>
          <CardTitle className="py-1 text-slate-50 flex flex-row items-center gap-3">
            <Avatar>
              <AvatarImage src="https://cdn1.iconfinder.com/data/icons/cafe-shop-12/64/barista-Shop_Owner-Avatar-Man-Hipster-512.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-slate-50 text-[16px]">
              Phúc Long - Quận Tân Bình
            </span>
          </CardTitle>
          <CardDescription className="text-slate-400 py-3 flex items-center">
            <span className="text-wrap line-clamp-2 text-ellipsis ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </CardDescription>
          <div className="flex flex-row gap-1 text-white">
            <span>#</span>
            <Badge className="group-hover:animate-bounce-category w-auto bg-orange-800 rounded-xl text-slate-50 hover:bg-orange-600">
              Foods
            </Badge>
            <Badge className="group-hover:animate-bounce-category group-hover:delay-100 w-auto bg-green-800 rounded-xl text-slate-50 hover:bg-green-600">
              Drinks
            </Badge>
          </div>
          <div className="flex w-full">
            <Image
              className="rounded-sm"
              alt=""
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfqoogCuc2j4Z8S7-hEoEuE-NO1fwQbEz5Q&s"
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