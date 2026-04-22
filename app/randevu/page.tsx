"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppointmentPage() {
  return (
    <>
      <Header />

      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="relative h-[260px] sm:h-[320px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0C0B08" }}>
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: "url(/images/hero1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: "#C9A84C" }}
            >
              Göksum Güzellik Salonu
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Online Randevu
          </h1>
          <p className="text-white/60 text-sm md:text-base">
            Hizmet seçin, tarih ve saat belirleyin — onay SMS ile gelsin.
          </p>
        </div>
      </div>

      {/* ── Geras Booking iframe ─────────────────────────────────── */}
      <section className="py-10 md:py-16" style={{ background: "#FAF7F0" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <iframe
              src="https://app.gerasonline.com/booking/1"
              title="Online Randevu - Göksum Güzellik Salonu"
              width="100%"
              height="700"
              style={{ border: "none", display: "block" }}
              allow="payment"
            />
          </div>
          <p className="text-center text-xs mt-4" style={{ color: "rgba(0,0,0,0.35)" }}>
            Randevunuz salon onayıyla kesinleşecektir. Soru için{" "}
            <a
              href="tel:+905411901390"
              className="underline hover:text-gold-500 transition-colors"
            >
              +90 541 190 13 90
            </a>{" "}
            numarayı arayabilirsiniz.
          </p>
        </div>
      </section>

      {/* ── SSS ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "#0C0B08" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3"
              style={{ color: "#C9A84C" }}
            >
              SSS
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Randevu iptal edebilir miyim?",
                a: "Evet, randevunuzu en az 24 saat öncesinden iptal edebilirsiniz. Telefon veya WhatsApp üzerinden bize ulaşmanız yeterlidir.",
              },
              {
                q: "Randevuma geç kalırsam ne olur?",
                a: "15 dakikadan fazla geç kalmanız durumunda diğer müşterilerimizi bekletmemek için randevunuz kısaltılabilir veya iptal edilebilir.",
              },
              {
                q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                a: "Nakit, kredi kartı ve banka kartı kabul ediyoruz. Bazı hizmetlerimizde taksit imkânı da mevcuttur.",
              },
              {
                q: "İlk seanstan önce konsültasyon yapılıyor mu?",
                a: "Evet, lazer epilasyon ve bazı cilt bakımı hizmetlerimizde ilk seans öncesi ücretsiz konsültasyon yapılmaktadır.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="font-display font-semibold text-white mb-2">{faq.q}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
