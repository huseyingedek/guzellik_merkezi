import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Adana Protez Tırnak",
    description: "Jel tırnak, kalıcı oje ve nail art ile şık, bakımlı ve uzun ömürlü tırnaklar.",
    image: "/images/protez-tirnak.jpg",
    link: "/hizmetlerimiz/protez-tirnak",
    tag: "En Popüler",
  },
  {
    id: 2,
    name: "Adana Lazer Epilasyon",
    description: "Son teknoloji Diode lazer ile kalıcı tüy azaltma, pürüzsüz cilt.",
    image: "/images/lazerr.png",
    link: "/hizmetlerimiz/lazer-epilasyon",
    tag: "Öne Çıkan",
  },
  {
    id: 3,
    name: "Adana Cilt Bakımı",
    description: "Hydrafacial, anti-aging ve akne bakımıyla sağlıklı, parlak, genç cilt.",
    image: "/images/hero1.jpg",
    link: "/hizmetlerimiz/cilt-bakimi",
    tag: null,
  },
  {
    id: 4,
    name: "Adana Bölgesel Zayıflama",
    description: "Kavitasyon ve RF lipoliz ile inatçı yağlara karşı etkili teknolojik çözüm.",
    image: "/images/zayıflama.png",
    link: "/hizmetlerimiz/bolgesel-zayiflama",
    tag: null,
  },
  {
    id: 5,
    name: "Adana Kalıcı Makyaj",
    description: "Microblading, kaş kontür, eyeliner ve dudak kontürü uygulamaları.",
    image: "/images/makyaj.png",
    link: "/hizmetlerimiz/kalici-makyaj",
    tag: null,
  },
  {
    id: 6,
    name: "Adana Leke Tedavi",
    description: "Güneş lekesi, melazma ve akne izi için özel kişiselleştirilmiş tedaviler.",
    image: "/images/leketedavi.png",
    link: "/hizmetlerimiz/leke-tedavi",
    tag: null,
  },
  {
    id: 7,
    name: "Adana Saç Mezoterapisi",
    description: "Vitamin kokteylleriyle saç dökülmesini durdurun, yeni saç çıkışını güçlendirin.",
    image: "/images/sac.png",
    link: "/hizmetlerimiz/sac-mezoterapi",
    tag: null,
  },
  {
    id: 8,
    name: "Adana Cilt Analizi",
    description: "Modern cihazlarla ücretsiz profesyonel cilt analizi ve kişiye özel program.",
    image: "/images/analiz_cilt.png",
    link: "/hizmetlerimiz/cilt-analizi",
    tag: "Ücretsiz",
  },
];

export default function Services() {
  return (
    <section className="py-20" style={{ backgroundColor: "#FAF7F0" }}>
      <div className="container mx-auto px-4">

        {/* Bölüm başlığı */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3"
                style={{ color: "#C9A84C" }}>
            Premium Bakım
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-beauty-900 mb-5">
            Hizmetlerimiz
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20"
                 style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
            <div className="h-px w-20"
                 style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>
          <p className="text-beauty-600 max-w-2xl mx-auto mt-5 text-base">
            Son teknoloji cihazlar ve uzman ekibimizle hazırladığımız premium güzellik
            hizmetlerini keşfedin.
          </p>
        </div>

        {/* ── MOBİL: yatay kaydırmalı ──────────────────────────────── */}
        {/* Desktop: normal 4 sütun grid */}
        <div
          className="
            hidden lg:grid
            grid-cols-4 gap-5
          "
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobil / tablet: yatay scroll şerit */}
        <div className="lg:hidden -mx-4 px-4">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-none snap-start"
                style={{ width: "68vw", maxWidth: "260px" }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
            {/* Son elemanda boşluk için */}
            <div className="flex-none w-4" />
          </div>
          {/* Kaydırma ipucu */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-8 h-0.5 rounded-full" style={{ background: "rgba(201,168,76,0.5)" }} />
            <span className="text-xs" style={{ color: "rgba(201,168,76,0.7)" }}>kaydırın</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 style={{ color: "rgba(201,168,76,0.7)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Alt CTA */}
        <div className="text-center mt-10">
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center gap-2 font-semibold text-sm
                       py-3 px-8 rounded-full transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.5)",
              color: "#C9A84C",
            }}
          >
            Tüm Hizmetleri Gör
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <Link
      href={service.link}
      className="group relative rounded-xl overflow-hidden block shadow-md
                 transition-all duration-500 hover:-translate-y-1.5"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Görsel */}
      <Image
        src={service.image}
        alt={service.name}
        fill
        sizes="(max-width: 1024px) 70vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Kalıcı alt gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover renk overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: "rgba(201,168,76,0.18)" }} />

      {/* Etiket */}
      {service.tag && (
        <div className="absolute top-4 left-4 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
             style={{ background: "#C9A84C" }}>
          {service.tag}
        </div>
      )}

      {/* Alt içerik */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-display font-semibold text-lg mb-1.5
                       transition-colors duration-300 group-hover:text-yellow-200">
          {service.name}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-3
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       translate-y-2 group-hover:translate-y-0">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         translate-y-2 group-hover:translate-y-0"
              style={{ color: "#D8B266" }}>
          Detayları Gör
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      {/* Hover border parlaması */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0
                      group-hover:opacity-100 transition-opacity duration-400"
           style={{ border: "1px solid rgba(201,168,76,0.5)" }} />
    </Link>
  );
}
