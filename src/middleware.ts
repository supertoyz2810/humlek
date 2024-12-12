import { NextRequest, NextResponse } from "next/server";
import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
} from "./constants/routes";
import { authenticate } from "./lib/authenticator";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  // Get the token from the request (authentication check)
  const token = await authenticate(req);

  // Check if the current route is a protected route
  const isProtectedRoute = protectedRoutes.includes(
    nextUrl.pathname.split("/")[1] ? `/${nextUrl.pathname.split("/")[1]}` : "/"
  );
  const isAuthRoute = authRoutes.includes(
    nextUrl.pathname.split("/")[1] ? `/${nextUrl.pathname.split("/")[1]}` : ""
  );

  if (isAuthRoute) {
    if (token) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  // If the user is accessing a protected route and there is no token, redirect to login
  // if (isProtectedRoute && !token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // Allow the request to proceed if authenticated or if accessing a public route
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
