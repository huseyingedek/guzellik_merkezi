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
    title: 'Adana Cilt Analizi',
    subtitle: 'Adana Cilt Analizi · Adana Ücretsiz Cilt Analizi · Adana Cilt Tipi Tespiti · Adana Kişiye Özel Bakım · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da ücretsiz profesyonel cilt analizi. Modern cihazlarla cildinizin ihtiyaçlarını belirleyin. Kişiye özel bakım programı.',
    longDescription: 'Adana cilt analizi hizmetinde Göksum Güzellik Salonu, Seyhan Cemalpaşa\'da modern cihazlarla cilt sağlığınızın mevcut durumunu değerlendirmekte ve size özel bakım planı oluşturmaktadır. Adana cilt analizi uygulamasında cildinizin tipi, nem seviyesi, yağlanma oranı, gözenek yapısı ve elastikiyeti ayrıntılı olarak tespit edilmektedir. Adana cilt analizi uzmanlarımız elde edilen verilere göre en uygun bakım ve tedavi yöntemlerini belirler.\n\nAdana cilt analizi, herhangi bir cilt bakımı programına başlamadan önce doğru ürün ve protokolü seçmenin en güvenilir yoludur. Adana cilt analizi ücretsiz olarak sunulmakta; randevu için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana cilt analizi yaptıran müşterilerimiz, daha önce farkında olmadıkları cilt sorunlarını erken evrede tespit ederek etkili bir bakım programına başlamaktadır.',
    image: '/images/analiz_cilt.webp',
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
    seoContent: 'Adana cilt analizi hizmetimizde Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerindeki Göksum Güzellik Salonu, her müşterinin cilt ihtiyacını bireysel olarak değerlendirmektedir. Adana cilt analizi kapsamında modern cihazlarımızla cildinizin nem seviyesi, yağlanma oranı, gözenek yapısı ve elastikiyet gibi temel parametreler ayrıntılı biçimde incelenmektedir. Adana cilt analizi, bakım programına başlamadan önce doğru ürünleri ve tedavi yöntemlerini belirlemenin en güvenilir yoludur.\n\nAdana cilt analizi danışmanlığımız kapsamında gerçekleştirilen ön değerlendirme, cildinizin gerçek ihtiyaçlarına uygun kişiselleştirilmiş bir yol haritası ortaya koymaktadır. Adana cilt analizi randevusu almak oldukça kolaydır; +90 541 190 13 90 numarasını arayarak veya merkezimizi ziyaret ederek ilk adımı atabilirsiniz. Adana cilt analizi sonucunda uzman ekibimiz, cildinizin özelliklerine en uygun bakım ve ürün önerilerini sizi dinleyerek aktaracaktır.\n\nAdana cilt analizi yaptıranlar, daha önce farkında olmadıkları cilt sorunlarını erken evrede tespit ettiklerini bildirmektedir. Düzenli adana cilt analizi, uzun vadede cilt sağlığını korumak ve olası problemleri zamanında önlemek adına önemli bir alışkanlıktır. Göksum Güzellik Salonu\'nda adana cilt analizi için uzman ekibimiz sizi karşılamaya her zaman hazırdır.',
    relatedServices: ['adana-cilt-bakimi', 'adana-leke-tedavi'],
    ctaText: 'Cildinizin gerçek ihtiyaçlarını öğrenmek ve profesyonel bakım planlamak için cilt analizi randevusu alın.',
    slug: 'adana-cilt-analizi'
  },
  {
    id: 2,
    title: 'Adana Cilt Bakımı',
    subtitle: 'Adana Cilt Bakımı · Adana Hydrafacial · Adana Anti-Aging Bakım · Adana Akne Bakımı · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da en iyi cilt bakımı hizmeti. Hydrafacial, akne bakımı, anti-aging ve leke giderici bakımlar. Profesyonel ürünlerle cildinizi yenileyin.',
    longDescription: 'Adana cilt bakımı hizmetinde Göksum Güzellik Salonu, Seyhan Cemalpaşa\'da cildinizin ihtiyaçlarına göre özel tasarlanmış protokoller sunmaktadır. Adana cilt bakımı seçeneklerimiz arasında klasik bakım, akne tedavisi, hydrafacial, anti-aging ve leke giderici uygulamalar yer almaktadır. Adana cilt bakımı uzmanlarımız kaliteli ürünler ve modern teknoloji kullanarak cildinizin en iyi haline kavuşmasına yardımcı olur.\n\nAdana cilt bakımı programlarımız her cilt tipine uygun şekilde kişiselleştirilmekte; önce detaylı cilt analizi yapılarak doğru protokol belirlenmektedir. Adana cilt bakımı fiyatları hakkında bilgi almak için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana cilt bakımı için Göksum Güzellik Salonu\'nu tercih eden müşterilerimiz, her seanstan sonra görünür bir fark yaşadıklarını bildirmektedir.',
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
        title: 'Adana Cilt Analizi',
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
    seoContent: 'Adana Seyhan\'da Adana Cilt Bakımı\n\nSeyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerinde konumlanan Göksum Güzellik Salonu, kadınlara özel profesyonel adana cilt bakımı hizmetleri sunmaktadır. Kadın uzmanlardan oluşan ekibimiz, salonumuzun özel kabinlerinde her müşteriye kişiselleştirilmiş bakım protokolü uygular. Adana cilt bakımı fiyatları konusunda şeffaf ve müşteri odaklı bir yaklaşım benimseyen merkezimiz, her bütçeye hitap eden bakım paketleri oluşturmaktadır. Adana cilt bakımı merkezi olarak öne çıkan Göksum Güzellik\'te, yüzlerce müşteri tarafından tercih edilen deneyimli uzmanlar cilt sağlığınıza gerçek anlamda katkı sağlamaktadır.\n\nAdana cilt bakımı deneyimi için merkezimizde uygulanan Adana hydrafacial protokolü, cildi derinlemesine temizlerken nem dengesini de yeniden kurmaktadır. Adana cilt bakımı kapsamındaki anti-aging uygulamalarımız ise cilt elastikiyetini artıran aktif serumlar ve cihaz destekli tekniklerle yaşlanma belirtilerini görünür biçimde azaltmaktadır. Adana cilt bakımı hizmetlerimiz arasında akne bakımı, leke aydınlatma, gözenek bakımı ve hassas cilt protokolleri de yer almakta; her müşteriye özel tedavi planı oluşturulmaktadır.\n\nSeyhan\'da adana cilt bakımı arayışında olan bölge sakinleri, Göksum Güzellik Salonu\'nun rahat ortamı ve uzman ekibiyle kendilerini iyi ellerde hissedeceklerini bildirmektedir. Düzenli adana cilt bakımı seansları sayesinde cilt tonunuzu eşitleyebilir, gözenek görünümünü azaltabilir ve gençleşmiş bir cilt dokusuna kavuşabilirsiniz. Randevu almak veya daha fazla bilgi edinmek için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz.',
    relatedServices: ['adana-cilt-analizi', 'adana-leke-tedavi'],
    ctaText: 'Cildinize ihtiyacı olan bakımı vermek ve daha sağlıklı bir görünüm kazanmak için hemen randevu alın.',
    slug: 'adana-cilt-bakimi'
  },
  {
    id: 3,
    title: 'Adana Lazer Epilasyon',
    subtitle: 'Adana Lazer Epilasyon · Adana Diode Lazer · Adana Epilasyon Fiyatları · Adana Kalıcı Tüy Azaltma · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da en iyi lazer epilasyon hizmeti. Son teknoloji Diode lazer ile kalıcı tüy azaltma. Uygun fiyatlar ve profesyonel ekip.',
    longDescription: 'Adana lazer epilasyon hizmetinde Göksum Güzellik Salonu, son teknoloji Diode lazer cihazıyla 808nm dalga boyunda çalışarak her cilt tipine güvenli ve etkili sonuçlar sunmaktadır. Adana lazer epilasyon uygulamalarımız bacak, koltuk altı, bikini, yüz, bıyık üstü, sırt ve tam vücut bölgelerini kapsamakta; hem kadın hem erkek müşterilere özel protokollerle hizmet verilmektedir. Adana lazer epilasyon seanslarında kişiye özel parametreler belirlenerek kalıcı tüy azaltmada yüksek başarı oranları elde edilmektedir.\n\nAdana lazer epilasyon öncesinde cilt tonu, tüy rengi ve yoğunluğu değerlendirilerek en uygun lazer ayarları belirlenir. Adana lazer epilasyon için kullandığımız Diode lazer, açık ve koyu ten rengine sahip bireylerde güvenle uygulanabilen modern teknolojidir. Entegre soğutma sistemi seans konforunu artırır; sertifikalı uzmanlarımız her adana lazer epilasyon seansını titizlikle yürütür.\n\nAdana lazer epilasyon tedavisi düzenli seanslarla tüy büyümesini yavaşlatır ve kalıcı azalma sağlar. Genellikle 6-8 seans yeterli olmakta; seanslar arası bakım tavsiyeleri ve takip programıyla uzun vadeli pürüzsüz cilt hedeflenmektedir.',
    image: '/images/lazerr.webp',
    bannerImage: '/images/lazerr.webp',
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
    relatedServices: ['adana-cilt-bakimi', 'adana-leke-tedavi', 'adana-bolgesel-incelme', 'adana-cilt-analizi'],
    ctaText: 'İstenmeyen tüylerden kalıcı olarak kurtulmak için hemen lazer epilasyon programımıza başlayın.',
    slug: 'adana-lazer-epilasyon'
  },
  {
    id: 4,
    title: 'Adana Bölgesel İncelme',
    subtitle: 'Adana Bölgesel İncelme · Adana Kavitasyon · Adana RF Lipoliz · Adana Selülit Tedavisi · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da profesyonel bölgesel incelme. Kavitasyon, RF lipoliz ve selülit giderme uygulamaları ile inatçı yağlara son verin.',
    longDescription: 'Adana bölgesel zayıflama hizmetinde Göksum Güzellik Salonu, diyet ve egzersizle çözülemeyen inatçı yağ bölgelerini hedefleyen teknolojik tedaviler sunmaktadır. Adana bölgesel zayıflama programlarımızda kavitasyon, RF lipoliz ve soğuk lipoliz teknolojileri kullanılarak hücre düzeyinde yağ yakımı tetiklenmektedir. Adana bölgesel zayıflama seanslarımız selülit görünümünü azaltır ve vücut hatlarınızı şekillendirir.\n\nAdana bölgesel zayıflama için önce kapsamlı vücut analizi yapılmakta, ardından kişiye özel protokol oluşturulmaktadır. Adana bölgesel zayıflama fiyatları ve paket seçenekleri için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana bölgesel zayıflama programlarımızla karın, basen, uyluk ve kol bölgelerinde somut incelme sonuçları elde edilmektedir.',
    image: '/images/zayıflama.webp',
    bannerImage: '/images/zayıflama.webp',
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
    seoContent: 'Adana Seyhan\'da Adana Bölgesel İncelme\n\nAdana bölgesel incelme konusunda uzman merkez arıyorsanız, Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerinde konumlanan Göksum Güzellik Salonu doğru adresinizdir. Adana bölgesel incelme programlarımızda kadın vücuduna özel protokoller uygulanmakta, her müşterinin hedef bölgelerine göre kişisel program tasarlanmaktadır. Adana bölgesel incelme hizmetlerimiz kapsamında kavitasyon uygulamalarımız, ultrasonik dalgalar aracılığıyla yağ hücrelerini parçalayarak bölgesel incelme sağlayan ve tamamen ağrısız gerçekleştirilen bir tedavi yöntemidir. Adana selülit tedavisi konusunda da etkili çözümler sunan merkezimizde, RF lipoliz ile kavitasyonun kombinasyonu sayesinde hem yağ azaltımı hem de deri sıkılaşması aynı anda hedeflenmektedir.\n\nAdana bölgesel incelme programlarında önce kapsamlı bir vücut analizi yapılmakta, ardından kişinin hedef bölgelerine ve fiziğine uygun protokol tasarlanmaktadır. Adana bölgesel incelme merkezi olarak Göksum Güzellik, seans başına ölçülen sonuçlarla ilerlemenizi somut biçimde takip etmenize olanak tanımaktadır. Adana RF lipoliz uygulamalarımız, özellikle karın, basen, uyluk ve kol bölgelerinde inatçı yağlara karşı yüksek başarı oranlarıyla öne çıkmaktadır. Adana bölgesel incelme seanslarından önce uzmanlarımız kişiye özel ölçüm yaparak süreci detaylı şekilde planlamaktadır.\n\nAdana bölgesel incelme hedefine ulaşmak için doğru teknoloji ve uzman rehberliğiyle desteklenen bir program şarttır. Göksum Güzellik Salonu\'nda uygulanan lenfatik masaj seansları, yağ asitlerinin vücuttan atılımını hızlandırarak sonuçların daha erken görülmesine katkıda bulunmaktadır. Adana bölgesel incelme için tercih edilen merkezimizde her seans sonrası vücut ölçümleri kayıt altına alınmakta, ilerlemeniz somut verilerle takip edilmektedir. Adana bölgesel incelme paketlerimiz; kavitasyon, RF lipoliz ve lenfatik drenajı birleştiren kapsamlı programlar olup kısa sürede görünür sonuçlar hedeflenmektedir. Adana bölgesel incelme sonuçlarını kalıcı kılmak için uzmanlarımız beslenme ve yaşam tarzı önerilerini de seans planına dahil etmektedir. Adana bölgesel incelme kampanyaları ve güncel fiyatlar için sosyal medya sayfalarımızı takip edebilirsiniz. Adana bölgesel incelme hakkında detaylı bilgi almak ve ücretsiz ön konsültasyon için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz.',
    relatedServices: ['adana-lazer-epilasyon'],
    ctaText: 'Bölgesel incelme ve daha fit bir vücut için teknolojik zayıflama çözümlerimizden faydalanın.',
    slug: 'adana-bolgesel-incelme'
  },
  {
    id: 5,
    title: 'Adana Kalıcı Makyaj',
    subtitle: 'Adana Kalıcı Makyaj · Adana Microblading · Adana Kaş Kontür · Adana Dudak Kontür · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da en iyi kalıcı makyaj uygulaması. Microblading, kaş kontür, dudak kontür ve eyeliner. Doğal görünümlü kalıcı makyaj.',
    longDescription: 'Adana kalıcı makyaj hizmetinde Göksum Güzellik Salonu, profesyonel ekibiyle hijyenik ortamda microblading, kaş kontür, eyeliner ve dudak kontürü uygulamaları sunmaktadır. Adana kalıcı makyaj uzmanlarımız özel pigmentler ve modern teknikler kullanarak sizin için en uygun şekil ve rengi belirler; her sabah makyaj yapma ihtiyacınızı ortadan kaldırır. Adana kalıcı makyaj uygulamalarımız doğal görünümlü ve uzun süreli sonuçlar için tasarlanmıştır.\n\nAdana kalıcı makyaj seçeneklerimiz arasında kaş microblading, kaş kontür, üst-alt eyeliner, dipliner ve dudak kontürü yer almaktadır. Adana kalıcı makyaj fiyatları ve randevu için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana kalıcı makyaj yaptıran müşterilerimiz, zamandan tasarruf ederek her gün mükemmel görünüme sahip olmanın keyfini yaşamaktadır.',
    image: '/images/makyaj.webp',
    bannerImage: '/images/makyaj.webp',
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
    seoContent: 'Adana kalıcı makyaj konusunda profesyonel ve güvenilir bir merkez arıyorsanız, adana kalıcı makyaj uzmanlarından oluşan Göksum Güzellik Salonu\'nu tercih edebilirsiniz. Cemalpaşa Mahallesi, Gazipaşa Bulvarı No:30 Kat:1 adresindeki merkezimizde gerçekleştirilen Adana microblading uygulamaları, kaşlara doğal, tüy tüye görünüm kazandıran ileri teknikler kullanılarak yapılmaktadır. Adana kaş kontür hizmetlerimizde yüz anatomisine uygun şekil ve renk seçimiyle herkes için özel bir sonuç elde edilmektedir.\n\nAdana kalıcı makyaj fiyatları hakkında net bilgi almak için +90 541 190 13 90 numaralı hattımızı arayabilir ya da merkezimizi ziyaret ederek ücretsiz ön konsültasyondan yararlanabilirsiniz. Adana dudak kontür uygulamalarımız, dudak sınırlarını belirginleştirerek doğal ya da dolgun bir görünüm tercihine göre kişiselleştirilen bir yöntemle hayata geçirilmektedir. Adana kalıcı eyeliner ise günlük makyaj rutininden kurtulmak isteyenler için zamanı ve enerjiyi birlikte yönetmenin akıllıca bir yoludur.\n\nAdana Seyhan kalıcı makyaj merkezimizde uzman ekibimiz, son teknoloji pigmentler ve steril tek kullanımlık malzemeler kullanarak en güvenli uygulamayı gerçekleştirir. Her işlem öncesinde yüz anatomisi analiz edilir, kişiye özel şekil ve renk belirlenerek onay alınır. Adana kalıcı makyaj rötuş hizmetlerimizle uygulamanızın ömrünü uzatabilir, her zaman tazelenmiş bir görünüme sahip olabilirsiniz.',
    relatedServices: ['adana-cilt-bakimi'],
    ctaText: 'Her sabah mükemmel makyajlı uyanmak ve zamandan tasarruf etmek için kalıcı makyaj uygulamalarımızdan yararlanın.',
    slug: 'adana-kalici-makyaj'
  },
  {
    id: 6,
    title: 'Adana Leke Tedavi',
    subtitle: 'Adana Leke Tedavi · Adana Güneş Lekesi · Adana Melazma Tedavisi · Adana Akne İzi · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da profesyonel leke tedavisi. Güneş lekesi, akne lekesi ve melazma tedavisi. Kimyasal peeling ve aydınlatıcı bakımlar.',
    longDescription: 'Adana leke tedavi hizmetinde Göksum Güzellik Salonu, ileri teknoloji ve aktif içerikli ürünlerle farklı tipteki cilt lekelerini hedeflemektedir. Adana leke tedavi uygulamalarımızda akne izleri, güneş lekeleri, melazma ve hormonal pigmentasyonlar için özel protokoller uygulanarak cilt tonu eşitlenmektedir. Adana leke tedavi planlarımız kimyasal peeling, aydınlatıcı serum ve cihaz kombinasyonlarından oluşmaktadır.\n\nAdana leke tedavi sürecinde önce leke tipi ve derinliği analiz edilmekte, ardından kişiye özel program oluşturulmaktadır. Adana leke tedavi fiyatları ve seans bilgisi için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana leke tedavi yaptıran müşterilerimiz, birkaç seans sonrasında cilt tonlarında belirgin bir aydınlanma ve eşitlenme yaşadıklarını bildirmektedir.',
    image: '/images/leketedavi.webp',
    bannerImage: '/images/leketedavi.webp',
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
    seoContent: 'Adana leke tedavi konusunda uzman arıyorsanız, Seyhan Cemalpaşa, Gazipaşa Bulvarı\'ndaki Göksum Güzellik Salonu güvenilir adresinizdir. Adana leke tedavi hizmetlerimizde güneş lekesi, melazma ve akne izleri için özel protokoller uygulanmakta; her leke tipine kişiselleştirilmiş yaklaşım benimsenmektedir. Adana leke tedavi kapsamında uygulanan kimyasal peeling ve aydınlatıcı serumlar, yüzeydeki pigment birikintilerini nazikçe parçalayarak eşit bir cilt tonu elde etmeyi sağlar. Adana leke tedavi uzmanlarımız melazma konusunda da deneyimli olup hormonal kaynaklı pigmentasyonlar için özel protokoller geliştirerek kalıcı ve güvenli sonuçlar elde etmektedir.\n\nAdana leke tedavi hizmetlerimiz kapsamında akne izi seansları, sivilce iyileştikten sonra kalan iz ve renk değişikliklerini hedefleyen yoğun aktif içerikli uygulamalardan oluşmaktadır. Adana leke tedavi sürecinde her müşteriye özel plan hazırlanmakta, leke tipi ve cilt hassasiyetine göre en uygun yöntemler seçilmektedir. Adana Seyhan leke tedavisi için merkezimizi tercih edenler, ilk konsültasyonda uzmanlarımızla birebir görüşerek süreci ayrıntılı öğrenebilmektedir.\n\nAdana leke tedavi arayışında olanlar, Göksum Güzellik Salonu\'nda uygulanan seansların ardından görünür iyileşme yaşadıklarını bildirmektedir. Güneş koruyucu kullanımı ve kişiselleştirilmiş bakım tavsiyeleriyle desteklenen adana leke tedavi süreci, lekelerin geri dönüşünü de engellemeye yardımcı olmaktadır. Randevu için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz.',
    relatedServices: ['adana-cilt-bakimi', 'adana-cilt-analizi'],
    ctaText: 'Cildinizde ton eşitsizliği ve lekelerden kurtulmak, daha aydınlık bir görünüme kavuşmak için leke tedavi programlarımızdan faydalanın.',
    slug: 'adana-leke-tedavi'
  },
  {
    id: 7,
    title: 'Adana Saç Mezoterapisi',
    subtitle: 'Adana Saç Mezoterapisi · Adana Saç Dökülmesi Tedavisi · Adana Saç Güçlendirme · Adana Vitamin Kokteyli · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da profesyonel saç mezoterapisi. Saç dökülmesi tedavisi, saç güçlendirme ve yeni saç çıkışını teşvik. Vitamin kokteylleri ile sağlıklı saçlar.',
    longDescription: 'Adana saç mezoterapisi hizmetinde Göksum Güzellik Salonu, saç dökülmesini durdurmak ve saç büyümesini teşvik etmek amacıyla mikroenjeksiyon yöntemi uygulamaktadır. Adana saç mezoterapisi kokteyller içeriğinde vitamin, mineral, amino asit ve büyüme faktörleri bulunmakta; bu karışım saç köklerini besleyerek kan dolaşımını güçlendirmektedir. Adana saç mezoterapisi uygulamaları saç foliküllerini yeniden aktif hale getirerek dökülmeyi azaltır ve yeni saç çıkışını destekler.\n\nAdana saç mezoterapisi programlarımız ortalama 8-10 seanstan oluşmakta; her seans öncesinde saç analizi yapılarak kokteyl kişiye özel hazırlanmaktadır. Adana saç mezoterapisi fiyatları ve seans detayları için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana saç mezoterapisi yaptıran müşterilerimiz, program süresince saç dökülmesinde belirgin azalma ve saç kalitesinde artış yaşadıklarını bildirmektedir.',
    image: '/images/sac.webp',
    bannerImage: '/images/sac.webp',
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
    seoContent: 'Adana saç mezoterapisi konusunda uzman arıyorsanız, Seyhan Cemalpaşa\'da Gazipaşa Bulvarı üzerindeki Göksum Güzellik Salonu doğru adresinizdir. Adana saç mezoterapisi hizmetimizde özellikle kadınlarda hormonal ve mevsimsel dökülmelere yönelik özel protokoller uygulanmakta; kişiye özel kokteyller hazırlanmaktadır. Adana saç mezoterapisi seanslarımız, saç foliküllerini besleyerek hem mevcut saçların güçlenmesine hem de yeni saç çıkışının teşvik edilmesine katkıda bulunmaktadır. Adana saç mezoterapisi programlarımız kapsamlı bir saç analizi ve ön değerlendirmeyle başlamakta; kişiye özel vitamin, mineral ve büyüme faktörü kokteylleri hazırlanmaktadır.\n\nAdana saç mezoterapisi hizmetlerimizde kullanılan kokteyller, saç derisindeki kan dolaşımını canlandıran biyotin, çinko ve amino asitler içermektedir. Adana saç mezoterapisi arayanlar, merkezimizde saç analizi yaptırarak tedaviye başlamadan önce kendi durumlarına uygun bir plan oluşturabilmektedir. Adana saç mezoterapisi merkezimizde ortalama 8-10 seanslık program süresince düzenli takip yapılmakta; her birkaç seansta bir ilerleme değerlendirilmektedir.\n\nAdana saç mezoterapisi ile saç dökülmesinin nedeni stres, hormonal değişimler veya besin eksikliği olsun, saç köklerinizi güçlendirerek bu sorunların üstesinden gelmenize destek oluyoruz. Göksum Güzellik Salonu\'nda adana saç mezoterapisi randevusu almak için +90 541 190 13 90 numarasını arayabilirsiniz.',
    relatedServices: [],
    ctaText: 'Saç dökülmesi sorunlarınıza son vermek ve daha güçlü, canlı saçlara kavuşmak için saç mezoterapisi programımıza başlayın.',
    slug: 'adana-sac-mezoterapi'
  },
  {
    id: 8,
    title: 'Adana Protez Tırnak',
    subtitle: 'Adana Protez Tırnak · Adana Jel Tırnak · Adana Nail Art · Adana Kalıcı Oje · Göksum Güzellik Salonu',
    description: 'Adana Seyhan\'da en iyi protez tırnak uygulaması. Jel tırnak, kalıcı oje, nail art ve tırnak uzatma hizmetleri ile şık ve bakımlı tırnaklara kavuşun.',
    longDescription: 'Adana protez tırnak hizmetinde Göksum Güzellik Salonu, Seyhan Cemalpaşa\'da profesyonel ve uzman kadrosuyla hizmet vermektedir. Adana protez tırnak uygulamalarımızda kalıcı oje, jel tırnak, üst form ve akrilik seçenekleriyle tırnak sağlığınıza zarar vermeden uzun süreli dayanıklılık ve estetik görünüm sunuyoruz. Adana protez tırnak uzmanlarımız en son trendleri takip ederek size özel nail art tasarımları yaratır.\n\nAdana protez tırnak hizmetimizde kırılgan, kısa veya hasarlı tırnaklarınızı güçlendirebilir, uzatabilir ya da tamamen yenileyebilirsiniz. Adana protez tırnak fiyatları ve mevcut modeller hakkında bilgi almak için salonumuzu ziyaret edebilirsiniz. Adana protez tırnak için Göksum Güzellik Salonu\'nu tercih eden müşterilerimiz, uzun ömürlü ve şık sonuçlardan memnuniyetle ayrılmaktadır.',
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
    seoContent: 'Adana Seyhan\'da Adana Protez Tırnak\n\nSeyhan Cemalpaşa, Gazipaşa Bulvarı\'ndaki Göksum Güzellik Salonu, kadınlara özel protez tırnak ve tırnak bakımı hizmetlerinde bölgenin tercih edilen adresidir. Uzman kadın teknisyenlerimiz, salonumuzun hijyenik ortamında her müşteriye özenli ve kişiselleştirilmiş uygulama sunar. Adana protez tırnak merkezi arayışındaki müşterilerimiz, uzman teknisyenlerimizin el işçiliği ve yüksek kaliteli jel ürünleri kullanımıyla uzun ömürlü sonuçlar elde etmektedir. Adana jel tırnak uygulamalarımız, tırnak plakasına özel hazırlık protokolü uygulandıktan sonra UV lambayla sertleştirilen katmanlarla gerçekleştirilmekte; kırılgan yapıya karşı güçlü bir koruma sağlanmaktadır.\n\nAdana kalıcı oje seçeneklerimiz, renk skalasının genişliği ve 3-4 hafta dayanıklılığıyla tırnak bakımında sık yapılan masrafları azaltmaktadır. Adana Seyhan protez tırnak merkezi olarak Göksum Güzellik, nail art ve özel tasarım konusunda da aranan bir adres haline gelmiştir. Adana protez tırnak uygulamalarında kalıcı oje, jel tırnak, üst form ve akrilik seçenekleri sunulmakta; her müşteriye özel renk ve tasarım danışmanlığı yapılmaktadır. Adana tırnak uzatma hizmetimizde kısa ve kırılgan yapıdaki tırnaklar, kişinin yüz ve el anatomisine uygun uzunluk ve şekilde estetik bir görünüme kavuşturulmaktadır.\n\nAdana protez tırnak fiyatları hakkında bilgi almak, fotoğraflı portföyümüzü incelemek veya randevu oluşturmak için +90 541 190 13 90 numaralı hattımızı arayabilirsiniz. Adana protez tırnak hizmetinde nail art, üst form, akrilik ve jel seçenekleri sunan Göksum Güzellik Salonu her zaman yanınızda; adana protez tırnak için ilk görüşmede ihtiyaçlarınız dinlenerek en uygun uygulama ve renk seçimi birlikte belirlenir. Adana protez tırnak salonu olarak sizi bekliyoruz.',
    relatedServices: ['adana-kalici-makyaj'],
    ctaText: 'Şık ve bakımlı tırnaklara sahip olmak için protez tırnak uygulamalarımızdan yararlanın.',
    slug: 'adana-protez-tirnak'
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
