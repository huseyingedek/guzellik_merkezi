'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function SeoHead() {
  const pathname = usePathname();
  const baseUrl = 'https://www.goksumguzellik.com';
  const currentUrl = `${baseUrl}${pathname}`;

  return (
    <Head>
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical assets */}
      <link rel="preload" href="/images/logo.png" as="image" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="tr" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
    </Head>
  );
} 