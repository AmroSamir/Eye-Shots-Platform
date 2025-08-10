import { auth } from '@clerk/nextjs/server'

// Export Clerk's auth function for server-side authentication checks
export { auth }

// Helper functions for common auth operations
export const getAuthUser = async () => {
    const { userId } = await auth()
    return userId
}

export const requireAuth = async () => {
    const userId = await getAuthUser()
    if (!userId) {
        throw new Error('User not authenticated')
    }
    return userId
}
