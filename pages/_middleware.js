import {
  NextResponse,
  NextRequest
} from 'next/server';
// import { NextRequest } from 'next/server'
import { getCookie } from 'cookies-next';

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const res = NextResponse.next();
  
  if(req.nextUrl.pathname.startsWith("/api")) return;
  
  if(!req.nextUrl.pathname.startsWith("/login") && !req.nextUrl.pathname.startsWith("/register")){
    if(!getCookie("registered", {req, res})){
      return NextResponse.redirect(new URL(`/login`, req.url));
    }
  }else{
    if(getCookie("registered", {req, res})){
      return NextResponse.redirect(new URL(`/`, req.url));
    }
  }
}