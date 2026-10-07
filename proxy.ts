import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
    const session = await auth()
    const { pathname } = req.nextUrl;
    
    const isAdmin = session?.user.role === "ADMIN";

    const protectRoute = pathname.startsWith("/admin") || pathname.startsWith("/profile");
    const notGo = pathname.startsWith("/login") || pathname.startsWith("/register");

    if (!session && protectRoute) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }
    if (session && !isAdmin && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/profile", req.nextUrl))
    }
    if (session && notGo) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/register", "/profile/:path*", "/admin/:path*"]
}