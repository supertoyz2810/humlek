import Link from "next/link";
import RestaurantCardItem from "./restaurant-card-item/RestaurantCardItem";

export default function RestaurantCardMain() {
  return (
    <div className="mb-5 grid gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
      <Link href={"/foods/restaurant/1"}>
        <RestaurantCardItem />
      </Link>
      <RestaurantCardItem />
      <RestaurantCardItem />
      <RestaurantCardItem />
      <RestaurantCardItem />
      <RestaurantCardItem />
      <RestaurantCardItem />
    </div>
  );
}
    