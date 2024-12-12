"use client";

import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import NavbarMain from "@/components/navbar/NavbarMain";
import { SessionProvider } from "next-auth/react";
import { authRoutes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Determine if scrolling down or up
      setIsScrollingDown(currentScrollPosition > lastScrollPosition);

      // Update state for current scroll position
      setScrollPosition(currentScrollPosition);
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <html lang="en">
      <body className={`antialiased bg-slate-900 text-slate-400`}>
        <SessionProvider>
          <div className="flex flex-col min-h-screen">
            {!authRoutes.includes(pathname) && <NavbarMain scrollDown={isScrollingDown} scrollPosition={scrollPosition}/>}

            <main className="flex-grow flex flex-col items-center w-full">
              <div className="w-full">{children}</div>
            </main>

            {!authRoutes.includes(pathname) && (
              <footer className="bg-slate-950 w-full py-4 flex justify-center">
                <div className="text-slate-500">
                  Copyright by Humlek Co. Inc
                </div>
              </footer>
            )}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
