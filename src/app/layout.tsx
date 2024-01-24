
import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/navBar/NavBar'
import {ScrollProvider} from './helper/scrollToContext'
import {ThemeProvider} from './helper/themeContext'
import Footer from './components/footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import {Roboto} from 'next/font/google'
import { Sorts_Mill_Goudy } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "700", "900"]
})
const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: ["400"]
})

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
      <head>
      <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0" />
      </head>
      <body className={`${roboto.className} ${sortsMillGoudy.className}`}>
        <ThemeProvider>
        <ScrollProvider>
          <NavBar />
          {children}
          <Footer />
        </ScrollProvider>
        </ThemeProvider>
        <Analytics />
        </body>
    </html>
  )
}
