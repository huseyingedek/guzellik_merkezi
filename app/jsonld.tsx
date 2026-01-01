'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const JsonLd = () => {
  const pathname = usePathname();
  
  // Ana sayfa için Local Business şeması - Güçlendirilmiş
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': 'https://www.goksumguzellik.com/#organization',
    name: 'Göksum Güzellik Merkezi',
    alternateName: ['Göksum Güzellik', 'Göksum Güzellik Salonu', 'Adana Göksum Güzellik'],
    image: [
      'https://www.goksumguzellik.com/images/logo.png',
      'https://www.goksumguzellik.com/images/hero1.jpg',
      'https://www.goksumguzellik.com/images/goksum.jpg'
    ],
    url: 'https://www.goksumguzellik.com',
    telephone: '+90 541 190 13 90',
    email: 'goksumguzellik796@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
      addressLocality: 'Seyhan',
      addressRegion: 'Adana',
      postalCode: '01120',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.0159,
      longitude: 35.3213
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Adana'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Seyhan'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Çukurova'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Yüreğir'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61574776514786',
      'https://www.instagram.com/goksum_guzellik01'
    ],
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Cash, Credit Card',
    description: 'Adana Seyhan\'da profesyonel güzellik hizmetleri sunan Göksum Güzellik Merkezi. Protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel zayıflama hizmetleri. Adana\'nın en iyi güzellik merkezi.',
    slogan: 'Güzelliğinize Profesyonel Dokunuş',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Güzellik Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Protez Tırnak',
            description: 'Adana\'da en iyi protez tırnak, jel tırnak ve kalıcı oje uygulamaları'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lazer Epilasyon',
            description: 'Adana\'da profesyonel lazer epilasyon hizmeti'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cilt Bakımı',
            description: 'Adana\'da profesyonel cilt bakımı ve hydrafacial hizmetleri'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kalıcı Makyaj',
            description: 'Adana\'da profesyonel kalıcı makyaj ve microblading hizmetleri'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bölgesel Zayıflama',
            description: 'Adana\'da kavitasyon ve bölgesel zayıflama hizmetleri'
          }
        }
      ]
    }
  };

  // Hizmetlerimiz sayfası için geliştirilmiş hizmet şeması
  const servicesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Göksum Güzellik Merkezi Hizmetleri',
    description: 'Adana Seyhan\'da profesyonel güzellik hizmetleri',
    numberOfItems: 8,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Protez Tırnak',
          alternateName: 'Adana En İyi Protez Tırnak',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/protez-tirnak',
          description: 'Adana Seyhan\'da profesyonel protez tırnak, jel tırnak ve kalıcı oje uygulamaları. Kırılgan tırnaklarınızı güçlendirin.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Tırnak Bakımı'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Lazer Epilasyon',
          alternateName: 'Adana En İyi Lazer Epilasyon',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/lazer-epilasyon',
          description: 'Adana Seyhan\'da son teknoloji lazer epilasyon. Alexandrite ve Diode lazer ile kalıcı tüy azaltma.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Lazer Epilasyon'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Cilt Bakımı',
          alternateName: 'Adana En İyi Cilt Bakımı',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/cilt-bakimi',
          description: 'Adana Seyhan\'da profesyonel cilt bakımı. Hydrafacial, akne bakımı, anti-aging ve leke giderici bakımlar.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Cilt Bakımı'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Kalıcı Makyaj',
          alternateName: 'Adana En İyi Kalıcı Makyaj',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/kalici-makyaj',
          description: 'Adana Seyhan\'da profesyonel kalıcı makyaj. Microblading, kaş kontür, dudak kontür ve eyeliner.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Kalıcı Makyaj'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'Bölgesel Zayıflama',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/bolgesel-zayiflama',
          description: 'Adana Seyhan\'da bölgesel zayıflama. Kavitasyon, RF lipoliz ve selülit giderme uygulamaları.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Bölgesel Zayıflama'
        }
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Service',
          name: 'Leke Tedavisi',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/leke-tedavi',
          description: 'Adana Seyhan\'da leke tedavisi. Güneş lekesi, akne lekesi ve melazma tedavisi.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Cilt Tedavisi'
        }
      },
      {
        '@type': 'ListItem',
        position: 7,
        item: {
          '@type': 'Service',
          name: 'Saç Mezoterapisi',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/sac-mezoterapi',
          description: 'Adana Seyhan\'da saç mezoterapisi. Saç dökülmesi tedavisi ve saç güçlendirme.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Saç Tedavisi'
        }
      },
      {
        '@type': 'ListItem',
        position: 8,
        item: {
          '@type': 'Service',
          name: 'Cilt Analizi',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/cilt-analizi',
          description: 'Adana Seyhan\'da ücretsiz cilt analizi. Modern cihazlarla cilt tipinizi belirleyin.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          },
          areaServed: 'Adana, Seyhan',
          serviceType: 'Cilt Analizi'
        }
      }
    ]
  };

  // Hakkımızda sayfası için Organization şeması
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Göksum Güzellik Merkezi',
    url: 'https://www.goksumguzellik.com',
    logo: 'https://www.goksumguzellik.com/images/logo.png',
    image: 'https://www.goksumguzellik.com/images/goksum.jpg',
    description: 'Adana Seyhan\'da profesyonel güzellik ve bakım hizmetleri sunan güzellik merkezi. Protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel zayıflama hizmetleri.',
    founder: {
      '@type': 'Person',
      name: 'Elif Dartar',
      jobTitle: 'Güzellik Uzmanı'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
      addressLocality: 'Seyhan',
      addressRegion: 'Adana',
      postalCode: '01120',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.0159',
      longitude: '35.3213'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Adana'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Seyhan'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90 541 190 13 90',
      contactType: 'customer service',
      availableLanguage: 'Turkish'
    },
    sameAs: [
      'https://www.instagram.com/goksum_guzellik01',
      'https://www.facebook.com/profile.php?id=61574776514786'
    ],
    priceRange: '₺₺'
  };

  // Randevu sayfası için şema
  const appointmentPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Göksum Güzellik Merkezi - Online Randevu',
    url: 'https://www.goksumguzellik.com/randevu',
    description: 'Adana Seyhan\'da Göksum Güzellik Merkezi\'nden online randevu alın. Protez tırnak, lazer epilasyon, cilt bakımı için hemen randevu oluşturun.',
    provider: {
      '@type': 'BeautySalon',
      name: 'Göksum Güzellik Merkezi',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
        addressLocality: 'Seyhan',
        addressRegion: 'Adana',
        postalCode: '01120',
        addressCountry: 'TR'
      },
      telephone: '+90 541 190 13 90'
    },
    areaServed: {
      '@type': 'City',
      name: 'Adana'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'Online Randevu',
      serviceUrl: 'https://www.goksumguzellik.com/randevu',
      availableLanguage: {
        '@type': 'Language',
        name: 'Turkish'
      }
    }
  };

  // İletişim sayfası için şema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'İletişim - Göksum Güzellik Merkezi',
    url: 'https://www.goksumguzellik.com/iletisim',
    description: 'Göksum Güzellik Merkezi iletişim bilgileri. Adana Seyhan\'da Gazipaşa Bulvarı üzerinde bulunuyoruz.',
    mainEntity: {
      '@type': 'BeautySalon',
      name: 'Göksum Güzellik Merkezi',
      telephone: '+90 541 190 13 90',
      email: 'goksumguzellik796@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
        addressLocality: 'Seyhan',
        addressRegion: 'Adana',
        postalCode: '01120',
        addressCountry: 'TR'
      }
    }
  };

  // Hizmet detay sayfaları için Service şemaları
  const serviceSchemas: Record<string, object> = {
    '/hizmetlerimiz/protez-tirnak': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Protez Tırnak - Adana En İyi Protez Tırnak',
      alternateName: ['Adana Protez Tırnak', 'Seyhan Protez Tırnak', 'Adana Jel Tırnak'],
      description: 'Adana Seyhan\'da profesyonel protez tırnak uygulaması. Jel tırnak, kalıcı oje, nail art ve tırnak uzatma hizmetleri. Kırılgan tırnaklarınızı güçlendirin.',
      url: 'https://www.goksumguzellik.com/hizmetlerimiz/protez-tirnak',
      image: 'https://www.goksumguzellik.com/images/protez-tirnak.jpg',
      provider: {
        '@type': 'BeautySalon',
        name: 'Göksum Güzellik Merkezi',
        url: 'https://www.goksumguzellik.com',
        telephone: '+90 541 190 13 90',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Seyhan',
          addressRegion: 'Adana'
        }
      },
      areaServed: {
        '@type': 'City',
        name: 'Adana'
      },
      serviceType: 'Protez Tırnak',
      offers: {
        '@type': 'Offer',
        priceRange: '₺400 - ₺1200',
        priceCurrency: 'TRY'
      }
    },
    '/hizmetlerimiz/lazer-epilasyon': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Lazer Epilasyon - Adana En İyi Lazer Epilasyon',
      alternateName: ['Adana Lazer Epilasyon', 'Seyhan Lazer Epilasyon', 'Adana Alexandrite Lazer'],
      description: 'Adana Seyhan\'da son teknoloji lazer epilasyon hizmeti. Alexandrite ve Diode lazer teknolojisi ile kalıcı tüy azaltma. Tüm vücut, yüz, bikini bölgesi.',
      url: 'https://www.goksumguzellik.com/hizmetlerimiz/lazer-epilasyon',
      image: 'https://www.goksumguzellik.com/images/lazerr.png',
      provider: {
        '@type': 'BeautySalon',
        name: 'Göksum Güzellik Merkezi',
        url: 'https://www.goksumguzellik.com',
        telephone: '+90 541 190 13 90',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Seyhan',
          addressRegion: 'Adana'
        }
      },
      areaServed: {
        '@type': 'City',
        name: 'Adana'
      },
      serviceType: 'Lazer Epilasyon',
      offers: {
        '@type': 'Offer',
        priceRange: '₺300 - ₺2000',
        priceCurrency: 'TRY'
      }
    },
    '/hizmetlerimiz/cilt-bakimi': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Cilt Bakımı - Adana En İyi Cilt Bakımı',
      alternateName: ['Adana Cilt Bakımı', 'Seyhan Cilt Bakımı', 'Adana Hydrafacial'],
      description: 'Adana Seyhan\'da profesyonel cilt bakımı. Hydrafacial, akne bakımı, anti-aging ve leke giderici bakımlar. Profesyonel ürünlerle cildinizi yenileyin.',
      url: 'https://www.goksumguzellik.com/hizmetlerimiz/cilt-bakimi',
      image: 'https://www.goksumguzellik.com/images/hero1.jpg',
      provider: {
        '@type': 'BeautySalon',
        name: 'Göksum Güzellik Merkezi',
        url: 'https://www.goksumguzellik.com',
        telephone: '+90 541 190 13 90',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Seyhan',
          addressRegion: 'Adana'
        }
      },
      areaServed: {
        '@type': 'City',
        name: 'Adana'
      },
      serviceType: 'Cilt Bakımı',
      offers: {
        '@type': 'Offer',
        priceRange: '₺800 - ₺1500',
        priceCurrency: 'TRY'
      }
    },
    '/hizmetlerimiz/kalici-makyaj': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Kalıcı Makyaj - Adana En İyi Kalıcı Makyaj',
      alternateName: ['Adana Kalıcı Makyaj', 'Adana Microblading', 'Adana Kaş Kontür'],
      description: 'Adana Seyhan\'da profesyonel kalıcı makyaj. Microblading, kaş kontür, dudak kontür ve eyeliner. Doğal görünümlü kalıcı makyaj.',
      url: 'https://www.goksumguzellik.com/hizmetlerimiz/kalici-makyaj',
      image: 'https://www.goksumguzellik.com/images/makyaj.png',
      provider: {
        '@type': 'BeautySalon',
        name: 'Göksum Güzellik Merkezi',
        url: 'https://www.goksumguzellik.com',
        telephone: '+90 541 190 13 90',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Seyhan',
          addressRegion: 'Adana'
        }
      },
      areaServed: {
        '@type': 'City',
        name: 'Adana'
      },
      serviceType: 'Kalıcı Makyaj',
      offers: {
        '@type': 'Offer',
        priceRange: '₺1500 - ₺3000',
        priceCurrency: 'TRY'
      }
    }
  };

  // FAQ şeması (tüm sayfalar için genel)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Adana\'da en iyi protez tırnak nerede yaptırılır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adana Seyhan\'da Göksum Güzellik Merkezi, profesyonel protez tırnak uygulamaları ile en iyi adreslerden biridir. Jel tırnak, kalıcı oje ve nail art hizmetleri sunulmaktadır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Adana\'da lazer epilasyon fiyatları ne kadar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Göksum Güzellik Merkezi\'nde lazer epilasyon fiyatları bölgeye göre ₺300 ile ₺2000 arasında değişmektedir. Tüm vücut paketleri için özel fiyatlar sunulmaktadır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Göksum Güzellik Merkezi nerede?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Göksum Güzellik Merkezi, Adana Seyhan\'da Cemalpaşa Mahallesi, Gazipaşa Bulvarı No:30 Kat:1 adresinde bulunmaktadır.'
        }
      },
      {
        '@type': 'Question',
        name: 'Adana\'da cilt bakımı nerede yaptırılır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adana Seyhan\'da Göksum Güzellik Merkezi, hydrafacial, akne bakımı ve anti-aging cilt bakımı hizmetleri sunmaktadır. Profesyonel cilt analizi ile size özel bakım programları hazırlanır.'
        }
      }
    ]
  };

  let schemaData: object | undefined;
  let additionalSchema: object | null = null;

  if (pathname === '/') {
    schemaData = homePageSchema;
    additionalSchema = faqSchema;
  } else if (pathname === '/hizmetlerimiz') {
    schemaData = servicesPageSchema;
  } else if (pathname === '/hakkimizda') {
    schemaData = aboutPageSchema;
  } else if (pathname === '/randevu') {
    schemaData = appointmentPageSchema;
  } else if (pathname === '/iletisim') {
    schemaData = contactPageSchema;
  } else if (pathname && serviceSchemas[pathname]) {
    schemaData = serviceSchemas[pathname];
  }

  if (!schemaData) return null;

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {additionalSchema && (
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(additionalSchema) }}
        />
      )}
    </>
  );
};

export default JsonLd;
