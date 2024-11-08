import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function authenticate(req: NextRequest, res?: NextResponse) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET_KEY,
  });

  if (token) {
    const expirationDate = new Date((token?.exp as number) * 1000);
    const dateNow = new Date();
    const timeUntilExpiration = expirationDate.getTime() - dateNow.getTime();
    if (timeUntilExpiration <= 0) {
      return false;
    } else {
      return token;
    }
  }

  return false;
}
