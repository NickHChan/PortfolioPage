import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/navBar/NavBar'
import {ScrollProvider} from './helper/scrollToContext'
import {ThemeProvider} from './helper/themeContext'
import Footer from './components/footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import { Montserrat} from 'next/font/google'
import { Sorts_Mill_Goudy } from 'next/font/google'


 const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","600","800"],
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
      <body className={`${montserrat.className} ${sortsMillGoudy.className}`}>
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
