import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsCheckCircleFill, BsClock, BsArrowLeft, BsClockHistory, BsCurrencyDollar, BsPeople } from 'react-icons/bs';
import { FaClock, FaMoneyBill } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineArrowForward } from 'react-icons/md';
import { getServicesStaticPaths, getServiceData } from '@/lib/data';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

// Hizmetler veritabanı
const services = [
  {
    id: 8,
    title: 'Protez Tırnak',
    description: 'Kalıcı ve estetik protez tırnak uygulamaları ile hem şık hem de bakımlı tırnaklara sahip olun. Kırılgan ve kısa tırnaklarınızı güçlendirin.',
    image: '/images/protez-tirnak.png',
    longDescription: `
      Göksum Güzellik Merkezi'nde sunduğumuz profesyonel protez tırnak uygulamaları, tırnaklarınızı güçlendirirken şık ve bakımlı bir görünüm sağlar.
      
      Kalıcı oje, jel tırnak ve protez tırnak uygulamalarımızda, tırnak sağlığınıza zarar vermeden uzun süreli dayanıklılık ve estetik bir görünüm sunuyoruz. Uzman tırnak teknisyenlerimiz, en son trendleri takip ederek size özel tasarımlar yaratır.
      
      Kırılgan, kısa veya hasarlı tırnaklarınızı güçlendirmek, uzatmak veya sadece şık bir görünüm elde etmek için protez tırnak uygulamalarımızı tercih edebilirsiniz.
    `,
    features: [
      'Kalıcı oje uygulaması',
      'Jel tırnak uygulaması',
      'Tırnak uzatma',
      'Nail art ve tasarım',
      'Protez tırnak bakımı',
      'French manikür',
      'Ombre ve gradient teknikler',
      'Taş ve süsleme uygulamaları'
    ],
    benefits: [
      'Uzun süre dayanıklı tırnaklar',
      'Kırılgan tırnakların güçlenmesi',
      'Kısa tırnakların uzatılması',
      'Şık ve bakımlı görünüm',
      'Çeşitli renk ve tasarım seçenekleri',
      'Su ve deterjanla bozulmayan yapı'
    ],
    faq: [
      {
        question: 'Protez tırnak ne kadar süre dayanır?',
        answer: 'Bakım ve kullanıma bağlı olarak, jel tırnak uygulamaları 3-4 hafta, kalıcı oje ise 2-3 hafta dayanabilir. Düzenli dolgu ile bu süre uzatılabilir.'
      },
      {
        question: 'Protez tırnak doğal tırnağa zarar verir mi?',
        answer: 'Profesyonel uygulama ve doğru bakım ile protez tırnak, doğal tırnağınıza zarar vermez. Aksine kırılgan tırnakları korur ve güçlendirir.'
      },
      {
        question: 'Protez tırnak bakımı nasıl yapılmalıdır?',
        answer: 'Tırnaklarınızı aşırı kimyasal maddelerden koruyun, eldiven kullanın ve düzenli olarak tırnak bakım kremlerinizi uygulayın. Çatlak veya kırık varsa hemen tamir ettirin.'
      }
    ],
    duration: '60-120 dakika',
    price: '₺400 - ₺1200 (Uygulamaya Göre Değişir)',
    slug: 'protez-tirnak'
  },
  {
    id: 1,
    title: 'Cilt Analizi',
    description: 'Uzman estetisyenlerimiz tarafından detaylı cilt analizi yapılarak, cildinizin ihtiyaçları belirlenir. Cilt tipinize özel bakım programları oluşturulur.',
    image: '/images/analiz_cilt.png',
    longDescription: `
      Etkili bir cilt bakımının ilk adımı, doğru bir cilt analizidir. Göksum Güzellik Merkezi'nde uzman estetisyenlerimiz, modern cilt analiz cihazları yardımıyla cildinizin durumunu detaylı bir şekilde inceliyor.
      
      Cilt analizimiz, cildinizin nem seviyesi, elastikiyeti, gözenek yapısı, kırışıklık durumu, leke ve pigmentasyon, sebum üretimi gibi birçok faktörü değerlendirerek cildinizin genel sağlık profilini ortaya çıkarır.
      
      Analiz sonrasında, yalnızca sizin cildinize özel, kişiselleştirilmiş bakım programları ve ürün önerileri sunuyoruz. Bu sayede cildinizin gerçekten ihtiyacı olan bakımı almasını sağlıyoruz.
    `,
    features: [
      'Detaylı cilt tipi analizi',
      'Cilt problemlerinin tespiti',
      'Kişiye özel bakım önerileri',
      'Ürün kullanım tavsiyeleri',
      'UV hasarı tespiti',
      'Nem ve yağ dengesinin ölçümü',
      'Pigmentasyon analizi'
    ],
    benefits: [
      'Cildinizin gerçek ihtiyaçlarını keşfedin',
      'Gereksiz ürün kullanımını önleyin',
      'Cildinize özel bakım rutini oluşturun',
      'Cilt problemlerinizin kaynağını öğrenin',
      'Cildinizin geleceğini koruyun'
    ],
    faq: [
      {
        question: 'Cilt analizi ne kadar sürer?',
        answer: 'Cilt analizi işlemi ortalama 30 dakika sürmektedir. Bu süre içinde cildinizin detaylı incelemesi yapılır ve sonuçlar değerlendirilir.'
      },
      {
        question: 'Cilt analizi için önceden hazırlık gerekli mi?',
        answer: 'Daha doğru sonuçlar için cilt analizine makyajsız olarak gelmenizi ve analiz öncesinde yüzünüzü özel bir ürünle temizlememizi öneririz.'
      },
      {
        question: 'Hangi sıklıkta cilt analizi yaptırmalıyım?',
        answer: 'Cildinizin durumuna göre değişmekle birlikte, genellikle her mevsim değişiminde veya yılda 2 kez cilt analizi yaptırmanızı tavsiye ederiz.'
      }
    ],
    duration: '30 dakika',
    price: 'Ücretsiz (Bakım Hizmeti İle Birlikte)',
    slug: 'cilt-analizi'
  },
  {
    id: 2,
    title: 'Cilt Bakımı',
    description: 'Cildinizin ihtiyaçlarına göre özel olarak hazırlanan bakım programları ile daha canlı, daha sağlıklı bir cilde kavuşun.',
    image: '/images/hero1.jpg',
    longDescription: `
      Göksum Güzellik Merkezi'nde sunduğumuz profesyonel cilt bakımı uygulamaları, cildinizin kendini yenilemesine ve doğal parlaklığını yeniden kazanmasına yardımcı olur.
      
      Cilt analizi sonrasında, cilt tipinize ve ihtiyaçlarınıza özel olarak seçilen bakım programımızda; derin temizlik, peeling, canlandırma maskesi, serum uygulaması, nemlendirme gibi adımlar bulunmaktadır.
      
      Kullandığımız tüm ürünler, cildinize zarar vermeden maksimum fayda sağlayacak şekilde seçilmiş, profesyonel kalitede ürünlerdir. Düzenli cilt bakımı ile cildiniz daha sağlıklı, daha parlak ve daha genç bir görünüme kavuşacaktır.
    `,
    features: [
      'Klasik cilt bakımı',
      'Akne bakımı',
      'Anti-aging bakım',
      'Leke giderici bakım',
      'Hydrafacial bakım',
      'Vitamin C bakımı',
      'Gençleştirme bakımı',
      'Hassas cilt bakımı'
    ],
    benefits: [
      'Cildinizin daha canlı ve parlak görünmesi',
      'Akne ve sivilcelerin azalması',
      'Gözenek sıkılaşması',
      'Cilt tonunun eşitlenmesi',
      'Kırışıklıkların görünümünün azalması',
      'Cildin nem dengesinin korunması'
    ],
    faq: [
      {
        question: 'Cilt bakımı ne sıklıkta yaptırılmalıdır?',
        answer: 'Cilt tipinize ve problemlerinize bağlı olarak, genellikle 3-4 haftada bir cilt bakımı yaptırmanızı öneririz.'
      },
      {
        question: 'Cilt bakımı sonrası nelere dikkat etmeliyim?',
        answer: 'Bakım sonrası 24 saat boyunca makyaj yapmamanızı, güneşten korunmanızı ve cildinizi nemlendirmenizi tavsiye ederiz.'
      },
      {
        question: 'Akne bakımı klasik cilt bakımından farklı mıdır?',
        answer: 'Evet, akne bakımı klasik bakıma göre daha farklı ürünler ve teknikler içerir. Özellikle akneye yönelik antibakteriyel ürünler kullanılır.'
      }
    ],
    duration: '60-90 dakika',
    price: '₺800 - ₺1500 (Bakım Türüne Göre Değişir)',
    slug: 'cilt-bakimi'
  },
  {
    id: 3,
    title: 'Lazer Epilasyon',
    description: 'Son teknoloji lazer epilasyon cihazlarımız ile istenmeyen tüylerden kalıcı olarak kurtulun. Seans aralarında kısa süreler ve etkili sonuçlar.',
    image: '/images/lazerr.png',
    longDescription: `
      Göksum Güzellik Merkezi'nde en son teknoloji lazer epilasyon cihazları kullanarak, istenmeyen tüylerden kalıcı olarak kurtulmanızı sağlıyoruz.
      
      Kullandığımız lazer sistemleri, farklı cilt ve kıl tiplerine göre ayarlanabilir, bu sayede her müşterimize özel, etkili ve güvenli bir epilasyon deneyimi sunuyoruz.
      
      Lazer epilasyon, ışık enerjisini kullanarak kıl köklerini hedefler ve onları kalıcı olarak etkisiz hale getirir. Her seans sonrasında, kıl yoğunluğu azalır ve sonunda pürüzsüz bir cilde kavuşursunuz.
    `,
    features: [
      'Tüm vücut uygulamaları',
      'Yüz bölgesi uygulamaları',
      'Bikini bölgesi',
      'Erkekler için özel uygulamalar',
      'Alexandrite lazer teknolojisi',
      'Diode lazer teknolojisi',
      'Nd:YAG lazer uygulaması'
    ],
    benefits: [
      'Kalıcı tüy azalması',
      'Jilet yanığı ve batık sorununun çözümü',
      'Zamandan tasarruf',
      'Uzun vadede ekonomik çözüm',
      'Pürüzsüz ve bakımlı bir cilt'
    ],
    faq: [
      {
        question: 'Lazer epilasyon acı verir mi?',
        answer: 'Modern cihazlarımız soğutma sistemlerine sahiptir ve acıyı minimuma indirir. Genel olarak hafif bir ısı hissi ve lastik bant çekme hissi şeklinde tanımlanır.'
      },
      {
        question: 'Kaç seans gereklidir?',
        answer: 'Kişinin kıl yapısına, hormonlarına ve tedavi edilen bölgeye bağlı olarak değişir. Genellikle 6-8 seans yeterli olur, ancak bazı durumlarda ek seanslar gerekebilir.'
      },
      {
        question: 'Seanslar arası ne kadar süre beklemeliyim?',
        answer: 'Tedavi edilen bölgeye bağlı olarak, genellikle yüz için 4 hafta, vücut için 6-8 hafta aralıklarla seans planlanır.'
      }
    ],
    duration: 'Bölgeye göre 15-120 dakika',
    price: '₺300 - ₺2000 (Bölgeye Göre Değişir)',
    slug: 'lazer-epilasyon'
  },
  {
    id: 4,
    title: 'Bölesel Zayıflama',
    description: 'Modern zayıflama teknolojileri ile vücudunuzda bölgesel incelme sağlayın. İnatçı yağlardan kurtularak daha fit bir görünüme kavuşun.',
    image: '/images/zayıflama.png',
    longDescription: `
      Göksum Güzellik Merkezi'nde sunduğumuz bölgesel zayıflama uygulamaları, diyet ve egzersizle zor verilen inatçı yağ depolarını hedefleyerek, vücudunuzu yeniden şekillendirmenize yardımcı olur.
      
      Kavitasyon, radyofrekans, vakum ve lipoliz teknolojilerini bir arada kullanan bölgesel zayıflama uygulamalarımız, hücrelerde biriken yağların parçalanmasını ve vücuttan atılmasını sağlar.
      
      Özellikle karın, basen, kalça, bacak içi ve kol bölgelerindeki inatçı yağlara karşı etkili olan bu uygulamalar, düzenli seanslarla ölçülerinizde gözle görülür bir azalma sağlar.
    `,
    features: [
      'Kavitasyon uygulaması',
      'RF lipoliz tedavisi',
      'Selülit giderici uygulamalar',
      'Kişiye özel zayıflama protokolleri',
      'Vakum terapisi',
      'Lenf drenaj masajı',
      'G5 masajı'
    ],
    benefits: [
      'İnatçı bölgesel yağların azalması',
      'Selülit görünümünün iyileşmesi',
      'Cilt sıkılaşması',
      'Vücut ölçülerinde incelme',
      'Kan dolaşımının düzenlenmesi',
      'Toksinlerin vücuttan atılması'
    ],
    faq: [
      {
        question: 'Bölgesel zayıflama uygulamaları acı verir mi?',
        answer: 'Hayır, bu uygulamalar genellikle ağrısız veya minimum rahatsızlıkla gerçekleştirilir. Hafif bir sıcaklık veya titreşim hissi olabilir.'
      },
      {
        question: 'Kaç seans sonra sonuç görülür?',
        answer: 'Kişiye ve hedeflenen bölgeye bağlı olarak değişmekle birlikte, genellikle 4-6 seans sonra gözle görülür sonuçlar elde edilir.'
      },
      {
        question: 'Bölgesel zayıflama ile kaç cm incelme sağlanabilir?',
        answer: 'Düzenli seanslar ve doğru uygulama ile 4-8 cm arasında incelme sağlamak mümkündür.'
      }
    ],
    duration: '40-60 dakika',
    price: '₺500 - ₺1000 (Bölgeye Göre Değişir)',
    slug: 'bolgesel-zayiflama'
  
  },
  {
    id: 5,
    title: 'Kalıcı Makyaj',
    description: 'Göz, kaş ve dudak için kalıcı makyaj uygulamaları ile her gün makyaj yapma derdinden kurtulun, zamandan tasarruf edin.',
    image: '/images/makyaj.png',
    longDescription: `
      Göksum Güzellik Merkezi'nde sunduğumuz kalıcı makyaj uygulamaları, her sabah makyaj yapma zahmetinden sizi kurtarırken, doğal ve etkileyici bir görünüm sağlar.
      
      Uygulamalarımızda kullandığımız renk pigmentleri, tamamen organik ve hipoalerjenik olup, doğal bir görünüm için özel olarak seçilir. Uzman kalıcı makyaj artistlerimiz, yüz şeklinize ve isteklerinize uygun tasarımlar yaratır.
      
      Kaş kontürü, dudak kontürü, eyeliner ve dipliner gibi farklı uygulamalarla, yüzünüzün çekici hatlarını vurgulayabilir ve kusursuz bir görünüm elde edebilirsiniz.
    `,
    features: [
      'Dudak kontür ve renklendirme',
      'Eyeliner uygulaması',
      'Dipliner uygulaması',
      'Kaş kontür',
      'Microblading',
      'Pudralama tekniği',
      'Ombre kaş',
      '3D teknikler'
    ],
    benefits: [
      'Her sabah zaman kazanma',
      'Su ve terle bozulmayan makyaj',
      'Doğal ve etkileyici görünüm',
      'İnce kaşları dolgunlaştırma',
      'Simetrik ve kusursuz hatlar',
      'Uzun süreli kalıcılık (1-3 yıl)'
    ],
    faq: [
      {
        question: 'Kalıcı makyaj acı verir mi?',
        answer: 'Uygulama öncesi anestezik krem kullanılır, böylece acı minimuma indirilir. Genellikle hafif bir rahatsızlık hissi şeklinde tanımlanır.'
      },
      {
        question: 'Kalıcı makyaj ne kadar süre kalır?',
        answer: 'Uygulamaya, cilt tipine ve bakıma bağlı olarak 1-3 yıl arasında kalıcıdır. Zaman içinde solmaya başladığında rötuş yapılabilir.'
      },
      {
        question: 'İyileşme süreci nasıldır?',
        answer: 'İlk hafta içinde kabuklama ve soyulma olabilir. Tam iyileşme 2-4 hafta sürer. Bu süre zarfında güneşten korunma ve nemlendirme önemlidir.'
      }
    ],
    duration: '1-2 saat',
    price: '₺1500 - ₺3000 (Uygulamaya Göre Değişir)',
    slug: 'kalici-makyaj'
  },
  {
    id: 6,
    title: 'Leke Tedavi',
    description: 'Yüzünüzdeki lekeleri, güneş hasarlarını ve pigmentasyon sorunlarını etkili tedavi yöntemlerimizle giderin. Daha pürüzsüz ve eşit tonda bir cilde kavuşun.',
    image: '/images/leketedavi.png',
    longDescription: `
      Göksum Güzellik Merkezi'nde sunduğumuz leke tedavileri, cildinizde oluşan güneş lekelerini, akne izlerini, melazma ve diğer pigmentasyon bozukluklarını hedefler.
      
      Tedavilerimizde kimyasal peeling, leke giderici serumlar, özel tedavi maskeleri ve lazer teknolojileri kullanılarak, lekelerin açılması ve yeni leke oluşumunun önlenmesi sağlanır.
      
      Uzman estetisyenlerimiz, cildinizin durumuna ve leke tipine göre özel tedavi protokolleri hazırlar. Düzenli uygulamalarla, cildiniz daha eşit tonlu ve pürüzsüz bir görünüme kavuşur.
    `,
    features: [
      'Özel leke giderici serumlar',
      'Kimyasal peeling uygulamaları',
      'Akne lekesi tedavisi',
      'Güneş lekesi tedavisi',
      'Melazma tedavisi',
      'Konsantre C vitamini uygulaması',
      'Dermapen ile serum infüzyonu',
      'Aydınlatıcı maskeler'
    ],
    benefits: [
      'Daha eşit ton ve pürüzsüz cilt',
      'Lekelerin açılması',
      'Cilt bariyerinin güçlenmesi',
      'Yeni leke oluşumunun önlenmesi',
      'Ciltte aydınlanma ve parlaklık',
      'Akne izlerinin hafiflemesi'
    ],
    faq: [
      {
        question: 'Leke tedavisi ne kadar sürer?',
        answer: 'Lekenin tipine, büyüklüğüne ve derinliğine bağlı olarak 6-10 seans gerekebilir. Seanslar genellikle 2-3 hafta arayla planlanır.'
      },
      {
        question: 'Tedavi sonrası güneşe çıkabilir miyim?',
        answer: 'Tedavi süresince ve sonrasında güneş koruması çok önemlidir. Minimum SPF 50 güneş koruyucu kullanmalı ve direkt güneş ışığından kaçınmalısınız.'
      },
      {
        question: 'Lekelerim tamamen geçer mi?',
        answer: 'Tedavi sonucunda, çoğu lekede belirgin bir açılma ve iyileşme görülür. Ancak, leke tipine ve cildinizin tepkisine bağlı olarak sonuçlar değişebilir.'
      }
    ],
    duration: '30-60 dakika',
    price: '₺500 - ₺1500 (Uygulamaya Göre Değişir)',
    slug: 'leke-tedavi'
  },
  {
    id: 7,
    title: 'Saç Mezoterapi',
    description: 'Saç dökülmesi ve seyrelmesi sorunlarına karşı etkili mezoterapi yöntemiyle doğal ve güçlü saçlara kavuşun. Saç köklerinizi canlandırın.',
    image: '/images/sac.png',
    longDescription: `
      Göksum Güzellik Merkezi'nde sunduğumuz saç mezoterapisi, saç dökülmesi, seyrelmesi ve zayıflaması sorunlarına karşı etkili bir çözüm sunar.
      
      Saç mezoterapisi, saç derisine vitamin, mineral, amino asit ve peptit içeren özel kokteyllerin enjekte edilmesi işlemidir. Bu uygulama, saç köklerini besler, güçlendirir ve yeni saç büyümesini teşvik eder.
      
      Stres, hormonsal değişimler, genetik faktörler veya beslenme eksikliklerine bağlı saç problemlerinde etkili olan mezoterapi, düzenli uygulamalarla saçlarınızın daha gür, daha sağlıklı ve daha parlak görünmesini sağlar.
    `,
    features: [
      'Vitamin ve mineral kokteylleri',
      'Kök hücre takviyeleri',
      'Saç kökü besleme',
      'Dökülme önleyici bakım',
      'Saç derisi canlandırma',
      'Anti-DHT formüller',
      'PRP ile kombine uygulamalar'
    ],
    benefits: [
      'Saç dökülmesinin azalması',
      'Mevcut saçların güçlenmesi',
      'Yeni saç çıkışının uyarılması',
      'Saç kalitesinin artması',
      'Saç derisinin sağlığının iyileşmesi',
      'Daha dolgun ve canlı saçlar'
    ],
    faq: [
      {
        question: 'Saç mezoterapisi acılı mıdır?',
        answer: 'Uygulama öncesi anestezik krem kullanıldığından, acı minimum düzeydedir. Genellikle hafif bir batma hissi şeklinde tanımlanır.'
      },
      {
        question: 'Kaç seans saç mezoterapisi gerekir?',
        answer: 'Genellikle ilk ay haftada bir, sonraki iki ay 15 günde bir, sonrasında aylık seanslar şeklinde toplam 8-10 seans uygulanır.'
      },
      {
        question: 'Saç mezoterapisinin sonuçları ne zaman görülür?',
        answer: 'İlk sonuçlar genellikle 3-4 seans sonra görülmeye başlar. Tam sonuç için 8-10 seans tamamlanmalıdır.'
      }
    ],
    duration: '30-45 dakika',
    price: '₺800 - ₺1500 (Uygulama Alanına Göre Değişir)',
    slug: 'sac-mezoterapi'
  },
  
];

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceData(params.slug);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
      description: 'Aradığınız hizmet bulunamadı.',
    };
  }

  return {
    title: `${service.title} | Adana Göksum Güzellik`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Adana'nın En İyi Güzellik Hizmetleri`,
      description: service.description,
      url: `https://www.goksumguzellik.com/hizmetlerimiz/${service.slug}`,
      type: 'website',
    },
  };
}

