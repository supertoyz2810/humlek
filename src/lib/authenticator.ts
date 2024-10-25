import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function authenticate(req: NextRequest, res?: NextResponse) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    if (res) {
      return null;
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return token;
}
