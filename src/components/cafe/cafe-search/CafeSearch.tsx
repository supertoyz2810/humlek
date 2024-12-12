"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataCafeCategory } from "@/constants/Mockdata.constants";
import { CafeCategoryProps } from "@/types/cafe/cafe-category.types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TbZoomReset } from "react-icons/tb";
import { CafeLocation } from "@/constants/cafe-location.constant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AdvanceFilterSearchCafeSchema } from "@/schemas/cafe.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const CafeSearch = () => {
  const advanceSearchCafe = useForm<
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

  const advanceSearchSubmitForm = (
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
            className="border-slate-700 border-2"
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
            <SelectTrigger className="w-full border-slate-700 bg-slate-700 text-slate-200">
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
            <SelectTrigger className="w-full border-slate-700 bg-slate-700 text-slate-200">
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
        <Dialog>
          <DialogTrigger className="bg-slate-700 hover:bg-slate-500 rounded-sm transition-all px-4 text-slate-100">
            Advance Filter
          </DialogTrigger>
          <DialogContent
            onInteractOutside={(e) => e.preventDefault()}
            className="sm:max-w-[600px] bg-slate-900 border border-slate-600 text-slate-200"
          >
            <DialogHeader>
              <DialogTitle className="mb-4 text-2xl">
                Advance filter search Cafe
              </DialogTitle>
              <DialogDescription asChild>
                <div className="flex flex-col w-full gap-4 text-left">
                  <Form {...advanceSearchCafe}>
                    <form
                      onSubmit={advanceSearchCafe.handleSubmit(
                        advanceSearchSubmitForm
                      )}
                      className="mb-0 space-y-4"
                    >
                      {/* Cafe Name */}
                      <div className="flex flex-col relative w-full gap-2 text-slate-200">
                        <FormField
                          control={advanceSearchCafe.control}
                          name="cafeName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cafe Name:</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="text"
                                  placeholder="Search Cafe name"
                                  className="border-slate-700 text-slate-200 hover:border-slate-600 focus:border-slate-600"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Cafe City & District */}
                      <div className="flex flex-col lg:flex-row relative w-full gap-2 text-slate-200">
                        <FormField
                          control={advanceSearchCafe.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>City:</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger className="w-full border-slate-800 bg-slate-800 text-slate-200 hover:bg-slate-700">
                                    <SelectValue placeholder="City" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-slate-800 text-slate-200 border-slate-800">
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
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={advanceSearchCafe.control}
                          name="district"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>City:</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <SelectTrigger className="w-full border-slate-800 bg-slate-800 text-slate-200 hover:bg-slate-700">
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
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <div className="flex items-end flex-col lg:flex-row text-slate-200">
                          <div
                            onClick={removeFilterSearch}
                            className="text-2xl hover:text-slate-200 hover:cursor-pointer pb-1"
                          >
                            <TbZoomReset />
                          </div>
                        </div>
                      </div>
                      {/* Coffee Price */}
                      <div className="flex flex-col relative w-full gap-2 text-slate-200">
                        <FormField
                          control={advanceSearchCafe.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price:</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="number"
                                  placeholder="Example: 50000"
                                  className="border-slate-700 border-2 text-slate-200 hover:border-slate-600 focus:border-slate-600"
                                  onChange={(e) =>
                                    field.onChange(
                                      e.target.value
                                        ? parseInt(e.target.value, 10)
                                        : 0
                                    )
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Special Options */}
                      <div className="flex flex-col relative w-full gap-3 text-slate-200">
                        <span>Special Options:</span>
                        <FormField
                          control={advanceSearchCafe.control}
                          name="isBestChoice"
                          render={({ field }) => (
                            <FormItem className="flex gap-2 items-center">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-slate-600"
                                />
                              </FormControl>
                              <FormLabel style={{ marginTop: "0" }}>
                                Best choice: Recommended you should try
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={advanceSearchCafe.control}
                          name="isHoldingEvents"
                          render={({ field }) => (
                            <FormItem className="flex gap-2 items-center">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-slate-600"
                                />
                              </FormControl>
                              <FormLabel style={{ marginTop: "0" }}>
                                Events Occured: An events is currently occured
                                in this cafe
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={advanceSearchCafe.control}
                          name="isOnPromotions"
                          render={({ field }) => (
                            <FormItem className="flex gap-2 items-center">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="border-slate-600"
                                />
                              </FormControl>
                              <FormLabel style={{ marginTop: "0" }}>
                                Promotions: Cafe is on promotions
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Category */}
                      <div className="flex flex-col w-full gap-2 text-slate-200">
                        <span>Category:</span>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                          {dataCafeCategory.map((item: CafeCategoryProps) => (
                            <FormField
                              key={item.id}
                              control={advanceSearchCafe.control}
                              name="cafeCategory"
                              render={({ field }) => {
                                const value = field.value || [];
                                const isChecked = value.includes(
                                  Number(item.id)
                                );
                                return (
                                  <FormItem>
                                    <FormControl>
                                      <div className="flex items-center gap-2 w-full">
                                        <Checkbox
                                          checked={isChecked}
                                          className="border-slate-600"
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              // Add the ID to the array
                                              field.onChange([
                                                ...value,
                                                Number(item.id),
                                              ]);
                                            } else {
                                              // Remove the ID from the array
                                              field.onChange(
                                                value.filter(
                                                  (id) => id !== Number(item.id)
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        <label
                                          htmlFor="terms2"
                                          className="text-sm font-medium"
                                        >
                                          {item.cafeCategoryName}
                                        </label>
                                      </div>
                                    </FormControl>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <Button className="bg-slate-800 hover:bg-slate-700">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CafeSearch;
