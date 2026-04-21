import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Güzellik & Bakım Blogu | Göksum Güzellik Salonu",
  description:
    "Göksum Güzellik Salonu blogu: lazer epilasyon, cilt bakımı, protez tırnak, kalıcı makyaj ve bölgesel zayıflama hakkında uzman ipuçları ve güncel içerikler.",
  openGraph: {
    title: "Güzellik & Bakım Blogu | Göksum Güzellik Salonu",
    description: "Adana Seyhan'da güzellik ve bakım hakkında uzman içerikler.",
    url: "https://www.goksumguzellik.com/blog",
    type: "website",
  },
  alternates: { canonical: "https://www.goksumguzellik.com/blog" },
};

const posts = [
  {
    image: "/images/kis.png",
    category: "Cilt Bakımı",
    title: "Kış Aylarında Cilt Bakımı Nasıl Yapılmalı?",
    date: "15 Aralık 2023",
    excerpt: "Soğuk havalarda cildinizi nasıl koruyacağınızı ve nemli tutacağınızı öğrenin.",
    slug: "kis-aylarinda-cilt-bakimi",
  },
  {
    image: "/images/sac-maske.png",
    category: "Saç Bakımı",
    title: "Doğal Saç Bakım Maskeleri",
    date: "8 Ocak 2024",
    excerpt: "Evde kolayca hazırlayabileceğiniz saç bakım maskeleri ile saçlarınıza canlılık katın.",
    slug: "dogal-sac-bakimi",
  },
  {
    image: "/images/bahar-trend.png",
    category: "Makyaj",
    title: "2024 Bahar Makyaj Trendleri",
    date: "22 Şubat 2024",
    excerpt: "Bu sezonun en popüler makyaj trendlerini ve uygulama tekniklerini keşfedin.",
    slug: "bahar-makyaj-trendleri",
  },
  {
    image: "/images/sac-besleme.png",
    category: "Beslenme",
    title: "Cilt Sağlığı İçin Beslenme Önerileri",
    date: "10 Mart 2024",
    excerpt: "Cildinizin sağlıklı ve parlak görünmesi için tüketmeniz gereken besinler.",
    slug: "cilt-sagligi-beslenme",
  },
  {
    image: "/images/lazer-merak-edilenler.png",
    category: "Lazer Epilasyon",
    title: "Lazer Epilasyon Hakkında Merak Edilenler",
    date: "5 Nisan 2024",
    excerpt: "Lazer epilasyon öncesi ve sonrası bilmeniz gereken önemli bilgiler.",
    slug: "lazer-epilasyon-bilgiler",
  },
  {
    image: "/images/kalici-makyaj.png",
    category: "Güzellik Trendleri",
    title: "Kalıcı Makyaj Uygulamaları",
    date: "17 Nisan 2025",
    excerpt: "Kalıcı makyaj teknikleri ve doğru uzman seçimi hakkında kapsamlı rehber.",
    slug: "kalici-makyaj-uygulamalari",
  },
  {
    image: "/images/protez-tirnak.jpg",
    category: "Protez Tırnak",
    title: "Jel Tırnak mı, Kalıcı Oje mi? Farkları ve Doğru Tercih",
    date: "5 Mayıs 2024",
    excerpt: "Jel tırnak ve kalıcı oje arasındaki farkları, avantaj ve dezavantajlarını karşılaştırıyoruz.",
    slug: "jel-tirnak-vs-kalici-oje",
  },
  {
    image: "/images/lazerr.png",
    category: "Lazer Epilasyon",
    title: "Adana'da Lazer Epilasyon: Merak Edilenlerin Tamamı",
    date: "20 Mayıs 2024",
    excerpt: "Adana'da lazer epilasyon yaptırmayı düşünüyorsanız, bu yazı tam size göre.",
    slug: "adana-lazer-epilasyon-rehberi",
  },
  {
    image: "/images/makyaj.png",
    category: "Kalıcı Makyaj",
    title: "Microblading Nedir? Kaş Kontür Uygulaması Hakkında Her Şey",
    date: "8 Haziran 2024",
    excerpt: "Microblading ve kaş kontür tekniklerini, iyileşme sürecini ve bakımını anlattık.",
    slug: "microblading-kas-kontur",
  },
  {
    image: "/images/zayıflama.png",
    category: "Bölgesel Zayıflama",
    title: "Kavitasyon ile Bölgesel İncelme: Gerçekten İşe Yarıyor mu?",
    date: "25 Haziran 2024",
    excerpt: "Kavitasyon uygulamasının bilimsel temelleri ve gerçekçi beklentiler hakkında bilgi veren rehber.",
    slug: "kavitasyon-bolgesel-incelme",
  },
  {
    image: "/images/sac.png",
    category: "Saç Bakımı",
    title: "Saç Dökülmesini Durdurmak İçin Etkili Yöntemler",
    date: "10 Temmuz 2024",
    excerpt: "Saç dökülmesinin nedenleri ve mezoterapi dahil etkili tedavi yöntemleri hakkında kapsamlı rehber.",
    slug: "sac-dokulmesi-tedavisi",
  },
  {
    image: "/images/leketedavi.png",
    category: "Cilt Bakımı",
    title: "Güneş Lekesinden Kurtulmanın Yolları",
    date: "1 Ağustos 2024",
    excerpt: "Güneş lekelerini azaltmanın ve cilt tonunu eşitlemenin profesyonel ve evde uygulanabilir yöntemleri.",
    slug: "gunes-lekesi-tedavisi",
  },
  {
    image: "/images/hero1.jpg",
    category: "Güzellik Trendleri",
    title: "2024'ün En Popüler Cilt Bakımı Trendleri",
    date: "15 Ağustos 2024",
    excerpt: "Bu yılın öne çıkan cilt bakımı trendleri ve Adana'da nerede uygulatabileceğiniz hakkında bilgi.",
    slug: "2024-cilt-bakimi-trendleri",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="relative h-[260px] sm:h-[320px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0C0B08" }}>
          <div className="absolute inset-0 opacity-20"
               style={{ backgroundImage: "url(/images/hero1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C9A84C" }}>
              Göksum Güzellik Salonu
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">Blog</h1>
          <p className="text-white/60 text-sm md:text-base">Güzellik, bakım ve sağlıklı yaşam hakkında yazılarımız</p>
        </div>
      </div>

      {/* ── Blog kartları ───────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "#FAF7F0" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: "#C9A84C" }}>
              İçerikler
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-beauty-900 mb-5">Son Yazılar</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
              <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                           transition-all duration-400 hover:-translate-y-1.5"
                style={{ border: "1px solid rgba(201,168,76,0.12)" }}
              >
                {/* Görsel */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: "#C9A84C" }}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "rgba(201,168,76,0.7)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs" style={{ color: "rgba(201,168,76,0.8)" }}>{post.date}</span>
                  </div>
                  <h3 className="text-beauty-900 font-display font-semibold text-base mb-2 leading-snug
                                 group-hover:text-gold-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-beauty-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                        style={{ color: "#C9A84C" }}>
                    Devamını Oku
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#0C0B08" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6))" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.6))" }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Profesyonel Bakım İçin Randevu Alın
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-sm md:text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            Okuduğunuz konularda uzman kadromuzdan bizzat yararlanın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/randevu"
                  className="inline-flex items-center gap-2 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                  style={{ background: "#C9A84C" }}>
              Randevu Al
            </Link>
            <Link href="/hizmetlerimiz"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#D8B266" }}>
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
