import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { isAuthorized } from '@/lib/util/util';
import { privateRoutes } from '../config';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return supabaseResponse;
  }

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // START OF CODE YOU CAN EDIT

  const pathname = request.nextUrl.pathname;
  const method = request.method.toUpperCase();

  // Allow CORS preflight requests to pass through untouched
  if (method === 'OPTIONS') {
    return supabaseResponse;
  }

  // loop over all protected routes
  for (const [route, requiredRole] of Object.entries(privateRoutes)) {
    // if requested reoute is protected, then check authorization
    if (pathname.startsWith(route)) {
      if (!user) {
        // For API routes, return 401 JSON instead of redirecting (avoids XHR "Network Error" on preflight)
        if (pathname.startsWith('/api')) {
          return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        }
        const url = request.nextUrl.clone();
        url.pathname = '/auth/sign-in';
        return NextResponse.redirect(url);
      } else {
        if (!isAuthorized(user?.role, requiredRole)) {
          const url = request.nextUrl.clone();
          url.pathname = '/';
          url.searchParams.set('message', 'You do not have access to this page');
          return NextResponse.redirect(url);
        }
      }
    }
  }

  // END OF CODE YOU CAN EDIT

  return supabaseResponse;
}
