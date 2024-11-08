import { ProductCardMain } from "@/components/foods";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

type RestaurantDetailPageProps = {
  params: {
    restaurantId: string;
  };
};

export default function RestaurantDetailPage({ params }: RestaurantDetailPageProps) {
    const { restaurantId } = params;
    return (
      <div className="w-full">
        <div className="mx-8 my-5 w-1/4 flex items-center relative">
          <Input
            type="text"
            placeholder="Search restaurant name"
            className="border-slate-700 border-2"
          />
          <span className="absolute right-0 mx-3">
            <FaSearch />
          </span>
        </div>
        <ProductCardMain restaurantId={restaurantId}/>
      </div>
    );
}