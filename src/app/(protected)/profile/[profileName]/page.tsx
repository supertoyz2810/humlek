"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

type ProfileDetailPageProps = {
  params: {
    profileName: string;
  }
}

export default function ProfileDetailPage({ params }: ProfileDetailPageProps) {
  const { profileName } = params;
  return (
    <div className="max-w-[1200px] mx-auto h-full">
      <div className="flex flex-col items-center h-full">
        <div className="w-full h-[400px] shadow-2xl shadow-slate-950">
          <Image
            alt=""
            className="w-full h-full object-cover bg-center bg-no-repeat border-2 border-slate-600 overflow-hidden rounded-lg"
            width={1600}
            height={400}
            src={
              "https://wallpapers.com/images/hd/mountain-doge-meme-9vyth2kyeab90724.jpg"
            }
          />
        </div>
        <div className="w-full mx-auto relative top-[-6rem] flex flex-col xl:flex-row xl:top-[-3.5rem]">
          <div className="bg-slate-950 w-full absolute h-[210px] z-[-1] rounded-br-lg rounded-bl-lg"></div>
          <div className="aspect-square w-auto max-w-48 mx-auto flex justify-center items-center rounded-full xl:w-80 xl:ml-10">
            <Image
              alt=""
              className="w-full h-full object-cover bg-center bg-no-repeat rounded-full overflow-hidden border-2 border-slate-900"
              width={1600}
              height={400}
              src={
                "https://files.amberblocks.com/media/chnbzaa92ook5tnj/posts/pug8sd83a4o7rsk7/fy01cvah73subahcr3pi5l04vp4mf3qr/meme-dogecoin.png"
              }
            />
          </div>
          <div className="w-full flex flex-col h-auto items-center justify-center xl:mx-10 xl:flex-row">
            <div className="w-full flex flex-col items-center h-full justify-center xl:items-start gap-1">
              <span className="text-slate-50 text-4xl">username</span>
              <span className="text-slate-400 text-1xl">@nickname</span>
            </div>
            <div className="flex flex-row gap-3 my-3">
              <Button className="shadow-inner shadow-blue-950 w-[120px] bg-blue-600 hover:bg-blue-700 hover:border-blue-950 text-slate-100 active:bg-blue-400">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
