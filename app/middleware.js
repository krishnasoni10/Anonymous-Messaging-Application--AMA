import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const JWT_SECRET = process.env.JWT_SECRET;

  // Check if JWT_SECRET is configured
  if (!JWT_SECRET) {
    console.error("JWT_SECRET is not configured");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // if no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Verify that the token has the required fields
    if (!decoded.userId || !decoded.username) {
      throw new Error("Invalid token structure");
    }
    
    return NextResponse.next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    // Clear the invalid token
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
