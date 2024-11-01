"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NotFound: React.FC = () => {
  const [timerOut, setTimerOut] = useState<number>(5);
  const router = useRouter();
  useEffect(() => {
    const invalidTimeOut = setInterval(() => {
      setTimerOut((prev) => {
        if (prev < 1) {
          clearInterval(invalidTimeOut);
          router.push("/");
          return 0;
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(invalidTimeOut);
  }, [])
  return (
    <div className="flex flex-col items-center justify-center px-5">
      <div className="text-[200px] font-dark font-bold flex text-slate-400 h-[250px]">
        <span className="animate-bounce-slow-stop">4</span>
        <span className="animate-bounce-slow-stop delay-75">0</span>
        <span className="animate-bounce-slow-stop delay-150">4</span>
      </div>
      <p className="text-2xl md:text-3xl font-light leading-normal">
        Sorry we couldn't find this page.
      </p>
      <p className="mb-8">
        But dont worry, you can find plenty of other things on our homepage.
      </p>

      <Button className="bg-slate-950 p-5">
        Back to homepage {timerOut} second...
      </Button>
      <div className="flex items-center justify-center bg-gray-900 absolute bottom-1/3">
        {/* Light bulb */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-full shadow-light-glow animate-glow"></div>

          {/* Glow around the bulb */}
          <div className="absolute w-40 h-40 rounded-full bg-yellow-400 opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
