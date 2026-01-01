import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './styles/globals.css'
import JsonLd from './jsonld'
import Script from 'next/script'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import FloatingDirections from '@/components/FloatingDirections'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Adana Güzellik Merkezi | Profesyonel Güzellik ve Bakım Hizmetleri',
    template: '%s | Adana Güzellik Merkezi',
  },
  description: 'Adana\'nın merkezinde profesyonel güzellik ve bakım hizmetleri. Lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel incelme tedavileri için Adana\'nın en iyi güzellik merkezi.',
  keywords: [
    'adana güzellik merkezi',
    'adana güzellik salonu',
    'adana lazer epilasyon',
    'adanagazipaşa lazer epilasyon',
    'adanagazipaşa güzellik merkezi',
    'gazipaşa güzellik merkezi',
    'gazipaşa güzellik salonu',
    'gazipaşa lazer epilasyon',
    'gazipaşa cilt bakımı',
    'adanagazipaşa güzellik merkezi',
    'adana seyhan lazer epilasyon',
    'adana seyhan güzellik merkezi',
    'seyhan güzellik merkezi',
    'seyhan güzellik salonu',
    'seyhan lazer epilasyon',
    'seyhan cilt bakımı',
    'adana seyhan güzellik merkezi',
    'adana seyhan lazer epilasyon',
    'adana seyhan güzellik salonu',
    'seyhan kalıcı makyaj',
    'seyhan bölgesel zayıflama',
    'seyhan profesyonel güzellik merkezi',
    'adana seyhan cilt bakımı',
    'seyhan lazer epilasyon fiyatları',
    'seyhan güzellik merkezi fiyatları',
    'adana seyhan güzellik merkezleri',
    'seyhan en iyi güzellik merkezi',
    'adana güzellik merkezi',
    'adana güzellik salonu',
    'adana lazer epilasyon',
    'adana cilt bakımı'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.goksumguzellik.com',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.goksumguzellik.com',
    title: 'Adana Güzellik Merkezi | Profesyonel Güzellik ve Bakım Hizmetleri',
    description: 'Adana seyhan\'de profesyonel güzellik ve bakım hizmetleri. Lazer epilasyon, cilt bakımı, kalıcı makyaj ve daha fazlası için güvenilir güzellik merkezi.',
    siteName: 'Adana Güzellik Merkezi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adana Güzellik Merkezi | Profesyonel Güzellik Hizmetleri',
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
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16974602246" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16974602246');
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17213011309" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17213011309');
          `}
        </Script>
        {/* Event snippet for Yol tarifi alma conversion page */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-17213011309/aaXiCPjZoNwaEO3q5o9A'});
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZZVJ7PR05"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-old" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZZVJ7PR05');
          `}
        </Script>
        <JsonLd />
        {children}
        <FloatingWhatsApp />
        <FloatingDirections />
      </body>
    </html>
  )
} 