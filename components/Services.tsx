import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 1,
    name: 'Cilt Analizi',
    description: 'Uzman estetisyenlerimiz tarafından yapılan detaylı cilt analizi ile cildinizin ihtiyaçlarını belirleyin.',
    icon: '/images/analiz_cilt.png',
    link: '/hizmetlerimiz/cilt-analizi',
  },
  {
    id: 2,
    name: 'Bölgesel Zayıflama',
    description: 'Modern zayıflama teknolojileri ile vücudunuzda bölgesel incelme sağlayın. İnatçı yağlardan kurtulun.',
    icon: '/images/zayıflama.png',
    link: '/hizmetlerimiz/bolgesel-zayiflama',
  },
  {
    id: 3,
    name: 'Lazer Epilasyon',
    description: 'Son teknoloji lazer epilasyon cihazlarımız ile istenmeyen tüylerden kalıcı olarak kurtulun.',
    icon: '/images/lazerr.png',
    link: '/hizmetlerimiz/lazer-epilasyon',
  },
  {
    id: 4,
    name: 'Leke Tedavi',
    description: 'Yüzünüzdeki lekeleri, güneş hasarlarını ve pigmentasyon sorunlarını etkili tedavi yöntemlerimizle giderin.',
    icon: '/images/leketedavi.png',
    link: '/hizmetlerimiz/leke-tedavi',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-beauty-900 mb-4">
            Hizmetlerimiz
          </h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gold-300"></div>
            <div className="text-gold-500">
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
              </svg>
            </div>
            <div className="w-12 h-0.5 bg-gold-300"></div>
          </div>
          <p className="text-beauty-600 max-w-2xl mx-auto">
            Göksum Güzellik Merkezi olarak, sizi en iyi hissettirecek ve görünmenizi sağlayacak
            profesyonel bakım hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-beauty-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={service.link} className="text-white font-semibold text-sm px-4 py-2 border border-white/50 rounded-full hover:bg-white/10 transition-colors">
                    Detaylı Bilgi
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-beauty-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-beauty-600 text-sm mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-gold-500 font-medium text-sm flex items-center"
                >
                  Daha Fazla
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/hizmetlerimiz"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white py-3 px-8 rounded-full transition-colors duration-300 font-semibold"
          >
            Tüm Hizmetlerimiz
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 