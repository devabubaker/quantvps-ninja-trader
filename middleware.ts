import { clerkMiddleware, ClerkMiddlewareAuth, createRouteMatcher } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/404',
  '/login',
  '/sign-up',
  '/forget-password',
  '/verify',
  '/email-test',
  '/legal',
  '/documentation',
  '/vps-for-ninjatrader',
  '/api/manage',
  '/api/stripe',
  '/api/resend-email',
  '/home3',
])

const options = {
  signInUrl: `${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`,
  ignoredRoutes: ['/api/ping']
}

export default clerkMiddleware((auth: ClerkMiddlewareAuth, request: NextRequest) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
}, options)

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
