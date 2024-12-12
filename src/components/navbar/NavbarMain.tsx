"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNoFood } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoStarFill } from "react-icons/go";
import { signOut, useSession } from "next-auth/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdLocalCafe } from "react-icons/md";

type NavbarMainProps = {
  scrollDown: boolean;
  scrollPosition: number;
};

export default function NavbarMain({
  scrollDown,
  scrollPosition,
}: NavbarMainProps) {
  const { data: session } = useSession();

  return (
    <nav
      className={`bg-slate-950 py-3 px-10 w-full flex justify-between items-center z-[99] gap-8 sm:gap-0 transition-all ${
        scrollPosition === 0 ? "relative" : "fixed custom-navbar-bg"
      } ${scrollDown ? "h-0 py-4 transition-all" : "fixed h-[60px]"}`}
    >
      <div
        className={`text-2xl hover:cursor-pointer text-slate-200 w-full ${
          scrollDown ? "hidden" : ""
        }`}
      >
        <Link href={"/"}>Humleks</Link>
      </div>
      <div className="hidden md:flex flex-row gap-12 items-center justify-center w-full">
        <div
          className={`${
            scrollDown ? "text-2xl text-slate-200" : "text-3xl"
          } hover:cursor-pointer hover:text-slate-100 transition-all`}
        >
          <Link href={"/cafe"}>
            <MdLocalCafe />
          </Link>
        </div>
        <div
          className={`${
            scrollDown ? "text-2xl text-slate-200" : "text-3xl"
          } hover:cursor-pointer hover:text-slate-100 transition-all`}
        >
          <Link href={"/shops"}>
            <HiOutlineShoppingBag />
          </Link>
        </div>
      </div>
      <div
        className={`flex flex-row items-center justify-end transition-all h-12 group w-full ${
          scrollDown ? "hidden" : ""
        }`}
      >
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            className={`flex flex-row items-center focus:outline-none`}
          >
            <Avatar>
              <AvatarImage src={session?.user.image} />
              <AvatarFallback>
                {session?.user.name
                  .split("")
                  .map((word: string) => word.charAt(0).toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`top-2 relative rounded-lg p-2 right-10 ${
              scrollDown ? "hidden" : ""
            }`}
          >
            <Image
              alt={session?.user.name
                .split("")
                .map((word: string) => word.charAt(0).toUpperCase())
                .join("")}
              src={session?.user.image}
              width={80}
              height={80}
              className="ml-2 my-2 rounded-sm"
            />
            <DropdownMenuLabel className="text-1xl flex items-center gap-2">
              {session?.user.name}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <GoStarFill className="text-red-500 animate-glow transition-all" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-700">
                    <p>Administrator</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-[12px]">
              @{session?.user.email.split("@")[0]} • Joined June 2024
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-800" />
            <div className="flex flex-col gap-[4px]">
              <DropdownMenuItem>
                <Link
                  href={"/profile/username"}
                  className="text-[15px] flex gap-3"
                >
                  <span className="text-2xl">
                    <CgProfile />
                  </span>
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/cart"} className="text-[15px] flex gap-3">
                  <span className="text-2xl">
                    <AiOutlineShoppingCart />
                  </span>
                  <span>Cart Check</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div
                  className="text-[15px] flex gap-3"
                  onClick={() => signOut()}
                >
                  <span className="text-2xl">
                    <TbLogout />
                  </span>
                  <span>Logout</span>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator className="bg-slate-800 flex md:hidden" />
            {/* Responsive Pages */}
            <div className="flex md:hidden flex-col gap-[4px]">
              <DropdownMenuItem className="text-[15px] flex gap-3">
                <span className="text-2xl">
                  <MdOutlineNoFood />
                </span>
                <span>Foods</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[15px] flex gap-3">
                <span className="text-2xl">
                  <FaShop />
                </span>
                <span>Shops</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
