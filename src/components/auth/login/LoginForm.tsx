"use client";

import { signIn } from "next-auth/react";
import LoginSchema from "@/schemas";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import FormErrorMsg from "../FormErrorMsg";

export default function LoginForm() {
  const [message, setMessage] = useState<string>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmitForm = async (values: z.infer<typeof LoginSchema>) => {
    setMessage("");
    const validateFields = LoginSchema.safeParse(values);
    if (validateFields.success) {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          username: validateFields.data.username,
          password: validateFields.data.password,
        });
        if (res?.error) {
          setMessage("Username or password is incorrect!");
          return;
        }
        if (res?.ok) {
          // toast({
          //   title: "Login Successfully!",
          //   description: "Proceed to next page...",
          //   variant: "success",
          //   duration: 1000,
          // });
          // router.push("/");
          return;
        } else {
          setMessage("Failed to Login!");
        }
      } catch (error: any) {
        setMessage(error.message);
      }
    } else {
      setMessage("Invalid Fields!");
    }
  };
  return (
    <>
      <div className="w-full max-w-md">
        <div className="bg-black py-8 px-6 shadow sm:px-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-200">Login</h2>
            <p className="mt-2 text-sm text-slate-200">Welcome back!</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmitForm)}
              className="mb-0 space-y-6"
            >
              <div className="mb-0 space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-slate-900 bg-slate-200 hover:bg-slate-900 focus:bg-slate-900 focus:text-slate-200 hover:text-slate-200 transition-all"
                          type="text"
                          placeholder="Username"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="text-slate-900 bg-slate-200 hover:bg-slate-900 focus:bg-slate-900 focus:text-slate-200 hover:text-slate-200 transition-all"
                          type="password"
                          placeholder="******"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormErrorMsg message={message ? message : ""} />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white"
                  >
                    Sign In
                  </Button>
                </div>
                <div className="flex justify-end">
                  <Link
                    className="text-sm font-medium text-slate-200 hover:text-slate-400 hover:underline hover:underline-offset-4"
                    href="/login"
                    prefetch={false}
                  >
                    Forgotten Password?
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="mb-0 space-y-6 mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                {/* {(!loading && (
                    <div className="w-full border-t border-gray-300" />
                  )) || (
                    <>
                      <div className="w-full border-t border-gray-300 mr-3" />
                      <CgSpinner className="animate-spin text-white h-16 w-16" />
                      <div className="w-full border-t border-gray-300 ml-3" />
                    </>
                  )} */}
              </div>
              <div className="relative flex justify-center text-sm"></div>
            </div>
            <div className="flex flex-row gap-6">
              <Button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full transition-all bg-white text-gray-700 border border-gray-300 shadow-sm"
              >
                <FcGoogle className="text-2xl" />
              </Button>
              <Button className="group transition-all w-full bg-white text-gray-700 border border-gray-300 shadow-sm">
                <FaGithub className="group-hover:text-white text-2xl" />
              </Button>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-200">
            By clicking continue, you agree to our{" "}
            <Link
              className="font-medium text-slate-200 hover:text-slate-400 underline hover:underline-offset-4"
              href="/register"
              prefetch={false}
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="font-medium text-slate-200 hover:text-slate-400 underline hover:underline-offset-4"
              href="/register"
              prefetch={false}
            >
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
