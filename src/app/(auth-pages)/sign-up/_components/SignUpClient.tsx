'use client'

import { SignUp } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { api } from '@/../convex/_generated/api'
import { useEffect } from 'react'
import appConfig from '@/configs/app.config'

const SignUpClient = () => {
    const { user, isSignedIn } = useUser()
    const createUser = useMutation(api.users.createUser)

    // Auto-create user in Convex when they sign up with Clerk
    useEffect(() => {
        const handleUserCreation = async () => {
            if (isSignedIn && user) {
                try {
                    await createUser({
                        clerkId: user.id,
                        email: user.primaryEmailAddress?.emailAddress || '',
                        displayName:
                            user.fullName || user.firstName || 'Unknown User',
                        type: 'Client', // Default type
                        role: 'Client', // Default role
                    })
                } catch (error) {
                    console.error('Failed to create user in Convex:', error)
                }
            }
        }

        handleUserCreation()
    }, [isSignedIn, user, createUser])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <SignUp
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-primary hover:bg-primary-deep',
                        card: 'shadow-lg',
                    },
                }}
                signInUrl="/sign-in"
                afterSignUpUrl={appConfig.authenticatedEntryPath}
                routing="path"
                path="/sign-up"
            />
        </div>
    )
}

export default SignUpClient
