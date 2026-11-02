import './globals.css'
import './portfolio.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debarghyo Chaudhuri — UX / Product Designer',
  description: 'Designing intuitive product systems for Enterprise SaaS & AI. Enterprise UX workflows, design systems, and AI co-pilots.',
  keywords: [
    'Debarghyo Chaudhuri',
    'UX Designer',
    'Product Designer',
    'Enterprise SaaS',
    'AI Products',
    'Design Systems',
    'Portfolio',
  ],
  authors: [{ name: 'Debarghyo Chaudhuri' }],
  creator: 'Debarghyo Chaudhuri',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Debarghyo Chaudhuri — UX / Product Designer',
    description: 'Designing intuitive product systems for Enterprise SaaS & AI. Enterprise UX workflows, design systems, and AI co-pilots.',
    siteName: 'Debarghyo Chaudhuri Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debarghyo Chaudhuri — UX / Product Designer',
    description: 'Designing intuitive product systems for Enterprise SaaS & AI. Enterprise UX workflows, design systems, and AI co-pilots.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
