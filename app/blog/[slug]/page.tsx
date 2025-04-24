import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar3, BsArrowLeft, BsShare } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaRegBookmark } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type ContentBlock = 
  | { type: 'paragraph'; content: string }
  | { type: 'subtitle'; content: string }
  | { type: 'image'; url: string; alt: string; caption?: string }
  | { type: 'tips'; content: string[] }
  | { type: 'quote'; content: string; author?: string }
  | { type: 'conclusion'; content: string };

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  author: string;
  authorTitle: string;
  authorImage: string;
  content: ContentBlock[];
  related: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: 'kis-aylarinda-cilt-bakimi',
    title: 'Kış Aylarında Cilt Bakımı Nasıl Yapılmalı?',
    category: 'Cilt Bakımı',
    date: '15 Aralık 2023',
    image: '/images/kis.png',
    author: 'Elif Dartar',
    authorTitle: 'Güzellik Uzmanı',
    authorImage: '/images/testimonial-1.jpg',
    content: [
      {
        type: 'paragraph',
        content: 'Kış ayları cildiniz için zorlayıcı olabilir. Soğuk hava, düşük nem ve iç mekan ısıtması cildinizin nemini alarak kurumasına, pullanmasına ve tahriş olmasına neden olabilir. Ancak doğru bakım rutini ile cildinizi kışın olumsuz etkilerinden koruyabilirsiniz.'
      },
      {
        type: 'subtitle',
        content: 'Nemlendirmeye Önem Verin'
      },
      {
        type: 'paragraph',
        content: 'Kış aylarında cildinizin ihtiyacı olan en önemli şey nemdir. Yaz aylarında kullandığınız hafif nemlendiriciyi, daha yoğun ve besleyici bir ürünle değiştirin. Özellikle ceramide, hyaluronik asit ve gliserin gibi nemlendirici bileşenler içeren ürünleri tercih edin.'
      },
      {
        type: 'paragraph',
        content: 'Geceleri cilt bakım rutininize bir yüz yağı ekleyebilirsiniz. Yüz yağları, cildinizin nem bariyerini güçlendirir ve gece boyunca cildinizin derinlemesine nemlendirilmesini sağlar.'
      },
      {
        type: 'image',
        url: '/images/blog-detail-1.jpg',
        alt: 'Nemlendirici ürünler',
        caption: 'Kış aylarında daha yoğun ve besleyici nemlendirici ürünler tercih edin.'
      },
      {
        type: 'subtitle',
        content: 'Nazik Temizleyiciler Kullanın'
      },
      {
        type: 'paragraph',
        content: 'Kış aylarında yüz temizliği için köpüren ve kurutucu temizleyiciler yerine, kremsi ve nazik formüllere sahip temizleyicileri tercih edin. Bu ürünler cildinizi temizlerken doğal yağlarını korumanıza yardımcı olur.'
      },
      {
        type: 'paragraph',
        content: 'Yüzünüzü günde iki defadan fazla yıkamaktan kaçının, aksi takdirde cildinizin nem bariyeri zarar görebilir.'
      },
      {
        type: 'subtitle',
        content: 'Güneş Koruması Unutulmamalı'
      },
      {
        type: 'paragraph',
        content: 'Kış aylarında bile, özellikle karlı günlerde, UV ışınları cildinize zarar verebilir. Kar, güneş ışınlarını yansıtarak etkilerini artırabilir. Bu nedenle, dışarı çıkmadan önce en az 30 SPF içeren bir güneş kremi uygulamayı ihmal etmeyin.'
      },
      {
        type: 'paragraph',
        content: 'Fiziksel koruyucular (çinko oksit veya titanyum dioksit içeren ürünler) hassas ciltler için daha iyi bir seçenek olabilir, çünkü cildi tahriş etme olasılıkları daha düşüktür.'
      },
      {
        type: 'tips',
        content: [
          'Her gün düzenli olarak nemlendirici kullanın',
          'Duş sonrası hemen nemlendirici sürün',
          'Dudaklarınızı koruyucu bir balsam ile nemlendirin',
          'İçtiğiniz su miktarını artırın',
          'Nemlendirici bir oda difüzörü kullanmayı düşünün'
        ]
      },
      {
        type: 'subtitle',
        content: 'Düzenli Peeling Yapın'
      },
      {
        type: 'paragraph',
        content: 'Hafif bir peeling uygulaması, kuru ve ölü cilt hücrelerini nazikçe uzaklaştırarak cildinizin daha iyi nefes almasını ve nemlendirici ürünlerin daha etkili bir şekilde emilmesini sağlar. Ancak aşırı peelingden kaçının - haftada bir veya iki kez yeterlidir.'
      },
      {
        type: 'paragraph',
        content: 'AHA (alfa hidroksi asitler) ve BHA (beta hidroksi asitler) gibi kimyasal peelingler, kış aylarında fiziksel peelinglere göre daha nazik bir seçenek olabilir.'
      },
      {
        type: 'quote',
        content: 'Cildinizin ihtiyaçlarını dinleyin. Eğer kuruluk, kızarıklık veya tahriş hissediyorsanız, cilt bakım rutininizi daha nazik ürünlerle değiştirin ve profesyonel yardım almaktan çekinmeyin.',
        author: 'Ayşe Yılmaz, Cilt Bakım Uzmanı'
      },
      {
        type: 'subtitle',
        content: 'Profesyonel Cilt Bakımı'
      },
      {
        type: 'paragraph',
        content: 'Kış aylarında, cildinize ekstra bakım sağlamak için profesyonel cilt bakım uygulamalarını düşünebilirsiniz. Nemlendirici maskeler, hyaluronik asit uygulamaları ve nazik kimyasal peelingler kış cilt bakımı için mükemmel seçeneklerdir.'
      },
      {
        type: 'paragraph',
        content: 'Göksum Güzellik Merkezi\'nde, cildinizin kış aylarındaki özel ihtiyaçlarına yönelik kişiselleştirilmiş bakım programları sunuyoruz. Uzmanlarımız, cildinizin durumunu analiz ederek en uygun bakım planını oluşturacaktır.'
      },
      {
        type: 'conclusion',
        content: 'Kış aylarında doğru cilt bakımı rutiniyle, cildinizi sağlıklı ve ışıltılı tutabilirsiniz. Nemlendirmeyi ihmal etmeyin, nazik ürünler kullanın ve cildinizin ihtiyaçlarına göre bakım rutininizi ayarlayın. Sağlıklı ve güzel bir cilt için düzenli profesyonel bakımları da unutmayın.'
      }
    ],
    related: ['dogal-sac-bakimi', 'cilt-sagligi-beslenme', 'kalici-makyaj-uygulamalari']
  },
  {
    slug: 'dogal-sac-bakimi',
    title: 'Doğal Saç Bakım Maskeleri',
    category: 'Saç Bakımı',
    date: '8 Ocak 2025',
    image: '/images/sac-maske.png',
    author: 'Elif Dartar',
    authorTitle: 'Güzellik Uzmanı',
    authorImage: '/images/testimonial-3.jpg',
    content: [
      {
        type: 'paragraph',
        content: 'Sağlıklı ve canlı saçlar için doğal malzemelerle hazırlayabileceğiniz ev yapımı saç maskeleri, saç bakımınızın önemli bir parçası olabilir. Bu makalede, farklı saç tipleri için etkili doğal saç maskesi tarifleri paylaşacağız.'
      },
      {
        type: 'subtitle',
        content: 'Kuru Saçlar İçin Avokado ve Bal Maskesi'
      },
      {
        type: 'paragraph',
        content: 'Kuru ve yıpranmış saçlar için avokado ve bal maskesi mükemmel bir seçenektir. Avokado, E vitamini ve yağ asitleri açısından zengindir ve saçı derinlemesine nemlendirir. Bal ise doğal bir nemlendirici olup saçın nem dengesini korur.'
      },
      {
        type: 'paragraph',
        content: 'Bu maskeyi hazırlamak için olgun bir avokadoyu ezip içine 2 yemek kaşığı bal ekleyin. Karışımı saçınıza uygulayın ve 30 dakika bekletin. Ardından ılık suyla durulayın.'
      },
      {
        type: 'conclusion',
        content: 'Doğal saç maskeleri, saç tipinize uygun malzemelerle hazırlandığında saç sağlığınıza önemli katkılar sağlayabilir. Düzenli olarak uygulanan bu maskeler, saçlarınızın daha güçlü, parlak ve sağlıklı görünmesine yardımcı olur.'
      }
    ],
    related: ['kis-aylarinda-cilt-bakimi', 'sac-dokulmesine-karsi', 'cilt-sagligi-beslenme']
  },
  {
    slug: 'bahar-makyaj-trendleri',
    title: '2024 Bahar Makyaj Trendleri',
    category: 'Makyaj',
    date: '22 Şubat 2024',
    image: '/images/bahar-trend.png',
    author: 'Elif Kara',
    authorTitle: 'Makyaj Uzmanı',
    authorImage: '/images/testimonial-9.jpg',
    content: [
      {
        type: 'paragraph',
        content: '2024 bahar sezonunda makyaj dünyasında canlı renkler, minimalist yaklaşımlar ve doğal görünümler ön plana çıkıyor. Bu makalede, sezonun en popüler makyaj trendlerini ve nasıl uygulayabileceğinizi anlatacağız.'
      },
      {
        type: 'subtitle',
        content: 'Pastel Göz Makyajı'
      },
      {
        type: 'paragraph',
        content: 'Bu bahar, lavanta, açık mavi ve pudra pembesi gibi pastel tonlar göz makyajında oldukça popüler. Bu yumuşak renkler, baharın tazeliğini ve canlılığını yansıtıyor.'
      },
      {
        type: 'conclusion',
        content: '2024 bahar makyaj trendleri, kendinizi ifade etmeniz için birçok farklı seçenek sunuyor. İster minimalist bir görünüm, ister cesur renk kombinasyonları tercih edin, önemli olan kendinizi rahat ve güzel hissetmeniz.'
      }
    ],
    related: ['kalici-makyaj-uygulamalari', 'kis-aylarinda-cilt-bakimi', 'dogal-sac-bakimi']
  },
  {
    slug: 'cilt-sagligi-beslenme',
    title: 'Cilt Sağlığı İçin Beslenme Önerileri',
    category: 'Beslenme',
    date: '10 Mart 2025',
    image: '/images/sac-besleme.png',
    author: 'Ayşe Yılmaz',
    authorTitle: 'Cilt Bakım Uzmanı',
    authorImage: '/images/testimonial-1.jpg',
    content: [
      {
        type: 'paragraph',
        content: 'Sağlıklı bir cilt için doğru beslenme büyük önem taşır. Bu makalede, cildinizi içten dışa besleyecek ve parlaklık kazandıracak gıdalar hakkında bilgi vereceğiz.'
      },
      {
        type: 'subtitle',
        content: 'Antioksidan Açısından Zengin Gıdalar'
      },
      {
        type: 'paragraph',
        content: 'Antioksidanlar, serbest radikallerle savaşarak cildinizi çevresel hasarlardan korur. Böğürtlen, çilek, yaban mersini gibi koyu renkli meyveler, yeşil çay ve koyu yeşil yapraklı sebzeler antioksidan açısından zengindir.'
      },
      {
        type: 'conclusion',
        content: 'Cilt sağlığınız için beslenmenize dikkat etmek, dışarıdan uyguladığınız bakımlar kadar önemlidir. Dengeli ve çeşitli beslenme, su tüketimi ve sağlıklı yağların dahil edilmesi cildinizin ışıltılı ve genç görünmesine yardımcı olacaktır.'
      }
    ],
    related: ['kis-aylarinda-cilt-bakimi', 'dogal-sac-bakimi', 'lazer-epilasyon-bilgiler']
  },
  {
    slug: 'lazer-epilasyon-bilgiler',
    title: 'Lazer Epilasyon Hakkında Merak Edilenler',
    category: 'Lazer Epilasyon',
    date: '5 Nisan 2025',
    image: '/images/lazer-merak-edilenler.png',
    author: 'Elif Dartar',
    authorTitle: 'Güzellik Uzmanı',
    authorImage: '/images/testimonial-2.jpg',
    content: [
      {
        type: 'paragraph',
        content: 'Lazer epilasyon, kalıcı tüy azaltma için popüler bir yöntemdir. Bu makalede, lazer epilasyon öncesi ve sonrası bilmeniz gereken önemli bilgileri ve etkili sonuç almak için dikkat etmeniz gerekenleri paylaşacağız.'
      },
      {
        type: 'subtitle',
        content: 'Lazer Epilasyon Nasıl Çalışır?'
      },
      {
        type: 'paragraph',
        content: 'Lazer epilasyon, kıl kökündeki pigmentleri hedef alan ışık enerjisi kullanarak çalışır. Bu enerji, kıl kökünü ısıtır ve hasar vererek büyümesini engeller. En iyi sonuçlar için genellikle birden fazla seans gereklidir.'
      },
      {
        type: 'conclusion',
        content: 'Lazer epilasyon, doğru uygulama ve bakım ile kalıcı tüy azaltma konusunda etkili bir yöntemdir. İyi bir klinik ve tecrübeli uzmanlar seçerek, cildinize ve sağlığınıza özen gösterirken istenmeyen tüylerden kurtulabilirsiniz.'
      }
    ],
    related: ['cilt-sagligi-beslenme', 'kis-aylarinda-cilt-bakimi', 'kalici-makyaj-uygulamalari']
  },
  {
    slug: 'kalici-makyaj-uygulamalari',
    title: 'Kalıcı Makyaj Uygulamaları',
    category: 'Güzellik Trendleri',
    date: '17 Nisan 2025',
    image: '/images/kalici-makyaj.png',
    author: 'Elif Dartar',
    authorTitle: 'Kalıcı Makyaj Uzmanı',
    authorImage: '/images/testimonial-5.jpg',
    content: [
      {
        type: 'paragraph',
        content: 'Kalıcı makyaj, zaman kazandıran ve her daim bakımlı görünmenizi sağlayan modern bir güzellik uygulamasıdır. Bu makalede, kalıcı makyaj teknikleri, uygulama alanları ve doğru uzman seçimi konularında bilgi vereceğiz.'
      },
      {
        type: 'subtitle',
        content: 'Kalıcı Makyaj Nedir?'
      },
      {
        type: 'paragraph',
        content: 'Kalıcı makyaj (microblading veya mikropigmentasyon olarak da bilinir), özel pigmentlerin cilt altına yerleştirilmesi işlemidir. Kaşlar, dudaklar ve göz çizgisi gibi alanlarda uzun süreli renklendirme sağlar.'
      },
      {
        type: 'conclusion',
        content: 'Kalıcı makyaj, doğru uzman tarafından uygulandığında, günlük makyaj rutininizi basitleştiren ve özgüveninizi artıran harika bir seçenektir. Göksum Güzellik Merkezi\'nde, deneyimli uzmanlarımız ile doğal ve kişiye özel kalıcı makyaj uygulamaları sunuyoruz.'
      }
    ],
    related: ['bahar-makyaj-trendleri', 'kis-aylarinda-cilt-bakimi', 'cilt-sagligi-beslenme']
  }
];

