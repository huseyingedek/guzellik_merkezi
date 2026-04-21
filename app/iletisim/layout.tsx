import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Göksum Güzellik Salonu - Adana Seyhan',
  description:
    "Göksum Güzellik Salonu ile iletişime geçin. Adana Seyhan Cemalpaşa'da Gazipaşa Bulvarı üzerinde bulunuyoruz. Telefon, WhatsApp veya formu doldurun.",
  openGraph: {
    title: 'İletişim | Göksum Güzellik Salonu',
    description: "Adana Seyhan'da Göksum Güzellik Salonu iletişim bilgileri ve randevu.",
    url: 'https://www.goksumguzellik.com/iletisim',
    type: 'website',
  },
  alternates: { canonical: 'https://www.goksumguzellik.com/iletisim' },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
