import { RestaurantCardMain } from "@/components/foods";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

export default function FoodPage() {
  return (
    <div className="w-full px-10">
      <div className="mx-8 my-5 w-1/4 flex items-center relative">
        <Input type="text" placeholder="Search restaurant name" className="border-slate-700 border-2"/>
        <span className="absolute right-0 mx-3">
          <FaSearch />
        </span>
      </div>
      <RestaurantCardMain />
    </div>
  );
}
