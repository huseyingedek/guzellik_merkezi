import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      title: "Düzenli Müşteri",
      rating: 5,
      content: "Göksum Güzellik Merkezi'nin cilt bakım hizmetinden çok memnun kaldım. Cildim artık daha canlı ve parlak görünüyor. Uzman kadroları ve kullandıkları kaliteli ürünler ile fark yaratıyorlar.",
      avatar: "/images/testimonials/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Deniz Kaya",
      title: "Haftalık Ziyaretçi",
      rating: 5,
      content: "Lazer epilasyon seanslarım için düzenli olarak geliyorum. Hem hijyen konusunda titizlikleri hem de profesyonellikleri ile kendimi çok güvende hissediyorum. Sonuçlar harika!",
      avatar: "/images/testimonials/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Selin Öztürk",
      title: "Yeni Müşteri",
      rating: 5,
      content: "Bölgesel zayıflama için başvurdum ve kısa sürede inanılmaz sonuçlar aldım. Personelin ilgisi ve çözüm odaklı yaklaşımı gerçekten etkileyici. Kesinlikle tavsiye ediyorum.",
      avatar: "/images/testimonials/avatar-3.jpg",
    },
    {
      id: 4,
      name: "Mehmet Demir",
      title: "6 Aylık Müşteri",
      rating: 5,
      content: "Leke tedavisi için geldim ve sonuçları görmek inanılmaz! Yıllardır yüzümdeki lekelerden rahatsızdım ve artık çok daha özgüvenli hissediyorum. Teşekkürler Göksum!",
      avatar: "/images/testimonials/avatar-4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-beauty-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-beauty-800 mb-4">
            Müşterilerimizin Yorumları
          </h2>
          <p className="text-beauty-600 max-w-2xl mx-auto">
            Güzellik yolculuğunda bizimle olan değerli müşterilerimizin deneyimleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-beauty-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-beauty-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-gold-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 