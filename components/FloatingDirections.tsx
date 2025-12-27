import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingDirections() {
  // Google Maps yol tarifi linki
  // Tam adres ile yol tarifi - Google Maps otomatik olarak bulacak
  const placeName = 'Göksum Güzellik Merkezi';
  const fullAddress = 'Cemalpaşa, Gazipaşa Blv. Apartmanı No:30 Kat:1, 01120 Seyhan/Adana';
  const destination = `${placeName}, ${fullAddress}`;
  const encodedDestination = encodeURIComponent(destination);
  
  // Alternatif olarak koordinat da kullanılabilir: 37.00819724398693, 35.36052014790516
  // Ama adres ile daha iyi sonuç veriyor
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;

  return (
    <Link
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-beauty-600 shadow-lg hover:bg-beauty-700 transition-colors duration-300"
      aria-label="Yol tarifi al"
      title={`${placeName} - ${fullAddress}`}
    >
      <FaMapMarkerAlt className="text-white" size={24} />
    </Link>
  );
}

