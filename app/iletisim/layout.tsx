import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'İletişim | Göksum Güzellik Merkezi',
  description: 'Göksum Güzellik Merkezi iletişim bilgileri, adres ve randevu formu. Bize ulaşın ve güzellik yolculuğunuza başlayın.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 