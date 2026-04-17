"use client";

import React, { useState, FormEvent } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaFacebook, FaCheck, FaTimes } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      const submitData = new FormData();
      submitData.append("Ad Soyad", formData.name);
      submitData.append("Telefon", formData.phone);
      if (formData.email) submitData.append("E-posta", formData.email);
      if (formData.service) submitData.append("Hizmet", formData.service);
      submitData.append("Mesaj", formData.message);
      submitData.append("_subject", "Göksum Güzellik - Yeni İletişim Mesajı");
      submitData.append("_template", "table");
      submitData.append("_captcha", "false");
      const response = await fetch("https://formsubmit.co/ajax/goksumguzellik796@gmail.com", {
        method: "POST", body: submitData, headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!result.success) throw new Error("Form gönderimi sırasında bir hata oluştu");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setSubmissionStatus({ success: true, message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız." });
    } catch (error) {
      setSubmissionStatus({ success: false, message: error instanceof Error ? error.message : "Form gönderimi sırasında bir hata oluştu" });
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm bg-white border focus:outline-none focus:ring-2 transition-all";
  const inputStyle = { borderColor: "rgba(201,168,76,0.25)", color: "#1F212F" };

  return (
    <main>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="relative h-[260px] sm:h-[320px] overflow-hidden" style={{ background: "#0C0B08" }}>
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: "url(/images/hero1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#C9A84C" }}>
              Göksum Güzellik Merkezi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">İletişim</h1>
          <p className="text-white/60 text-sm md:text-base">Sorularınız için bize ulaşın veya randevu alın</p>
        </div>
      </div>

      {/* ── İçerik ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "#FAF7F0" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-2" style={{ color: "#C9A84C" }}>
                Mesaj Gönderin
              </span>
              <h2 className="text-xl md:text-2xl font-display font-bold text-beauty-900 mb-6">Bize Yazın</h2>
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
                  <label htmlFor="email" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                    E-posta
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange}
                         className={inputCls} style={inputStyle} placeholder="ornek@email.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                    Hizmet
                  </label>
                  <select id="service" value={formData.service} onChange={handleChange}
                          className={inputCls} style={inputStyle}>
                    <option value="">Seçiniz</option>
                    <option>Protez Tırnak</option>
                    <option>Cilt Bakımı</option>
                    <option>Lazer Epilasyon</option>
                    <option>Bölgesel Zayıflama</option>
                    <option>Kalıcı Makyaj</option>
                    <option>Leke Tedavi</option>
                    <option>Saç Mezoterapi</option>
                    <option>Cilt Analizi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-beauty-700 uppercase tracking-wider mb-2">
                    Mesajınız <span className="text-red-400">*</span>
                  </label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows={4} required
                            className={inputCls + " resize-none"} style={inputStyle}
                            placeholder="Soru veya sorunlarınızı yazabilirsiniz..." />
                </div>
                <button type="submit" disabled={isSubmitting}
                        className="w-full text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 disabled:opacity-60"
                        style={{ background: "#C9A84C" }}>
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            </div>

            {/* Bilgiler */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-2" style={{ color: "#C9A84C" }}>
                  Bize Ulaşın
                </span>
                <h2 className="text-xl font-display font-bold text-beauty-900 mb-6">İletişim Bilgileri</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-beauty-800 uppercase tracking-wider mb-1">Adres</p>
                      <p className="text-beauty-600 text-sm leading-relaxed">
                        Cemalpaşa, Gazipaşa Blv. No:30 Kat:1<br />01120 Seyhan / Adana
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                      <FaPhone size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-beauty-800 uppercase tracking-wider mb-1">Telefon</p>
                      <a href="tel:+905411901390" className="text-beauty-600 text-sm hover:text-gold-600 transition-colors">
                        +90 541 190 13 90
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-beauty-800 uppercase tracking-wider mb-1">E-posta</p>
                      <a href="mailto:goksumguzellik796@gmail.com" className="text-beauty-600 text-sm hover:text-gold-600 transition-colors">
                        goksumguzellik796@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                  <p className="text-xs font-semibold text-beauty-800 uppercase tracking-wider mb-3">Sosyal Medya</p>
                  <div className="flex gap-3">
                    {[
                      { href: "https://www.instagram.com/goksum_guzellik01", icon: <FaInstagram size={16} /> },
                      { href: "https://wa.me/905411901390", icon: <FaWhatsapp size={16} /> },
                      { href: "https://www.facebook.com/profile.php?id=61574776514786", icon: <FaFacebook size={16} /> },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                         className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                         style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C" }}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm" style={{ border: "1px solid rgba(201,168,76,0.12)" }}>
                <h3 className="text-lg font-display font-bold text-beauty-900 mb-4">Çalışma Saatleri</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
                    <span className="text-beauty-600">Pazartesi – Cumartesi</span>
                    <span className="font-semibold text-beauty-900">09:00 – 19:00</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-beauty-600">Pazar</span>
                    <span className="font-semibold text-beauty-900">10:00 – 20:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Harita ──────────────────────────────────────────────── */}
      <section className="h-96 relative">
        <div className="absolute top-4 left-4 z-10 px-4 py-3 rounded-xl shadow-lg max-w-xs"
             style={{ background: "rgba(12,11,8,0.88)", border: "1px solid rgba(201,168,76,0.3)" }}>
          <p className="font-bold text-sm" style={{ color: "#C9A84C" }}>Göksum Güzellik Merkezi</p>
          <p className="text-white/70 text-xs mt-1">Cemalpaşa, Gazipaşa Blv. No:30 Kat:1, 01120 Seyhan/Adana</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.152343662692!2d35.36052014790516!3d37.00819724398693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288fb46443d347%3A0xccab37c71d3076d8!2sG%C3%B6ksum%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2str!4v1750144023700!5m2!1str!2str"
          className="absolute inset-0 w-full h-full"
          loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
          title="Göksum Güzellik Merkezi Konum"
        />
      </section>

      {/* ── Pop-up ──────────────────────────────────────────────── */}
      {showPopup && submissionStatus && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative text-center">
            <button onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-beauty-400 hover:text-beauty-700">
              <FaTimes size={18} />
            </button>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${submissionStatus.success ? "bg-green-100" : "bg-red-100"}`}>
              {submissionStatus.success
                ? <FaCheck className="text-green-500" size={28} />
                : <FaTimes className="text-red-500" size={28} />}
            </div>
            <h3 className={`text-xl font-display font-bold mb-3 ${submissionStatus.success ? "text-green-600" : "text-red-600"}`}>
              {submissionStatus.success ? "Mesajınız Alındı!" : "Hata Oluştu"}
            </h3>
            <p className="text-beauty-600 text-sm">{submissionStatus.message}</p>
            <button onClick={() => setShowPopup(false)}
                    className="mt-6 px-8 py-2.5 rounded-full font-semibold text-white transition-colors"
                    style={{ background: "#C9A84C" }}>
              Tamam
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
