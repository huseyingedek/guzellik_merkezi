import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    position: 'Müşteri',
    image: '/images/testimonial-1.jpg',
    quote: 'Göksum Güzellik Merkezi\'nde aldığım hizmetlerden çok memnun kaldım.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    position: 'Müşteri',
    image: '/images/testimonial-2.jpg',
    quote: 'Lazer epilasyon seanslarım için düzenli olarak geliyorum. Sonuçlar mükemmel!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Zeynep Demir',
    position: 'Müşteri',
    image: '/images/testimonial-3.jpg',
    quote: 'Cilt bakımı konusunda uzman bir ekip. Cildim çok daha iyi görünüyor.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emre Şahin',
    position: 'Müşteri',
    image: '/images/testimonial-4.jpg',
    quote: 'Bölgesel incelme seanslarında etkili sonuçlar aldım. Tavsiye ediyorum.',
    rating: 4,
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

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M9.17 6C7.4 7.13 6.5 8.6 6.5 10.69C6.5 13.59 8.69 15.7 11.39 15.7C13.97 15.7 15.5 13.8 15.5 11.69C15.5 9.37 13.7 7.5 11.39 7.5C11.47 7.5 10.95 7.5 10.95 7.5C11.17 7.1 11.97 6.07 13.05 5.65C13.23 5.58 13.14 5.25 12.94 5.25H9.52C9.38 5.25 9.27 5.36 9.27 5.5C9.27 5.82 9.17 6 9.17 6ZM15.17 6C13.4 7.13 12.5 8.6 12.5 10.69C12.5 13.59 14.69 15.7 17.39 15.7C19.97 15.7 21.5 13.8 21.5 11.69C21.5 9.37 19.7 7.5 17.39 7.5C17.47 7.5 16.95 7.5 16.95 7.5C17.17 7.1 17.97 6.07 19.05 5.65C19.23 5.58 19.14 5.25 18.94 5.25H15.52C15.37 5.25 15.27 5.36 15.27 5.5C15.27 5.82 15.17 6 15.17 6Z" 
      fill="currentColor"
    />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-16 bg-beauty-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-beauty-900 mb-4">
            Yorumlar
          </h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-0.5 bg-gold-300"></div>
            <div className="text-gold-500">
              <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
              </svg>
            </div>
            <div className="w-10 h-0.5 bg-gold-300"></div>
          </div>
          <p className="text-beauty-600 max-w-xl mx-auto">
            Müşterilerimizin deneyimleri ve memnuniyetleri.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-6 overflow-x-auto px-4 -mx-4 pb-4 max-w-full">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-beauty-100 flex flex-col min-w-[250px] max-w-[250px] flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 mr-3 rounded-full overflow-hidden border-2 border-gold-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-beauty-800">{testimonial.name}</h3>
                    <p className="text-sm text-beauty-600">{testimonial.position}</p>
                  </div>
                </div>
                <div className="mb-2">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-sm text-beauty-700">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-2 h-2 rounded-full bg-gold-300 opacity-70 hover:opacity-100 transition-opacity`} 
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/yorumlar"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white py-2.5 px-6 rounded-full transition-colors duration-300 font-medium"
          >
            Daha Fazla Yorum
            <svg
              className="ml-2 w-4 h-4"
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
