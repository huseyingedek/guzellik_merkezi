import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroShowcase from "./HeroShowcase";

const stats = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "4.9 Yıldız", label: "Google Puanı"  },
  { value: "12+",      label: "Hizmet Çeşidi" },
  { value: "3+",   label: "Yıllık Deneyim" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Arka plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/h1.jpg"
          alt="Göksum Güzellik Salonu"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
      </div>

      {/* Gold parıltılar */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[8%] w-80 h-80 rounded-full blur-3xl"
             style={{ background: "rgba(201,168,76,0.06)" }} />
        <div className="absolute bottom-1/4 right-[8%] w-96 h-96 rounded-full blur-3xl"
             style={{ background: "rgba(201,168,76,0.06)" }} />
      </div>

      {/* İçerik */}
      <div className="container mx-auto px-4 relative z-10 py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-screen lg:min-h-0 lg:py-28">

          {/* Sol: Metin */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-10 bg-gold-400/70" />
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
                Adana Seyhan · Güzellik Salonu
              </span>
              <div className="h-px w-10 bg-gold-400/70" />
            </div>

            <h1 className="font-display text-white mb-4 leading-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold">
                Güzelliğinizi
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold mt-1"
                    style={{ color: "#C9A84C" }}>
                Keşfedin
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Adana Seyhan'ın en prestijli güzellik salonlarından Göksum'da, uzman ekibimiz ve son teknoloji
              cihazlarımızla size özel lüks bir deneyim sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/randevu"
                id="hero-randevu-btn"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold
                           py-3.5 px-8 rounded-full transition-all duration-300
                           shadow-gold hover:-translate-y-0.5"
                style={{ background: "#C9A84C" }}
              >
                Randevu Al
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center justify-center gap-2 font-semibold
                           py-3.5 px-8 rounded-full transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white" }}
              >
                Hizmetlerimiz
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-xl md:text-2xl" style={{ color: "#C9A84C" }}>
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Hizmet Vitrini */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroShowcase />
          </div>

        </div>
      </div>

      {/* Gold divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex items-center justify-center gap-3 pb-6">
          <div className="h-px w-20" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(201,168,76,0.6)" }} />
          <div className="h-px w-20" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
        </div>
      </div>

    </section>
  );
}
