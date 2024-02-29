import { NextResponse } from 'next/server';

export function middleware(request) {
  // const currentUser = request.cookies?.get('OutSiteJWT')?.value;
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/auth/login' || path === '/auth/register' || path==='/'
  const token = request.cookies.get('OutSiteJWT')||''
  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/auth/login',request.nextUrl))
  }
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/user/dashboard',request.nextUrl))
  }
  
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
