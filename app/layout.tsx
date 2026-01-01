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
    default: 'Göksum Güzellik Merkezi | Adana Seyhan En İyi Güzellik Salonu',
    template: '%s | Göksum Güzellik - Adana Seyhan',
  },
  description: 'Adana Seyhan\'da en iyi güzellik merkezi Göksum Güzellik. Protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel zayıflama hizmetleri. Profesyonel ekip, uygun fiyatlar. Hemen randevu alın!',
  keywords: [
    // Ana anahtar kelimeler
    'göksum güzellik merkezi',
    'göksum güzellik salonu adana',
    'adana en iyi güzellik merkezi',
    'adana en iyi güzellik salonu',
    // Protez Tırnak
    'adana protez tırnak',
    'adana en iyi protez tırnak',
    'adana seyhan protez tırnak',
    'seyhan protez tırnak',
    'adana jel tırnak',
    'adana kalıcı oje',
    'adana tırnak salonu',
    // Lazer Epilasyon
    'adana lazer epilasyon',
    'adana en iyi lazer epilasyon',
    'adana seyhan lazer epilasyon',
    'seyhan lazer epilasyon',
    'adana lazer epilasyon fiyatları',
    'adana alexandrite lazer',
    // Cilt Bakımı
    'adana cilt bakımı',
    'adana en iyi cilt bakımı',
    'adana seyhan cilt bakımı',
    'seyhan cilt bakımı',
    'adana hydrafacial',
    'adana profesyonel cilt bakımı',
    // Kalıcı Makyaj
    'adana kalıcı makyaj',
    'adana en iyi kalıcı makyaj',
    'adana microblading',
    'adana kaş kontür',
    // Bölgesel Zayıflama
    'adana bölgesel zayıflama',
    'adana kavitasyon',
    'adana selülit tedavisi',
    // Lokasyon
    'adana seyhan güzellik merkezi',
    'seyhan güzellik merkezi',
    'seyhan güzellik salonu',
    'adana merkez güzellik salonu',
    'cemalpaşa güzellik merkezi',
    'gazipaşa bulvarı güzellik salonu'
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
    title: 'Göksum Güzellik Merkezi | Adana Seyhan En İyi Güzellik Salonu',
    description: 'Adana Seyhan\'da profesyonel güzellik hizmetleri. Protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj. En iyi fiyat garantisi!',
    siteName: 'Göksum Güzellik Merkezi',
    images: [
      {
        url: 'https://www.goksumguzellik.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Göksum Güzellik Merkezi - Adana Seyhan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Göksum Güzellik | Adana Seyhan En İyi Güzellik Merkezi',
    description: 'Protez tırnak, lazer epilasyon, cilt bakımı için Adana\'nın en iyi adresi. Profesyonel hizmet, uygun fiyat!',
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