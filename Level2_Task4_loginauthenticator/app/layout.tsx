import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'],
   })

export const metadata: Metadata = {
  title: 'Login Authenticator',
  description: 'LoginAuthentication App Created for OIBSIP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
