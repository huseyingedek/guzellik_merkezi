'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Mobil menü açıkken scroll'u engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-beauty-900 text-white text-sm py-5">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <span className="mr-4 text-xs sm:text-sm">📞 +90 541 190 13 90</span>
            <a href="/iletisim"><span className="text-xs sm:text-sm">📍 Cemalpaşa Mah, Seyhan, Adana</span></a>
          </div>
          <div className="md:flex items-center space-x-4 hidden">
            <Link href="https://www.instagram.com/goksum_guzellik01" target="_blank" className="hover:text-gold-300 transition-colors">
              <FaInstagram size={16} />
            </Link>
            <Link href="https://wa.me/905411901390" target="_blank" className="hover:text-gold-300 transition-colors">
              <FaWhatsapp size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-1 shadow-sm relative z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-24 sm:h-28 md:h-32 w-48 sm:w-60 md:w-72 flex items-center justify-start -ml-4 sm:-ml-8 md:-ml-24">
              <img 
                src="/images/logo.png" 
                alt="Göksum Güzellik" 
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <NavLink href="/" label="Ana Sayfa" isActive={pathname === '/'} />
            <NavLink href="/hakkimizda" label="Hakkımızda" isActive={pathname === '/hakkimizda'} />
            <NavLink href="/hizmetlerimiz" label="Hizmetlerimiz" isActive={pathname === '/hizmetlerimiz'} />
            <NavLink href="/randevu" label="Randevu Alın" isActive={pathname === '/randevu'} />
            <NavLink href="/blog" label="Blog" isActive={pathname === '/blog'} />
            <NavLink href="/iletisim" label="İletişim" isActive={pathname === '/iletisim'} />
          </div>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              className="md:hidden text-beauty-800 focus:outline-none z-50 relative"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </nav>
      
      {/* Mobile Menu - Tam Ekran (Navigation dışında, doğrudan header içinde) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-100 z-[9999]"
          style={{ width: '100vw', height: '100vh' }}
        >
          {/* Kapatma butonu */}
          <div className="flex justify-start p-5">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center py-10">
            <div className="space-y-6 w-full text-center">
              <MobileNavLink href="/" label="Ana Sayfa" isActive={pathname === '/'} />
              <MobileNavLink href="/hakkimizda" label="Hakkımızda" isActive={pathname === '/hakkimizda'} />
              <MobileNavLink href="/hizmetlerimiz" label="Hizmetlerimiz" isActive={pathname === '/hizmetlerimiz'} />
              <MobileNavLink href="/randevu" label="Randevu Alın" isActive={pathname === '/randevu'} />
              <MobileNavLink href="/blog" label="Blog" isActive={pathname === '/blog'} />
              <MobileNavLink href="/iletisim" label="İletişim" isActive={pathname === '/iletisim'} />
            </div>
            
            <div className="mt-auto pt-10">
              <div className="flex items-center space-x-6 justify-center mb-4">
                <Link href="https://www.instagram.com/goksum_guzellik01" className="text-white hover:text-gold-300 transition-colors">
                  <FaInstagram size={24} />
                </Link>
                <Link href="https://wa.me/905411901390" className="text-white hover:text-gold-300 transition-colors">
                  <FaWhatsapp size={24} />
                </Link>
              </div>
              <p className="text-sm text-white text-center">Göksum Güzellik Merkezi</p>
              <a href="/iletisim"><p className="text-sm text-white text-center">Cemalpaşa Mah, Seyhan, Adana</p></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link 
      href={href}
      className={`font-medium text-sm md:text-base ${
        isActive 
          ? 'text-gold-500 border-b-2 border-gold-500' 
          : 'text-beauty-700 hover:text-gold-500'
      } transition-colors duration-200`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link 
      href={href}
      className={`block py-3 text-xl font-medium ${
        isActive 
          ? 'text-gold-300 font-semibold' 
          : 'text-white hover:text-gold-300'
      } transition-colors duration-200`}
    >
      {label}
    </Link>
  );
} 