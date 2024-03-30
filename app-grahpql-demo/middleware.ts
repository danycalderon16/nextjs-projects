import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const allowedOrigins = ["http://localhost:51732/"];
  const origin = request.headers.get("referer");

  console.log(origin);

  if (!allowedOrigins.includes(origin!))
    return NextResponse.redirect(new URL("/forbidden", request.url));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/to-do",
};
