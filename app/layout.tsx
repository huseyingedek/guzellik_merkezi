import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './styles/globals.css'
import JsonLd from './jsonld'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Göksum Güzellik Merkezi | Adana',
    template: '%s | Göksum Güzellik Merkezi',
  },
  description: 'Adana\'nın merkezinde profesyonel güzellik ve bakım hizmetleri sunan Göksum Güzellik Merkezi. Güzellik merkezimizde cilt bakımı, lazer epilasyon, kalıcı makyaj ve daha fazlası.',
  keywords: ['güzellik', 'güzellik merkezi', 'güzellik merkezi', 'cilt bakımı', 'epilasyon', 'adana güzellik', 'kalıcı makyaj', 'lazer epilasyon', 'bölgesel zayıflama'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.goksumguzellik.com',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.goksumguzellik.com',
    title: 'Göksum Güzellik Merkezi | Adana',
    description: 'Adana\'nın merkezinde profesyonel güzellik ve bakım hizmetleri sunan Göksum Güzellik Merkezi. Merkezimizde cilt bakımı, lazer epilasyon, kalıcı makyaj ve daha fazlası.',
    siteName: 'Göksum Güzellik Merkezi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Göksum Güzellik Merkezi | Adana',
    description: 'Adana\'nın merkezinde profesyonel güzellik ve bakım hizmetleri.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://www.goksumguzellik.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white" suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  )
} 