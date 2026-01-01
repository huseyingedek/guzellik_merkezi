import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adana Seyhan Güzellik Hizmetleri | Protez Tırnak, Lazer, Cilt Bakımı',
  description: 'Adana Seyhan\'da en iyi protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj ve bölgesel zayıflama hizmetleri. Göksum Güzellik Merkezi\'nde profesyonel ekip ve uygun fiyatlarla güzelliğinize güzellik katın.',
  keywords: 'adana protez tırnak, adana en iyi protez tırnak, seyhan protez tırnak, adana lazer epilasyon, adana en iyi lazer epilasyon, seyhan lazer epilasyon, adana cilt bakımı, adana en iyi cilt bakımı, seyhan cilt bakımı, adana kalıcı makyaj, adana bölgesel zayıflama, göksum güzellik merkezi hizmetleri',
  openGraph: {
    title: 'Göksum Güzellik Merkezi Hizmetleri | Adana Seyhan',
    description: 'Adana Seyhan\'da profesyonel güzellik hizmetleri. En iyi protez tırnak, lazer epilasyon, cilt bakımı için Göksum Güzellik Merkezi.',
    url: 'https://www.goksumguzellik.com/hizmetlerimiz',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.goksumguzellik.com/hizmetlerimiz',
  },
};

const services = [
  {
    id: 8,
    title: 'Protez Tırnak',
    description: 'Kalıcı ve estetik protez tırnak uygulamaları ile hem şık hem de bakımlı tırnaklara sahip olun. Kırılgan ve kısa tırnaklarınızı güçlendirin.',
    image: '/images/protez-tirnak.jpg',
    features: [
      'Kalıcı oje uygulaması',
      'Jel tırnak uygulaması',
      'Tırnak uzatma',
      'Nail art ve tasarım',
      'Protez tırnak bakımı'
    ],
    slug: 'protez-tirnak'
  },

  {
    id: 2,
    title: 'Cilt Bakımı',
    description: 'Cildinizin ihtiyaçlarına göre özel olarak hazırlanan bakım programları ile daha canlı, daha sağlıklı bir cilde kavuşun.',
    image: '/images/hero1.jpg',
    features: [
      'Klasik cilt bakımı',
      'Akne bakımı',
      'Anti-aging bakım',
      'Leke giderici bakım',
      'Hydrafacial bakım'
    ],
    slug: 'cilt-bakimi'
  },
  {
    id: 3,
    title: 'Lazer Epilasyon',
    description: 'Son teknoloji lazer epilasyon cihazlarımız ile istenmeyen tüylerden kalıcı olarak kurtulun. Seans aralarında kısa süreler ve etkili sonuçlar.',
    image: '/images/lazerr.png',
    features: [
      'Tüm vücut uygulamaları',
      'Yüz bölgesi uygulamaları',
      'Bikini bölgesi',
      'Erkekler için özel uygulamalar'
    ],
    slug: 'lazer-epilasyon'
  },
  {
    id: 4,
    title: 'Bölesel Zayıflama',
    description: 'Modern zayıflama teknolojileri ile vücudunuzda bölgesel incelme sağlayın. İnatçı yağlardan kurtularak daha fit bir görünüme kavuşun.',
    image: '/images/zayıflama.png',
    features: [
      'Kavitasyon uygulaması',
      'RF lipoliz tedavisi',
      'Selülit giderici uygulamalar',
      'Kişiye özel zayıflama protokolleri'
    ],
    slug: 'bolgesel-zayiflama'
  },
  {
    id: 5,
    title: 'Kalıcı Makyaj',
    description: 'Göz, kaş ve dudak için kalıcı makyaj uygulamaları ile her gün makyaj yapma derdinden kurtulun, zamandan tasarruf edin.',
    image: '/images/makyaj.png',
    features: [
      'Dudak kontür ve renklendirme',
      'Eyeliner uygulaması',
      'Dipliner uygulaması',
      'Kaş kontür'
    ],
    slug: 'kalici-makyaj'
  },
  {
    id: 6,
    title: 'Leke Tedavi',
    description: 'Yüzünüzdeki lekeleri, güneş hasarlarını ve pigmentasyon sorunlarını etkili tedavi yöntemlerimizle giderin. Daha pürüzsüz ve eşit tonda bir cilde kavuşun.',
    image: '/images/leketedavi.png',
    features: [
      'Özel leke giderici serumlar',
      'Kimyasal peeling uygulamaları',
      'Akne lekesi tedavisi',
      'Güneş lekesi tedavisi',
      'Melazma tedavisi'
    ],
    slug: 'leke-tedavi'
  },
  {
    id: 7,
    title: 'Saç Mezoterapi',
    description: 'Saç dökülmesi ve seyrelmesi sorunlarına karşı etkili mezoterapi yöntemiyle doğal ve güçlü saçlara kavuşun. Saç köklerinizi canlandırın.',
    image: '/images/sac.png',
    features: [
      'Vitamin ve mineral kokteylleri',
      'Kök hücre takviyeleri',
      'Saç kökü besleme',
      'Dökülme önleyici bakım'
    ],
    slug: 'sac-mezoterapi'
  },
  {
    id: 1,
    title: 'Cilt Analizi',
    description: 'Uzman estetisyenlerimiz tarafından detaylı cilt analizi yapılarak, cildinizin ihtiyaçları belirlenir. Cilt tipinize özel bakım programları oluşturulur.',
    image: '/images/analiz_cilt.png',
    features: [
      'Detaylı cilt tipi analizi',
      'Cilt problemlerinin tespiti',
      'Kişiye özel bakım önerileri',
      'Ürün kullanım tavsiyeleri'
    ],
    slug: 'cilt-analizi'
  },
];

