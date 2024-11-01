"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ProductCardDetail() {
  const [productSize, setProductSize] = useState<string>("m");
  const [productPrize, setProductPrize] = useState<number>(50000);
  const [totalProduct, setTotalProduct] = useState<number>(1);

  useLayoutEffect(() => {
    const countProduct = () => {
      if (totalProduct <= 1) return setTotalProduct(1);
    };
    countProduct();
  }, [totalProduct]);

  return (
    <>
      <div className="flex w-1/4 h-[440px] rounded-lg relative bg-slate-800 shadow-lg shadow-slate-950/30">
        <Image
          className="rounded-sm top-16 m-auto relative"
          alt=""
          src={
            "https://hcm.fstorage.vn/images/2022/65000085-65000100-tra-dao-phuc-long_1dfdb8c8-94b0-4f77-a6ca-5e21ba990713-og.png"
          }
          height={400}
          width={380}
        />
      </div>
      <div className="ml-12 flex flex-col w-1/3 items-start border border-slate-950 rounded-s-lg rounded-b-lg p-5 bg-slate-800">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <p className="text-2xl text-yellow-200 font-semibold">
              Trà Sữa Phúc Long
            </p>
            <p className="text-md text-yellow-200">ID: 1</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <Button
              onClick={() => setTotalProduct(totalProduct + 1)}
              className="bg-green-700 w-4 hover:bg-green-600"
            >
              <FaPlus />
            </Button>
            <Button
              onClick={() => setTotalProduct(totalProduct - 1)}
              className="bg-green-700 w-4 hover:bg-green-600"
            >
              <FaMinus />
            </Button>
          </div>
        </div>
        <p className="text-xl text-green-600">
          {new Intl.NumberFormat("de-DE").format(productPrize)}
          <span className="ml-1">đ</span>
        </p>
        <div className="flex flex-col my-2">
          <p className="text-xl text-green-600">Chọn kích cỡ:</p>
          <div className="flex flex-row gap-6 my-2">
            <div
              onClick={() => setProductSize("m")}
              className="border-2 rounded-sm w-28 bg-slate-300 text-slate-950 flex flex-col items-center group cursor-pointer"
            >
              <p className="text-center p-1 text-xl w-full h-full">M</p>
              <p
                className={`text-center w-full  text-slate-50 group-hover:bg-green-700 transition-all rounded-sm ${
                  productSize === "m" ? "bg-green-700" : "bg-slate-500"
                }`}
              >
                +0đ
              </p>
            </div>
            <div
              onClick={() => setProductSize("l")}
              className=" border-2 rounded-sm w-28 bg-slate-300 text-slate-950 flex flex-col items-center group cursor-pointer"
            >
              <p className="text-center text-xl p-1 w-full h-full">L</p>
              <p
                className={`text-center w-full text-slate-50 group-hover:bg-green-700 transition-all rounded-sm ${
                  productSize === "l" ? "bg-green-700" : "bg-slate-500"
                }`}
              >
                +10.000đ
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full my-2">
          <p className="text-xl text-green-600">Yêu cầu thêm:</p>
          <Textarea
            className="text-slate-300 border border-slate-400"
            placeholder="Note"
          ></Textarea>
        </div>
        <div className="flex items-center m-auto mt-3">
          <Button className="bg-green-700 w-80 hover:bg-green-600">
            <span>Thêm vào giỏ:</span>
            <span>
              {productSize === "m"
                ? new Intl.NumberFormat("de-DE").format(
                    productPrize * totalProduct
                  )
                : new Intl.NumberFormat("de-DE").format(
                    (productPrize + 10000) * totalProduct
                  )}
              đ
            </span>
          </Button>
        </div>
      </div>
      <div className="flex p-5 border-r border-t border-b bg-green-600 border-green-800 h-3 items-center rounded-br-lg">
        <span className="flex items-center text-slate-50">{totalProduct}x</span>
      </div>
    </>
  );
}
