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
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdPayments } from "react-icons/md";
import { MdOutlineNoFood } from "react-icons/md";
import { FaShop } from "react-icons/fa6";

export default function NavbarMain() {
  return (
    <nav className="bg-slate-950 py-3 px-10 w-full h-[60px] flex justify-between items-center z-[99] gap-8 sm:gap-0">
      <div className="flex flex-row items-center justify-center gap-12">
        <div className="text-2xl hover:cursor-pointer text-slate-200">
          <Link href={"/"}>Humleks</Link>
        </div>
        <div className="hidden md:flex flex-row gap-12">
          <div className="text-base hover:cursor-pointer hover:text-slate-200 transition-all">
            <Link href={"/food"}>Food</Link>
          </div>
          <div className="text-base hover:cursor-pointer hover:text-slate-200 transition-all">
            <Link href={"/shop"}>Shop</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center border-2 border-zinc-800 rounded-full hover:border-slate-200 transition-all group">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row items-center focus:outline-none">
            <div className="px-4">
              <span className="group-hover:text-slate-50">username</span>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="top-2 relative rounded-lg p-2">
            <Image
              alt=""
              src={"https://github.com/shadcn.png"}
              width={80}
              height={80}
              className="ml-2 my-2 rounded-sm"
            />
            <DropdownMenuLabel className="text-1xl">Username</DropdownMenuLabel>
            <DropdownMenuLabel className="text-[12px]">
              @username • Joined June 2024
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-800" />
            <div className="flex flex-col gap-[4px]">
              <DropdownMenuItem className="text-[15px] flex gap-3">
                <span className="text-2xl">
                  <CgProfile />
                </span>
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[15px] flex gap-3">
                <span className="text-2xl">
                  <MdPayments />
                </span>
                <span>Payment Check</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[15px] flex gap-3">
                <span className="text-2xl">
                  <TbLogout />
                </span>
                <span>Logout</span>
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
