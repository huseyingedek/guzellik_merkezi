import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Göksum Güzellik Merkezi - Adana Seyhan",
  description:
    "Göksum Güzellik Merkezi, Adana Seyhan'da profesyonel güzellik hizmetleri sunan güvenilir adresiniz. Deneyimli ekibimiz, son teknoloji cihazlarımız ve müşteri memnuniyeti odaklı yaklaşımımızla hizmetinizdeyiz.",
  alternates: { canonical: "https://www.goksumguzellik.com/hakkimizda" },
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Uzman Kadro",
    desc: "Alanında uzman, sürekli eğitimlerle kendini geliştiren profesyonel ekibimizle hizmetinizdeyiz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Kaliteli Ürünler",
    desc: "Yalnızca sertifikalı, güvenilir ürünlerle çalışıyor; sağlığınızı her şeyin üstünde tutuyoruz.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Son Teknoloji",
    desc: "En güncel cihaz ve yöntemlerle kısa sürede maksimum sonuç almanızı sağlıyoruz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ── Sinematik banner ──────────────────────────────────────── */}
      <div className="relative h-[300px] sm:h-[360px] overflow-hidden">
        <Image src="/images/goksum.jpg" alt="Hakkımızda" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C9A84C" }}>
              Göksum Güzellik Merkezi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">Hakkımızda</h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            <p className="text-white/70 text-sm md:text-base">Hikayemiz & Değerlerimiz</p>
          </div>
        </div>
      </div>

      {/* ── Hikayemiz ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "#FAF7F0" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: "#C9A84C" }}>
                Hikayemiz
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-beauty-900 mb-2">
                Adana'nın Güzellik Merkezi
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
              </div>
              <div className="space-y-4 text-beauty-700 leading-relaxed">
                <p>
                  Göksum Güzellik Merkezi, Adana'nın Seyhan ilçesinde, Gazipaşa Bulvarı üzerinde kurulmuştur.
                  Kurucumuz Elif Dartar, güzellik sektöründeki uzun yıllara dayanan deneyimini merkezi açarak
                  müşterilerine sunmak istedi.
                </p>
                <p>
                  Yıllar içinde müşterilerimizin ihtiyaçlarını anlayarak sürekli kendimizi geliştirdik.
                  Estetik ve güzellik alanındaki en son teknolojileri ve yöntemleri takip ederek
                  merkezimizi her zaman güncel tuttuk.
                </p>
                <p>
                  Bugün, Göksum Güzellik Merkezi olarak müşterilerimize unutulmaz bir deneyim sunmaktan
                  ve onların kendilerini daha güzel, daha özgüvenli hissetmelerine katkıda bulunmaktan
                  gurur duyuyoruz.
                </p>
              </div>
              <Link
                href="/randevu"
                className="inline-flex items-center gap-2 mt-8 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300"
                style={{ background: "#C9A84C" }}
              >
                Randevu Al
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/goksum.jpg" alt="Göksum Güzellik Merkezi" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl"
                   style={{ background: "rgba(12,11,8,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <p className="text-white font-display font-semibold text-sm">Elif Dartar</p>
                <p className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>Güzellik Uzmanı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Değerlerimiz ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "#0C0B08" }}>
        <div className="absolute-none">
          <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }} />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: "#C9A84C" }}>
              Neden Biz?
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-5">
              Vizyonumuz & Değerlerimiz
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6))" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
              <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.6))" }} />
            </div>
            <p className="max-w-xl mx-auto mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Müşterilerimize en kaliteli hizmeti sunmak, onların kendilerini özel hissetmesini sağlamak
              ve Adana'nın en güvenilir güzellik merkezi olmak temel hedefimizdir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl text-center"
                   style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                     style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#D8B266" }}>
                  {v.icon}
                </div>
                <h3 className="text-white font-display font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Uzman ekip ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "#FAF7F0" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: "#C9A84C" }}>
              Ekibimiz
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-beauty-900 mb-5">Uzman Kadromuz</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
              <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm max-w-xs w-full"
                 style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="aspect-square relative overflow-hidden bg-beauty-100">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl font-display font-bold" style={{ color: "rgba(201,168,76,0.35)" }}>ED</span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                     style={{ background: "rgba(12,11,8,0.7)" }}>
                  <a href="https://www.instagram.com/goksum_guzellik01" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                     style={{ background: "rgba(201,168,76,0.3)", border: "1px solid rgba(201,168,76,0.5)" }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-display font-semibold text-beauty-900 mb-1">Elif Dartar</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "#C9A84C" }}>Güzellik Uzmanı</p>
                <p className="text-beauty-600 text-sm">
                  Profesyonel eğitim ve tecrübesiyle tüm güzellik ihtiyaçlarınız için yanınızda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#0C0B08" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Güzelliğinize Yatırım Yapın
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-sm md:text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            Uzman ekibimizle tanışmak ve size özel bir güzellik programı oluşturmak için randevu alın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/randevu"
                  className="inline-flex items-center gap-2 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                  style={{ background: "#C9A84C" }}>
              Randevu Al
            </Link>
            <Link href="/iletisim"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                  style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#D8B266" }}>
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
