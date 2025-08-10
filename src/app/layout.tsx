import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from '@/components/auth/AuthProvider/ConvexClientProvider'
import ThemeProvider from '@/components/template/Theme/ThemeProvider'
import pageMetaConfig from '@/configs/page-meta.config'
import LocaleProvider from '@/components/template/LocaleProvider'
import NavigationProvider from '@/components/template/Navigation/NavigationProvider'
import { getNavigation } from '@/server/actions/navigation/getNavigation'
import { getTheme } from '@/server/actions/theme'
import { getLocale, getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'
import '@/assets/styles/app.css'

export const metadata = {
    ...pageMetaConfig,
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    const locale = await getLocale()

    const messages = await getMessages()

    const navigationTree = await getNavigation()

    const theme = await getTheme()

    return (
        <html
            className={theme.mode === 'dark' ? 'dark' : 'light'}
            lang={locale}
            dir={theme.direction}
            suppressHydrationWarning
        >
            <body suppressHydrationWarning>
                <ClerkProvider
                    appearance={{
                        // Theme configuration that automatically adapts to platform light/dark mode
                        variables: {
                            colorPrimary: 'var(--primary)',
                            colorBackground:
                                theme.mode === 'dark'
                                    ? 'var(--gray-800)'
                                    : 'var(--gray-50)',
                            colorInputBackground:
                                theme.mode === 'dark'
                                    ? 'var(--gray-700)'
                                    : 'var(--gray-100)',
                            colorText:
                                theme.mode === 'dark'
                                    ? 'var(--gray-100)'
                                    : 'var(--gray-900)',
                            colorTextSecondary:
                                theme.mode === 'dark'
                                    ? 'var(--gray-300)'
                                    : 'var(--gray-500)',
                            colorNeutral:
                                theme.mode === 'dark'
                                    ? 'var(--gray-100)'
                                    : 'var(--gray-900)',
                            borderRadius: '0.5rem',
                            fontFamily: 'inherit',
                        },
                        elements: {
                            formButtonPrimary: {
                                backgroundColor: 'var(--primary)',
                                color: 'var(--gray-50)',
                                '&:hover': {
                                    backgroundColor: 'var(--primary-deep)',
                                },
                            },
                            card: {
                                backgroundColor:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-800)'
                                        : 'var(--gray-50)',
                                boxShadow:
                                    theme.mode === 'dark'
                                        ? '0 4px 6px -1px var(--gray-950)'
                                        : '0 4px 6px -1px var(--gray-200)',
                            },
                            headerTitle: {
                                color:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-100)'
                                        : 'var(--gray-900)',
                            },
                            headerSubtitle: {
                                color:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-300)'
                                        : 'var(--gray-500)',
                            },
                            formButtonSecondary: {
                                backgroundColor:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-700)'
                                        : 'var(--gray-200)',
                                color:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-100)'
                                        : 'var(--gray-900)',
                                '&:hover': {
                                    backgroundColor:
                                        theme.mode === 'dark'
                                            ? 'var(--gray-600)'
                                            : 'var(--gray-300)',
                                },
                            },
                            input: {
                                backgroundColor:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-700)'
                                        : 'var(--gray-100)',
                                color:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-100)'
                                        : 'var(--gray-900)',
                                borderColor:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-600)'
                                        : 'var(--gray-300)',
                            },
                            label: {
                                color:
                                    theme.mode === 'dark'
                                        ? 'var(--gray-200)'
                                        : 'var(--gray-700)',
                            },
                        },
                    }}
                >
                    <ConvexClientProvider>
                        <LocaleProvider locale={locale} messages={messages}>
                            <ThemeProvider locale={locale} theme={theme}>
                                <NavigationProvider
                                    navigationTree={navigationTree}
                                >
                                    {children}
                                </NavigationProvider>
                            </ThemeProvider>
                        </LocaleProvider>
                    </ConvexClientProvider>
                </ClerkProvider>
            </body>
        </html>
    )
}
