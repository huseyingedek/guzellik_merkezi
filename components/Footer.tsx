import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#0E0D09' }}>
      <div className="h-px w-full"
           style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="relative h-32 w-72 mb-5 -ml-1">
              <Image src="/images/logo.webp" alt="Göksum Güzellik Salonu" fill className="object-contain object-left brightness-90" />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Göksum Güzellik Salonu: Adana Seyhan Cemalpaşa'da profesyonel güzellik ve bakım hizmetleri. Modern teknoloji, uzman ekip ve lüks deneyim.
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://www.facebook.com/profile.php?id=61574776514786" icon={<FaFacebook size={15} />} />
              <SocialLink href="https://www.instagram.com/goksum_guzellik01" icon={<FaInstagram size={15} />} />
              <SocialLink href="https://wa.me/905411901390" icon={<FaWhatsapp size={15} />} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A84C' }}>
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2.5">
              {[
                ['Cilt Bakımı', '/hizmetlerimiz/cilt-bakimi'],
                ['Protez Tırnak', '/hizmetlerimiz/protez-tirnak'],
                ['Lazer Epilasyon', '/hizmetlerimiz/lazer-epilasyon'],
                ['Bölgesel Zayıflama', '/hizmetlerimiz/bolgesel-zayiflama'],
                ['Kalıcı Makyaj', '/hizmetlerimiz/kalici-makyaj'],
                ['Leke Tedavi', '/hizmetlerimiz/leke-tedavi'],
                ['Saç Mezoterapisi', '/hizmetlerimiz/sac-mezoterapi'],
                ['Cilt Analizi', '/hizmetlerimiz/cilt-analizi'],
              ].map(([text, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors duration-200 hover:text-gold-400"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A84C' }}>
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2.5">
              {[
                ['Hakkımızda', '/hakkimizda'],
                ['Hizmetlerimiz', '/hizmetlerimiz'],
                ['Randevu Al', '/randevu'],
                ['Blog', '/blog'],
                ['İletişim', '/iletisim'],
              ].map(([text, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors duration-200 hover:text-gold-400"
                        style={{ color: 'rgba(255,255,255,0.45)' }}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A84C' }}>
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} size={14} />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Cemalpaşa, Gazipaşa Blv. No:30 Kat:1 D:2, 01120 Seyhan / Adana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone style={{ color: '#C9A84C' }} size={13} />
                <a href="tel:+905411901390" className="text-sm transition-colors duration-200 hover:text-gold-400"
                   style={{ color: 'rgba(255,255,255,0.45)' }}>+90 541 190 13 90</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope style={{ color: '#C9A84C' }} size={13} />
                <a href="mailto:goksumguzellik796@gmail.com"
                   className="text-sm transition-colors duration-200 hover:text-gold-400"
                   style={{ color: 'rgba(255,255,255,0.45)' }}>goksumguzellik796@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/randevu"
                    className="inline-flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-300"
                    style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)', color: '#D8B266' }}>
                Randevu Al
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs"
             style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)' }}>
          <p>&copy; {new Date().getFullYear()} Göksum Güzellik Salonu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:text-gold-400"
       style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
      {icon}
    </a>
  );
}
