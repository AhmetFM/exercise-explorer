import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

export default async function middleware(req: NextRequest) {
  const protectedRoutes = ["/admin/dashboard"];
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentPath);

  const isAuthPage = req.nextUrl.pathname.startsWith("/admin/login");
  //Check if user is not logged in and not have a token
  if (isProtectedRoute) {
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
  //When user have a token but still trys to go login page
  if (isAuthPage) {
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);
    if (session?.userId) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
