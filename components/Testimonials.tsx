import React from "react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    service: "Protez Tırnak",
    quote: "Göksum Güzellik'te aldığım hizmetlerden çok memnun kaldım. Tırnaklar hem şık hem de inanılmaz dayanıklı çıktı. Kesinlikle tavsiye ediyorum\!",
    rating: 5,
    initial: "A",
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    service: "Lazer Epilasyon",
    quote: "Lazer epilasyon seanslarım için düzenli geliyorum. Sonuçlar gerçekten mükemmel, personel hem profesyonel hem de çok ilgili.",
    rating: 5,
    initial: "M",
  },
  {
    id: 3,
    name: "Ezgi Demir",
    service: "Cilt Bakımı",
    quote: "Cilt bakımı konusunda gerçekten uzman bir ekip. Birkaç seans sonra cildimde inanılmaz fark gördüm. Teşekkürler Göksum\!",
    rating: 5,
    initial: "E",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{ color: i < rating ? "#D8B266" : "rgba(255,255,255,0.15)" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462
                   c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292
                   c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034
                   c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72
                   c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "#0C0B08" }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
           style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.55), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px"
           style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.55), transparent)" }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
             style={{ background: "rgba(201,168,76,0.05)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
             style={{ background: "rgba(201,168,76,0.05)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3"
                style={{ color: "#C9A84C" }}>
            Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
            Yorumlar
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20"
                 style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.6))" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
            <div className="h-px w-20"
                 style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.6))" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-6 rounded-2xl transition-colors duration-300 group"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="font-display font-bold leading-none mb-2 select-none text-6xl"
                   style={{ color: "rgba(201,168,76,0.25)" }}>
                &ldquo;
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.72)" }}>
                {t.quote}
              </p>

              <StarRating rating={t.rating} />

              <div className="my-4 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center
                                font-display font-bold text-sm flex-shrink-0"
                     style={{
                       background: "rgba(201,168,76,0.15)",
                       border: "1px solid rgba(201,168,76,0.35)",
                       color: "#D8B266",
                     }}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(201,168,76,0.65)" }}>
                    {t.service}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0
                              group-hover:opacity-100 transition-opacity duration-400"
                   style={{ border: "1px solid rgba(201,168,76,0.25)" }} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/yorumlar"
            className="inline-flex items-center gap-2 font-medium text-sm
                       py-2.5 px-6 rounded-full transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#D8B266",
            }}
          >
            Tüm Yorumları Gör
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
