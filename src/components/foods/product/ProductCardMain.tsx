"use client";

import Link from "next/link";
import ProductCardItem from "./product-card-item/ProductCardItem";

type ProductCardMainProps = {
  cafeId: string;
};

export default function ProductCardMain({ cafeId }: ProductCardMainProps) {
  return (
    <div className="grid gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 m-auto justify-items-center">
      <Link href={`${Number(cafeId)}/product/1`}>
        <ProductCardItem />
      </Link>
      <Link href={`${Number(cafeId)}/product/1`}>
        <ProductCardItem />
      </Link>
      <Link href={`${Number(cafeId)}/product/1`}>
        <ProductCardItem />
      </Link>
      <Link href={`${Number(cafeId)}/product/1`}>
        <ProductCardItem />
      </Link>
      <Link href={`${Number(cafeId)}/product/1`}>
        <ProductCardItem />
      </Link>
      <Link href={`${Number(cafeId)}/product/1`}>
        <ProductCardItem />
      </Link>
    </div>
  );
}
