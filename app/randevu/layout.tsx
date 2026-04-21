import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Randevu | Göksum Güzellik Salonu - Adana Seyhan',
  description:
    "Göksum Güzellik Salonu'nda online randevu alın. Adana Seyhan'da protez tırnak, lazer epilasyon, cilt bakımı, kalıcı makyaj için kolayca randevu oluşturun.",
  openGraph: {
    title: 'Online Randevu | Göksum Güzellik Salonu',
    description: "Adana Seyhan'da Göksum Güzellik Salonu'nda online randevu alın.",
    url: 'https://www.goksumguzellik.com/randevu',
    type: 'website',
  },
  alternates: { canonical: 'https://www.goksumguzellik.com/randevu' },
};

export default function RandevuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
