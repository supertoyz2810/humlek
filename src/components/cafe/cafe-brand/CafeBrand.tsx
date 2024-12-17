import { motion } from "motion/react";
import Image from "next/image";
import { dataCafe as data } from "@/constants/Mockdata.constants";
import React from "react";

const CafeBrand = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-slate-950 mx-auto">
        <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-[#0f172a] before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-[#0f172a] after:to-transparent after:filter after:blur-3"></div>
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {[...data, ...data].map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-slate-900"
              style={{ width: `${100 / data.length}%` }}
            >
              <div className="flex flex-col items-center justify-center h-full text-6xl">
                <Image
                  alt="Cafe Logo"
                  width={800}
                  height={200}
                  src={item.cafeDetails.cafeLogo}
                  className="w-32 h-auto object-fill bg-center bg-no-repeat mx-auto flex-none"
                />
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-[#0f172a] before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-[#0f172a] after:to-transparent after:filter after:blur-3"></div>
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {[...data, ...data].map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 bg-slate-900"
              style={{ width: `${100 / data.length}%` }}
            >
              <div className="flex flex-col items-center justify-center h-full text-6xl">
                <Image
                  alt="Cafe Logo"
                  width={800}
                  height={200}
                  src={item.cafeDetails.cafeLogo}
                  className="w-32 h-auto object-fill bg-center bg-no-repeat mx-auto flex-none"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default CafeBrand;
