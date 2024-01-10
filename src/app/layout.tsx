import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navBar/NavBar'
import {ScrollProvider} from './helper/scrollToContext'
import Footer from './components/footer/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Nick's Website`,
  description: 'Hallo',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProvider>
          <NavBar />
          {children}
          <Footer />
        </ScrollProvider>
        <Analytics />
        </body>
    </html>
  )
}
