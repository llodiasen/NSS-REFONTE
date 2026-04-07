import { auth } from "@/lib/auth";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

const MEMBER_PATHS = ["/membre", "/dashboard", "/profil", "/annuaire"];
const ADMIN_PATHS = ["/admin"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifie si la route nécessite une authentification
  const requiresAuth =
    MEMBER_PATHS.some((p) => pathname.includes(p)) ||
    ADMIN_PATHS.some((p) => pathname.includes(p));

  const requiresAdmin = ADMIN_PATHS.some((p) => pathname.includes(p));

  if (requiresAuth) {
    const session = await auth();

    if (!session) {
      const locale = pathname.split("/")[1] || "fr";
      return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
    }

    if (requiresAdmin && session.user.role !== "ADMIN") {
      const locale = pathname.split("/")[1] || "fr";
      return NextResponse.redirect(new URL(`/${locale}/403`, request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
