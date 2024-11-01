"use client";
import ProductCardDetail from "@/components/foods/product/product-card-detail/ProductCardDetail";

type ProductDetailPageProps = {
  params: {
    productId: string;
  };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = params;

  return (
    <div className="w-full flex flex-row justify-center mx-auto my-5">
      <ProductCardDetail />
    </div>
  );
}