export default function ServicesPage() {
  return (
    <>      
      {/* Page Banner */}
      <div className="relative h-[250px] sm:h-[300px] bg-beauty-900">
        <div className="absolute inset-0 bg-beauty-900/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero1.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 md:mb-4">Hizmetlerimiz</h1>
          <div className="flex items-center gap-2">
            <div className="w-6 sm:w-8 h-0.5 bg-gold-300"></div>
            <p className="text-white text-sm md:text-base">Kaliteli Güzellik & Bakım</p>
            <div className="w-6 sm:w-8 h-0.5 bg-gold-300"></div>
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-beauty-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gold-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/hizmetlerimiz/${service.slug}`} className="text-white font-semibold text-sm px-4 py-2 border border-white/50 rounded-full hover:bg-white/10 transition-colors">
                      Detaylı Bilgi
                    </Link>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-beauty-800 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-beauty-600 text-sm mb-3 md:mb-4">{service.description}</p>
                  <div className="mb-3 md:mb-4">
                    <h4 className="font-medium text-beauty-700 mb-1.5 md:mb-2 text-sm">Hizmet Kapsamı:</h4>
                    <ul className="space-y-0.5 md:space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-beauty-600 text-sm flex items-start">
                          <span className="text-gold-500 mr-2 flex-shrink-0">•</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-beauty-600 text-sm flex items-start">
                          <span className="text-gold-500 mr-2 flex-shrink-0">•</span>
                          <span className="italic">Ve daha fazlası...</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <Link
                    href={`/hizmetlerimiz/${service.slug}`}
                    className="text-gold-500 font-medium text-sm flex items-center"
                  >
                    Daha Fazla
                    <svg
                      className="ml-1 w-3 h-3 md:w-4 md:h-4"
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
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-10 md:py-16 bg-beauty-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-beauty-900 mb-3 md:mb-4">
            Hizmetlerimiz Hakkında Bilgi Almak İster misiniz?
          </h2>
          <p className="text-beauty-700 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Detaylı bilgi almak ve randevu oluşturmak için bize ulaşabilirsiniz. Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/iletisim"
              className="bg-gold-500 hover:bg-gold-600 text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-colors duration-300 font-semibold text-sm md:text-base"
            >
              Bize Ulaşın
            </Link>
            <Link
              href="/randevu"
              className="bg-white border border-gold-500 text-gold-500 hover:bg-gold-50 py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-colors duration-300 font-semibold text-sm md:text-base"
            >
              Randevu Alın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}