import Link from "next/link";
import RestaurantCardItem from "./restaurant-card-item/RestaurantCardItem";

export default function RestaurantCardMain() {
  return (
    <div className="grid grid-cols-5 gap-y-5 justify-items-center">
      <Link href={"/foods/restaurant/1"}>
        <RestaurantCardItem />
      </Link>
      <RestaurantCardItem />
    </div>
  );
}
    