"use client";

import Link from "next/link";
import ProductCardItem from "./product-card-item/ProductCardItem";

type ProductCardMainProps = {
  restaurantId: string;
};

export default function ProductCardMain({ restaurantId }: ProductCardMainProps) {
  return (
    <div className="grid grid-cols-5 gap-y-5 justify-items-center">
      <Link href={`${Number(restaurantId)}/product/1`}>
        <ProductCardItem />
      </Link>
    </div>
  );
}
