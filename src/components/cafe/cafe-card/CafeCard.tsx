import Link from "next/link";
import CafeCardItem from "./cafe-card-item/CafeCardItem";
import { dataCafe } from "@/constants/Mockdata.constants";
import { CafeProps } from "@/types/cafe/cafe.types";

export default function CafeCard() {
  return (
    <>
      {dataCafe.map((data: CafeProps) => (
        <Link key={data.id} href={`/cafes/${data.id}`}>
          <CafeCardItem data={data} />
        </Link>
      ))}
    </>
  );
}
    