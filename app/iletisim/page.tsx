"use client";

import React, { useState, FormEvent } from "react";
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    try {
      // Form verilerini topla
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);
      
      // FormSubmit.co API'ye doğrudan AJAX çağrısı yap
      const response = await fetch('https://formsubmit.co/ajax/bilgi@goksumguzellik.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error('Form gönderimi sırasında bir hata oluştu');
      }
      
      // Form verilerini sıfırla
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
      
      setSubmissionStatus({
        success: true,
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Form gönderimi sırasında bir hata oluştu',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-beauty-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="İletişim"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">İletişim</h1>
            <p className="text-lg text-white/80">
              Sorularınız için bize ulaşın veya randevu alın
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 bg-beauty-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="pb-0">
                <h2 className="text-2xl font-display font-bold text-beauty-900 mb-4">Bize Yazın</h2>
                {submissionStatus && (
                  <div className={`p-4 mb-4 rounded-md ${submissionStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submissionStatus.message}
                  </div>
                )}
                <div className="mt-4 mb-8 bg-white rounded-lg shadow-lg p-4 overflow-hidden">
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 mt-4"
                  >
                    {/* FormSubmit.co için gizli alanlar */}
                    <input type="hidden" name="_subject" value="Göksum Güzellik Merkezi - İletişim Formu" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-beauty-700 font-medium mb-2">
                          Ad Soyad <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-beauty-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-beauty-700 font-medium mb-2">
                          Telefon <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-beauty-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-beauty-700 font-medium mb-2">E-posta</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-beauty-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-beauty-700 font-medium mb-2">Hizmet</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-beauty-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Kalıcı Makyaj">Kalıcı Makyaj</option>
                        <option value="Cilt Bakımı">Cilt Bakımı</option>
                        <option value="Lazer Epilasyon">Lazer Epilasyon</option>
                        <option value="Manikür/Pedikür">Manikür/Pedikür</option>
                        <option value="Kırışıklık Giderme">Kırışıklık Giderme</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-beauty-700 font-medium mb-2">
                        Soru veya sorunlarınız <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        required
                        className="w-full px-4 py-3 border border-beauty-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                        placeholder="Soru veya sorunlarınızı yazabilirsiniz..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                      </button>
                      <p className="text-xs text-beauty-600 mt-2 text-center">
                        <span className="text-red-500">*</span> işaretli alanlar zorunludur
                      </p>
                      <p className="text-xs text-beauty-600 mt-2 text-center">
                        Alternatif olarak bize telefonla veya WhatsApp üzerinden de ulaşabilirsiniz.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col space-y-4">
                {/* Contact Details */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-display font-bold text-beauty-900 mb-6">İletişim Bilgileri</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-beauty-100 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                        <FaMapMarkerAlt size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-beauty-800 mb-1">Adres</h3>
                        <p className="text-beauty-600">
                          Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1
                          <br />
                          01120 Seyhan/Adana
                          <br />
                          <span className="font-medium text-gold-600 mt-2 inline-block">
                            Göksum Güzellik Merkezi
                          </span>
                        </p>
                      </div>
                    </div>
                     
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-beauty-100 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                        <FaPhone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-beauty-800 mb-1">Telefon</h3>
                        <a 
                          href="tel:+905411901390" 
                          className="text-beauty-600 hover:text-gold-500 transition-colors"
                        >
                          +90 541 190 13 90
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-beauty-100 flex items-center justify-center text-gold-500 mr-4 flex-shrink-0">
                        <FaEnvelope size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-beauty-800 mb-1">E-posta</h3>
                        <a 
                          href="mailto:bilgi@goksumguzellik.com" 
                          className="text-beauty-600 hover:text-gold-500 transition-colors"
                        >
                          bilgi@goksumguzellik.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-beauty-800 mb-4">Sosyal Medya</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/goksum_guzellik01" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-700 hover:bg-gold-500 hover:text-white transition-all"
                      >
                        <FaInstagram size={18} />
                      </a>
                      <a 
                        href="https://wa.me/905448597280" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-700 hover:bg-gold-500 hover:text-white transition-all"
                      >
                        <FaWhatsapp size={18} />
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61574776514786" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-700 hover:bg-gold-500 hover:text-white transition-all"
                      >
                        <FaFacebook size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-display font-bold text-beauty-900 mb-4">Çalışma Saatleri</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-beauty-700">Pazartesi - Cumartesi:</span>
                      <span className="font-medium text-beauty-900">08:00 - 20:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-beauty-700">Pazar:</span>
                      <span className="font-medium text-beauty-900">10:00 - 20:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute top-4 left-4 z-10 bg-beauty-900/90 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs">
          <p className="font-bold text-red-400">Göksum Güzellik Merkezi</p>
          <p className="font-semibold">Cemalpaşa Mah, Seyhan</p>
          <p className="text-white/80 text-xs mt-1">Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1, 01120 Seyhan/Adana</p>
        </div>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.152343662692!2d35.36052014790516!3d37.00819724398693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288fb46443d347%3A0xccab37c71d3076d8!2sG%C3%B6ksum%20G%C3%BCzellik%20Merkezi!5e0!3m2!1str!2str!4v1750144023700!5m2!1str!2str"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Göksum Güzellik Merkezi Konum"
        ></iframe>
      </section>
    </main>
  );
} 