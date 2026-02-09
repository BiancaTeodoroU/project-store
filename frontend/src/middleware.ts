import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  const isLandingPage = request.nextUrl.pathname === '/';

  if (token && (isAuthPage || isLandingPage)) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!token && !isAuthPage && !isLandingPage) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth', '/home', '/home/:path*']
};