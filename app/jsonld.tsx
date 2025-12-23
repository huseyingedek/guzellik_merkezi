'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const JsonLd = () => {
  const pathname = usePathname();
  
  // Ana sayfa için Local Business şeması
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Göksum Güzellik Merkezi',
    image: 'https://www.goksumguzellik.com/images/logo.png',
    '@id': 'https://www.goksumguzellik.com',
    url: 'https://www.goksumguzellik.com',
    telephone: '+90 541 190 13 90',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
      addressLocality: 'Seyhan',
      addressRegion: 'Adana',
      postalCode: '01240',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.0000,
      longitude: 35.3213
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
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
    priceRange: '$$',
    description: 'Adana\'nın merkezinde profesyonel güzellik ve bakım hizmetleri sunan Göksum Güzellik Merkezi. Güzellik merkezimizde cilt bakımı, lazer epilasyon, kalıcı makyaj ve daha fazlası.',
    servesCuisine: 'Beauty Services'
  };

  // Hizmetlerimiz sayfası için hizmet şeması
  const servicesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Cilt Bakımı',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/cilt-bakimi',
          description: 'Cildinizin ihtiyaçlarına göre özel olarak hazırlanan bakım programları ile daha canlı, daha sağlıklı bir cilde kavuşun.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Lazer Epilasyon',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/lazer-epilasyon',
          description: 'Son teknoloji lazer epilasyon cihazlarımız ile istenmeyen tüylerden kalıcı olarak kurtulun.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Bölgesel Zayıflama',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/bolgesel-zayiflama',
          description: 'Modern zayıflama teknolojileri ile vücudunuzda bölgesel incelme sağlayın. İnatçı yağlardan kurtularak daha fit bir görünüme kavuşun.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Leke Tedavi',
          url: 'https://www.goksumguzellik.com/hizmetlerimiz/leke-tedavi',
          description: 'Yüzünüzdeki lekeleri, güneş hasarlarını ve pigmentasyon sorunlarını etkili tedavi yöntemlerimizle giderin.',
          provider: {
            '@type': 'BeautySalon',
            name: 'Göksum Güzellik Merkezi',
            url: 'https://www.goksumguzellik.com'
          }
        }
      }
    ]
  };

  // Hakkımızda sayfası için Organization şeması
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Adana Güzellik Merkezi',
    url: 'https://www.goksumguzellik.com',
    logo: 'https://www.goksumguzellik.com/images/logo.png',
    image: 'https://www.goksumguzellik.com/images/salon.jpg',
    description: 'Adana Seyhan\'de profesyonel güzellik ve bakım hizmetleri sunan güzellik merkezi. Lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel incelme tedavileri için Adana\'nın tercih edilen güzellik merkezi.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
      addressLocality: 'Seyhan',
      addressRegion: 'Adana',
      postalCode: '01240',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.0159',
      longitude: '35.3465'
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
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.instagram.com/goksumguzellik/',
      'https://www.facebook.com/goksumguzellik/'
    ],
    priceRange: '₺₺',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    makesOffer: [
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
          description: 'Adana\'da profesyonel cilt bakımı hizmetleri'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kalıcı Makyaj',
          description: 'Adana\'da profesyonel kalıcı makyaj hizmetleri'
        }
      }
    ]
  };

  // Randevu sayfası için şema
  const appointmentPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Göksum Güzellik Merkezi - Randevu Hizmeti',
    url: 'https://www.goksumguzellik.com/randevu',
    description: 'Adana\'nın merkezinde profesyonel güzellik ve bakım hizmetleri sunan Göksum Güzellik Merkezi\'nden kolayca randevu alın. Güzellik merkezimizde sizleri bekliyoruz.',
    provider: {
      '@type': 'BeautySalon',
      name: 'Göksum Güzellik Merkezi',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1',
        addressLocality: 'Seyhan',
        addressRegion: 'Adana',
        postalCode: '01240',
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
      availableLanguage: {
        '@type': 'Language',
        name: 'Turkish'
      }
    }
  };

  let schemaData;

  if (pathname === '/') {
    schemaData = homePageSchema;
  } else if (pathname === '/hizmetlerimiz') {
    schemaData = servicesPageSchema;
  } else if (pathname === '/hakkimizda') {
    schemaData = aboutPageSchema;
  } else if (pathname === '/randevu') {
    schemaData = appointmentPageSchema;
  }

  if (!schemaData) return null;

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JsonLd; 