import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/styles.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bootstrap Movie App',
  description: 'A movie app built with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
