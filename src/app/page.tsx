import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-between text-slate-200 mx-4">
      <div className="hidden md:flex w-1/3 items-center justify-start border-r-2 border-slate-700 h-full">
        <div>🌟 Hôm nay có món gì 🌟</div>
      </div>
      <div className="w-full items-center justify-center flex h-full">
        <div>Nơi để anh em đăng tâm tư...</div>
      </div>
      <div className="hidden md:flex w-1/3  items-center justify-end border-l-2 border-slate-700 h-full">
        <div>Tính năng trong tương lai...</div>
      </div>
    </div>
  );
}
