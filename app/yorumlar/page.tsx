import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define the metadata for this page
export const metadata: Metadata = {
  title: 'Müşteri Yorumları - Göksum Güzellik Merkezi',
  description: 'Göksum Güzellik Merkezi\'nde hizmet alan müşterilerimizin deneyimleri ve memnuniyet yorumları. Güzellik ve bakım hizmetlerimiz hakkında gerçek müşteri değerlendirmeleri.',
};

const testimonials = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    position: 'Müşteri',
    image: '/images/testimonial-1.jpg',
    quote: 'Göksum Güzellik Merkezi\'nde aldığım hizmetlerden çok memnun kaldım. Profesyonel ekip ve kaliteli ürünlerle harika sonuçlar elde ettim.',
    rating: 5,
    service: 'Cilt Bakımı',
    date: '15 Mart 2025',
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    position: 'Müşteri',
    image: '/images/testimonial-2.jpg',
    quote: 'Lazer epilasyon seanslarım için düzenli olarak geliyorum. Personel çok ilgili ve nazik, sonuçlar ise mükemmel! Her seansın ardından fark edilir derecede azalma oldu.',
    rating: 5,
    service: 'Lazer Epilasyon',
    date: '2 Nisan 2025',
  },
  {
    id: 3,
    name: 'Zeynep Demir',
    position: 'Müşteri',
    image: '/images/testimonial-3.jpg',
    quote: 'Cilt bakımı konusunda uzman bir ekibe sahipler. Cilt analizi sonrası önerilen tedaviler sayesinde cildim çok daha iyi görünüyor. Özellikle akne izlerim için uygulanan tedavi çok etkiliydi.',
    rating: 5,
    service: 'Cilt Analizi',
    date: '20 Nisan 2025',
  },
  {
    id: 4,
    name: 'Emre Şahin',
    position: 'Müşteri',
    image: '/images/testimonial-4.jpg',
    quote: 'Bölgesel incelme için aldığım seanslarda hem keyifli vakit geçirdim hem de etkili sonuçlar aldım. Sadece 5 seansta belirgin şekilde incelme oldu. Kesinlikle tavsiye ediyorum.',
    rating: 4,
    service: 'Bölgesel İncelme',
    date: '8 Mayıs 2024',
  },
  {
    id: 5,
    name: 'Slin Yıldız',
    position: 'Müşteri',
    image: '/images/testimonial-5.jpg',
    quote: 'Hydrafacial uygulaması için gittim ve sonuçlardan çok memnun kaldım. Cildim nem kazandı ve çok daha canlı görünüyor. Personelin ilgisi ve profesyonelliği takdire şayan.',
    rating: 5,
    service: 'Hydrafacial',
    date: '12 Haziran 2024',
  },
  {
    id: 6,
    name: 'Ali Demir',
    position: 'Müşteri',
    image: '/images/testimonial-6.jpg',
    quote: 'Saç dökülmesi için aldığım PRP tedavisi çok etkili oldu. 3 seans sonunda saçlarım gözle görülür şekilde güçlendi ve dökülme azaldı. Merkezdeki doktorlar ve uzmanlar çok bilgili.',
    rating: 5,
    service: 'PRP Tedavisi',
    date: '5 Temmuz 2024',
  },
  {
    id: 7,
    name: 'Deniz Şen',
    position: 'Müşteri',
    image: '/images/testimonial-7.jpg',
    quote: 'Kalıcı makyaj uygulamasından sonra her sabah makyaj yapma derdinden kurtuldum. Çok doğal bir sonuç elde edildi, kimse kalıcı makyaj olduğunu anlamıyor bile. Teşekkürler Göksum!',
    rating: 5,
    service: 'Kalıcı Makyaj',
    date: '22 Temmuz 2024',
  },
  {
    id: 8,
    name: 'Burak Yılmaz',
    position: 'Müşteri',
    image: '/images/testimonial-8.jpg',
    quote: 'Akne tedavisi için birçok yer denedim ama gerçek sonucu Göksum\'da aldım. Uzman kadroları sayesinde doğru teşhis ve tedavi ile 2 ayda cilt problemlerim neredeyse tamamen geçti.',
    rating: 4,
    service: 'Akne Tedavisi',
    date: '10 Ağustos 2023',
  },
  {
    id: 10,
    name: 'Mustafa Öztürk',
    position: 'Müşteri',
    image: '/images/testimonial-10.jpg',
    quote: 'Selülit tedavisi için düzenli seanslar alıyorum ve her seansta fark ediliyor. Özellikle şişlik ve portakal kabuğu görünümünde ciddi azalma oldu. Merkezdeki cihazlar son teknoloji.',
    rating: 4,
    service: 'Selülit Tedavisi',
    date: '17 Eylül 2023',
  },
  {
    id: 12,
    name: 'Cem Şahin',
    position: 'Müşteri',
    image: '/images/testimonial-12.jpg',
    quote: 'Saç mezoterapisi için geldiğim merkezde çok olumlu bir deneyim yaşadım. Saçlarım güçlendi ve dökülme ciddi oranda azaldı. Personelin misafirperverliği de ayrıca takdire değer.',
    rating: 5,
    service: 'Saç Mezoterapisi',
    date: '22 Ekim 2023',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-gold-500' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20 bg-beauty-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-beauty-900 mb-4">
              Müşteri Yorumları
            </h1>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-14 h-0.5 bg-gold-300"></div>
              <div className="text-gold-500">
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                  <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
                </svg>
              </div>
              <div className="w-14 h-0.5 bg-gold-300"></div>
            </div>
            <p className="text-beauty-600 max-w-2xl mx-auto">
              Göksum Güzellik Merkezi'nde deneyim yaşayan değerli müşterilerimizin yorumları. 
              Sizin memnuniyetiniz bizim için en büyük motivasyon kaynağı.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-beauty-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-14 w-14 mr-4 rounded-full overflow-hidden border-2 border-gold-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-beauty-800">{testimonial.name}</h3>
                      <p className="text-sm text-beauty-600">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-xs text-beauty-500">{testimonial.date}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-beauty-100 text-beauty-800 text-xs px-2.5 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  <p className="text-beauty-700">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white rounded-lg p-5 shadow-md border border-beauty-100">
              <h2 className="text-xl font-semibold text-beauty-800 mb-3">Sizin Yorumunuz</h2>
              <p className="text-beauty-600 mb-4">
                Siz de Göksum Güzellik Merkezi hakkında deneyimlerinizi paylaşmak ister misiniz?
              </p>
              <Link 
                href="/iletisim"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white py-2.5 px-6 rounded-full transition-colors duration-300 font-medium"
              >
                Yorum Gönder
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 