// Services data and utility functions
import { Metadata } from 'next';

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  longTitle?: string;
  image: string;
  bannerImage?: string;
  features: string[];
  benefits?: string[];
  duration?: string;
  priceRange?: string;
  recommendedFor?: string;
  process?: ServiceProcess[];
  additionalContent?: string;
  relatedServices?: string[];
  ctaText?: string;
  slug: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Cilt Analizi',
    subtitle: 'Profesyonel Cilt Değerlendirmesi',
    description: 'Uzman estetisyenlerimiz tarafından detaylı cilt analizi yapılarak, cildinizin ihtiyaçları belirlenir. Cilt tipinize özel bakım programları oluşturulur.',
    longDescription: 'Göksum Güzellik\'te yapılan detaylı cilt analizi, cilt sağlığınızın mevcut durumunu değerlendirmek ve size özel bakım planları oluşturmak için önemli bir adımdır. Modern cihazlarımız ve uzman ekibimiz ile cildinizin tipini, nem seviyesini, elastikiyetini, gözenek yapısını ve olası sorunları tespit ederek en uygun bakım ve tedavi yöntemlerini belirleriz.',
    image: '/images/analiz_cilt.png',
    bannerImage: '/images/hero1.jpg',
    features: [
      'Detaylı cilt tipi analizi',
      'Cilt problemlerinin tespiti',
      'Kişiye özel bakım önerileri',
      'Ürün kullanım tavsiyeleri'
    ],
    benefits: [
      'Cilt tipinize uygun doğru ürünleri kullanma fırsatı',
      'Cilt sorunlarına erken müdahale imkanı',
      'Kişiselleştirilmiş bakım programı',
      'Uzun vadede cilt sağlığının korunması'
    ],
    duration: '30-45 dakika',
    priceRange: '₺250 - ₺500',
    recommendedFor: 'Cilt bakımına başlamadan önce tüm müşterilerimize önerilir',
    process: [
      {
        title: 'Ön Konsültasyon',
        description: 'Cilt bakım geçmişiniz ve mevcut cilt durumunuz hakkında bilgi alınır'
      },
      {
        title: 'Cilt Temizliği',
        description: 'Analiz öncesi cildiniz özel ürünlerle temizlenir'
      },
      {
        title: 'Cihazla Analiz',
        description: 'Özel cilt analiz cihazı ile cildinizin farklı katmanları incelenir'
      },
      {
        title: 'Sonuç Değerlendirmesi',
        description: 'Analiz sonuçları uzmanımız tarafından değerlendirilir ve size açıklanır'
      },
      {
        title: 'Bakım Planı',
        description: 'Size özel bakım ve ürün önerileri sunulur'
      }
    ],
    relatedServices: ['cilt-bakimi', 'leke-tedavi'],
    ctaText: 'Cildinizin gerçek ihtiyaçlarını öğrenmek ve profesyonel bakım planlamak için cilt analizi randevusu alın.',
    slug: 'cilt-analizi'
  },
  {
    id: 2,
    title: 'Cilt Bakımı',
    subtitle: 'Profesyonel Cilt Bakım Uygulamaları',
    description: 'Cildinizin ihtiyaçlarına göre özel olarak hazırlanan bakım programları ile daha canlı, daha sağlıklı bir cilde kavuşun.',
    longDescription: 'Göksum Güzellik\'te sunduğumuz profesyonel cilt bakımı hizmetleri, cildinizin ihtiyaçlarına göre özel olarak tasarlanır. Klasik cilt bakımından akne tedavisine, anti-aging bakımdan leke giderici uygulamalara kadar geniş bir yelpazede hizmet sunuyoruz. Kullandığımız kaliteli ürünler ve modern teknolojiler sayesinde, cildinizin en iyi haline kavuşmasına yardımcı oluyoruz.',
    image: '/images/hero1.jpg',
    bannerImage: '/images/hero1.jpg',
    features: [
      'Klasik cilt bakımı',
      'Akne bakımı',
      'Anti-aging bakım',
      'Leke giderici bakım',
      'Hydrafacial bakım'
    ],
    benefits: [
      'Cilt dokusunda gözle görülür iyileşme',
      'Cilt tonunda eşitlenme',
      'Gözenek sıkılaşması',
      'Akne ve sivilcelerde azalma',
      'Nem dengesinin sağlanması',
      'Daha genç ve canlı bir görünüm'
    ],
    duration: '45-90 dakika',
    priceRange: '₺500 - ₺1.500',
    recommendedFor: 'Her cilt tipine uygun bakım seçenekleri mevcuttur',
    process: [
      {
        title: 'Cilt Analizi',
        description: 'Doğru bakım için cilt tipiniz ve ihtiyaçlarınız belirlenir'
      },
      {
        title: 'Derin Temizlik',
        description: 'Ciltteki kirler ve makyaj kalıntıları derinlemesine temizlenir'
      },
      {
        title: 'Peeling Uygulaması',
        description: 'Ölü deriler nazikçe uzaklaştırılır'
      },
      {
        title: 'Masaj',
        description: 'Kan dolaşımını artıran özel masaj teknikleri uygulanır'
      },
      {
        title: 'Maske Uygulaması',
        description: 'Cilt tipinize uygun özel maske uygulanır'
      },
      {
        title: 'Nemlendirme',
        description: 'Bakım sonrası cilt uygun ürünlerle nemlendirilir'
      }
    ],
    relatedServices: ['cilt-analizi', 'leke-tedavi'],
    ctaText: 'Cildinize ihtiyacı olan bakımı vermek ve daha sağlıklı bir görünüm kazanmak için hemen randevu alın.',
    slug: 'cilt-bakimi'
  },
  {
    id: 3,
    title: 'Lazer Epilasyon',
    subtitle: 'Kalıcı Tüy Azaltma Çözümü',
    description: 'Son teknoloji lazer epilasyon cihazlarımız ile istenmeyen tüylerden kalıcı olarak kurtulun. Seans aralarında kısa süreler ve etkili sonuçlar.',
    longDescription: 'Göksum Güzellik\'te kullandığımız son teknoloji lazer epilasyon cihazları, istenmeyen tüylerden kalıcı olarak kurtulmanızı sağlar. Farklı cilt ve tüy tiplerine uygun lazer sistemlerimiz ile güvenli ve etkili sonuçlar elde ederiz. Uzman ekibimiz, minimum acı ve maksimum konfor ile işleminizi gerçekleştirir.',
    image: '/images/lazerr.png',
    bannerImage: '/images/lazerr.png',
    features: [
      'Tüm vücut uygulamaları',
      'Yüz bölgesi uygulamaları',
      'Bikini bölgesi',
      'Erkekler için özel uygulamalar'
    ],
    benefits: [
      'Kalıcı tüy azaltma',
      'Tıraş olmaktan kurtulma',
      'Batık sorunlarında azalma',
      'Pürüzsüz bir cilt',
      'Uzun vadeli tasarruf'
    ],
    duration: '15-90 dakika (bölgeye göre değişir)',
    priceRange: '₺250 - ₺5.000',
    recommendedFor: 'Kalıcı tüy çözümü isteyen kadın ve erkek herkes için uygundur',
    process: [
      {
        title: 'Ön Konsültasyon',
        description: 'Cilt ve tüy tipiniz değerlendirilir, beklentileriniz konuşulur'
      },
      {
        title: 'Bölge Hazırlığı',
        description: 'İşlem yapılacak bölge temizlenir ve tıraşlanır'
      },
      {
        title: 'Lazer Uygulama',
        description: 'Özel soğutma sistemi ile konforlu lazer uygulaması yapılır'
      },
      {
        title: 'Sonrası Bakım',
        description: 'İşlem sonrası cilt soğutulur ve nemlendirici uygulanır'
      },
      {
        title: 'Takip Seans Planlaması',
        description: 'Bir sonraki seans için uygun zaman belirlenir'
      }
    ],
    relatedServices: ['bolgesel-zayiflama'],
    ctaText: 'İstenmeyen tüylerden kalıcı olarak kurtulmak için hemen lazer epilasyon programımıza başlayın.',
    slug: 'lazer-epilasyon'
  },
  {
    id: 4,
    title: 'Bölgesel Zayıflama',
    subtitle: 'Etkili İncelme Çözümleri',
    description: 'Modern zayıflama teknolojileri ile vücudunuzda bölgesel incelme sağlayın. İnatçı yağlardan kurtularak daha fit bir görünüme kavuşun.',
    longDescription: 'Göksum Güzellik\'te sunduğumuz bölgesel zayıflama ve incelme tedavileri, diyet ve egzersizle çözülemeyen inatçı yağ bölgelerini hedefler. Kavitasyon, RF lipoliz, soğuk lipoliz gibi teknolojiler kullanarak hücre düzeyinde yağ yakımını tetikler, selülit görünümünü azaltır ve vücut hatlarınızı şekillendiririz.',
    image: '/images/zayıflama.png',
    bannerImage: '/images/zayıflama.png',
    features: [
      'Kavitasyon uygulaması',
      'RF lipoliz tedavisi',
      'Selülit giderici uygulamalar',
      'Kişiye özel zayıflama protokolleri'
    ],
    benefits: [
      'İnatçı yağ bölgelerinde azalma',
      'Selülit görünümünde iyileşme',
      'Vücut hatlarının şekillenmesi',
      'Deri sıkılaşması',
      'Daha fit bir görünüm'
    ],
    duration: '30-60 dakika',
    priceRange: '₺400 - ₺1.000',
    recommendedFor: 'Diyet ve sporla gitmeyen bölgesel yağları olan kişiler',
    process: [
      {
        title: 'Vücut Analizi',
        description: 'Problem bölgeler belirlenir ve ölçümler alınır'
      },
      {
        title: 'Tedavi Planı',
        description: 'Size özel teknoloji ve protokol belirlenir'
      },
      {
        title: 'Uygulama',
        description: 'Belirlenen bölgelere uygun teknoloji ile işlem uygulanır'
      },
      {
        title: 'Lenfatik Masaj',
        description: 'Yağ atılımını hızlandırmak için lenfatik masaj yapılır'
      },
      {
        title: 'Sonuç Değerlendirmesi',
        description: 'Her birkaç seansta bir ölçüm alınarak ilerleme değerlendirilir'
      }
    ],
    relatedServices: ['lazer-epilasyon'],
    ctaText: 'Bölgesel incelme ve daha fit bir vücut için teknolojik zayıflama çözümlerimizden faydalanın.',
    slug: 'bolgesel-zayiflama'
  },
  {
    id: 5,
    title: 'Kalıcı Makyaj',
    subtitle: 'Uzun Süreli Güzellik Çözümü',
    description: 'Göz, kaş ve dudak için kalıcı makyaj uygulamaları ile her gün makyaj yapma derdinden kurtulun, zamandan tasarruf edin.',
    longDescription: 'Göksum Güzellik\'te uygulanan kalıcı makyaj hizmetleri, profesyonel ekibimiz tarafından hijyenik ortamda gerçekleştirilir. Kaş, eyeliner, dipliner ve dudak kontürü gibi uygulamalarla doğal görünümlü, uzun süreli güzellik çözümleri sunuyoruz. Özel pigmentler ve modern teknikler kullanarak sizin için en uygun şekil ve rengi belirliyor, her sabah makyaj yapma ihtiyacınızı ortadan kaldırıyoruz.',
    image: '/images/makyaj.png',
    bannerImage: '/images/makyaj.png',
    features: [
      'Dudak kontür ve renklendirme',
      'Eyeliner uygulaması',
      'Dipliner uygulaması',
      'Kaş kontür'
    ],
    benefits: [
      'Her gün mükemmel makyajlı görünüm',
      'Zaman tasarrufu',
      'Doğal ve kalıcı sonuçlar',
      'Suya ve tere dayanıklılık',
      'Makyaj malzemelerine daha az ihtiyaç'
    ],
    duration: '1-2 saat',
    priceRange: '₺1.000 - ₺3.500',
    recommendedFor: 'Makyaj yapmaya vakti olmayanlar, spor yapanlar, alerjisi olanlar',
    process: [
      {
        title: 'Ön Çizim',
        description: 'Yüz anatomisine uygun şekilde çizim yapılır ve onayınız alınır'
      },
      {
        title: 'Renk Seçimi',
        description: 'Ten ve saç renginize uygun pigment renkleri belirlenir'
      },
      {
        title: 'Anestezi Uygulaması',
        description: 'Konfor için bölgeye uygun anestezik krem uygulanır'
      },
      {
        title: 'Uygulama',
        description: 'Özel kalıcı makyaj cihazı ile pigmentler derinin üst katmanına yerleştirilir'
      },
      {
        title: 'Bakım Önerileri',
        description: 'İyileşme sürecindeki bakım ve korunma önerileri anlatılır'
      }
    ],
    relatedServices: ['cilt-bakimi'],
    ctaText: 'Her sabah mükemmel makyajlı uyanmak ve zamandan tasarruf etmek için kalıcı makyaj uygulamalarımızdan yararlanın.',
    slug: 'kalici-makyaj'
  },
  {
    id: 6,
    title: 'Leke Tedavi',
    subtitle: 'Eşit Tonda Pürüzsüz Cilt',
    description: 'Yüzünüzdeki lekeleri, güneş hasarlarını ve pigmentasyon sorunlarını etkili tedavi yöntemlerimizle giderin. Daha pürüzsüz ve eşit tonda bir cilde kavuşun.',
    longDescription: 'Göksum Güzellik\'te leke tedavisi için kullandığımız ileri teknolojiler ve aktif içerikli ürünler, farklı tiplerdeki cilt lekelerini hedefler. Akne izleri, güneş lekeleri, melazma veya hormonal pigmentasyonlar için özel protokoller uygulayarak cildinizin ton eşitliğini sağlıyoruz. Kişiselleştirilmiş tedavi planlarımız, cildinizin ihtiyaçlarına göre cihaz ve kimyasal peeling kombinasyonlarından oluşur.',
    image: '/images/leketedavi.png',
    bannerImage: '/images/leketedavi.png',
    features: [
      'Özel leke giderici serumlar',
      'Kimyasal peeling uygulamaları',
      'Akne lekesi tedavisi',
      'Güneş lekesi tedavisi',
      'Melazma tedavisi'
    ],
    benefits: [
      'Cilt tonunda eşitlenme',
      'Lekelerde açılma ve azalma',
      'Daha aydınlık bir cilt görünümü',
      'Cilt dokusunda iyileşme',
      'Öz güvende artış'
    ],
    duration: '30-60 dakika',
    priceRange: '₺500 - ₺2.000',
    recommendedFor: 'Akne lekeleri, güneş lekeleri, melazma sorunu yaşayanlar',
    process: [
      {
        title: 'Leke Analizi',
        description: 'Leke tipi ve derinliği belirlenir'
      },
      {
        title: 'Cilt Hazırlığı',
        description: 'Tedaviye hazırlık için özel ürünler kullanılır'
      },
      {
        title: 'Aktif Tedavi',
        description: 'Leke tipine uygun cihaz veya kimyasal ajanlar uygulanır'
      },
      {
        title: 'Koruyucu Bakım',
        description: 'Leke oluşumunu engelleyici ürünler uygulanır'
      },
      {
        title: 'Güneş Koruması',
        description: 'Yüksek faktörlü güneş koruması uygulanır'
      }
    ],
    relatedServices: ['cilt-bakimi', 'cilt-analizi'],
    ctaText: 'Cildinizde ton eşitsizliği ve lekelerden kurtulmak, daha aydınlık bir görünüme kavuşmak için leke tedavi programlarımızdan faydalanın.',
    slug: 'leke-tedavi'
  },
  {
    id: 7,
    title: 'Saç Mezoterapi',
    subtitle: 'Doğal Saç Güçlendirme Yöntemi',
    description: 'Saç dökülmesi ve seyrelmesi sorunlarına karşı etkili mezoterapi yöntemiyle doğal ve güçlü saçlara kavuşun. Saç köklerinizi canlandırın.',
    longDescription: 'Göksum Güzellik\'te uygulanan saç mezoterapisi, saç dökülmesini durdurma ve saç büyümesini teşvik etme amacı taşır. Saç derisine vitamin, mineral, amino asit ve büyüme faktörleri içeren özel kokteyller mikroenjeksiyon yöntemiyle uygulanır. Bu yöntem saç köklerini besler, kan dolaşımını artırır ve saç foliküllerini yeniden aktif hale getirir.',
    image: '/images/sac.png',
    bannerImage: '/images/sac.png',
    features: [
      'Vitamin ve mineral kokteylleri',
      'Kök hücre takviyeleri',
      'Saç kökü besleme',
      'Dökülme önleyici bakım'
    ],
    benefits: [
      'Saç dökülmesinde azalma',
      'Saç kalitesinde artış',
      'Saç tellerinde kalınlaşma',
      'Daha canlı ve parlak saçlar',
      'Yeni saç çıkışının teşvik edilmesi'
    ],
    duration: '30-45 dakika',
    priceRange: '₺600 - ₺1.200',
    recommendedFor: 'Saç dökülmesi yaşayanlar, ince telli saçı olanlar',
    process: [
      {
        title: 'Saç Analizi',
        description: 'Saç dökülmesinin nedeni ve saç kalitesi değerlendirilir'
      },
      {
        title: 'Saç Derisi Temizliği',
        description: 'Saç derisi özel ürünlerle temizlenir'
      },
      {
        title: 'Kokteyl Hazırlığı',
        description: 'Saç tipinize özel vitamin kokteyli hazırlanır'
      },
      {
        title: 'Mezoterapi Uygulaması',
        description: 'Mikroenjeksiyon yöntemiyle kokteyl saç derisine uygulanır'
      },
      {
        title: 'Masaj',
        description: 'Absorbsiyonu artırmak için hafif masaj yapılır'
      }
    ],
    relatedServices: [],
    ctaText: 'Saç dökülmesi sorunlarınıza son vermek ve daha güçlü, canlı saçlara kavuşmak için saç mezoterapisi programımıza başlayın.',
    slug: 'sac-mezoterapi'
  }
];

/**
 * Get service data by slug
 * @param slug The service slug
 * @returns The service data or undefined if not found
 */
export function getServiceData(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

/**
 * Get paths for static site generation
 * @returns Array of paths for all services
 */
export function getServicesStaticPaths() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

/**
 * Get all services
 * @returns Array of all services
 */
export function getAllServices(): Service[] {
  return services;
}

/**
 * Get featured services (first 4 services)
 * @returns Array of featured services
 */
export function getFeaturedServices(): Service[] {
  return services.slice(0, 4);
} 