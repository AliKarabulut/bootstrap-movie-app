import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/styles.scss'
import HomeBgImage from '@/components/home-bg-image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth Page of Bootstrap Movie App',
  description: 'A movie app built with Next.js and TypeScript',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeBgImage />
        {children}
      </body>
    </html>
  )
}
