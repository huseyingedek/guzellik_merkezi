"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaCalendarAlt, FaPhone, FaWhatsapp, FaCheck, FaTimes } from "react-icons/fa";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeRange, setTimeRange] = useState({ min: "09:00", max: "19:00" });
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (formData.date) {
      const day = new Date(formData.date).getDay();
      setTimeRange(day === 0 ? { min: "10:00", max: "18:00" } : { min: "09:00", max: "19:00" });
    }
  }, [formData.date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === "time" && value && (value < timeRange.min || value > timeRange.max)) {
      alert(`Lütfen çalışma saatleri içinde bir saat seçin: ${timeRange.min} - ${timeRange.max}`);
      return;
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceNames: Record<string, string> = {
      "cilt-analizi": "Cilt Analizi", "cilt-bakimi": "Cilt Bakımı", "lazer-epilasyon": "Lazer Epilasyon",
      "bolgesel-zayiflama": "Bölgesel Zayıflama", "kalici-makyaj": "Kalıcı Makyaj",
      "leke-tedavi": "Leke Tedavisi", "sac-mezoterapi": "Saç Mezoterapisi", "protez-tirnak": "Protez Tırnak",
    };
    const serviceName = serviceNames[formData.service] || formData.service;
    try {
      const submitData = new FormData();
      submitData.append("Ad Soyad", formData.name);
      submitData.append("Telefon", formData.phone);
      if (formData.email) submitData.append("E-posta", formData.email);
      submitData.append("Hizmet", serviceName);
      submitData.append("Tarih", formData.date);
      submitData.append("Saat", formData.time);
      if (formData.message) submitData.append("Not", formData.message);
      submitData.append("_subject", `Göksum Güzellik - Randevu Talebi: ${serviceName}`);
      submitData.append("_template", "table");
      submitData.append("_captcha", "false");
      const response = await fetch("https://formsubmit.co/ajax/goksumguzellik796@gmail.com", {
        method: "POST", body: submitData, headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!result.success) throw new Error("Randevu formu gönderimi sırasında bir hata oluştu");
      setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
      setSubmissionStatus({ success: true, message: "Randevu talebiniz başarıyla alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecektir." });
    } catch (error) {
      setSubmissionStatus({ success: false, message: error instanceof Error ? error.message : "Randevu formu gönderimi sırasında bir hata oluştu" });
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 transition-all bg-beauty-50";
  const inputStyle = { borderColor: "rgba(201,168,76,0.25)" };

  return (
    <>
      <Header />

      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="relative h-[260px] sm:h-[320px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0C0B08" }}>
          <div className="absolute inset-0 opacity-25"
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">Randevu Al</h1>
          <p className="text-white/60 text-sm md:text-base">Güzelliğiniz için zaman ayırın</p>
        </div>
      </div>

      {/* ── Ana içerik ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "#FAF7F0" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Sol: alternatif iletişim */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-28" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-2" style={{ color: "#C9A84C" }}>
                  Hızlı Ulaşım
                </span>
                <h3 className="text-lg font-display font-bold text-beauty-900 mb-6">Diğer Kanallar</h3>
                <div className="space-y-6">
                  <a href="tel:+905411901390"
                     className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                     style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                      <FaPhone size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-beauty-900 text-sm mb-0.5">Telefonla Arayın</p>
                      <p className="text-beauty-500 text-xs mb-1">Doğrudan konuşmak için</p>
                      <p className="font-bold text-sm" style={{ color: "#C9A84C" }}>+90 541 190 13 90</p>
                    </div>
                  </a>
                  <a href="https://wa.me/905411901390" target="_blank" rel="noopener noreferrer"
                     className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                     style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                      <FaWhatsapp size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-beauty-900 text-sm mb-0.5">WhatsApp</p>
                      <p className="text-beauty-500 text-xs mb-1">Mesaj göndermek için</p>
                      <p className="font-bold text-sm" style={{ color: "#C9A84C" }}>Mesaj Gönder</p>
                    </div>
                  </a>
                  <div className="p-4 rounded-xl" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                           style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                        <FaCalendarAlt size={16} />
                      </div>
                      <p className="font-semibold text-beauty-900 text-sm">Çalışma Saatleri</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-beauty-600">
                      <li className="flex justify-between"><span>Pzt – Cmt</span><span className="font-semibold">09:00 – 19:00</span></li>
                      <li className="flex justify-between"><span>Pazar</span><span className="font-semibold">10:00 – 18:00</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-2" style={{ color: "#C9A84C" }}>
                  Online Randevu
                </span>
                <h2 className="text-xl md:text-2xl font-display font-bold text-beauty-900 mb-6">Randevu Formu</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_honey" style={{ display: "none" }} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                        Ad Soyad <span className="text-red-400">*</span>
                      </label>
                      <input type="text" id="name" value={formData.name} onChange={handleChange} required
                             className={inputCls} style={inputStyle} placeholder="Adınız Soyadınız" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                        Telefon <span className="text-red-400">*</span>
                      </label>
                      <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required
                             className={inputCls} style={inputStyle} placeholder="05XX XXX XX XX" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">E-posta</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange}
                           className={inputCls} style={inputStyle} placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                      Hizmet <span className="text-red-400">*</span>
                    </label>
                    <select id="service" value={formData.service} onChange={handleChange} required
                            className={inputCls} style={inputStyle}>
                      <option value="">Hizmet seçiniz</option>
                      <option value="protez-tirnak">Protez Tırnak</option>
                      <option value="cilt-bakimi">Cilt Bakımı</option>
                      <option value="lazer-epilasyon">Lazer Epilasyon</option>
                      <option value="bolgesel-zayiflama">Bölgesel Zayıflama</option>
                      <option value="kalici-makyaj">Kalıcı Makyaj</option>
                      <option value="leke-tedavi">Leke Tedavi</option>
                      <option value="sac-mezoterapi">Saç Mezoterapi</option>
                      <option value="cilt-analizi">Cilt Analizi</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                        Tarih <span className="text-red-400">*</span>
                      </label>
                      <input type="date" id="date" value={formData.date} onChange={handleChange} required
                             className={inputCls} style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                        Saat <span className="text-red-400">*</span>
                      </label>
                      <input type="time" id="time" value={formData.time} onChange={handleChange} required
                             min={timeRange.min} max={timeRange.max}
                             className={inputCls} style={inputStyle} />
                      <p className="text-xs text-beauty-400 mt-1">Hft içi 09-19, Pazar 10-18</p>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">Not</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} rows={3}
                              className={inputCls + " resize-none"} style={inputStyle}
                              placeholder="Eklemek istediğiniz notlar..." />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                          className="w-full text-white font-semibold py-3.5 rounded-full transition-all duration-300 disabled:opacity-60"
                          style={{ background: "#C9A84C" }}>
                    {isSubmitting ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
                  </button>
                  <p className="text-xs text-beauty-400 text-center">
                    <span className="text-red-400">*</span> zorunlu alanlar · Telefonla da randevu alabilirsiniz:{" "}
                    <a href="tel:+905411901390" className="text-gold-600 hover:underline">0541 190 13 90</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "#0C0B08" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-3" style={{ color: "#C9A84C" }}>SSS</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Randevu iptal edebilir miyim?", a: "Evet, randevunuzu en az 24 saat öncesinden iptal edebilirsiniz. Telefon veya WhatsApp üzerinden bize ulaşmanız yeterlidir." },
              { q: "Randevuma geç kalırsam ne olur?", a: "15 dakikadan fazla geç kalmanız durumunda diğer müşterilerimizi bekletmemek için randevunuz kısaltılabilir veya iptal edilebilir." },
              { q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?", a: "Nakit, kredi kartı ve banka kartı kabul ediyoruz. Bazı hizmetlerimizde taksit imkânı da mevcuttur." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="font-display font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pop-up ──────────────────────────────────────────────── */}
      {showPopup && submissionStatus && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative text-center">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-beauty-400 hover:text-beauty-700">
              <FaTimes size={18} />
            </button>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${submissionStatus.success ? "bg-green-100" : "bg-red-100"}`}>
              {submissionStatus.success ? <FaCheck className="text-green-500" size={28} /> : <FaTimes className="text-red-500" size={28} />}
            </div>
            <h3 className={`text-xl font-display font-bold mb-3 ${submissionStatus.success ? "text-green-600" : "text-red-600"}`}>
              {submissionStatus.success ? "Randevunuz Alındı\!" : "Hata Oluştu"}
            </h3>
            <p className="text-beauty-600 text-sm">{submissionStatus.message}</p>
            <button onClick={() => setShowPopup(false)} className="mt-6 px-8 py-2.5 rounded-full font-semibold text-white" style={{ background: "#C9A84C" }}>
              Tamam
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
