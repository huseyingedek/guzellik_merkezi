import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingWhatsApp() {
  const message = "Merhaba, web sitenizden ulaşıyorum. Güzellik hizmetleriniz hakkında bilgi almak istiyorum.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <Link
      href={`https://wa.me/905411901390?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <FaWhatsapp className="text-white" size={28} />
    </Link>
  );
} 