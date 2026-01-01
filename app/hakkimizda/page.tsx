import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaInstagram } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Göksum Güzellik Merkezi - Adana Seyhan',
  description: 'Göksum Güzellik Merkezi, Adana Seyhan\'da profesyonel güzellik hizmetleri sunan güvenilir adresiniz. Deneyimli ekibimiz, son teknoloji cihazlarımız ve müşteri memnuniyeti odaklı yaklaşımımızla hizmetinizdeyiz.',
  keywords: 'göksum güzellik merkezi, adana güzellik merkezi, seyhan güzellik merkezi, adana güzellik salonu, adana seyhan güzellik merkezi, adana profesyonel güzellik merkezi, adana en iyi güzellik merkezi hakkında',
  openGraph: {
    title: 'Hakkımızda | Göksum Güzellik Merkezi - Adana Seyhan',
    description: 'Adana Seyhan\'da yıllardır profesyonel güzellik hizmetleri sunuyoruz. Deneyimli ekibimiz ve modern cihazlarımızla hizmetinizdeyiz.',
    url: 'https://www.goksumguzellik.com/hakkimizda',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.goksumguzellik.com/hakkimizda',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Page Banner */}
      <div className="relative h-[300px] bg-beauty-900">
        <div className="absolute inset-0 bg-beauty-900/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-banner.jpg')" }}
        ></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Hakkımızda</h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gold-300"></div>
            <p className="text-white">Göksum Güzellik Merkezi</p>
            <div className="w-8 h-0.5 bg-gold-300"></div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-beauty-900 mb-6">Hikayemiz</h2>
              <div className="w-20 h-1 bg-gold-400 mb-6"></div>
              <p className="text-beauty-700 mb-4">
                Göksum Güzellik Merkezi, Adana'nın Seyhan ilçesinde, Gazipaşa Bulvarı üzerinde kurulmuştur. Kurucumuz, güzellik sektöründe uzun yıllar deneyime sahip olan Elif Dartar, merkezimizi müşterilerimize en kaliteli ve güncel hizmetleri sunmak amacıyla açmıştır.
              </p>
              <p className="text-beauty-700 mb-4">
                Yıllar içinde, müşterilerimizin ihtiyaçlarını ve isteklerini anlayarak, onlara en iyi hizmeti sunmak için sürekli kendimizi geliştirdik. Estetik ve güzellik alanındaki en son teknolojileri ve yöntemleri takip ederek, merkezimizi güncel tutmaya özen gösterdik.
              </p>
              <p className="text-beauty-700">
                Bugün, Göksum Güzellik Merkezi olarak, müşterilerimize unutulmaz bir deneyim sunmaktan ve onların kendilerini daha güzel, daha özgüvenli hissetmelerine katkıda bulunmaktan gurur duyuyoruz.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/goksum.jpg"
                alt="Göksum Güzellik Merkezi Hikayesi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="py-16 bg-beauty-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-beauty-900 mb-6">Vizyonumuz & Misyonumuz</h2>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold-300"></div>
              <div className="text-gold-500">
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                  <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gold-300"></div>
            </div>
            <p className="text-beauty-700">
              Müşterilerimize en kaliteli hizmeti sunmak, onların kendilerini özel ve değerli hissetmelerini sağlamak ve güzelliklerine güzellik katmak temel misyonumuzdur. Vizyonumuz ise Adana'nın en güvenilir ve tercih edilen güzellik merkezi olmak, müşteri memnuniyetini her zaman ön planda tutarak sektörde öncü bir konuma gelmektir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-beauty-800 mb-4">Uzman Kadro</h3>
              <p className="text-beauty-600">
                Alanında uzman, sürekli eğitimlerle kendini geliştiren, profesyonel bir ekiple hizmet veriyoruz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-beauty-800 mb-4">Kaliteli Ürünler</h3>
              <p className="text-beauty-600">
                En kaliteli ve güvenilir ürünlerle çalışıyor, müşterilerimizin sağlığını her şeyin üstünde tutuyoruz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-beauty-800 mb-4">Uygun Fiyatlar</h3>
              <p className="text-beauty-600">
                Kaliteden ödün vermeden, herkesin erişebileceği fiyatlarla hizmet sunmaya özen gösteriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-beauty-900 mb-4">
              Uzman Ekibimiz
            </h2>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-gold-300"></div>
              <div className="text-gold-500">
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                  <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
                </svg>
              </div>
              <div className="w-12 h-0.5 bg-gold-300"></div>
            </div>
            <p className="text-beauty-600 max-w-2xl mx-auto">
              Göksum Güzellik Merkezi'nde alanında uzman, deneyimli ve kendini sürekli geliştiren uzmanımız ile
              sizlere en iyi hizmeti sunmaktayız.
            </p>
          </div>
          
          <div className="flex justify-center">
            {/* Team Member */}
            <div className="bg-white border border-beauty-100 rounded-lg overflow-hidden shadow-sm group max-w-xs">
              <div className="aspect-square relative overflow-hidden">
                <div className="w-full h-full bg-beauty-100">
                  {/* Placeholder for team member image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl text-gold-300 font-display">ED</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-beauty-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gold-500 transition-colors">
                      <FaInstagram size={15} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-display font-semibold text-beauty-800 mb-1">
                  Elif Dartar
                </h3>
                <p className="text-gold-500 text-sm font-medium mb-4">Güzellik Uzmanı</p>
                <p className="text-beauty-600 text-sm">
                  Profesyonel eğitim ve tecrübesiyle tüm güzellik ihtiyaçlarınız için yanınızda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 