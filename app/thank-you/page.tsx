'use client';

import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  // 5 saniye sonra ana sayfaya yönlendir
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-beauty-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        <h1 className="text-2xl font-display font-bold text-beauty-900 mb-4">
          Mesajınız İletildi!
        </h1>
        <p className="text-beauty-700 mb-6">
          Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
          Bizi tercih ettiğiniz için teşekkür ederiz.
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full bg-gold-500 hover:bg-gold-600 text-white py-3 px-4 rounded-md transition-colors font-medium"
          >
            Ana Sayfaya Dön
          </Link>
          <Link 
            href="/hizmetlerimiz"
            className="block w-full bg-beauty-100 hover:bg-beauty-200 text-beauty-800 py-3 px-4 rounded-md transition-colors font-medium"
          >
            Hizmetlerimizi İncele
          </Link>
        </div>
        <p className="text-sm text-beauty-500 mt-6">
          8 saniye içinde otomatik olarak ana sayfaya yönlendirileceksiniz.
        </p>
      </div>
    </main>
  );
} 