import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', closeMenu);
    return () => router.events.off('routeChangeComplete', closeMenu);
  }, [router]);

  const isActive = (path: string) => {
    return router.pathname === path ? 'text-gold-500' : '';
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar */}
      <div className="bg-beauty-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-gold-400" />
              <a href="tel:+905411901390" className="hover:text-gold-300 transition-colors">
                +90 541 190 13 90
              </a>
            </div>
            <div>
              <p className="text-sm">Göksum Güzellik Merkezi, Adana'da profesyonel güzellik hizmetleri</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61574776514786" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/goksum_guzellik01" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://wa.me/905411901390" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`container mx-auto px-4 flex justify-between items-center ${isScrolled ? 'text-beauty-900' : 'text-beauty-800'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-display text-2xl font-bold text-beauty-900">
            G<span className="text-gold-500">ö</span>ksum
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className={`nav-link ${isActive('/')}`}>
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className={`nav-link ${isActive('/hakkimizda')}`}>
            Hakkımızda
          </Link>

          {/* Hizmetler Dropdown */}
          <div className="relative group">
            <button
              className={`nav-link flex items-center ${router.pathname.startsWith('/hizmetlerimiz') ? 'text-gold-500' : ''}`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Hizmetlerimiz <RiArrowDownSLine className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg overflow-hidden z-10 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top">
              <Link href="/hizmetlerimiz/protez-tirnak" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Protez Tırnak
              </Link>
              <Link href="/hizmetlerimiz/cilt-bakimi" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Cilt Bakımı
              </Link>
              <Link href="/hizmetlerimiz/lazer-epilasyon" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Lazer Epilasyon
              </Link>
              <Link href="/hizmetlerimiz/bolgesel-zayiflama" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Bölgesel Zayıflama
              </Link>
              <Link href="/hizmetlerimiz/kalici-makyaj" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Kalıcı Makyaj
              </Link>
              <Link href="/hizmetlerimiz/leke-tedavi" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Leke Tedavi
              </Link>
              <Link href="/hizmetlerimiz/sac-mezoterapi" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Saç Mezoterapi
              </Link>
              <Link href="/hizmetlerimiz/cilt-analizi" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100">
                Cilt Analizi
              </Link>
              <Link href="/hizmetlerimiz" className="block px-4 py-2 text-sm text-beauty-900 hover:bg-beauty-100 font-medium">
                Tüm Hizmetlerimiz
              </Link>
            </div>
          </div>

          <Link href="/blog" className={`nav-link ${isActive('/blog')}`}>
            Blog
          </Link>
          <Link href="/iletisim" className={`nav-link ${isActive('/iletisim')}`}>
            İletişim
          </Link>
          <Link href="/randevu" className="button-primary py-2 px-4 text-sm">
            Randevu Al
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-beauty-900 z-40 flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <FaTimes size={24} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-white">
          <Link href="/" className="text-xl font-medium hover:text-gold-400">
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className="text-xl font-medium hover:text-gold-400">
            Hakkımızda
          </Link>

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              className="text-xl font-medium hover:text-gold-400 flex items-center"
              onClick={toggleDropdown}
            >
              Hizmetlerimiz <RiArrowDownSLine className={`ml-1 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} />
            </button>
            {dropdownOpen && (
              <div className="mt-4 space-y-2 flex flex-col items-center">
                <Link href="/hizmetlerimiz/protez-tirnak" className="text-lg text-beauty-300 hover:text-gold-400">
                  Protez Tırnak
                </Link>
                <Link href="/hizmetlerimiz/cilt-bakimi" className="text-lg text-beauty-300 hover:text-gold-400">
                  Cilt Bakımı
                </Link>
                <Link href="/hizmetlerimiz/lazer-epilasyon" className="text-lg text-beauty-300 hover:text-gold-400">
                  Lazer Epilasyon
                </Link>
                <Link href="/hizmetlerimiz/bolgesel-zayiflama" className="text-lg text-beauty-300 hover:text-gold-400">
                  Bölgesel Zayıflama
                </Link>
                <Link href="/hizmetlerimiz/kalici-makyaj" className="text-lg text-beauty-300 hover:text-gold-400">
                  Kalıcı Makyaj
                </Link>
                <Link href="/hizmetlerimiz/leke-tedavi" className="text-lg text-beauty-300 hover:text-gold-400">
                  Leke Tedavi
                </Link>
                <Link href="/hizmetlerimiz/sac-mezoterapi" className="text-lg text-beauty-300 hover:text-gold-400">
                  Saç Mezoterapi
                </Link>
                <Link href="/hizmetlerimiz/cilt-analizi" className="text-lg text-beauty-300 hover:text-gold-400">
                  Cilt Analizi
                </Link>
                <Link href="/hizmetlerimiz" className="text-lg text-beauty-300 hover:text-gold-400 font-medium">
                  Tüm Hizmetlerimiz
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-xl font-medium hover:text-gold-400">
            Blog
          </Link>
          <Link href="/iletisim" className="text-xl font-medium hover:text-gold-400">
            İletişim
          </Link>
          <Link href="/randevu" className="button-primary py-3 px-6 mt-4">
            Randevu Al
          </Link>
        </div>
        <div className="p-6 flex justify-center space-x-6 text-white">
          <a href="https://www.facebook.com/profile.php?id=61574776514786" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 text-xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/goksum_guzellik01" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 text-xl">
            <FaInstagram />
          </a>
          <a href="https://wa.me/905411901390" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 text-xl">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
} 