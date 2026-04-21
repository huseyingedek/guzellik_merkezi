"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Protez Tırnak",
    alt: "Adana Protez Tırnak Uygulaması",
    desc: "Jel, kalıcı oje ve nail art ile şık, uzun ömürlü tırnaklar.",
    image: "/images/protez-tirnak.jpg",
    href: "/hizmetlerimiz/protez-tirnak",
    tag: "En Popüler",
  },
  {
    name: "Lazer Epilasyon",
    alt: "Adana Diode Lazer Epilasyon",
    desc: "Son teknoloji cihazlarla kalıcı tüy azaltma, pürüzsüz cilt.",
    image: "/images/lazerr.png",
    href: "/hizmetlerimiz/lazer-epilasyon",
    tag: "Öne Çıkan",
  },
  {
    name: "Cilt Bakımı",
    alt: "Adana Hydrafacial Cilt Bakımı",
    desc: "Hydrafacial ve anti-aging bakımlarla genç, parlak cilt.",
    image: "/images/hero1.jpg",
    href: "/hizmetlerimiz/cilt-bakimi",
    tag: null,
  },
  {
    name: "Kalıcı Makyaj",
    alt: "Adana Kalıcı Makyaj Microblading",
    desc: "Microblading, kaş kontür ve dudak kontürü uygulamaları.",
    image: "/images/makyaj.png",
    href: "/hizmetlerimiz/kalici-makyaj",
    tag: null,
  },
  {
    name: "Bölgesel Zayıflama",
    alt: "Adana Kavitasyon Bölgesel Zayıflama",
    desc: "Kavitasyon ve RF lipoliz ile inatçı yağlara çözüm.",
    image: "/images/zayıflama.png",
    href: "/hizmetlerimiz/bolgesel-zayiflama",
    tag: null,
  },
  {
    name: "Leke Tedavi",
    alt: "Adana Leke Tedavisi Melazma",
    desc: "Güneş lekesi, melazma ve akne izleri için özel tedavi.",
    image: "/images/leketedavi.png",
    href: "/hizmetlerimiz/leke-tedavi",
    tag: null,
  },
];

const INTERVAL = 3500;

export default function HeroShowcase() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setPrev(current);
    setCurrent(idx);
    setProgress(0);
  };

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    // Progress bar
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (100 / (INTERVAL / 50)), 100));
    }, 50);

    // Auto-advance
    timerRef.current = setInterval(() => {
      setProgress(0);
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % services.length;
      });
    }, INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [paused, current]);

  const service = services[current];

  return (
    <div
      className="hidden lg:block relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ana kart */}
      <div className="relative w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-2xl"
           style={{ border: "1px solid rgba(201,168,76,0.25)" }}>

        {/* Görseller — fade geçiş */}
        {services.map((s, i) => (
          <div
            key={s.name}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.alt || s.name}
              fill
              sizes="420px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Etiket */}
        {service.tag && (
          <div className="absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
               style={{ background: "#C9A84C" }}>
            {service.tag}
          </div>
        )}

        {/* Pause göstergesi */}
        {paused && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
               style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="flex gap-0.5">
              <div className="w-1 h-3 rounded-full bg-white/80" />
              <div className="w-1 h-3 rounded-full bg-white/80" />
            </div>
          </div>
        )}

        {/* Alt içerik — hizmet bilgisi */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Progress bar */}
          <div className="w-full h-0.5 rounded-full mb-4 overflow-hidden"
               style={{ background: "rgba(255,255,255,0.15)" }}>
            <div
              className="h-full rounded-full transition-none"
              style={{ width: `${progress}%`, background: "#C9A84C" }}
            />
          </div>

          {/* Hizmet adı */}
          <div key={current} className="animate-fade-in">
            <p className="text-xs uppercase tracking-widest font-medium mb-1"
               style={{ color: "rgba(201,168,76,0.85)" }}>
              Hizmetlerimiz
            </p>
            <h3 className="text-white font-display font-bold text-2xl mb-1.5">
              {service.name}
            </h3>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              {service.desc}
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="/randevu"
                className="inline-flex items-center gap-1.5 text-sm font-semibold
                           px-5 py-2.5 rounded-full transition-all duration-300"
                style={{ background: "#C9A84C", color: "white" }}
              >
                Randevu Al
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={service.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Detaylar →
              </Link>
            </div>
          </div>

          {/* Dot navigasyon */}
          <div className="flex items-center gap-2 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  background: i === current ? "#C9A84C" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sağ üst rozet */}
      <div className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl shadow-lg z-10"
           style={{ background: "rgba(12,11,8,0.92)", border: "1px solid rgba(201,168,76,0.4)", backdropFilter: "blur(8px)" }}>
        <div className="text-center">
          <div className="font-display font-bold text-lg leading-none" style={{ color: "#C9A84C" }}>5.0 ★</div>
          <div className="text-white/60 text-xs mt-0.5">Google</div>
        </div>
      </div>

    </div>
  );
}
