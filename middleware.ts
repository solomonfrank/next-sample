// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSubdomain } from "./lib/getTenant";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("url", request.nextUrl.host);
  const access_token = request.cookies.get("access_token")?.value;
  const tenantId = request.cookies.get("tenantId")?.value;

  const subdomain = getSubdomain(request.nextUrl.host);

  console.log("subdomain =>", subdomain);

  // if (!access_token || !tenantId) {
  //   return NextResponse.redirect(new URL("/Login", request.url));
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/Dashboard", "/Shipping", "/Customer", "/api/:function*"],
};
