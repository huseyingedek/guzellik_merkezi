import React from 'react';

const features = [

  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
      </svg>
    ),
    title: 'Yüksek Memnuniyet',
    description: 'Müşteri memnuniyeti en önemli değerimizdir. Kaliteli hizmetlerimizle fark yaratıyoruz.',
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M19 14a1 1 0 0 0-1 1v3h-3a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM5 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H6v-3a1 1 0 0 0-1-1zM19 3a1 1 0 0 0-1 1v3h-3a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 3H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H6V4h3a1 1 0 0 0 0-1z"></path>
      </svg>
    ),
    title: 'Sağlıklı Hizmet',
    description: 'Tüm işlemlerimizde hijyen ve sterilizasyon kurallarına %100 uyum sağlarız.',
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"></path>
      </svg>
    ),
    title: 'Müşteri Hizmetleri',
    description: 'Sorularınıza hızlı yanıt almak için 7/24 müşteri hizmetlerimize ulaşabilirsiniz.',
  },
];

export default function Features() {
  return (
    <section className="bg-beauty-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold-500 text-white mb-4">
                <div className="w-6 h-6">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-display font-semibold text-beauty-800 mb-2">{feature.title}</h3>
              <p className="text-beauty-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 