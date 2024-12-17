"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TbZoomReset } from "react-icons/tb";
import { CafeLocation } from "@/constants/cafe-location.constant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdvanceFilterSearchCafeSchema } from "@/schemas/cafe.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CafeAdvanceSearchDialog from "./advance-search/CafeAdvanceSearchDialog";


const CafeSearch = () => {
  const formCafeAdvanceSearch = useForm<
    z.infer<typeof AdvanceFilterSearchCafeSchema>
  >({
    resolver: zodResolver(AdvanceFilterSearchCafeSchema),
    defaultValues: {
      cafeName: "",
      city: "",
      district: "",
      price: 0,
      isBestChoice: false,
      isHoldingEvents: false,
      isOnPromotions: false,
      cafeCategory: [],
    },
  });

  const [searchCafeName, setSearchCafeName] = useState<string>("");
  const [cafeLocation, setCafeLocation] = useState<string>("");
  const [cafeDistrict, setCafeDistrict] = useState<string>("");
  const [cafeDistrictOptions, setCafeDistrictOptions] = useState<string[]>([]);
  useEffect(() => {
    CafeLocation.map((item) => {
      if (item.location === cafeLocation) {
        setCafeDistrictOptions(item.district);
      }
    });
  }, [cafeLocation, cafeDistrictOptions]);

  const removeFilterSearch = () => {
    setSearchCafeName("");
    setCafeLocation("");
    setCafeDistrict("");
    setCafeDistrictOptions([]);
  };

  const advanceSearchFormSubmit = (
    data: z.infer<typeof AdvanceFilterSearchCafeSchema>
  ) => {
    const validateFields = AdvanceFilterSearchCafeSchema.safeParse(data);
    console.log(validateFields);
    if (validateFields.success) {
    } else {
      console.log(validateFields.error);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center relative w-full gap-2">
        <div className="flex items-center relative w-full">
          <Input
            type="text"
            placeholder="Search cafe name"
            className="border-slate-700 border-2 hover:border-slate-600"
            value={searchCafeName}
            onChange={(e) => setSearchCafeName(e.currentTarget.value)}
          />
          <span className="absolute right-0 mx-3">
            <FaSearch />
          </span>
        </div>
        <div className="flex items-center relative w-full">
          <Select
            value={cafeLocation}
            onValueChange={(value: string) => {
              setCafeLocation(value);
            }}
          >
            <SelectTrigger className="w-full border-slate-800 bg-slate-800 text-slate-200 hover:bg-slate-600">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 text-slate-200 border-slate-700">
              {CafeLocation.map((item, index) => {
                return (
                  <SelectItem
                    key={index}
                    value={item.location}
                    className="focus:bg-slate-700 focus:text-slate-200"
                  >
                    {item.location}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center relative w-full">
          <Select
            value={cafeDistrict}
            onValueChange={(value: string) => {
              setCafeDistrict(value);
            }}
          >
            <SelectTrigger className="w-full border-slate-800 bg-slate-800 text-slate-200 hover:bg-slate-600">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 text-slate-200 border-slate-700">
              {cafeDistrictOptions.map((item, index) => {
                return (
                  <SelectItem
                    key={index}
                    value={item}
                    className="focus:bg-slate-700 focus:text-slate-200"
                  >
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div
          onClick={removeFilterSearch}
          className="text-2xl hover:text-slate-200 hover:cursor-pointer"
        >
          <TbZoomReset />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <CafeAdvanceSearchDialog
          {...{ formCafeAdvanceSearch, advanceSearchFormSubmit }}
        />
      </div>
    </>
  );
};

export default CafeSearch;