// Bu fonksiyon statik dışa aktarım için gereklidir
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Blogu bul
  const post = blogPosts.find(post => post.slug === slug);
  
  // Blog bulunamazsa 404 döndür
  if (!post) {
    notFound();
  }
  
  // İlgili blog yazılarını bul
  const relatedPosts = post.related
    .map(relatedSlug => blogPosts.find(p => p.slug === relatedSlug))
    .filter((p): p is BlogPost => p !== undefined);

  return (
    <>
      <main className="bg-beauty-50 pt-8 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-beauty-700 hover:text-gold-500">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-beauty-400">/</span>
                    <Link href="/blog" className="text-sm font-medium text-beauty-700 hover:text-gold-500">
                      Blog
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-beauty-400">/</span>
                    <span className="text-sm font-medium text-beauty-400 truncate max-w-[200px]">
                      {post.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ana içerik - sol ve orta */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Blog görseli */}
                <div className="relative h-72 md:h-96 w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Blog içeriği */}
                <div className="p-6 md:p-8">
                  {/* Kategori ve tarih */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-gold-700 bg-gold-100 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-beauty-500 text-sm">
                      <BsCalendar3 className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  {/* Başlık */}
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-beauty-900 mb-6">
                    {post.title}
                  </h1>
                  
                  {/* Yazar bilgisi */}
                  <div className="flex items-center mb-8 pb-8 border-b border-beauty-100">
                    <div className="relative h-12 w-12 md:h-14 md:w-14 mr-4 rounded-full overflow-hidden border border-beauty-100">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-beauty-900">{post.author}</div>
                      <div className="text-sm text-beauty-600">{post.authorTitle}</div>
                    </div>
                  </div>
                  
                  {/* Blog içeriği */}
                  <div className="prose prose-lg max-w-none text-beauty-800">
                    {post.content.map((block, index) => {
                      switch (block.type) {
                        case 'paragraph':
                          return <p key={index} className="mb-6">{block.content}</p>;
                        case 'subtitle':
                          return <h2 key={index} className="text-2xl font-display font-bold text-beauty-900 mt-8 mb-4">{block.content}</h2>;
                        case 'image':
                          return (
                            <figure key={index} className="my-8">
                              <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                                <Image
                                  src={block.url}
                                  alt={block.alt}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              {block.caption && (
                                <figcaption className="text-sm text-beauty-500 text-center mt-2">
                                  {block.caption}
                                </figcaption>
                              )}
                            </figure>
                          );
                        case 'tips':
                          return (
                            <div key={index} className="bg-beauty-50 rounded-lg p-6 my-8">
                              <h3 className="text-xl font-semibold text-beauty-900 mb-4">Öneriler</h3>
                              <ul className="space-y-2">
                                {block.content.map((tip, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-gold-500 mr-2">•</span>
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        case 'quote':
                          return (
                            <blockquote key={index} className="border-l-4 border-gold-400 pl-6 py-2 my-8 italic text-beauty-700">
                              <p className="mb-2">{block.content}</p>
                              {block.author && <cite className="font-medium text-beauty-900 not-italic">— {block.author}</cite>}
                            </blockquote>
                          );
                        case 'conclusion':
                          return (
                            <div key={index} className="border-t border-b border-beauty-100 py-6 my-8">
                              <h3 className="text-xl font-semibold text-beauty-900 mb-4">Sonuç</h3>
                              <p>{block.content}</p>
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                  
                  {/* Sosyal paylaşım */}
                  <div className="mt-10 pt-8 border-t border-beauty-100">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center">
                        <span className="text-beauty-700 mr-4">Paylaş:</span>
                        <div className="flex space-x-2">
                          <a href="#" className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-600 hover:bg-gold-500 hover:text-white transition-colors">
                            <FaFacebook size={16} />
                          </a>
                          <a href="#" className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-600 hover:bg-gold-500 hover:text-white transition-colors">
                            <FaTwitter size={16} />
                          </a>
                          <a href="#" className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-600 hover:bg-gold-500 hover:text-white transition-colors">
                            <FaInstagram size={16} />
                          </a>
                          <a href="#" className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-600 hover:bg-gold-500 hover:text-white transition-colors">
                            <FaWhatsapp size={16} />
                          </a>
                        </div>
                      </div>
                      <button className="flex items-center text-beauty-700 hover:text-gold-500 transition-colors">
                        <FaRegBookmark className="mr-2" />
                        <span>Kaydet</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Geri dön butonu */}
                  <div className="mt-8 text-center">
                    <Link href="/blog" className="inline-flex items-center text-beauty-700 hover:text-gold-500 font-medium">
                      <BsArrowLeft className="mr-2" />
                      Tüm Yazılara Dön
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Yan bar - sağ sütun */}
            <div className="lg:col-span-1 space-y-8">
              {/* Yazar Hakkında */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-display font-bold text-beauty-900 mb-4">Yazar Hakkında</h3>
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 mr-4 rounded-full overflow-hidden border border-beauty-100">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-beauty-900">{post.author}</div>
                    <div className="text-sm text-beauty-600">{post.authorTitle}</div>
                  </div>
                </div>
                <p className="text-beauty-700 text-sm">
                  Göksum Güzellik Merkezi'nde {post.authorTitle.toLowerCase()} olarak görev yapmaktadır. 
                  Alanında uzmanlaşmış ve deneyimli ekibimizin değerli bir üyesidir.
                </p>
                <div className="mt-4 flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-600 hover:bg-gold-500 hover:text-white transition-colors">
                    <FaInstagram size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center text-beauty-600 hover:bg-gold-500 hover:text-white transition-colors">
                    <FaFacebook size={16} />
                  </a>
                </div>
              </div>
              
              {/* İlgili Makaleler */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-display font-bold text-beauty-900 mb-4">İlgili Makaleler</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relPost, index) => (
                    <div key={index} className="flex items-start">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={relPost.image}
                          alt={relPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <Link 
                          href={`/blog/${relPost.slug}`}
                          className="text-beauty-900 font-medium hover:text-gold-500 line-clamp-2"
                        >
                          {relPost.title}
                        </Link>
                        <div className="text-xs text-beauty-500 mt-1">{relPost.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Kategoriler */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-display font-bold text-beauty-900 mb-4">Kategoriler</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/blog?category=cilt-bakimi" className="px-3 py-1 text-sm bg-beauty-100 text-beauty-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors">
                    Cilt Bakımı
                  </Link>
                  <Link href="/blog?category=sac-bakimi" className="px-3 py-1 text-sm bg-beauty-100 text-beauty-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors">
                    Saç Bakımı
                  </Link>
                  <Link href="/blog?category=makyaj" className="px-3 py-1 text-sm bg-beauty-100 text-beauty-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors">
                    Makyaj
                  </Link>
                  <Link href="/blog?category=beslenme" className="px-3 py-1 text-sm bg-beauty-100 text-beauty-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors">
                    Beslenme
                  </Link>
                  <Link href="/blog?category=lazer-epilasyon" className="px-3 py-1 text-sm bg-beauty-100 text-beauty-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors">
                    Lazer Epilasyon
                  </Link>
                  <Link href="/blog?category=guzellik-trendleri" className="px-3 py-1 text-sm bg-beauty-100 text-beauty-700 rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors">
                    Güzellik Trendleri
                  </Link>
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-beauty-900 rounded-xl shadow-md p-6 text-white">
                <h3 className="text-xl font-display font-bold mb-3">Profesyonel Destek Alın</h3>
                <p className="text-beauty-300 mb-4">
                  Cilt bakımı, saç bakımı ve güzellik konularında profesyonel destek için Göksum Güzellik Merkezi uzmanları yanınızda.
                </p>
                <Link 
                  href="/randevu" 
                  className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white py-2 px-4 rounded-full transition-colors duration-300 text-sm font-medium"
                >
                  Randevu Alın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 