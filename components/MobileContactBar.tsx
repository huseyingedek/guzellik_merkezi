'use client';

import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdDirections } from 'react-icons/md';

export default function MobileContactBar() {
  const handleCall = () => {
    window.location.href = 'tel:+905411901390';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/905411901390', '_blank');
  };

  const handleDirections = () => {
    const address = 'Göksum Güzellik Merkezi, Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1, 01120 Seyhan/Adana';
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/goksum_guzellik01', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gold-400 shadow-2xl md:hidden z-50">
      <div className="grid grid-cols-4 gap-0">
        {/* Arama Butonu */}
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-beauty-50 active:bg-beauty-100 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-1">
            <FaPhone className="text-white text-lg" />
          </div>
          <span className="text-xs font-medium text-beauty-800">Ara</span>
        </button>

        {/* WhatsApp Butonu */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-beauty-50 active:bg-beauty-100 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-1">
            <FaWhatsapp className="text-white text-xl" />
          </div>
          <span className="text-xs font-medium text-beauty-800">Whatsapp</span>
        </button>

        {/* Instagram Butonu */}
        <button
          onClick={handleInstagram}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-beauty-50 active:bg-beauty-100 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center mb-1">
            <FaInstagram className="text-white text-xl" />
          </div>
          <span className="text-xs font-medium text-beauty-800">Instagram</span>
        </button>

        {/* Navigasyon Butonu */}
        <button
          onClick={handleDirections}
          className="flex flex-col items-center justify-center py-3 px-2 hover:bg-beauty-50 active:bg-beauty-100 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mb-1">
            <MdDirections className="text-white text-2xl" />
          </div>
          <span className="text-xs font-medium text-beauty-800">Navigasyon</span>
        </button>
      </div>
    </div>
  );
}

