import React from 'react'
import PostLoginLayout from '@/components/layouts/PostLoginLayout'
import AuthProvider from '@/components/auth/AuthProvider'
import { ReactNode } from 'react'

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <PostLoginLayout>{children}</PostLoginLayout>
        </AuthProvider>
    )
}

export default Layout
