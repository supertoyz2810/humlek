"use client";

import { RestaurantCardMain } from "@/components/foods";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PostSchema } from "@/schemas/post.schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function FoodsPage() {
  const restaurantCategoriesData = [{ name: "Foods" }, { name: "Drinks" }];
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      thumbnail: "",
      content: "",
      username: "",
      postApproval: false,
    },
  });
  const handleOnSubmitFormAdd = async (
    values: z.infer<typeof PostSchema>
  ) => {};

  return (
    <div className="w-full pt-5">
      <div className="flex flex-row px-9 py-5 justify-between w-full">
        <div className="flex items-center relative w-1/3">
          <Input
            type="text"
            placeholder="Search restaurant name"
            className="border-slate-700 border-2"
          />
          <span className="absolute right-0 mx-3">
            <FaSearch />
          </span>
        </div>
        <div className="flex w-full justify-end">
          <Dialog>
            <DialogTrigger className="bg-slate-700 hover:bg-slate-500 rounded-sm transition-all px-4 text-slate-100">
              Add Restaurant
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-slate-950 border border-slate-800 text-slate-200">
              <DialogHeader>
                <DialogTitle>Restaurant Creation</DialogTitle>
                <DialogDescription>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleOnSubmitFormAdd)}
                      className="flex flex-col items-center gap-4 mt-4"
                    >
                      {/* Today pick */}
                      <div className="flex flex-row items-center w-full">
                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem className="flex flex-row item-center w-full p-1 relative">
                              <FormControl>
                                <Checkbox
                                  className="border-slate-500"
                                  // checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel className="ml-2 absolute left-6 top-[-7px]">
                                <Badge className="w-full bg-yellow-500 rounded-xl text-slate-900 hover:bg-yellow-200">
                                  Today pick?
                                </Badge>
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Thumbnail */}
                      <div className="flex flex-row items-center w-full">
                        <FormField
                          control={form.control}
                          name="thumbnail"
                          render={({ field }) => (
                            <>
                              <FormItem className="w-full">
                                <FormLabel>Thumbnail</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="text"
                                    className="border-slate-700 bg-slate-950"
                                    placeholder="Thumbnail image link..."
                                  />
                                </FormControl>
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                      {/* Restaurant name */}
                      <div className="flex flex-row items-center w-full">
                        <FormField
                          control={form.control}
                          name="thumbnail"
                          render={({ field }) => (
                            <>
                              <FormItem className="w-full">
                                <FormLabel>Restaurant name</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="text"
                                    className="border-slate-700 bg-slate-950"
                                  />
                                </FormControl>
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                      {/* Description */}
                      <div className="flex flex-row items-center w-full">
                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <>
                              <FormItem className="w-full">
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                  <Textarea
                                    {...field}
                                    className="border-slate-700 bg-slate-950"
                                  />
                                </FormControl>
                              </FormItem>
                            </>
                          )}
                        />
                      </div>
                      <DialogFooter className="flex w-full">
                        <Button
                          type="submit"
                          className="bg-slate-800 border border-slate-800 hover:bg-slate-600"
                        >
                          Save changes
                        </Button>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <RestaurantCardMain />
    </div>
  );
}
