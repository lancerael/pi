import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyleRegistry from './registry'
import './globals.css'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Lance Taylor`,
  description: 'Introducing software engineer',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleRegistry>{children}</StyleRegistry>
      </body>
    </html>
  )
}
