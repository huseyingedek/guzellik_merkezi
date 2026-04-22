import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './styles/globals.css'
import JsonLd from './jsonld'
import Script from 'next/script'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import FloatingDirections from '@/components/FloatingDirections'
import MobileContactBar from '@/components/MobileContactBar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goksumguzellik.com'),
  title: {
    default: 'Göksum Güzellik Salonu | Adana Seyhan',
    template: '%s | Göksum Güzellik Salonu',
  },
  description: "Adana Seyhan Cemalpaşa'da Göksum Güzellik Salonu: Diode lazer epilasyon, Hydrafacial cilt bakımı, protez tırnak, kalıcı makyaj. Uzman ekip ile güvenli bakım.",
  keywords: 'adana güzellik salonu, adana güzellik merkezi, seyhan güzellik salonu, cemalpaşa güzellik salonu, adana lazer epilasyon, adana diode lazer, adana cilt bakımı, adana hydrafacial, adana protez tırnak, adana kalıcı makyaj, adana microblading, adana leke tedavisi, adana bölgesel zayıflama',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.goksumguzellik.com',
    siteName: 'Göksum Güzellik Salonu',
    title: 'Göksum Güzellik Salonu | Adana Seyhan',
    description: "Adana Seyhan Cemalpaşa'da Göksum Güzellik Salonu: Diode lazer epilasyon, Hydrafacial cilt bakımı, protez tırnak, kalıcı makyaj. Uzman ekip ile güvenli bakım.",
    images: [{ url: '/images/logo.webp', width: 1200, height: 630, alt: 'Göksum Güzellik Salonu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Göksum Güzellik Salonu | Adana Seyhan',
    description: "Adana Seyhan Cemalpaşa'da Göksum Güzellik Salonu: Diode lazer epilasyon, Hydrafacial cilt bakımı, protez tırnak, kalıcı makyaj.",
    images: ['/images/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://www.goksumguzellik.com' },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-ND87639Q');`}
        </Script>
      </head>
      <body className="bg-white pb-16 md:pb-0" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND87639Q"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
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
        
        {/* Desktop floating butonlar - Sadece md ve üzeri ekranlarda görünür */}
        <div className="hidden md:block">
          <FloatingWhatsApp />
          <FloatingDirections />
        </div>
        
        {/* Mobil contact bar - Sadece mobilde görünür */}
        <MobileContactBar />
      </body>
    </html>
  )
} 