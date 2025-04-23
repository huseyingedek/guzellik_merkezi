'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero1.jpg"
          alt="Göksum Güzellik Merkezi"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-beauty-900/90 to-beauty-900/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              <span className="block mb-3">Güzelliğinize</span>
              <span className="text-gold-400">Profesyonel Dokunuş</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
              Göksum Güzellik Merkezi'nde kendinizi yenileyin. Cilt analizi, bölgesel zayıflama, lazer epilasyon ve leke tedavisiyle güzelliğinizi ortaya çıkarın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/hizmetlerimiz"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/iletisim"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:border-gold-400 hover:text-gold-200 transform hover:scale-105"
              >
                Randevu Al
              </Link>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="hidden lg:block">
            <div className="relative h-[500px] rounded-2xl overflow-hidden ">
              <Image 
                src="/images/asd.webp" 
                alt="Güzellik Hizmetleri" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 