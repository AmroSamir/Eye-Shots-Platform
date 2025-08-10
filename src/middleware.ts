import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

import {
    authRoutes as _authRoutes,
    publicRoutes as _publicRoutes,
} from '@/configs/routes.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import appConfig from '@/configs/app.config'

const publicRoutes = Object.entries(_publicRoutes).map(([key]) => key)
const authRoutes = Object.entries(_authRoutes).map(([key]) => key)

// Create route matchers for Clerk
const isPublicRoute = createRouteMatcher([...publicRoutes, ...authRoutes])

export default clerkMiddleware(async (auth, req) => {
    const { nextUrl } = req
    const { userId } = await auth()
    const isSignedIn = !!userId

    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isPublicRouteMatch = isPublicRoute(req)

    if (isAuthRoute) {
        if (isSignedIn) {
            /** Redirect to authenticated entry path if signed in & path is auth route */
            return Response.redirect(
                new URL(appConfig.authenticatedEntryPath, nextUrl),
            )
        }
        return
    }

    /** Redirect to authenticated entry path if signed in & path is public route */
    if (!isSignedIn && !isPublicRouteMatch) {
        let callbackUrl = nextUrl.pathname
        if (nextUrl.search) {
            callbackUrl += nextUrl.search
        }

        return Response.redirect(
            new URL(
                `${appConfig.unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${callbackUrl}`,
                nextUrl,
            ),
        )
    }

    /** Future: Role-based access control can be implemented here using Clerk's user metadata */
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api)(.*)'],
}
