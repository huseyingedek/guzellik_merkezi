'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname?.startsWith(path) ?? false;

  return (
    <header className="w-full">
      {/* Üst bilgi barı */}
      <div className="bg-luxury-900 text-white/60 text-xs py-2.5 border-b border-gold-500/20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a
              href="tel:+905411901390"
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <FaPhone className="text-gold-500/80" size={11} />
              <span>+90 541 190 13 90</span>
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                "Göksum Güzellik Salonu, Cemalpaşa, Gazipaşa Blv. No:30 Kat:1, 01120 Seyhan/Adana"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <FaMapMarkerAlt className="text-gold-500/80" size={11} />
              <span>Cemalpaşa Mah, Seyhan, Adana</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-gold-500/40 text-xs tracking-wider">Bizi takip edin</span>
            <Link href="https://www.instagram.com/goksum_guzellik01" target="_blank" className="hover:text-gold-400 transition-colors">
              <FaInstagram size={13} />
            </Link>
            <Link href="https://wa.me/905411901390" target="_blank" className="hover:text-gold-400 transition-colors">
              <FaWhatsapp size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Ana navigasyon */}
      <nav className={`bg-white border-b relative z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md border-gold-500/10" : "border-gray-100 shadow-sm"
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
            <div className="h-24 sm:h-28 md:h-32 w-48 sm:w-60 md:w-72 flex items-center justify-start -ml-4 sm:-ml-8 md:-ml-24">
              <Image src="/images/logo.webp" alt="Göksum Güzellik Salonu" fill className="object-contain object-left" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <NavLink href="/"              label="Ana Sayfa"     active={isActive("/")} />
            <NavLink href="/hakkimizda"    label="Hakkımızda"    active={isActive("/hakkimizda")} />
            <NavLink href="/hizmetlerimiz" label="Hizmetlerimiz" active={isActive("/hizmetlerimiz")} />
            <NavLink href="/blog"          label="Blog"          active={isActive("/blog")} />
            <NavLink href="/iletisim"      label="İletişim"      active={isActive("/iletisim")} />
            <Link
              href="/randevu"
              className="ml-4 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold
                         py-2.5 px-6 rounded-full transition-all duration-300
                         shadow-sm hover:shadow-gold hover:-translate-y-0.5"
            >
              Randevu Al
            </Link>
          </div>

          {!isMenuOpen && (
            <button
              className="md:hidden text-beauty-800 p-1 focus:outline-none z-50 relative"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Menüyü aç"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobil tam ekran menü */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-luxury-900 z-[9999] flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="relative h-16 w-36">
              <Image src="/images/logo.webp" alt="Göksum Güzellik" fill className="object-contain object-left" />
            </div>
            <button className="text-white/60 hover:text-white focus:outline-none p-1" onClick={() => setIsMenuOpen(false)} aria-label="Menüyü kapat">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            <div className="space-y-1">
              <MobileNavLink href="/"              label="Ana Sayfa"     active={isActive("/")}              onClose={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/hakkimizda"    label="Hakkımızda"    active={isActive("/hakkimizda")}    onClose={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/hizmetlerimiz" label="Hizmetlerimiz" active={isActive("/hizmetlerimiz")} onClose={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/blog"          label="Blog"          active={isActive("/blog")}          onClose={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/iletisim"      label="İletişim"      active={isActive("/iletisim")}      onClose={() => setIsMenuOpen(false)} />
            </div>
            <div className="mt-8">
              <Link href="/randevu" onClick={() => setIsMenuOpen(false)} className="block text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3.5 px-8 rounded-full transition-colors">
                Randevu Al
              </Link>
            </div>
          </div>

          <div className="px-6 py-5 border-t border-white/10">
            <div className="flex items-center justify-center gap-6 mb-3">
              <Link href="https://www.instagram.com/goksum_guzellik01" target="_blank" onClick={() => setIsMenuOpen(false)} className="text-white/40 hover:text-gold-400 transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://wa.me/905411901390" target="_blank" onClick={() => setIsMenuOpen(false)} className="text-white/40 hover:text-gold-400 transition-colors">
                <FaWhatsapp size={20} />
              </Link>
            </div>
            <p className="text-white/25 text-xs text-center">© 2025 Göksum Güzellik Salonu</p>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
        active ? "text-gold-600" : "text-beauty-700 hover:text-gold-500"
      }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full" />
      )}
    </Link>
  );
}

function MobileNavLink({ href, label, active, onClose }: { href: string; label: string; active: boolean; onClose: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className={`flex items-center justify-between py-4 text-lg font-medium border-b border-white/5 transition-colors duration-200 ${
        active ? "text-gold-400" : "text-white/80 hover:text-white"
      }`}
    >
      <span>{label}</span>
      {active && (
        <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
