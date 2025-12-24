import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-beauty-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold text-gold-300 mb-4">Göksum Güzellik</h3>
            <p className="text-beauty-300 mb-4">
              Profesyonel güzellik ve bakım hizmetleri sunan merkezimizde, en yeni teknolojiler ve uzman kadromuzla
              hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/profile.php?id=61574776514786" icon={<FaFacebook size={18} />} />
              <SocialLink href="https://www.instagram.com/goksum_guzellik01" icon={<FaInstagram size={18} />} />
              <SocialLink href="https://wa.me/905411901390" icon={<FaWhatsapp size={18} />} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-bold text-gold-300 mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <FooterLink href="/hizmetlerimiz/cilt-analizi" text="Cilt Analizi" />
              <FooterLink href="/hizmetlerimiz/cilt-bakimi" text="Cilt Bakımı" />
              <FooterLink href="/hizmetlerimiz/lazer-epilasyon" text="Lazer Epilasyon" />
              <FooterLink href="/hizmetlerimiz/bolgesel-zayiflama" text="Bölgesel Zayıflama" />
              <FooterLink href="/hizmetlerimiz/kalici-makyaj" text="Kalıcı Makyaj" />
              <FooterLink href="/hizmetlerimiz/leke-tedavi" text="Leke Tedavi" />
              <FooterLink href="/hizmetlerimiz/sac-mezoterapi" text="Saç Mezoterapi" />
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-gold-300 mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <FooterLink href="/hakkimizda" text="Hakkımızda" />
              <FooterLink href="/hizmetlerimiz" text="Hizmetlerimiz" />
              <FooterLink href="/randevu" text="Randevu Alın" />
              <FooterLink href="/blog" text="Blog" />
              <FooterLink href="/iletisim" text="İletişim" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display font-bold text-gold-300 mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gold-400 mr-3 mt-1">
                  <FaMapMarkerAlt />
                </span>
                <span className="text-beauty-300">
                  Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1
                  <br />
                  01120 Seyhan/Adana
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-gold-400 mr-3">
                  <FaPhone />
                </span>
                <a href="tel:+905411901390" className="text-beauty-300 hover:text-gold-300 transition-colors">
                  +90 541 190 13 90
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-gold-400 mr-3">
                  <FaEnvelope />
                </span>
                <a href="mailto:bilgi@goksumguzellik.com" className="text-beauty-300 hover:text-gold-300 transition-colors">
                  bilgi@goksumguzellik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-beauty-800 pt-8 text-center text-beauty-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Göksum Güzellik Merkezi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-beauty-800 flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className="text-beauty-300 hover:text-gold-300 transition-colors">
        {text}
      </Link>
    </li>
  );
} 