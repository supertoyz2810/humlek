"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CardPostContent from "./card-post-content/CardPostContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { PostSchema } from "@/schemas/post.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataPost } from "@/constants/Mockdata.constants";
import { PostProps } from "@/types/post/post.types";
import { useSession } from "next-auth/react";

export default function MiddleMainContent() {
  const { data: session } = useSession();
  const [timerOut, setTimerOut] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(true);
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

  React.useEffect(() => {
    const testLoadingTime = setInterval(() => {
      setTimerOut((prev) => {
        if (prev < 1) {
          clearInterval(testLoadingTime);
          setLoading(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(testLoadingTime);
  }, []);

  return (
    <div className="flex flex-col w-[700px] gap-12">
      <div className="flex flex-col w-full mx-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="flex flex-col w-full p-4 gap-2 group transition-all">
              <CardHeader className="flex flex-row gap-4 items-center">
                <CardTitle>
                  <Avatar>
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </CardTitle>
                <CardTitle className="text-slate-600 text-[1.1em] group-hover:text-slate-400 transition-all">
                  Write your though...
                </CardTitle>
              </CardHeader>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-slate-950 border border-slate-800 text-slate-200">
            <DialogHeader>
              <DialogTitle>Post create</DialogTitle>
              <DialogDescription>
                Write your through and share your moments with us
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleOnSubmitFormAdd)}
                className="flex flex-col items-center gap-4 mt-4"
              >
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
                {/* Content */}
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
                              placeholder="Post content..."
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
          </DialogContent>
        </Dialog>
      </div>

      {/* User post */}
      {loading ? (
        <>
          <div
            className="flex flex-row items-center justify-center gap-3"
            role="status"
          >
            <div className="animate-[spin_2s_ease-in-out_infinite]">
              <Image
                className="rounded-md"
                src="https://emoji.slack-edge.com/T02CJTUJ2BY/haothink/7b81986ef79a6fc0.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="flex space-x-2 text-slate-300 text-xl">
              <span className="animate-bounce delay-0">Loading</span>
              <span className="animate-bounce delay-200">posts</span>
              <span className="animate-bounce delay-400">...</span>
            </div>
          </div>
          <div className="flex flex-col space-y-3 bg-slate-950 rounded-md py-6">
            <div className="flex gap-2 mx-6">
              <div className="">
                <Skeleton className="h-12 w-12 rounded-full bg-slate-700" />
              </div>
              <div className="flex gap-2 flex-col justify-center">
                <Skeleton className="h-4 w-[100px] bg-slate-700" />
                <Skeleton className="h-4 w-[60px] bg-slate-700" />
              </div>
            </div>
            <div className="flex flex-col mx-5 gap-2">
              <Skeleton className="h-4 w-full bg-slate-700" />
              <Skeleton className="h-4 w-full bg-slate-700" />
              <Skeleton className="h-4 w-[300px] bg-slate-700" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-80 w-full bg-slate-700" />
            </div>
            <div className="flex flex-row mx-5 gap-2">
              <Skeleton className="h-8 w-full bg-slate-700" />
              <Skeleton className="h-8 w-full bg-slate-700" />
              <Skeleton className="h-8 w-full bg-slate-700" />
              <Skeleton className="h-8 w-full bg-slate-700" />
            </div>
          </div>
          <div className="flex flex-col space-y-3 bg-slate-950 rounded-md py-6">
            <div className="flex gap-2 mx-6">
              <div className="">
                <Skeleton className="h-12 w-12 rounded-full bg-slate-700" />
              </div>
              <div className="flex gap-2 flex-col justify-center">
                <Skeleton className="h-4 w-[100px] bg-slate-700" />
                <Skeleton className="h-4 w-[60px] bg-slate-700" />
              </div>
            </div>
            <div className="flex flex-col mx-5 gap-2">
              <Skeleton className="h-4 w-full bg-slate-700" />
              <Skeleton className="h-4 w-full bg-slate-700" />
              <Skeleton className="h-4 w-[300px] bg-slate-700" />
            </div>
            <div className="flex flex-row gap-2">
              <Skeleton className="h-60 w-full bg-slate-700" />
              <Skeleton className="h-60 w-full bg-slate-700" />
            </div>
            <div className="flex flex-row mx-5 gap-2">
              <Skeleton className="h-8 w-full bg-slate-700" />
              <Skeleton className="h-8 w-full bg-slate-700" />
              <Skeleton className="h-8 w-full bg-slate-700" />
              <Skeleton className="h-8 w-full bg-slate-700" />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full gap-10">
          {dataPost?.map((data: PostProps, index) => (
            <React.Fragment key={index}>
              <CardPostContent {...{ ...data }} />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
