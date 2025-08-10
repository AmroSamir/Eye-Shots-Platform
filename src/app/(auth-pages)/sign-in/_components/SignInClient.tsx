'use client'

import { SignIn } from '@clerk/nextjs'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { useSearchParams } from 'next/navigation'
import appConfig from '@/configs/app.config'

const SignInClient = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get(REDIRECT_URL_KEY)

    return (
        <div className="flex items-center justify-center min-h-screen">
            <SignIn
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-primary hover:bg-primary-deep',
                        card: 'shadow-lg',
                    },
                }}
                signUpUrl="/sign-up"
                afterSignInUrl={callbackUrl || appConfig.authenticatedEntryPath}
                routing="path"
                path="/sign-in"
            />
        </div>
    )
}

export default SignInClient
