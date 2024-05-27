import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  /**
   * Clone the request headers and add the pathname to them. This way we can access
   * the pathname in server actions with `headers().get("x-request-pathname")`
   * This is useful for server actions that need to know the current pathname
   */
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-request-pathname", pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher:
    "/((?!api|_next/static|site.webmanifest|images|image|videos|fonts|site.webmanifest|favicon.ico|opengraph-image.png).*)",
};
