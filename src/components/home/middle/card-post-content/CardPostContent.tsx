"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaComments } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GrSend } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PostProps } from "@/types/post/post.types";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function CardPostContent(data: PostProps) {
  const { data: session } = useSession();
  const [toggleExpandPost, setToggleExpandPost] = useState<boolean>(false);
  const [toggleComments, setToggleComments] = useState<boolean>(false);
  const [toggleEditComment, setToggleEditComment] = useState<boolean>(false);

  return (
    <Card className="w-full mx-auto text-slate-50">
      <CardHeader className="flex flex-row gap-2 justify-start h-full mx-5 mt-3">
        <Avatar>
          <AvatarImage src={session?.user.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <CardTitle className="flex flex-row items-center gap-1">
            <div>{data.username}</div>
            <div className="animate-glow transition-all">⭐</div>
          </CardTitle>
          <span className="text-[12px]">{data.createDate}</span>
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <div className="text-1xl text-slate-200 mt-3 mx-5 flex flex-col">
          <span
            className={`${
              toggleExpandPost ? "" : "line-clamp-3"
            } text-ellipsis`}
          >
            {data.postDetail.content}
          </span>
          <span
            onClick={() => setToggleExpandPost((prev) => !prev)}
            className="justify-end items-end flex font-bold hover:underline"
          >
            {toggleExpandPost ? "View less" : "View more"}
          </span>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center my-5">
          <Dialog>
            <DialogTrigger
              className={`group grid ${
                data.postDetail.contentImg.length >= 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              } w-full relative gap-2 transition-all`}
            >
              {data.postDetail.contentImg.map((img: string, index) => {
                if (data.postDetail.contentImg.length > 2) {
                  while (index < 2) {
                    return (
                      <div key={index} className="flex h-full">
                        {data.postDetail.contentImg.length === 2 ? (
                          <></>
                        ) : (
                          <>
                            {index === 1 && (
                              <>
                                <div className="block right-0 w-1/2 h-full bg-black absolute opacity-60 group-hover:opacity-50 transition-all"></div>
                                <div className="absolute aspect-square justify-center text-center h-full w-1/2 right-0">
                                  <div className="flex gap-4 justify-center items-center w-full h-full mx-auto">
                                    <FaPlus className="text-slate-50 text-6xl" />
                                    <span className="text-5xl">
                                      {data.postDetail.contentImg.length - 2}
                                    </span>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        )}
                        <Image
                          className="w-full h-full object-cover bg-no-repeat bg-center"
                          width={800}
                          height={800}
                          alt=""
                          src={img}
                        />
                      </div>
                    );
                  }
                } else {
                  return (
                    <Image
                      key={index}
                      className="w-full h-full"
                      width={600}
                      height={800}
                      alt=""
                      src={img}
                    />
                  );
                }
              })}
            </DialogTrigger>
            <DialogContent
              onInteractOutside={(e) => {
                e.preventDefault();
              }}
              className="sm:max-w-[800px] bg-slate-900 border-slate-950 m-0 p-0"
            >
              <Carousel className="bg-slate-950 border-slate-950 rounded-md">
                <CarouselContent className="aspect-square h-full">
                  {data.postDetail.contentImg.map((dataImg: string, index) => (
                    <CarouselItem
                      key={index}
                      className="flex items-center w-full h-full"
                    >
                      <Image
                        className="w-full h-full object-contain"
                        width={800}
                        height={800}
                        alt=""
                        src={dataImg}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row lg:gap-2 gap-1 lg:mx-5 mb-2 px-2">
        <Button className="group bg-slate-800 transition-all w-full text-1xl flex justify-center items-center hover:bg-green-900 hover:text-green-200 active:bg-green-600">
          <div className="group-hover:animate-bounce-zoom-icon group-active:scale-[3] group-active:animate-none transition-all">
            <BiLike className="scale-125" />
          </div>
          {data.totalLike}
        </Button>
        <div className="w-1 bg-slate-600 h-6"></div>
        <Button className="group bg-slate-800 w-full transition-all text-1xl flex justify-center items-center hover:bg-red-900 hover:text-red-200 active:bg-red-600">
          <div className="group-hover:animate-bounce-zoom-icon group-active:scale-[3] group-active:animate-none transition-all">
            <BiDislike className="scale-125" />
          </div>
          {data.totalDislike}
        </Button>
        <div className="w-1 bg-slate-600 h-6"></div>
        <Button
          onClick={() => setToggleComments((prev) => !prev)}
          className="bg-slate-800 w-full text-1xl flex justify-center items-center hover:bg-blue-900 hover:text-blue-200 active:bg-blue-600"
        >
          <FaComments />
          {data.totalComment}
        </Button>
        <div className="w-1 bg-slate-600 h-6"></div>
        <Button className="bg-slate-800 w-full text-1xl flex justify-center items-center hover:bg-purple-900 hover:text-purple-200 active:bg-purple-600">
          <PiShareFatFill />
          {data.totalShare}
        </Button>
      </CardFooter>
      {/* User commment section */}
      {toggleComments && (
        <>
          <div className="w-full border border-slate-800 my-4"></div>
          <CardContent className="p-0 m-0 mb-6 hover:cursor-default">
            <div className="flex flex-row gap-3 items-start text-1xl text-slate-200 h-full mx-5 relative">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Textarea
                className="flex border-slate-600"
                placeholder="Write your comments as Username"
              />
              <Button className="absolute text-slate-600 right-1 flex h-[50px] hover:bg-transparent hover:text-slate-50 rounded-full bg-transparent m-auto top-1">
                <GrSend />
              </Button>
            </div>
            <div className="flex flex-col my-6 text-slate-300">
              <div className="flex flex-row mx-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-3 gap-1">
                  <div className="flex flex-col gap-2 items-start text-1xl bg-slate-800 rounded-md px-4 py-2">
                    <div className="flex flex-col items-start">
                      <CardTitle className="flex flex-row items-center gap-1 hover:text-slate-50 hover:cursor-pointer">
                        <div>{data.username}</div>
                        <div className="animate-glow transition-all">⭐</div>
                      </CardTitle>
                      <span className="text-[12px] hover:text-slate-50 hover:cursor-pointer">
                        {data.createDate}
                      </span>
                    </div>
                    {!toggleEditComment ? (
                      <div className="flex flex-col gap-3 items-start text-1xl">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </div>
                    ) : (
                      <Textarea
                        className="flex flex-col w-full gap-3 items-start text-1xl border-slate-600 rounded-sm resize-none"
                        cols={100}
                        rows={3}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Textarea>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {!toggleEditComment ? (
                      <div
                        onClick={() => setToggleEditComment(!toggleEditComment)}
                        className="hover:text-slate-50 hover:cursor-pointer text-sm"
                      >
                        Edit
                      </div>
                    ) : (
                      <>
                        <div
                          onClick={() =>
                            setToggleEditComment(!toggleEditComment)
                          }
                          className="hover:text-slate-50 hover:cursor-pointer text-sm"
                        >
                          Cancel
                        </div>
                        <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                          Confirm
                        </div>
                      </>
                    )}
                    <div className="border border-slate-700"></div>
                    <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                      <AlertDialog>
                        <AlertDialogTrigger>Delete</AlertDialogTrigger>
                        <AlertDialogContent className="bg-slate-900 border-slate-950">
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-300">
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-slate-50 hover:bg-slate-400 text-slate-950 hover:border-slate-400">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-slate-800 hover:bg-slate-600">
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-6 text-slate-300 ml-12">
                <div className="flex flex-row mx-5">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col ml-3 gap-1">
                    <div className="flex flex-col gap-2 items-start text-1xl bg-slate-800 rounded-md px-4 py-2">
                      <div className="flex flex-col items-start">
                        <CardTitle className="flex flex-row items-center gap-1 hover:text-slate-50 hover:cursor-pointer">
                          <div>{data.username}</div>
                          <div className="animate-glow transition-all">⭐</div>
                        </CardTitle>
                        <span className="text-[12px] hover:text-slate-50 hover:cursor-pointer">
                          {data.createDate}
                        </span>
                      </div>
                      {!toggleEditComment ? (
                        <div className="flex flex-col gap-3 items-start text-1xl">
                          👌😍
                        </div>
                      ) : (
                        <Textarea
                          className="flex flex-col w-full gap-3 items-start text-1xl border-slate-600 rounded-sm resize-none"
                          cols={100}
                          rows={3}
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </Textarea>
                      )}
                    </div>
                    <div className="flex flex-row gap-4">
                      {!toggleEditComment ? (
                        <div
                          onClick={() =>
                            setToggleEditComment(!toggleEditComment)
                          }
                          className="hover:text-slate-50 hover:cursor-pointer text-sm"
                        >
                          Edit
                        </div>
                      ) : (
                        <>
                          <div
                            onClick={() =>
                              setToggleEditComment(!toggleEditComment)
                            }
                            className="hover:text-slate-50 hover:cursor-pointer text-sm"
                          >
                            Cancel
                          </div>
                          <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                            Confirm
                          </div>
                        </>
                      )}
                      <div className="border border-slate-700"></div>
                      <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                        <AlertDialog>
                          <AlertDialogTrigger>Delete</AlertDialogTrigger>
                          <AlertDialogContent className="bg-slate-900 border-slate-950">
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-slate-300">
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="bg-slate-50 hover:bg-slate-400 text-slate-950 hover:border-slate-400">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction className="bg-slate-800 hover:bg-slate-600">
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-6 text-slate-300">
              <div className="flex flex-row mx-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-3 gap-1">
                  <div className="flex flex-col gap-2 items-start text-1xl bg-slate-800 rounded-md px-4 py-2">
                    <div className="flex flex-col items-start">
                      <CardTitle className="flex flex-row items-center gap-1 hover:text-slate-50 hover:cursor-pointer">
                        <div>{data.username}</div>
                        <div className="animate-glow transition-all">⭐</div>
                      </CardTitle>
                      <span className="text-[12px] hover:text-slate-50 hover:cursor-pointer">
                        {data.createDate}
                      </span>
                    </div>
                    {!toggleEditComment ? (
                      <div className="flex flex-col gap-3 items-start text-1xl w-full">
                        Lorem Ipsum is simply dummy text of the printing and.
                      </div>
                    ) : (
                      <Textarea
                        className="flex flex-col w-full gap-3 items-start text-1xl border-slate-600 rounded-sm resize-none"
                        cols={100}
                        rows={3}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Textarea>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {!toggleEditComment ? (
                      <div
                        onClick={() => setToggleEditComment(!toggleEditComment)}
                        className="hover:text-slate-50 hover:cursor-pointer text-sm"
                      >
                        Edit
                      </div>
                    ) : (
                      <>
                        <div
                          onClick={() =>
                            setToggleEditComment(!toggleEditComment)
                          }
                          className="hover:text-slate-50 hover:cursor-pointer text-sm"
                        >
                          Cancel
                        </div>
                        <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                          Confirm
                        </div>
                      </>
                    )}
                    <div className="border border-slate-700"></div>
                    <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                      <AlertDialog>
                        <AlertDialogTrigger>Delete</AlertDialogTrigger>
                        <AlertDialogContent className="bg-slate-900 border-slate-950">
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-300">
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-slate-50 hover:bg-slate-400 text-slate-950 hover:border-slate-400">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-slate-800 hover:bg-slate-600">
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-6 text-slate-300">
              <div className="flex flex-row mx-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-3 gap-1">
                  <div className="flex flex-col gap-2 items-start text-1xl bg-slate-800 rounded-md px-4 py-2">
                    <div className="flex flex-col items-start">
                      <CardTitle className="flex flex-row items-center gap-1 hover:text-slate-50 hover:cursor-pointer">
                        <div>{data.username}</div>
                        <div className="animate-glow transition-all">⭐</div>
                      </CardTitle>
                      <span className="text-[12px] hover:text-slate-50 hover:cursor-pointer">
                        {data.createDate}
                      </span>
                    </div>
                    {!toggleEditComment ? (
                      <div className="flex flex-col gap-3 items-start text-1xl">
                        Lorem Ipsum.
                      </div>
                    ) : (
                      <Textarea
                        className="flex flex-col w-full gap-3 items-start text-1xl border-slate-600 rounded-sm resize-none"
                        cols={100}
                        rows={3}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </Textarea>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    {!toggleEditComment ? (
                      <div
                        onClick={() => setToggleEditComment(!toggleEditComment)}
                        className="hover:text-slate-50 hover:cursor-pointer text-sm"
                      >
                        Edit
                      </div>
                    ) : (
                      <>
                        <div
                          onClick={() =>
                            setToggleEditComment(!toggleEditComment)
                          }
                          className="hover:text-slate-50 hover:cursor-pointer text-sm"
                        >
                          Cancel
                        </div>
                        <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                          Confirm
                        </div>
                      </>
                    )}
                    <div className="border border-slate-700"></div>
                    <div className="hover:text-slate-50 hover:cursor-pointer text-sm">
                      <AlertDialog>
                        <AlertDialogTrigger>Delete</AlertDialogTrigger>
                        <AlertDialogContent className="bg-slate-900 border-slate-950">
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-slate-300">
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-slate-50 hover:bg-slate-400 text-slate-950 hover:border-slate-400">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction className="bg-slate-800 hover:bg-slate-600">
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
}
