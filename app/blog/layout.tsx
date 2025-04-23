import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Göksum Güzellik Merkezi',
  description: 'Güzellik ve bakım ile ilgili en güncel bilgileri, ipuçlarını ve trendleri keşfedin.',
};

export default function BlogLayout({
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