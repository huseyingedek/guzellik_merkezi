'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FaCalendarAlt, FaPhone, FaWhatsapp, FaCheck } from 'react-icons/fa';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeRange, setTimeRange] = useState({ min: '09:00', max: '19:00' });
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);
  
  // Tarih değiştiğinde saat aralığını güncelle
  useEffect(() => {
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const day = selectedDate.getDay(); // 0 = pazar, 6 = cumartesi
      
      if (day === 0) { // Pazar günü
        setTimeRange({ min: '10:00', max: '18:00' });
      } else { // Pazartesi-Cumartesi
        setTimeRange({ min: '09:00', max: '19:00' });
      }
      
      // Eğer seçilen saat aralık dışındaysa sıfırla
      if (formData.time) {
        const currentTime = formData.time;
        if (currentTime < timeRange.min || currentTime > timeRange.max) {
          setFormData(prev => ({
            ...prev,
            time: ''
          }));
        }
      }
    }
  }, [formData.date]);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Normal güncelleme
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Eğer saat seçiliyorsa ve çalışma saatleri dışındaysa uyarı ver
    if (id === 'time' && value !== '') {
      if (value < timeRange.min || value > timeRange.max) {
        alert(`Lütfen çalışma saatleri içinde bir saat seçin: ${timeRange.min} - ${timeRange.max}`);
        return;
      }
    }
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
        throw new Error('Randevu formu gönderimi sırasında bir hata oluştu');
      }
      
      // Form verilerini sıfırla
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
      
      setSubmissionStatus({
        success: true,
        message: 'Randevu talebiniz başarıyla alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecektir.',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Randevu formu gönderimi sırasında bir hata oluştu',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Header />
      
      {/* Banner */}
      <div className="relative h-[300px] bg-beauty-900">
        <div className="absolute inset-0 bg-beauty-900/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero2.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Randevu Alın</h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gold-300"></div>
            <p className="text-white">Güzelliğiniz İçin Zaman Ayırın</p>
            <div className="w-8 h-0.5 bg-gold-300"></div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-beauty-900 mb-4">
              Nasıl Randevu Alabilirim?
            </h2>
            <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-beauty-700 mb-2">
              Randevu almak için aşağıdaki formu doldurabilir, telefonla arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.
            </p>
            <p className="text-beauty-700">
              Size en kısa sürede dönüş yapacağız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Alternative Options */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-beauty-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-beauty-900 mb-6">Alternatif İletişim Kanalları</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPhone className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-beauty-800 mb-1">Telefonla Arayın</h4>
                      <p className="text-beauty-600 text-sm mb-2">
                        Doğrudan konuşmak ve randevu almak isterseniz bizi arayabilirsiniz.
                      </p>
                      <a 
                        href="tel:+905448597280" 
                        className="text-gold-500 font-medium hover:text-gold-600 transition-colors"
                      >
                        +90 544 859 72 80
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaWhatsapp className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-beauty-800 mb-1">WhatsApp</h4>
                      <p className="text-beauty-600 text-sm mb-2">
                        Mesaj göndermek isterseniz WhatsApp üzerinden bize ulaşabilirsiniz.
                      </p>
                      <a 
                        href="https://wa.me/905448597280" 
                        target="_blank"
                        className="text-gold-500 font-medium hover:text-gold-600 transition-colors"
                      >
                        WhatsApp Üzerinden Mesaj Gönder
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaCalendarAlt className="text-gold-500" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-beauty-800 mb-1">Çalışma Saatlerimiz</h4>
                      <ul className="text-beauty-600 text-sm">
                        <li className="flex justify-between mb-1">
                          <span>Pazartesi - Cumartesi:</span>
                          <span>09:00 - 19:00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Pazar:</span>
                          <span>10:00 - 18:00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {formSubmitted ? (
                <div className="bg-white border border-green-200 p-8 rounded-lg shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="text-green-500" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-beauty-900 mb-4">Randevu Talebiniz Alındı</h3>
                  <p className="text-beauty-700 mb-6">
                    Teşekkürler! Randevu talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    Yeni Randevu Oluştur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-beauty-100 p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-beauty-900 mb-6">Randevu Formu</h3>
                  
                  {submissionStatus && (
                    <div className={`p-4 mb-6 rounded-md ${submissionStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submissionStatus.message}
                    </div>
                  )}
                  
                  {/* FormSubmit.co için gizli alanlar */}
                  <input type="hidden" name="_subject" value="Göksum Güzellik Merkezi - Randevu Talebi" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-beauty-800 text-sm font-medium mb-2">
                          Ad Soyad <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                          placeholder="Adınız ve soyadınız"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-beauty-800 text-sm font-medium mb-2">
                          Telefon <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                          placeholder="Telefon numaranız"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-beauty-800 text-sm font-medium mb-2">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-beauty-800 text-sm font-medium mb-2">
                        Hizmet <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                        required
                      >
                        <option value="">Hizmet seçiniz</option>
                        <option value="cilt-analizi">Cilt Analizi</option>
                        <option value="cilt-bakimi">Cilt Bakımı</option>
                        <option value="lazer-epilasyon">Lazer Epilasyon</option>
                        <option value="bolgesel-zayiflama">Bölgesel Zayıflama</option>
                        <option value="kalici-makyaj">Kalıcı Makyaj</option>
                        <option value="leke-tedavi">Leke Tedavi</option>
                        <option value="sac-mezoterapi">Saç Mezoterapi</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-beauty-800 text-sm font-medium mb-2">
                          Tarih <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-beauty-800 text-sm font-medium mb-2">
                          Saat <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                          required
                        />
                        <p className="text-xs text-beauty-500 mt-1">
                          Çalışma saatlerimiz: Hafta içi 09:00-19:00, Pazar 10:00-18:00
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-beauty-800 text-sm font-medium mb-2">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-beauty-200 rounded-md focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none resize-none"
                        placeholder="Eklemek istediğiniz notlar veya sorularınız"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex justify-center items-center"
                      >
                        Randevu Talebi Gönder
                      </button>
                      <p className="text-xs text-beauty-500 mt-2 text-center">
                        <span className="text-red-500">*</span> işaretli alanlar zorunludur<br />
                        Alternatif olarak telefonla da randevu alabilirsiniz: <a href="tel:+905448597280" className="text-gold-600 hover:underline">0544 859 72 80</a>
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-beauty-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-beauty-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
              <p className="text-beauty-700">
                Randevu süreciyle ilgili en çok sorulan sorular ve cevapları.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* FAQ Item */}
              <div className="bg-white border border-beauty-100 rounded-lg p-6">
                <h3 className="text-beauty-900 font-display font-semibold text-lg mb-2">
                  Randevu iptal edebilir miyim?
                </h3>
                <p className="text-beauty-700">
                  Evet, randevunuzu en az 24 saat öncesinden iptal edebilirsiniz. İptal için bize telefon veya WhatsApp üzerinden ulaşabilirsiniz.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-white border border-beauty-100 rounded-lg p-6">
                <h3 className="text-beauty-900 font-display font-semibold text-lg mb-2">
                  Randevuma geç kalırsam ne olur?
                </h3>
                <p className="text-beauty-700">
                  Randevunuza 15 dakikadan fazla geç kalmanız durumunda, diğer müşterilerimizi bekletmemek için randevunuz iptal edilebilir veya kısaltılabilir.
                </p>
              </div>
              
              {/* FAQ Item */}
              <div className="bg-white border border-beauty-100 rounded-lg p-6">
                <h3 className="text-beauty-900 font-display font-semibold text-lg mb-2">
                  Hangi ödeme yöntemlerini kabul ediyorsunuz?
                </h3>
                <p className="text-beauty-700">
                  Nakit, kredi kartı ve banka kartı ile ödeme yapabilirsiniz. Ayrıca bazı hizmetlerimizde taksit imkanımız da bulunmaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-beauty-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Profesyonel Güzellik Hizmetlerimizden Faydalanın</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Siz de Adana'nın en sevilen güzellik merkezinde uzman kadromuzdan hizmet alın.
            Bakımlı ve güzel görünmenin keyfini çıkarın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hizmetlerimiz"
              className="bg-gold-500 hover:bg-gold-600 text-white py-3 px-8 rounded-full transition-colors duration-300 font-semibold"
            >
              Hizmetlerimizi İnceleyin
            </Link>
            <a
              href="tel:+905448597280"
              className="bg-white text-beauty-900 hover:bg-beauty-50 py-3 px-8 rounded-full transition-colors duration-300 font-semibold"
            >
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 