'use client'

import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '@/../convex/_generated/api'
import SessionContext from './SessionContext'

type AuthProviderProps = {
    children: React.ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {
    const { children } = props
    const { user: clerkUser, isSignedIn } = useUser()

    // Get user data from Convex
    const convexUser = useQuery(
        api.users.getUserByClerkId,
        clerkUser?.id ? { clerkId: clerkUser.id } : 'skip',
    )

    // Create session object that matches the expected format
    const session =
        isSignedIn && clerkUser
            ? {
                  user: {
                      id: clerkUser.id,
                      name:
                          clerkUser.fullName ||
                          clerkUser.firstName ||
                          'Unknown',
                      email: clerkUser.primaryEmailAddress?.emailAddress || '',
                      image: clerkUser.imageUrl || '',
                      authority:
                          convexUser?.role === 'Admin'
                              ? ['admin', 'user']
                              : ['user'],
                      type: convexUser?.type || 'Client',
                      role: convexUser?.role || 'Client',
                  },
                  expires: '', // Clerk handles expiration internally
              }
            : null

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    )
}

export default AuthProvider
