import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adana Seyhan Güzellik Hizmetleri | Protez Tırnak, Lazer, Cilt Bakımı',
  description:
    "Adana Seyhan'da en iyi protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel zayıflama hizmetleri. Göksum Güzellik Merkezi'nde profesyonel ekip ve uygun fiyatlarla güzelliğinize güzellik katın.",
  openGraph: {
    title: 'Göksum Güzellik Merkezi Hizmetleri | Adana Seyhan',
    description: "Adana Seyhan'da profesyonel güzellik hizmetleri. Protez tırnak, lazer epilasyon, cilt bakımı.",
    url: 'https://www.goksumguzellik.com/hizmetlerimiz',
    type: 'website',
  },
  alternates: { canonical: 'https://www.goksumguzellik.com/hizmetlerimiz' },
};

const services = [
  {
    id: 8,
    title: 'Protez Tırnak',
    description: 'Kalıcı ve estetik protez tırnak uygulamaları ile hem şık hem de bakımlı tırnaklara sahip olun.',
    image: '/images/protez-tirnak.jpg',
    features: ['Kalıcı oje', 'Jel tırnak', 'Tırnak uzatma', 'Nail art & tasarım', 'Protez tırnak bakımı'],
    slug: 'protez-tirnak',
    tag: 'En Popüler',
  },
  {
    id: 2,
    title: 'Cilt Bakımı',
    description: 'Cildinizin ihtiyaçlarına göre hazırlanan özel bakım programları ile daha canlı, sağlıklı bir cilde kavuşun.',
    image: '/images/hero1.jpg',
    features: ['Klasik cilt bakımı', 'Akne bakımı', 'Anti-aging bakım', 'Hydrafacial', 'Leke giderici bakım'],
    slug: 'cilt-bakimi',
    tag: null,
  },
  {
    id: 3,
    title: 'Lazer Epilasyon',
    description: 'Son teknoloji lazer cihazlarımız ile istenmeyen tüylerden kalıcı olarak kurtulun.',
    image: '/images/lazerr.png',
    features: ['Tüm vücut', 'Yüz bölgesi', 'Bikini bölgesi', 'Erkekler için'],
    slug: 'lazer-epilasyon',
    tag: 'Öne Çıkan',
  },
  {
    id: 4,
    title: 'Bölgesel Zayıflama',
    description: 'Modern zayıflama teknolojileri ile vücudunuzda bölgesel incelme sağlayın.',
    image: '/images/zayıflama.png',
    features: ['Kavitasyon', 'RF lipoliz', 'Selülit giderme', 'Kişiye özel protokol'],
    slug: 'bolgesel-zayiflama',
    tag: null,
  },
  {
    id: 5,
    title: 'Kalıcı Makyaj',
    description: 'Her gün makyaj yapma derdinden kurtulun, zamandan tasarruf edin.',
    image: '/images/makyaj.png',
    features: ['Dudak kontür', 'Eyeliner', 'Kaş kontür', 'Microblading'],
    slug: 'kalici-makyaj',
    tag: null,
  },
  {
    id: 6,
    title: 'Leke Tedavi',
    description: 'Güneş lekesi, akne izi ve pigmentasyon sorunlarını etkili tedavi yöntemlerimizle giderin.',
    image: '/images/leketedavi.png',
    features: ['Kimyasal peeling', 'Akne lekesi', 'Güneş lekesi', 'Melazma tedavisi'],
    slug: 'leke-tedavi',
    tag: null,
  },
  {
    id: 7,
    title: 'Saç Mezoterapi',
    description: 'Saç dökülmesi sorunlarına mezoterapi yöntemiyle etkili çözüm.',
    image: '/images/sac.png',
    features: ['Vitamin kokteylleri', 'Kök hücre takviyeleri', 'Saç kökü besleme', 'Dökülme önleme'],
    slug: 'sac-mezoterapi',
    tag: null,
  },
  {
    id: 1,
    title: 'Cilt Analizi',
    description: 'Modern cihazlarla ücretsiz profesyonel cilt analizi. Cildinizin ihtiyaçlarını keşfedin.',
    image: '/images/analiz_cilt.png',
    features: ['Cilt tipi analizi', 'Problem tespiti', 'Kişiye özel öneriler', 'Ürün tavsiyeleri'],
    slug: 'cilt-analizi',
    tag: 'Ücretsiz',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────────────── */}
      <div className="relative h-[260px] sm:h-[320px] overflow-hidden">
        <Image src="/images/hero1.jpg" alt="Hizmetlerimiz" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>
              Göksum Güzellik Merkezi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Hizmetlerimiz
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-12" style={{ background: '#C9A84C' }} />
            <p className="text-white/70 text-sm md:text-base">Kaliteli Güzellik & Premium Bakım</p>
          </div>
        </div>
      </div>

      {/* ── Hizmet kartları ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: '#FAF7F0' }}>
        <div className="container mx-auto px-4">

          {/* Bölüm başlığı */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3"
                  style={{ color: '#C9A84C' }}>
              Tüm Hizmetler
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-beauty-900 mb-4">
              Size Özel Güzellik Çözümleri
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }} />
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }} />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                           transition-all duration-400 group hover:-translate-y-1.5"
                style={{ border: '1px solid rgba(201,168,76,0.12)' }}
              >
                {/* Görsel */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400
                                  flex items-center justify-center"
                       style={{ background: 'rgba(12,11,8,0.6)' }}>
                    <Link
                      href={`/hizmetlerimiz/${service.slug}`}
                      className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
                      style={{
                        border: '1px solid rgba(201,168,76,0.6)',
                        color: '#D8B266',
                        background: 'rgba(0,0,0,0.4)',
                      }}
                    >
                      Detaylı İncele
                    </Link>
                  </div>
                  {/* Etiket */}
                  {service.tag && (
                    <div className="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                         style={{ background: '#C9A84C' }}>
                      {service.tag}
                    </div>
                  )}
                </div>

                {/* İçerik */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-semibold text-beauty-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-beauty-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* Özellikler */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.slice(0, 4).map((f, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full"
                              style={{ background: '#FAF7F0', border: '1px solid rgba(201,168,76,0.25)', color: '#A8893A' }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/hizmetlerimiz/${service.slug}`}
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: '#C9A84C' }}
                  >
                    Detaylara Git
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA bölümü ───────────────────────────────────────────────────── */}
      <section className="py-14 md:py-18" style={{ background: '#0C0B08' }}>
        <div className="container mx-auto px-4 text-center">
          {/* Gold çizgi */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            Hemen Randevu Alın
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed"
             style={{ color: 'rgba(255,255,255,0.55)' }}>
            Detaylı bilgi almak ve randevu oluşturmak için bize ulaşın. Uzman ekibimiz tüm
            sorularınızı yanıtlamak için hazır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/randevu"
              className="inline-flex items-center gap-2 text-white font-semibold
                         py-3 px-8 rounded-full transition-all duration-300"
              style={{ background: '#C9A84C' }}
            >
              Randevu Al
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 font-semibold
                         py-3 px-8 rounded-full transition-all duration-300"
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                color: '#D8B266',
                background: 'transparent',
              }}
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