// Dynamic route generation
export async function generateStaticParams() {
  return getServicesStaticPaths();
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Page Banner */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={service.bannerImage || service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {service.title}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              {service.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Service Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {service.longTitle || service.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line mb-6">
                {service.longDescription || service.description}
              </p>
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Bu Hizmette Neler Sunuyoruz?
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section (if available) */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Faydaları
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process Section (if available) */}
            {service.process && service.process.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hizmet Süreci
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-gold-500 pl-4 py-2"
                    >
                      <h4 className="font-medium text-gray-800">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Content (if available) */}
            {service.additionalContent && (
              <div className="prose max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: service.additionalContent }}
                />
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-beauty-50 p-6 md:p-8 rounded-lg text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Daha Fazla Bilgi Almak İster misiniz?
              </h3>
              <p className="text-gray-700 mb-4">
                {service.ctaText ||
                  'Bu hizmet hakkında daha fazla bilgi almak veya randevu oluşturmak için bizimle iletişime geçin.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/iletisim">
                  <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600">
                    İletişime Geçin
                  </Button>
                </Link>
                <Link href="/randevu">
                  <Button className="w-full sm:w-auto bg-white text-gold-500 border border-gold-500 hover:bg-beauty-50">
                    Randevu Alın
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service Sidebar */}
          <div className="order-first lg:order-last">
            <div className="sticky top-24 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-beauty-600 py-4 px-6">
                  <h3 className="text-lg font-semibold text-white">
                    Hizmet Bilgileri
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {/* Recommended For */}
                  {service.recommendedFor && (
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <BsPeople className="text-gold-500" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Kimler İçin Uygun
                        </p>
                        <p className="text-gray-800">{service.recommendedFor}</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Link href="/randevu">
                      <Button className="w-full bg-gold-500 hover:bg-gold-600">
                        Randevu Alın
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-100 py-4 px-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      İlgili Hizmetler
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      {service.relatedServices.map((slug) => {
                        const relatedService = getServiceData(slug);
                        if (!relatedService) return null;
                        
                        return (
                          <Link
                            key={slug}
                            href={`/hizmetlerimiz/${slug}`}
                            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <span className="text-gray-800">
                              {relatedService.title}
                            </span>
                            <MdOutlineArrowForward className="text-gold-500" size={16} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 