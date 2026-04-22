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
  seoContent?: string;
  relatedServices?: string[];
  ctaText?: string;
  slug: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Cilt Analizi',
    subtitle: 'Adana\'da Ücretsiz Cilt Analizi',
    description: 'Adana Seyhan\'da ücretsiz profesyonel cilt analizi. Modern cihazlarla cildinizin ihtiyaçlarını belirleyin. Kişiye özel bakım programı.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde yapılan detaylı cilt analizi, cilt sağlığınızın mevcut durumunu değerlendirmek ve size özel bakım planları oluşturmak için önemli bir adımdır. Modern cilt analiz cihazlarımız ve uzman ekibimiz ile cildinizin tipini, nem seviyesini, elastikiyetini, gözenek yapısını ve olası sorunları tespit ederek en uygun bakım ve tedavi yöntemlerini belirleriz.',
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
    seoContent: 'Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerindeki Göksum Güzellik Salonu, kadınlara özel ücretsiz cilt analizi hizmetiyle her müşterinin cilt ihtiyacını bireysel olarak değerlendirir. Modern cihazlarımızla sunulan kapsamlı analizde modern cihazlar aracılığıyla cildinizin nem seviyesi, yağlanma oranı, gözenek yapısı ve elastikiyet gibi temel parametreleri ayrıntılı biçimde değerlendirilmektedir. Bu analiz, herhangi bir bakım programına başlamadan önce doğru ürünleri ve tedavi yöntemlerini belirlemenin en güvenilir yoludur.\n\nAdana cilt bakımı danışmanlığı kapsamında gerçekleştirilen bu ön değerlendirme, cildinizin gerçek ihtiyaçlarına uygun kişiselleştirilmiş bir yol haritası ortaya koymaktadır. Adana Seyhan cilt analizi randevusu almak oldukça kolaydır; +90 541 190 13 90 numarasını arayarak veya merkezimizi ziyaret ederek ilk adımı atabilirsiniz. Adana cilt tipi analizi sonucunda uzman ekibimiz, cildinizin özelliklerine en uygun bakım ve ürün önerilerini sizi dinleyerek aktaracaktır.\n\nGöksum Güzellik Salonu\'nde cilt analizi yaptıranlar, çoğunlukla daha önce farkında olmadıkları cilt sorunlarını bu sayede erken evrede tespit ettiklerini belirtmektedir. Düzenli cilt analizi, uzun vadede cilt sağlığını korumak ve olası problemleri zamanında önlemek adına önemli bir alışkanlıktır. Cemalpaşa\'da yer alan merkezimizin uzman ve sıcak ekibi, sizi karşılamaya her zaman hazırdır.',
    relatedServices: ['cilt-bakimi', 'leke-tedavi'],
    ctaText: 'Cildinizin gerçek ihtiyaçlarını öğrenmek ve profesyonel bakım planlamak için cilt analizi randevusu alın.',
    slug: 'cilt-analizi'
  },
  {
    id: 2,
    title: 'Cilt Bakımı',
    subtitle: 'Adana\'nın En İyi Cilt Bakımı Merkezi',
    description: 'Adana Seyhan\'da en iyi cilt bakımı hizmeti. Hydrafacial, akne bakımı, anti-aging ve leke giderici bakımlar. Profesyonel ürünlerle cildinizi yenileyin.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde sunduğumuz profesyonel cilt bakımı hizmetleri, cildinizin ihtiyaçlarına göre özel olarak tasarlanır. Adana\'nın en iyi cilt bakımı merkezi olarak, klasik cilt bakımından akne tedavisine, hydrafacial\'dan anti-aging bakıma, leke giderici uygulamalara kadar geniş bir yelpazede hizmet sunuyoruz. Kullandığımız kaliteli ürünler ve modern teknolojiler sayesinde, cildinizin en iyi haline kavuşmasına yardımcı oluyoruz.',
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
    seoContent: 'Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerinde konumlanan Göksum Güzellik Salonu, kadınlara özel profesyonel cilt bakımı hizmetleri sunmaktadır. Kadın uzmanlardan oluşan ekibimiz, salonumuzun özel kabinlerinde her müşteriye kişiselleştirilmiş bakım protokolü uygular. Adana cilt bakımı fiyatları konusunda şeffaf ve müşteri odaklı bir yaklaşım benimseyen merkezimiz, her bütçeye hitap eden bakım paketleri oluşturmaktadır. Adana cilt bakım merkezi olarak öne çıkan Göksum Güzellik\'te, yüzlerce müşteri tarafından tercih edilen deneyimli uzmanlar cilt sağlığınıza gerçek anlamda katkı sağlamaktadır.\n\nAdana en iyi cilt bakımı deneyimi için merkezimizde uygulanan Adana hydrafacial protokolü, cildi derinlemesine temizlerken nem dengesini de yeniden kurmaktadır. Adana anti-aging bakım uygulamalarımız ise cilt elastikiyetini artıran aktif serumlar ve cihaz destekli tekniklerle yaşlanma belirtilerini görünür biçimde azaltmaktadır. Adana Seyhan cilt bakımı hizmetlerimiz arasında akne bakımı, leke aydınlatma, gözenek bakımı ve hassas cilt protokolleri de yer almakta; her müşteriye özel tedavi planı oluşturulmaktadır.\n\nSeyhan cilt bakımı arayışında olan bölge sakinleri, Göksum Güzellik Salonu\'nin rahat ortamı ve uzman ekibiyle kendilerini iyi ellerde hissedeceklerini bildirmektedir. Düzenli cilt bakımı seansları sayesinde cilt tonunuzu eşitleyebilir, gözenek görünümünü azaltabilir ve gençleşmiş bir cilt dokusuna kavuşabilirsiniz. Randevu almak veya daha fazla bilgi edinmek için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz.',
    relatedServices: ['cilt-analizi', 'leke-tedavi'],
    ctaText: 'Cildinize ihtiyacı olan bakımı vermek ve daha sağlıklı bir görünüm kazanmak için hemen randevu alın.',
    slug: 'cilt-bakimi'
  },
  {
    id: 3,
    title: 'Lazer Epilasyon',
    subtitle: 'Adana\'nın En İyi Lazer Epilasyon Merkezi',
    description: 'Adana Seyhan\'da en iyi lazer epilasyon hizmeti. Son teknoloji Diode lazer ile kalıcı tüy azaltma. Uygun fiyatlar ve profesyonel ekip.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde kullandığımız son teknoloji Diode lazer epilasyon cihazı, 808nm dalga boyunda çalışarak her cilt tipi ve tüy yoğunluğuna özel parametrelerle güvenli ve etkili sonuçlar sunar. Bacak, koltuk altı, bikini, yüz, bıyık üstü, sırt ve tüm vücut bölgelerine yönelik uygulamalar sunulmakta; hem kadın hem erkek müşterilere özel protokollerle hizmet verilmektedir. Uzman kadromuzla hijyenik bir ortamda kişiye özel parametreler belirlenerek kalıcı tüy azaltmada yüksek başarı oranları elde ediyoruz.\n\nLazer epilasyon seansları öncesinde kişiye özel konsültasyon yapılır; cilt tonu, tüy rengi ve yoğunluğu değerlendirilerek en uygun lazer parametreleri belirlenir. Diode lazer; hem açık tenli hem de orta-koyu ten rengine sahip bireylerde güvenle uygulanabilen modern bir teknolojidir. Entegre soğutma sistemi sayesinde seans sırasındaki konforu artırır. Göksum Güzellik\'te her seans, sertifikalı ve deneyimli uzmanlarımız tarafından titizlikle yürütülür.\n\nLazer epilasyon tedavisi, düzenli seanslarla tüy büyümesini yavaşlatır ve kalıcı azalma sağlar. Tüylenme döngüsüne bağlı olarak genellikle 6-8 seans yeterli olmaktadır. Seyhan\'da bulunan merkezimizde uygulanan seanslar arası bakım tavsiyeleri ve takip programıyla, uzun vadeli pürüzsüz bir cilt elde etmeniz hedeflenir.',
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
    seoContent: 'Seyhan Cemalpaşa, Gazipaşa Bulvarı\'nda kadınlara özel güzellik hizmetleri sunan Göksum Güzellik Salonu, Adana lazer epilasyon alanında bölgenin güvenilir adreslerinden biridir. Kadın müşterilerimizin konforunu ve mahremiyetini ön planda tutan salonumuzda tüm uygulamalar kadın uzmanlar tarafından gerçekleştirilmektedir. Adana lazer epilasyon fiyatları konusunda şeffaf ve rekabetçi bir yaklaşım benimseyen merkezimizde, her bütçeye uygun kampanya seçenekleri düzenli olarak güncellenmektedir. Adana lazer epilasyon kampanya fırsatlarını kaçırmamak için sosyal medya kanallarımızı takip edebilir ya da +90 541 190 13 90 numaralı hattımızı arayabilirsiniz.\n\nLazer epilasyon Adana genelinde birçok adreste sunulsa da Seyhan lazer epilasyon merkezi olarak Göksum Güzellik, teknoloji, hijyen ve uzman kadrosu ile fark yaratmaktadır. Adana en iyi lazer epilasyon deneyimi arayanlar merkezimizi tercih ettiğinde, kişiye özel lazer parametreleriyle hem güvenli hem de etkili bir uygulama deneyimi yaşamaktadır. Adana en yakın lazer epilasyon noktalarından biri olarak, şehir merkezine yakın konumumuz sayesinde kolayca ulaşabilirsiniz.\n\nCemalpaşa lazer epilasyon hizmetleri söz konusu olduğunda, bölge sakinleri Göksum Güzellik Salonu\'ni ilk tercihleri arasında göstermektedir. Adana Seyhan lazer epilasyon uygulamalarında kullanılan son nesil cihazlarımız, hem kadın hem erkek müşterilere yönelik kapsamlı vücut ve yüz bölgesi seçenekleri sunmaktadır. Kalıcı tüysüzlüğe giden yolda güvenilir bir partner arıyorsanız, randevunuzu hemen alarak birinci seansta farkı kendiniz keşfedebilirsiniz.\n\nAdana kadın lazer epilasyon hizmetimizde bacak, koltuk altı, bikini, yüz, bıyık üstü ve tam vücut seçenekleri sunulmaktadır. Gazipaşa Bulvarı üzerindeki salonumuz, Cemalpaşa ve çevre mahallelerden gelen kadın müşterilerimize özel, rahat ve mahrem bir ortam sağlamaktadır. Yüreğir lazer epilasyon ve Çukurova lazer epilasyon arayanlar da şehir merkezine yakın konumumuz sayesinde bize kolayca ulaşmaktadır. Adana lazer epilasyon fiyatları hakkında net bilgi almak ve kişiye özel kampanya seçeneklerini öğrenmek için +90 541 190 13 90 numaralı hattımızı arayabilir ya da online randevu formumuzdan ücretsiz konsültasyon talebinde bulunabilirsiniz.',
    relatedServices: ['cilt-bakimi', 'leke-tedavi', 'bolgesel-zayiflama', 'cilt-analizi'],
    ctaText: 'İstenmeyen tüylerden kalıcı olarak kurtulmak için hemen lazer epilasyon programımıza başlayın.',
    slug: 'lazer-epilasyon'
  },
  {
    id: 4,
    title: 'Bölgesel Zayıflama',
    subtitle: 'Adana\'da Profesyonel Bölgesel Zayıflama',
    description: 'Adana Seyhan\'da profesyonel bölgesel zayıflama. Kavitasyon, RF lipoliz ve selülit giderme uygulamaları ile inatçı yağlara son verin.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde sunduğumuz bölgesel zayıflama ve incelme tedavileri, diyet ve egzersizle çözülemeyen inatçı yağ bölgelerini hedefler. Kavitasyon, RF lipoliz, soğuk lipoliz gibi teknolojiler kullanarak hücre düzeyinde yağ yakımını tetikler, selülit görünümünü azaltır ve vücut hatlarınızı şekillendiririz.',
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
    seoContent: 'Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerinde konumlanan Göksum Güzellik Salonu, kadın vücuduna özel bölgesel zayıflama ve incelme protokolleriyle hizmet vermektedir. Kadın uzmanlardan oluşan ekibimiz, her müşterinin hedef bölgelerine göre kişisel program tasarlar. Adana kavitasyon uygulamalarımız, ultrasonik dalgalar aracılığıyla yağ hücrelerini parçalayarak bölgesel incelme sağlayan ve tamamen ağrısız gerçekleştirilen bir tedavi yöntemidir. Adana selülit tedavisi konusunda da etkili çözümler sunan merkezimizde, RF lipoliz ile kavitasyonun kombinasyonu sayesinde hem yağ azaltımı hem de deri sıkılaşması aynı anda hedeflenmektedir.\n\nAdana Seyhan bölgesel zayıflama programlarında önce kapsamlı bir vücut analizi yapılmakta, ardından kişinin hedef bölgelerine ve fiziğine uygun protokol tasarlanmaktadır. Adana zayıflama merkezi olarak Göksum Güzellik, seans başına ölçülen sonuçlarla ilerlemenizi somut biçimde takip etmenize olanak tanımaktadır. Adana RF lipoliz uygulamalarımız, özellikle karın, basen, uyluk ve kol bölgelerinde inatçı yağlara karşı yüksek başarı oranlarıyla öne çıkmaktadır.\n\nAdana bölgesel incelme hedefine ulaşmak için doğru teknoloji ve uzman rehberliğiyle desteklenen bir program şarttır. Göksum Güzellik Salonu\'nde uygulanan lenfatik masaj seansları, yağ asitlerinin vücuttan atılımını hızlandırarak sonuçların daha erken görülmesine katkıda bulunmaktadır. Randevu ve fiyat bilgisi için +90 541 190 13 90 numaralı hattımızı arayabilir, merkezimizi ziyaret ederek ücretsiz danışmanlık görüşmesi talep edebilirsiniz.',
    relatedServices: ['lazer-epilasyon'],
    ctaText: 'Bölgesel incelme ve daha fit bir vücut için teknolojik zayıflama çözümlerimizden faydalanın.',
    slug: 'bolgesel-zayiflama'
  },
  {
    id: 5,
    title: 'Kalıcı Makyaj',
    subtitle: 'Adana\'nın En İyi Kalıcı Makyaj Merkezi',
    description: 'Adana Seyhan\'da en iyi kalıcı makyaj uygulaması. Microblading, kaş kontür, dudak kontür ve eyeliner. Doğal görünümlü kalıcı makyaj.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde uygulanan kalıcı makyaj hizmetleri, profesyonel ekibimiz tarafından hijyenik ortamda gerçekleştirilir. Adana\'nın en iyi kalıcı makyaj merkezi olarak, microblading, kaş kontür, eyeliner, dipliner ve dudak kontürü gibi uygulamalarla doğal görünümlü, uzun süreli güzellik çözümleri sunuyoruz. Özel pigmentler ve modern teknikler kullanarak sizin için en uygun şekil ve rengi belirliyor, her sabah makyaj yapma ihtiyacınızı ortadan kaldırıyoruz.',
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
    seoContent: 'Adana kalıcı makyaj konusunda profesyonel ve güvenilir bir merkez arıyorsanız, Göksum Güzellik Salonu\'ni tercih edebilirsiniz. Cemalpaşa Mahallesi, Gazipaşa Bulvarı No:30 Kat:1 adresindeki merkezimizde gerçekleştirilen Adana microblading uygulamaları, kaşlara doğal, tüy tüye görünüm kazandıran ileri teknikler kullanılarak yapılmaktadır. Adana kaş kontür hizmetlerimizde yüz anatomisine uygun şekil ve renk seçimiyle herkes için özel bir sonuç elde edilmektedir.\n\nAdana kalıcı makyaj fiyatları hakkında net bilgi almak için +90 541 190 13 90 numaralı hattımızı arayabilir ya da merkezimizi ziyaret ederek ücretsiz ön konsültasyondan yararlanabilirsiniz. Adana dudak kontür uygulamalarımız, dudak sınırlarını belirginleştirerek doğal ya da dolgun bir görünüm tercihine göre kişiselleştirilen bir yöntemle hayata geçirilmektedir. Adana kalıcı eyeliner ise günlük makyaj rutininden kurtulmak isteyenler için zamanı ve enerjiyi birlikte yönetmenin akıllıca bir yoludur.\n\nAdana Seyhan kalıcı makyaj merkezimizde uzman ekibimiz, son teknoloji pigmentler ve steril tek kullanımlık malzemeler kullanarak en güvenli uygulamayı gerçekleştirir. Her işlem öncesinde yüz anatomisi analiz edilir, kişiye özel şekil ve renk belirlenerek onay alınır. Adana kalıcı makyaj rötuş hizmetlerimizle uygulamanızın ömrünü uzatabilir, her zaman tazelenmiş bir görünüme sahip olabilirsiniz.',
    relatedServices: ['cilt-bakimi'],
    ctaText: 'Her sabah mükemmel makyajlı uyanmak ve zamandan tasarruf etmek için kalıcı makyaj uygulamalarımızdan yararlanın.',
    slug: 'kalici-makyaj'
  },
  {
    id: 6,
    title: 'Leke Tedavi',
    subtitle: 'Adana\'da Profesyonel Leke Tedavisi',
    description: 'Adana Seyhan\'da profesyonel leke tedavisi. Güneş lekesi, akne lekesi ve melazma tedavisi. Kimyasal peeling ve aydınlatıcı bakımlar.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde leke tedavisi için kullandığımız ileri teknolojiler ve aktif içerikli ürünler, farklı tiplerdeki cilt lekelerini hedefler. Akne izleri, güneş lekeleri, melazma veya hormonal pigmentasyonlar için özel protokoller uygulayarak cildinizin ton eşitliğini sağlıyoruz. Kişiselleştirilmiş tedavi planlarımız, cildinizin ihtiyaçlarına göre cihaz ve kimyasal peeling kombinasyonlarından oluşur.',
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
    seoContent: 'Seyhan Cemalpaşa, Gazipaşa Bulvarı\'ndaki Göksum Güzellik Salonu, kadınlarda sık görülen güneş lekesi, melazma ve akne izleri için uzman tedavi protokolleri sunmaktadır. Kadın cilt uzmanlarından oluşan ekibimiz, her leke tipine özel kişiselleştirilmiş yaklaşım benimser. Adana güneş lekesi tedavisi kapsamında uygulanan kimyasal peeling ve aydınlatıcı serumlar, yüzeydeki pigment birikintilerini nazikçe parçalayarak eşit bir cilt tonu elde etmeyi sağlar. Adana melazma tedavisi konusunda deneyimli uzmanlarımız, hormonal kaynaklı pigmentasyonlar için özel protokoller geliştirerek kalıcı ve güvenli sonuçlar elde etmektedir.\n\nAdana akne lekesi tedavisi hizmetlerimiz, sivilce iyileştikten sonra kalan iz ve renk değişikliklerini hedefleyen yoğun aktif içerikli seanslardan oluşmaktadır. Adana cilt lekesi giderme sürecinde her müşteriye özel tedavi planı hazırlanmakta, leke tipi ve cilt hassasiyetine göre en uygun yöntemler seçilmektedir. Adana Seyhan leke tedavisi için merkezimizi tercih edenler, ilk konsültasyonda uzmanlarımızla birebir görüşerek tedavi sürecini ayrıntılı biçimde öğrenebilmektedir.\n\nAdana cilt tonu eşitleme arayışında olanlar, Göksum Güzellik Salonu\'nde uygulanan seansların ardından görünür iyileşme yaşadıklarını bildirmektedir. Güneş koruyucu kullanımı ve kişiselleştirilmiş bakım tavsiyeleriyle desteklenen tedavi süreci, lekelerin geri dönüşünü de engellemeye yardımcı olmaktadır. Randevu ve detaylı bilgi için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz.',
    relatedServices: ['cilt-bakimi', 'cilt-analizi'],
    ctaText: 'Cildinizde ton eşitsizliği ve lekelerden kurtulmak, daha aydınlık bir görünüme kavuşmak için leke tedavi programlarımızdan faydalanın.',
    slug: 'leke-tedavi'
  },
  {
    id: 7,
    title: 'Saç Mezoterapi',
    subtitle: 'Adana\'da Saç Dökülmesi Tedavisi',
    description: 'Adana Seyhan\'da profesyonel saç mezoterapisi. Saç dökülmesi tedavisi, saç güçlendirme ve yeni saç çıkışını teşvik. Vitamin kokteylleri ile sağlıklı saçlar.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde uygulanan saç mezoterapisi, saç dökülmesini durdurma ve saç büyümesini teşvik etme amacı taşır. Saç derisine vitamin, mineral, amino asit ve büyüme faktörleri içeren özel kokteyller mikroenjeksiyon yöntemiyle uygulanır. Bu yöntem saç köklerini besler, kan dolaşımını artırır ve saç foliküllerini yeniden aktif hale getirir.',
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
    seoContent: 'Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerindeki Göksum Güzellik Salonu, özellikle kadınlarda hormonal ve mevsimsel dökülmelere yönelik uzman saç mezoterapisi protokolleri uygulamaktadır. Kadın uzmanlarımız, saç dökülmesinin altında yatan nedenleri değerlendirerek kişiye özel kokteyller hazırlar. Adana saç dökülmesi tedavisi kapsamında uygulanan mezoterapi seansları, saç foliküllerini besleyerek hem mevcut saçların güçlenmesine hem de yeni saç çıkışının teşvik edilmesine katkıda bulunmaktadır. Adana saç güçlendirme programlarımız, saç dökülmesinin ardındaki nedenleri değerlendiren kapsamlı bir ön analizle başlamakta; kişiye özel vitamin ve mineral kokteylleri hazırlanmaktadır.\n\nAdana Seyhan saç mezoterapisi hizmetlerimizde kullanılan kokteyller, saç derisindeki kan dolaşımını canlandıran büyüme faktörleri, biyotin, çinko ve amino asitler içermektedir. Adana saç dökülmesi çözümü arayanlar, merkezimizde saç analizi yaptırarak tedaviye başlamadan önce kendi durumlarına uygun bir plan oluşturabilmektedir. Seyhan saç mezoterapisi merkezimizde ortalama 8-10 seanslık program süresince düzenli takip yapılmakta ve her birkaç seansta bir ilerleme değerlendirilmektedir.\n\nAdana saç bakımı konusunda güvenilir ve etkili bir merkez arıyorsanız, Göksum Güzellik Salonu\'ni ziyaret edebilirsiniz. Saç dökülmesinin nedeni stres, hormonal değişimler veya besin eksikliği olsun, mezoterapi saç köklerini güçlendirerek bu sorunların üstesinden gelmede destekleyici bir rol üstlenir. Randevu almak için +90 541 190 13 90 numarasını arayabilirsiniz.',
    relatedServices: [],
    ctaText: 'Saç dökülmesi sorunlarınıza son vermek ve daha güçlü, canlı saçlara kavuşmak için saç mezoterapisi programımıza başlayın.',
    slug: 'sac-mezoterapi'
  },
  {
    id: 8,
    title: 'Protez Tırnak',
    subtitle: 'Adana\'nın En İyi Protez Tırnak Merkezi',
    description: 'Adana Seyhan\'da en iyi protez tırnak uygulaması. Jel tırnak, kalıcı oje, nail art ve tırnak uzatma hizmetleri ile şık ve bakımlı tırnaklara kavuşun.',
    longDescription: 'Adana Seyhan\'da bulunan Göksum Güzellik Salonu\'nde sunduğumuz profesyonel protez tırnak uygulamaları, tırnaklarınızı güçlendirirken şık ve bakımlı bir görünüm sağlar.\n\nAdana\'nın en iyi protez tırnak merkezi olarak, kalıcı oje, jel tırnak ve protez tırnak uygulamalarımızda tırnak sağlığınıza zarar vermeden uzun süreli dayanıklılık ve estetik bir görünüm sunuyoruz. Uzman tırnak teknisyenlerimiz, en son trendleri takip ederek size özel tasarımlar yaratır.\n\nKırılgan, kısa veya hasarlı tırnaklarınızı güçlendirmek, uzatmak veya sadece şık bir görünüm elde etmek için Adana\'nın tercih edilen protez tırnak merkezi Göksum Güzellik\'i ziyaret edin.',
    image: '/images/protez-tirnak.jpg',
    bannerImage: '/images/protez-tirnak.jpg',
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
    duration: '60-120 dakika',
    priceRange: '₺400 - ₺1200 (Uygulamaya Göre Değişir)',
    recommendedFor: 'Kırılgan, kısa tırnakları olanlar ve şık bir görünüm isteyenler',
    process: [
      {
        title: 'Tırnak Analizi',
        description: 'Tırnak yapınız ve istekleriniz değerlendirilir'
      },
      {
        title: 'Tırnak Hazırlığı',
        description: 'Tırnaklarınız temizlenir ve şekillendirilir'
      },
      {
        title: 'Uygulama',
        description: 'Seçtiğiniz tekniğe göre protez tırnak uygulaması yapılır'
      },
      {
        title: 'Tasarım ve Dekorasyon',
        description: 'İstediğiniz renk ve tasarım uygulanır'
      },
      {
        title: 'Bakım Önerileri',
        description: 'Tırnak bakımı ve koruma önerileri anlatılır'
      }
    ],
    seoContent: 'Seyhan Cemalpaşa, Gazipaşa Bulvarı\'ndaki Göksum Güzellik Salonu, kadınlara özel protez tırnak ve tırnak bakımı hizmetlerinde bölgenin tercih edilen adresidir. Uzman kadın teknisyenlerimiz, salonumuzun hijyenik ortamında her müşteriye özenli ve kişiselleştirilmiş uygulama sunar. Adana en iyi protez tırnak merkezi arayışındaki müşterilerimiz, uzman teknisyenlerimizin el işçiliği ve yüksek kaliteli jel ürünleri kullanımıyla uzun ömürlü sonuçlar elde etmektedir. Adana jel tırnak uygulamalarımız, tırnak plakasına özel hazırlık protokolü uygulandıktan sonra UV lambayla sertleştirilen katmanlarla gerçekleştirilmekte; kırılgan yapıya karşı güçlü bir koruma sağlanmaktadır.\n\nAdana kalıcı oje seçeneklerimiz, renk skalasının genişliği ve 3-4 hafta dayanıklılığıyla tırnak bakımında sık yapılan masrafları azaltmaktadır. Adana Seyhan protez tırnak merkezi olarak Göksum Güzellik, nail art ve özel tasarım konusunda da aranan bir adres haline gelmiştir. Adana tırnak uzatma hizmetimizde kısa ve kırılgan yapıdaki tırnaklar, kişinin yüz ve el anatomisine uygun uzunluk ve şekilde estetik bir görünüme kavuşturulmaktadır.\n\nAdana protez tırnak fiyatları hakkında bilgi almak, fotoğraflı portföyümüzü incelemek veya randevu oluşturmak için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Şık ve dayanıklı tırnaklara giden yolda Göksum Güzellik Salonu her zaman yanınızda; ilk görüşmede ihtiyaçlarınız dinlenerek en uygun uygulama ve renk seçimi birlikte belirlenir.',
    relatedServices: ['kalici-makyaj'],
    ctaText: 'Şık ve bakımlı tırnaklara sahip olmak için protez tırnak uygulamalarımızdan yararlanın.',
    slug: 'protez-tirnak'
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
