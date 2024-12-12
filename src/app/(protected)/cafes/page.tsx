"use client";

import { CafeCard, CafeSearch } from "@/components/cafe";

export default function CafesPage() {
  return (
    <div className="w-full mx-auto container py-5">
      <div className="flex text-slate-200 font-semibold text-5xl items-center justify-center">
        Cafe
      </div>
      <div className="flex flex-col lg:flex-row py-5 justify-between w-full gap-2 px-2 md:px-10 lg:px-0">
        <CafeSearch />
      </div>
      <div className="w-full grid gap-y-5 lg:gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
        <CafeCard />
      </div>
    </div>
  );
}
