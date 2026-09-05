import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Allow public auth initiation, callback, logout, and login UI
  if (
    pathname === '/control-center/login' ||
    pathname.startsWith('/api/control-center/auth/')
  ) {
    return NextResponse.next();
  }

  // 2. Check for session cookie presence
  const sessionCookie = req.cookies.get('tutor_m1_cc_session')?.value;

  if (!sessionCookie) {
    // Return 401 JSON for API calls
    if (pathname.startsWith('/api/control-center/')) {
      return NextResponse.json(
        {
          error: 'UNAUTHORIZED',
          code: 'AUTH_REQUIRED',
          message: 'Authentication required',
        },
        { status: 401 }
      );
    }

    // Redirect to login for pages
    const loginUrl = new URL('/control-center/login', req.url);
    return NextResponse.redirect(loginUrl, { status: 307 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/control-center/:path*',
    '/api/control-center/:path*',
  ],
};
