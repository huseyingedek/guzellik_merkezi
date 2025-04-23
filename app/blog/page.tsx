'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar3, BsArrowRight } from 'react-icons/bs';
import { 
  FaSpa, 
  FaHeart, 
  FaLeaf, 
  FaQuestion,
  FaFeather
} from 'react-icons/fa';
import { GiLipstick, GiHairStrands } from 'react-icons/gi';
import { PiMaskHappy } from 'react-icons/pi';
import { IoFitnessSharp } from 'react-icons/io5';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

export default function BlogPage() {
  return (
    <main className="bg-beauty-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-beauty-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Blog"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Blog</h1>
            <p className="text-lg text-white/80">
              Güzellik, bakım ve sağlıklı yaşam hakkında yazılarımızı keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <BlogCard
              image="/images/blog-1.jpg"
              category="Cilt Bakımı"
              title="Kış Aylarında Cilt Bakımı Nasıl Yapılmalı?"
              date="15 Aralık 2023"
              excerpt="Soğuk havalarda cildinizi nasıl koruyacağınızı ve nemli tutacağınızı öğrenin."
              slug="kis-aylarinda-cilt-bakimi"
            />

            {/* Blog Post 2 */}
            <BlogCard
              image="/images/blog-2.jpg"
              category="Saç Bakımı"
              title="Doğal Saç Bakım Maskeleri"
              date="8 Ocak 2024"
              excerpt="Evde kolayca hazırlayabileceğiniz saç bakım maskeleri ile saçlarınıza canlılık katın."
              slug="dogal-sac-bakimi"
            />

            {/* Blog Post 3 */}
            <BlogCard
              image="/images/blog-3.jpg"
              category="Makyaj"
              title="2024 Bahar Makyaj Trendleri"
              date="22 Şubat 2024"
              excerpt="Bu sezonun en popüler makyaj trendlerini ve uygulama tekniklerini keşfedin."
              slug="bahar-makyaj-trendleri"
            />

            {/* Blog Post 4 */}
            <BlogCard
              image="/images/blog-4.jpg"
              category="Beslenme"
              title="Cilt Sağlığı İçin Beslenme Önerileri"
              date="10 Mart 2024"
              excerpt="Cildinizin sağlıklı ve parlak görünmesi için tüketmeniz gereken besinler."
              slug="cilt-sagligi-beslenme"
            />

            {/* Blog Post 5 */}
            <BlogCard
              image="/images/blog-5.jpg"
              category="Lazer Epilasyon"
              title="Lazer Epilasyon Hakkında Merak Edilenler"
              date="5 Nisan 2024"
              excerpt="Lazer epilasyon öncesi ve sonrası bilmeniz gereken önemli bilgiler."
              slug="lazer-epilasyon-bilgiler"
            />

            {/* Blog Post 6 */}
            <BlogCard
              image="/images/blog-6.jpg"
              category="Güzellik Trendleri"
              title="Kalıcı Makyaj Uygulamaları"
              date="17 Nisan 2024"
              excerpt="Kalıcı makyaj teknikleri ve doğru uzman seçimi hakkında kapsamlı rehber."
              slug="kalici-makyaj-uygulamalari"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// Kategori bazında icon belirleme fonksiyonu
function getCategoryIcon(category: string) {
  switch(category.toLowerCase()) {
    case 'cilt bakımı':
      return <PiMaskHappy className="text-5xl" />;
    case 'saç bakımı':
      return <GiHairStrands className="text-5xl" />;
    case 'makyaj':
      return <GiLipstick className="text-5xl" />;
    case 'beslenme':
      return <MdOutlineHealthAndSafety className="text-5xl" />;
    case 'lazer epilasyon':
      return <FaFeather className="text-5xl" />;
    case 'güzellik trendleri':
      return <FaHeart className="text-5xl" />;
    case 'tırnak bakımı':
      return <FaHeart className="text-5xl" />;
    case 'spa':
      return <FaSpa className="text-5xl" />;
    case 'sağlık':
      return <FaLeaf className="text-5xl" />;
    case 'fitness':
      return <IoFitnessSharp className="text-5xl" />;
    default:
      return <FaQuestion className="text-5xl" />;
  }
}

function BlogCard({ image, category, title, date, excerpt, slug }: {
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="relative h-56">
        {!imageError ? (
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-beauty-100 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-beauty-200 flex items-center justify-center text-beauty-700 mb-2">
              {getCategoryIcon(category)}
            </div>
            <span className="text-beauty-600 font-medium">{category}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-gold-500 text-sm font-medium mb-2">{category}</div>
        <h3 className="text-beauty-900 text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-beauty-500 text-sm mb-3">
          <BsCalendar3 className="mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-beauty-700 mb-4">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`} 
          className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700"
        >
          Devamını Oku <BsArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
} 