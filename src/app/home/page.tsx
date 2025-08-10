'use client'

import { Authenticated, Unauthenticated } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { useRouter } from 'next/navigation'
import appConfig from '@/configs/app.config'
import { useEffect } from 'react'
import { api } from '../../../convex/_generated/api'

export default function Home() {
    return (
        <>
            <Authenticated>
                <AuthenticatedContent />
            </Authenticated>
            <Unauthenticated>
                <UnauthenticatedContent />
            </Unauthenticated>
        </>
    )
}

function AuthenticatedContent() {
    const router = useRouter()
    const messages = useQuery(api.messages.getForCurrentUser)

    // Redirect authenticated users to the dashboard
    useEffect(() => {
        router.push(appConfig.authenticatedEntryPath)
    }, [router])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <UserButton />
                <div className="mt-4">Welcome back! You are authenticated.</div>
                <div className="mt-2 text-sm text-gray-500">
                    Messages: {messages?.length || 0}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                    Redirecting to dashboard...
                </div>
            </div>
        </div>
    )
}

function UnauthenticatedContent() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6">
                    Welcome to Eye Shots Platform
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Your professional photography and asset management solution
                </p>
                <SignInButton mode="modal">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                        Sign In
                    </button>
                </SignInButton>
            </div>
        </div>
    )
}
