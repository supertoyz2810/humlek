'use client';

import { LeftMainContent, MiddleMainContent } from "@/components/home";
import { NavbarMain } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between text-slate-200 relative">
        <div className="hidden xl:flex justify-center flex-col m-h-screen fixed left-10 top-10">
          <div className="flex flex-col w-full items-center relative">
            <span className="w-[300px] h-16 overflow-hidden rounded-sm">
              <Image
                className="bg-no-repeat bg-center"
                width={300}
                height={200}
                alt="wood_bg"
                src="https://thumbs.dreamstime.com/b/light-wood-background-text-copy-space-80917745.jpg"
              />
            </span>
            <span className="shadow-lg bg-slate-300 bg-opacity-60 text-slate-950 font-bold rounded-sm absolute top-[30%] text-xl">
              🌟 Quán team đang đặt 🌟
            </span>
          </div>

          {/* Quán Pick in Day */}
          <div className="flex flex-col flex-grow w-full items-center relative">
            <div className="flex flex-row justify-around w-full">
              <div className="w-2 h-5 bg-orange-900"></div>
              <div className="w-2 h-5 bg-orange-900"></div>
            </div>
            <div className="w-[300px] h-[700px] rounded-sm">
              <LeftMainContent />
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center flex h-full mx-auto my-5 sm:mx-10">
          <MiddleMainContent />
        </div>
        <div className="hidden xl:flex justify-center flex-col m-h-screen fixed right-10 top-10">
          <div className="flex flex-col w-full items-center relative">
            <span className="w-[300px] h-16 overflow-hidden rounded-sm">
              <Image
                className="bg-no-repeat bg-center"
                width={300}
                height={200}
                alt="wood_bg"
                src="https://thumbs.dreamstime.com/b/light-wood-background-text-copy-space-80917745.jpg"
              />
            </span>
            <span className="shadow-lg bg-slate-300 bg-opacity-60 text-slate-950 font-bold rounded-sm absolute top-[30%] text-xl">
              🌟 Feature available later... 🌟
            </span>
          </div>

          {/* Quán Pick in Day */}
          <div className="flex flex-col flex-grow w-full items-center relative">
            {/* <div className="flex flex-row justify-around w-full">
              <div className="w-2 h-5 bg-orange-900"></div>
              <div className="w-2 h-5 bg-orange-900"></div>
            </div> */}
            <div className="w-[300px] h-[700px] rounded-sm">
              {/* <LeftMainContent /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
