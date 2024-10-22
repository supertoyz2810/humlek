import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import LoginForm from "./login/LoginForm";
import { ApiEndpointList } from "@/constants/api-endpoint.constant";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { usePathname } from "next/navigation";
import RegisterForm from "./register/RegisterForm";

export default function FormAuth() {
  const pathname = usePathname();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [quoteAuthor, setQuoteAuthor] = useState<string>("");
  const fetchGenerateImage = async () => {
    try {
      const res = await fetch("https://picsum.photos/600/500");
      if (!res.ok) {
        return setImageUrl(
          "https://fastly.picsum.photos/id/1037/600/500.jpg?hmac=EtpD0xQ3elY1_X2OiUh3kSFf5TbIYXEw9pekUBImQVA"
        );
      }
      return setImageUrl(res.url);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const fetchQuoteApi = async () => {
    const apiKey = process.env.NEXT_PUBLIC_X_API_KEY_NINJA_QUOTE;
    if (!apiKey) {
      throw new Error("API key is missing!");
    }
    try {
      const response = await fetch(ApiEndpointList.quote.GET_QUOTE, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setQuote(data[0].quote);
      setQuoteAuthor(data[0].author);
    } catch (error: unknown) {
      throw new Error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchQuoteApi();
    fetchGenerateImage();
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get the center of the viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate the mouse position relative to the center
      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  // Slow down the movement for a smoother effect
  const xPos = useTransform(x, (value) => value / -20);
  const yPos = useTransform(y, (value) => value / -20);
  return (
    <>
      {imageUrl ? (
        <motion.div
          className="flex mx-52 border border-slate-600 rounded-sm z-10 w-[1200px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="w-1/2 p-12 bg-slate-950 text-white flex flex-col justify-between rounded-sm relative overflow-hidden">
            <Image
              alt=""
              src={imageUrl}
              width={400}
              height={600}
              className="w-full border rounded-lg absolute right-0 left-0 bottom-0 top-0 h-full z-[1] opacity-30 bg-cover bg-center bg-no-repeat"
            />
            <div className="z-20">
              <h1 className="mt-4 text-3xl font-semibold">Humlek</h1>
            </div>
            <motion.div
              className="flex w-full justify-center align-middle h-full items-center z-10"
              style={{
                x: xPos,
                y: yPos,
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
              transition={{ velocity: 0 }}
            >
              <motion.div
                style={{
                  rotateX: xPos,
                  rotateY: yPos,
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                }}
                transition={{ velocity: 0 }}
                className="border rounded-lg w-full h-full"
              >
                <Image
                  alt=""
                  src={imageUrl}
                  layout="fill"
                  objectFit="cover"
                  className={`border rounded-lg transition-transform duration-500 ease-out`}
                />
              </motion.div>
            </motion.div>
            <div className="z-10">
              <blockquote>&quot;{quote}&quot;</blockquote>
              <p className="mt-4">{quoteAuthor}</p>
            </div>
          </div>
          <motion.div
            className="w-1/2 flex items-center justify-center p-12 bg-black rounded-sm"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
          >
            {pathname === "/login" && <LoginForm />}
            {pathname === "/register" && <RegisterForm />}
          </motion.div>
        </motion.div>
      ) : (
        <>
          <div className="flex mx-52 border border-slate-600 rounded-sm z-50 h-[700px] w-full">
            <div className="w-1/2 p-12 bg-slate-950 text-white flex flex-col justify-between rounded-sm relative overflow-hidden">
              <div className="space-y-10">
                <Skeleton className="h-4 w-full bg-slate-800" />
                <Skeleton className="h-[400px] w-[400px] rounded-xl bg-slate-800 mx-auto" />
                <Skeleton className="h-4 w-full bg-slate-800" />
                <Skeleton className="h-4 w-[600px] bg-slate-800" />
                <Skeleton className="h-4 w-[250px] bg-slate-800" />
              </div>
            </div>
            <div className="w-1/2 p-12 bg-slate-950 text-white flex flex-col rounded-sm justify-top gap-6">
              <Skeleton className="h-4 w-[100px] bg-slate-800" />
              <div className="space-y-20 flex flex-col justify-center">
                <Skeleton className="h-4 w-[250px] bg-slate-800" />
                <Skeleton className="h-4 w-[450px] bg-slate-800" />
                <Skeleton className="h-4 w-[450px] bg-slate-800" />
                <Skeleton className="h-4 w-[400px] bg-slate-800" />
                <div className="flex justify-around">
                  <Skeleton className="h-[50px] w-[200px] bg-slate-800" />
                  <Skeleton className="h-[50px] w-[200px] bg-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
