"use client";

import {
  CafeCard,
  CafeCarousel,
  CafeCategory,
  CafeSearch,
  CafeBrand,
} from "@/components/cafe";

export default function CafesPage() {
  return (
    <div className="w-full mx-auto container pb-20 px-2 lg:px-20">
      <div className="flex flex-col text-slate-200 font-semibold text-5xl items-center justify-center">
        <CafeCarousel />
      </div>
      <div className="flex flex-col text-slate-200 w-full font-semibold text-5xl items-center justify-center h-full lg:h-[300px] gap-6">
        <span className="text-3xl text-slate-300 text-center py-3 px-6 bg-gradient-to-r from-transparent via-slate-950 to-transparent">
          Explore Trending Category
        </span>
        <CafeCategory />
      </div>
      <div className="flex flex-col lg:flex-row py-5 justify-between w-full gap-2">
        <CafeSearch />
      </div>
      <div className="w-full grid gap-y-5 lg:gap-x-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center">
        <CafeCard />
      </div>
      <div className="flex flex-col w-full font-semibold text-5xl items-center justify-center h-full lg:h-[400px] gap-6 overflow-hidden">
        <div className="text-3xl text-slate-300 text-center py-3 px-6 bg-gradient-to-r from-transparent via-slate-950 to-transparent">
          Popular Cafe Brand
        </div>
        <CafeBrand />
      </div>
    </div>
  );
}
