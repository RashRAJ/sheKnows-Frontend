import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that require authentication
const protectedPaths = ['/dashboard', '/profile'];

// Add paths that should redirect to dashboard if user is already logged in
const authPaths = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('auth-token');
  const { pathname } = request.nextUrl;

  // Check if the path requires authentication
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    if (!currentUser) {
      const url = new URL('/login', request.url);
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }

  // Redirect to dashboard if user is already logged in and trying to access auth pages
  if (authPaths.includes(pathname) && currentUser) {
    const from = request.nextUrl.searchParams.get('from') || '/dashboard';
    return NextResponse.redirect(new URL(from, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};