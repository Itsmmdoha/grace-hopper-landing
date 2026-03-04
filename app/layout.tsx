import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Grace Hopper Mindstorm 2.0 | BUCC',
  description:
    'An exclusive analytical competition for the women of BRAC University. No coding required — test your logic, reasoning, and problem-solving skills. Hosted by BRAC University Computer Club.',
  keywords: [
    'Grace Hopper Mindstorm',
    'IFIC',
    'BUCC',
    'BRAC University',
    'analytical competition',
    'women in tech',
    'computer club',
  ],
}

export const viewport: Viewport = {
  themeColor: '#e8567f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
