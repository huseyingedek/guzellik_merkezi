import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsPeople } from 'react-icons/bs';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { MdOutlineArrowForward } from 'react-icons/md';
import { getServicesStaticPaths, getServiceData } from '@/lib/data';
import { Metadata } from 'next';

/* ─── FAQ veri haritası ────────────────────────────────────────────────────── */
const faqMap: Record<string, { question: string; answer: string }[]> = {
  'protez-tirnak': [
    { question: 'Protez tırnak ne kadar süre dayanır?', answer: 'Bakım ve kullanıma bağlı olarak jel tırnak 3–4 hafta, kalıcı oje ise 2–3 hafta dayanır. Düzenli dolgu ile süre uzatılabilir.' },
    { question: 'Doğal tırnağa zarar verir mi?', answer: 'Profesyonel uygulama ve doğru bakım ile doğal tırnağınıza zarar vermez; aksine kırılgan tırnakları korur ve güçlendirir.' },
    { question: 'Bakım nasıl yapılmalı?', answer: 'Tırnaklarınızı aşırı kimyasal maddelerden koruyun, eldiven kullanın, düzenli olarak tırnak bakım kremlerinizi uygulayın.' },
  ],
  'lazer-epilasyon': [
    { question: 'Lazer epilasyon acı verir mi?', answer: 'Modern soğutma sistemleri sayesinde acı minimuma indirilmiştir. Genellikle hafif bir ısı ve lastik çekme hissi şeklinde tanımlanır.' },
    { question: 'Kaç seans gereklidir?', answer: 'Kişinin kıl yapısı ve hormonlarına bağlı olarak 6–8 seans yeterli olmaktadır; bazı durumlarda ek seanslar gerekebilir.' },
    { question: 'Seanslar arası kaç hafta beklenmeli?', answer: 'Yüz için 4 hafta, vücut için 6–8 hafta aralık önerilir.' },
  ],
  'cilt-bakimi': [
    { question: 'Cilt bakımı ne sıklıkta yapılmalı?', answer: 'Cilt tipinize göre genellikle 3–4 haftada bir bakım yaptırmanızı öneririz.' },
    { question: 'Bakım sonrası nelere dikkat etmeli?', answer: 'İlk 24 saat makyaj yapmayın, güneşten korunun ve cildinizi düzenli nemlendirin.' },
    { question: 'Akne bakımı klasikten farklı mı?', answer: 'Evet, antibakteriyel ürünler ve akneye özel teknikler kullanılır; daha yoğun bir protokol uygulanır.' },
  ],
  'kalici-makyaj': [
    { question: 'Kalıcı makyaj acı verir mi?', answer: 'Uygulama öncesi anestezik krem uygulanır. Genellikle hafif bir rahatsızlık hissi olup acı minimuma indirilir.' },
    { question: 'Ne kadar süre kalıcıdır?', answer: 'Cilt tipine ve bakıma bağlı olarak 1–3 yıl kalıcıdır. Solmaya başladığında rötuş yapılabilir.' },
    { question: 'İyileşme süreci nasıl geçer?', answer: 'İlk hafta kabuklama ve soyulma görülebilir. Tam iyileşme 2–4 hafta sürer; güneşten korunma ve nemlendirme önemlidir.' },
  ],
  'bolgesel-zayiflama': [
    { question: 'Uygulamalar acı verir mi?', answer: 'Hayır, genellikle ağrısız gerçekleştirilir. Hafif bir sıcaklık veya titreşim hissi olabilir.' },
    { question: 'Kaç seans sonra sonuç görülür?', answer: 'Genellikle 4–6 seans sonra gözle görülür sonuçlar elde edilir.' },
    { question: 'Kaç cm incelme sağlanabilir?', answer: 'Düzenli seanslar ve doğru uygulama ile 4–8 cm arasında incelme mümkündür.' },
  ],
  'leke-tedavi': [
    { question: 'Tedavi ne kadar sürer?', answer: 'Leke tipine bağlı olarak 6–10 seans gerekebilir. Seanslar 2–3 hafta arayla planlanır.' },
    { question: 'Güneşe çıkabilir miyim?', answer: 'Tedavi süresince minimum SPF 50 güneş koruyucu kullanmalı ve direkt güneş ışığından kaçınmalısınız.' },
    { question: 'Lekelerim tamamen geçer mi?', answer: 'Çoğu lekede belirgin açılma görülür; leke tipine ve cilt tepkisine bağlı olarak sonuçlar değişebilir.' },
  ],
  'sac-mezoterapi': [
    { question: 'Saç mezoterapisi acılı mıdır?', answer: 'Anestezik krem kullanıldığından acı minimum düzeydedir. Genellikle hafif bir batma hissi şeklinde tanımlanır.' },
    { question: 'Kaç seans gerekir?', answer: 'İlk ay haftada bir, sonraki iki ay 15 günde bir, ardından aylık; toplam 8–10 seans önerilir.' },
    { question: 'Sonuçlar ne zaman görülür?', answer: 'İlk sonuçlar genellikle 3–4 seans sonra görülmeye başlar. Tam sonuç için 8–10 seans tamamlanmalıdır.' },
  ],
  'cilt-analizi': [
    { question: 'Cilt analizi ne kadar sürer?', answer: 'Ortalama 30 dakika sürmektedir.' },
    { question: 'Önceden hazırlık gerekli mi?', answer: 'Daha doğru sonuç için makyajsız gelmenizi ve analiz öncesinde yüz temizliği yapılmasını öneririz.' },
    { question: 'Ne sıklıkta yaptırmalıyım?', answer: 'Genel olarak her mevsim değişiminde ya da yılda 2 kez cilt analizi yaptırmanızı tavsiye ederiz.' },
  ],
};

/* ─── SEO metadata ─────────────────────────────────────────────────────────── */
const serviceSeoData: Record<string, { title: string; description: string; keywords: string }> = {
  'protez-tirnak': {
    title: 'Adana En İyi Protez Tırnak | Jel Tırnak, Kalıcı Oje - Göksum Güzellik',
    description: "Adana Seyhan'da en iyi protez tırnak uygulaması. Jel tırnak, kalıcı oje, nail art ve tırnak uzatma hizmetleri. Göksum Güzellik Salonu.",
    keywords: 'adana nail art, adana protez tırnak, adana kadın protez tırnak, adana en iyi protez tırnak, adana protez tırnak yapan yerler, adana tırnak yaptırma fiyatları, adana jel tırnak yapan yerler, adana nail studio, adana tırnak tasarım, adana üst form tırnak, adana taşlı protez tırnak, adana jel tırnak, adana jel tırnak modelleri, adana kalıcı oje, adana kalıcı oje fiyatları, adana manikür, adana tırnak uzatma, adana akrilik tırnak, seyhan protez tırnak, cemalpaşa protez tırnak, gazipaşa bulvarı protez tırnak, adana protez tırnak fiyatları, yüreğir protez tırnak, göksum güzellik protez tırnak',
  },
  'lazer-epilasyon': {
    title: 'Adana En İyi Lazer Epilasyon | Kalıcı Tüy Azaltma - Göksum Güzellik',
    description: "Adana Seyhan'da en iyi lazer epilasyon. Diode lazer teknolojisi ile kalıcı tüy azaltma. Göksum Güzellik Salonu.",
    keywords: 'adana lazer epilasyon fiyatları, adana lazer epilasyon, adana kadın lazer epilasyon, adana en iyi lazer epilasyon, adana lazer epilasyon yapan yerler, adana lazer epilasyon kaç seans, adana bacak lazer epilasyon, adana koltuk altı lazer epilasyon, adana bikini lazer epilasyon, adana tam vücut lazer epilasyon, adana yüz lazer epilasyon, adana bıyık lazer epilasyon, adana erkek lazer epilasyon, adana diode lazer, adana kalıcı tüy azaltma, adana lazer epilasyon kampanya, seyhan lazer epilasyon, cemalpaşa lazer epilasyon, gazipaşa bulvarı lazer epilasyon, adana lazer epilasyon merkezi, yüreğir lazer epilasyon, çukurova lazer epilasyon, göksum güzellik lazer epilasyon',
  },
  'cilt-bakimi': {
    title: 'Adana En İyi Cilt Bakımı | Profesyonel Cilt Bakımı - Göksum Güzellik',
    description: "Adana Seyhan'da en iyi cilt bakımı. Hydrafacial, akne bakımı, anti-aging. Göksum Güzellik Salonu.",
    keywords: 'adana kadın cilt bakımı, adana cilt bakımı, adana en iyi cilt bakımı, seyhan cilt bakımı, cemalpaşa cilt bakımı, gazipaşa bulvarı cilt bakımı, adana hydrafacial, adana akne bakımı, adana anti-aging bakım, adana leke giderici bakım, adana cilt bakımı fiyatları, adana yüz bakımı, adana derin temizlik, adana cilt nemlendirme, yüreğir cilt bakımı, çukurova cilt bakımı, göksum güzellik cilt bakımı',
  },
  'kalici-makyaj': {
    title: 'Adana En İyi Kalıcı Makyaj | Microblading, Kaş Kontür - Göksum Güzellik',
    description: "Adana Seyhan'da en iyi kalıcı makyaj. Microblading, kaş kontür, dudak kontür. Göksum Güzellik Salonu.",
    keywords: 'adana kadın kalıcı makyaj, adana kalıcı makyaj, adana microblading, adana kaş kontür, adana kaş microblading, cemalpaşa kalıcı makyaj, gazipaşa bulvarı kalıcı makyaj, adana dudak kontür, adana kalıcı eyeliner, adana kaş dolgusu, adana kalıcı makyaj fiyatları, adana microblading fiyatları, adana kaş kontür fiyatları, adana ombre kaş, seyhan kalıcı makyaj, yüreğir kalıcı makyaj, göksum güzellik kalıcı makyaj',
  },
  'bolgesel-zayiflama': {
    title: 'Adana Bölgesel Zayıflama | Kavitasyon, Selülit Tedavisi - Göksum Güzellik',
    description: "Adana Seyhan'da bölgesel zayıflama. Kavitasyon, RF lipoliz, selülit giderme. Göksum Güzellik Salonu.",
    keywords: 'adana kadın bölgesel zayıflama, adana bölgesel zayıflama, adana kavitasyon, adana selülit tedavisi, adana rf lipoliz, cemalpaşa bölgesel zayıflama, gazipaşa bulvarı zayıflama, adana bölgesel incelme, seyhan bölgesel zayıflama, adana karın bölgesi zayıflama, adana basen incelme, adana kalça sıkılaştırma, adana vücut şekillendirme, adana bölgesel zayıflama fiyatları, adana kavitasyon fiyatları, yüreğir kavitasyon, çukurova bölgesel zayıflama, göksum güzellik zayıflama',
  },
  'leke-tedavi': {
    title: 'Adana Leke Tedavisi | Cilt Lekesi Giderme - Göksum Güzellik',
    description: "Adana Seyhan'da profesyonel leke tedavisi. Güneş lekesi, melazma, akne izi tedavisi. Göksum Güzellik Salonu.",
    keywords: 'adana kadın leke tedavisi, adana leke tedavisi, adana cilt lekesi, seyhan leke tedavisi, cemalpaşa leke tedavisi, gazipaşa bulvarı leke tedavisi, adana güneş lekesi tedavisi, adana melazma tedavisi, adana akne lekesi, adana cilt tonu eşitleme, adana leke giderme, adana kimyasal peeling, adana cilt aydınlatma, adana leke tedavisi fiyatları, adana hiperpigmentasyon tedavisi, yüreğir leke tedavisi, çukurova leke tedavisi, adana kadın cilt leke bakımı, göksum güzellik leke tedavisi',
  },
  'sac-mezoterapi': {
    title: 'Adana Saç Mezoterapisi | Saç Dökülmesi Tedavisi - Göksum Güzellik',
    description: "Adana Seyhan'da saç mezoterapisi. Saç dökülmesi tedavisi ve saç güçlendirme. Göksum Güzellik Salonu.",
    keywords: 'adana kadın saç mezoterapisi, adana saç mezoterapisi, adana saç dökülmesi tedavisi, seyhan saç mezoterapisi, cemalpaşa saç mezoterapisi, gazipaşa bulvarı saç mezoterapisi, adana saç güçlendirme, adana saç dökülmesi çözümü, adana saç bakımı, adana saç mezoterapisi fiyatları, adana prp saç, adana saç seyrelme tedavisi, adana saç kökü bakımı, adana hormonal saç dökülmesi, adana mevsimsel saç dökülmesi, yüreğir saç mezoterapisi, çukurova saç mezoterapisi, göksum güzellik saç mezoterapisi',
  },
  'cilt-analizi': {
    title: 'Adana Cilt Analizi | Ücretsiz Cilt Değerlendirmesi - Göksum Güzellik',
    description: "Adana Seyhan'da ücretsiz cilt analizi. Modern cihazlarla cilt tipinizi belirleyin. Göksum Güzellik Salonu.",
    keywords: 'adana kadın cilt analizi, adana ücretsiz cilt analizi, adana cilt analizi, seyhan cilt analizi, cemalpaşa cilt analizi, gazipaşa bulvarı cilt analizi, adana cilt tipi testi, adana cilt değerlendirmesi, adana cilt bakım danışmanlığı, adana cilt nem analizi, adana yağlı cilt analizi, adana hassas cilt analizi, adana kuru cilt analizi, adana karma cilt analizi, adana kişisel cilt bakım programı, yüreğir cilt analizi, çukurova ücretsiz cilt analizi, göksum güzellik cilt analizi',
  },
};


const infoSectionsData: Record<string, { heading: string; content: string }[]> = {
  'lazer-epilasyon': [
    {
      heading: 'Adana Lazer Epilasyon Fiyatları ve Kampanyalar',
      content: 'Adana lazer epilasyon fiyatları; bacak, koltuk altı, bikini, yüz ve tam vücut paketi seçeneklerine göre farklılık gösterir. Adana lazer epilasyon yapan yerler arasında Göksum Güzellik Salonu, Seyhan Cemalpaşa\'da şeffaf ve rekabetçi fiyat politikasıyla öne çıkmaktadır. Adana lazer epilasyon kampanya seçenekleri ve paket fiyatları için +90 541 190 13 90 numaralı hattı arayabilir ya da salonumuza uğrayabilirsiniz. İlk konsültasyon ücretsiz olup kişiye özel fiyat teklifi hazırlanmaktadır.',
    },
    {
      heading: 'Adana Lazer Epilasyon Kaç Seans Sürer, Ne Zaman Sonuç Alınır?',
      content: 'Adana lazer epilasyon kaç seans sorusu; kişinin cilt tonu, tüy rengi, hormonal durumu ve bölgeye göre değişir — ortalama 6–8 seans önerilmektedir. Adana bacak lazer epilasyon ve adana koltuk altı lazer epilasyon gibi büyük bölgelerde seanslar 6–8 hafta arayla, adana yüz lazer epilasyon ve adana bıyık lazer epilasyon uygulamalarında ise 4 hafta arayla planlanır. İlk 2–3 seanstan itibaren belirgin azalma hissedilir; adana kalıcı tüy azaltma hedefine genellikle 6–8 seans sonunda ulaşılır.',
    },
    {
      heading: 'Adana Lazer Epilasyon Bölgeleri: Bacak, Bikini, Koltuk Altı ve Daha Fazlası',
      content: 'Göksum Güzellik Salonu\'nda adana bacak lazer epilasyon (yarım/tam), adana koltuk altı lazer epilasyon, adana bikini lazer epilasyon (yarım/brezilya/full), adana yüz lazer epilasyon, adana bıyık lazer epilasyon, sırt ve omuz ile adana tam vücut lazer epilasyon paketleri sunulmaktadır. Adana erkek lazer epilasyon hizmetimizde sırt, omuz, göğüs ve yüz bölgelerinde Diode lazer uygulanmaktadır. Her bölge için cilt tipine ve tüy yoğunluğuna göre parametreler bireysel olarak ayarlanır.',
    },
  ],
  'cilt-bakimi': [
    {
      heading: 'Adana Cilt Bakımı Fiyatları',
      content: 'Adana cilt bakımı fiyatları, seçilen protokole ve seans sayısına göre belirlenir. Göksum Güzellik Salonu\'nda Gazipaşa Bulvarı\'ndaki merkezimizde kişiye özel cilt analizi sonucunda en uygun protokol ve fiyat planı oluşturulur. Paket seçenekleri için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
    {
      heading: 'Adana Hydrafacial Uygulaması Nedir?',
      content: 'Hydrafacial, Adana cilt bakımı hizmetlerimiz arasındaki en popüler uygulamalardan biridir. Tek seansta derin temizlik, peeling, nem dolumu ve serum infüzyonunu bir arada sunar. Adana Seyhan\'da Hydrafacial hakkında detaylı bilgi almak için salonumuza uğrayabilirsiniz.',
    },
    {
      heading: 'Adana Anti-Aging Cilt Bakımı ve Leke Giderici Protokoller',
      content: 'Adana anti-aging cilt bakımı kapsamında; C vitamini uygulamaları, hyalüronik asit serumları ve RF destekli sıkılaştırma protokolleri yer almaktadır. Adana leke giderici cilt bakımı için ise AHA/BHA içerikli peeling ve aydınlatıcı mask kombinasyonları uygulanmaktadır. Uzman kadın estetisyenlerimiz cildinizi değerlendirerek en doğru protokolü belirler.',
    },
  ],
  'protez-tirnak': [
    {
      heading: 'Adana Protez Tırnak ve Nail Art Fiyatları',
      content: 'Adana protez tırnak fiyatları; jel tırnak, üst form tırnak, akrilik tırnak, bebek manikürü, nail art tasarım ve tırnak uzatma seçeneğine göre değişmektedir. Adana tırnak yaptırma fiyatları ve adana kalıcı oje fiyatları için güncel bilgi almak, adana protez tırnak yapan yerler arasında Göksum Güzellik Salonu\'nu tercih etmek için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
    {
      heading: 'Adana Jel Tırnak, Üst Form ve Akrilik Tırnak Farkları',
      content: 'Adana jel tırnak uygulaması doğal ve esnek bir görünüm sunarken, adana üst form tırnak daha uzun ve yapısal tasarımlar için tercih edilir. Akrilik tırnak ise sert yapısıyla daha uzun ömürlüdür. Adana taşlı protez tırnak ve adana jel tırnak modelleri için geniş portfolyomuza salonumuzdan ya da Instagram sayfamızdan göz atabilirsiniz. Her uygulamada kaliteli marka ürünler ve tam hijyen protokolü uygulanır.',
    },
    {
      heading: 'Adana Nail Art, Nail Studio ve Kalıcı Oje',
      content: 'Adana nail art hizmetimizde gradient, çiçek motifleri, taşlı tasarımlar, fransız ve özel tırnak tasarımı seçenekleri mevcuttur. Adana nail studio kalitesinde hizmet sunan Göksum Güzellik Salonu\'nda adana kalıcı oje uygulaması 3–4 hafta boyunca kırılmaz ve solmaz şekilde kalır. Adana tırnak tasarım danışmanlığı kapsamında yüz hatlarınıza ve el tipinize uygun şekil, renk ve süsleme önerileri sunulmaktadır. Adana manikür hizmetimiz de tırnak bakımıyla birlikte sunulmaktadır.',
    },
  ],
  'kalici-makyaj': [
    {
      heading: 'Adana Kalıcı Makyaj Fiyatları',
      content: 'Adana kalıcı makyaj fiyatları; microblading, kaş kontür, eyeliner ve dudak kontürü gibi uygulanan tekniğe göre farklılık gösterir. Göksum Güzellik Salonu\'nda Gazipaşa Bulvarı\'ndaki merkezimizde şeffaf fiyatlandırma politikası uyguluyoruz. Güncel fiyat bilgisi için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
    {
      heading: 'Adana Microblading Nedir, Kaç Yıl Dayanır?',
      content: 'Adana microblading, kaş bölgesine ince kılçıklar çizilerek doğal tüy görünümü oluşturan kalıcı makyaj tekniğidir. Adana Seyhan\'da sunduğumuz microblading uygulaması 1,5–2 yıl arasında kalıcıdır. İlk 4–6 haftada dokunma seansı yapılması tavsiye edilir.',
    },
    {
      heading: 'Adana Kaş Kontür, Eyeliner ve Dudak Kontürü',
      content: 'Adana kaş kontür uygulamasında şekil, renk ve yoğunluk kişinin yüz hatlarına göre özelleştirilir. Adana kalıcı eyeliner ile göz kalemi çizme zahmetinden kurtulabilirsiniz. Adana dudak kontürü ile sınır belirsizliği ve asimetri giderilirken dudak hacmi görsel olarak artırılır.',
    },
  ],
  'bolgesel-zayiflama': [
    {
      heading: 'Adana Bölgesel Zayıflama Fiyatları',
      content: 'Adana bölgesel zayıflama fiyatları; uygulanan teknoloji, hedef bölge ve seans sayısına göre değişmektedir. Göksum Güzellik Salonu\'nda Seyhan Cemalpaşa\'da kişiye özel protokol ve paket seçenekleri sunulmaktadır. Detaylı Adana kavitasyon fiyatları için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
    {
      heading: 'Adana Kavitasyon ve RF Lipoliz Kaç Seans Gerekir?',
      content: 'Adana kavitasyon uygulamasında belirgin sonuçlar için ortalama 6–10 seans önerilmektedir. Seanslar genellikle haftada bir ya da 10 günde bir planlanır. Adana bölgesel zayıflama kaç seans sorusu için önce ücretsiz ölçüm ve konsültasyon yapılarak kişisel program oluşturulur.',
    },
    {
      heading: 'Adana Selülit Tedavisi ve Vücut Sıkılaştırma',
      content: 'Adana selülit tedavisi kapsamında vakum masaj, kavitasyon ve RF kombinasyonları uygulanmaktadır. Adana vücut sıkılaştırma protokolümüzde RF dalgaları kollajen liflerini yeniler; portakal kabuğu görünümü azalır ve cilt sıkılığı artar. Göksum Güzellik Salonu\'nda ölçüm bazlı değerlendirme yapılarak sonuçlar takip edilmektedir.',
    },
  ],
  'leke-tedavi': [
    {
      heading: 'Adana Leke Tedavisi Fiyatları',
      content: 'Adana leke tedavisi fiyatları; leke tipine, uygulanan yöntemlere ve gereken seans sayısına göre belirlenmektedir. Göksum Güzellik Salonu\'nda Seyhan Cemalpaşa\'da cilt analizi sonucunda kişiye özel fiyatlandırma yapılmaktadır. Güncel bilgi için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
    {
      heading: 'Adana Kimyasal Peeling Nedir, Nasıl Uygulanır?',
      content: 'Adana kimyasal peeling, cildin üst katmanlarını soyarak leke, ince çizgi ve düzensiz tonu gidermeye yönelik profesyonel bir işlemdir. AHA veya BHA içerikli solüsyonlar yüze uygulanır; cilt tipine göre yüzeysel, orta veya derin peeling seçilir. Adana güneş lekesi tedavisinde kimyasal peeling genellikle aydınlatıcı serumlarla birlikte uygulanarak etkinlik artırılır.',
    },
    {
      heading: 'Adana Melazma Tedavisi ve Akne İzi Giderme',
      content: 'Adana melazma tedavisi için Göksum Güzellik Salonu\'nda hormonal pigmentasyona özgü protokoller uygulanmaktadır. Adana akne izi giderme uygulamalarında mikroneedling, peeling ve leke açıcı aktifler birlikte kullanılarak iz derinliği ve tonu düzeltilmektedir. Tedavi süresince SPF 50 güneş koruyucu kullanımı zorunludur.',
    },
  ],
  'sac-mezoterapi': [
    {
      heading: 'Adana Saç Mezoterapisi Fiyatları',
      content: 'Adana saç mezoterapisi fiyatları; uygulanan kokteylin içeriği, seans sayısı ve saç dökülmesi düzeyine göre değişmektedir. Göksum Güzellik Salonu\'nda Seyhan Cemalpaşa\'da kadınlara yönelik saç mezoterapisi programlarımızda rekabetçi fiyatlar sunuyoruz. Bilgi için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
    {
      heading: 'Adana Saç Mezoterapisi Kaç Seans Yapılır?',
      content: 'Adana saç mezoterapisi uygulamasında standart protokol; ilk ay haftada bir (4 seans), ardından iki ay boyunca 15 günde bir (4 seans), son olarak aylık idame seanslarından oluşur. Toplamda 8–10 seans tamamlanması önerilmektedir. İlk sonuçlar genellikle 3–4. seanstan itibaren görülür.',
    },
    {
      heading: 'Adana Hormonal ve Mevsimsel Saç Dökülmesine Çözüm',
      content: 'Adana kadın saç dökülmesi tedavisinde Göksum Güzellik Salonu, hormonal değişimler ve mevsimsel dökülmeler için özelleştirilmiş vitamin ve büyüme faktörü kokteylleri hazırlamaktadır. Adana saç kökü güçlendirme protokollerimizde biotin, çinko ve B vitamini kompleksi mikroenjeksiyonla uygulanmakta; saç derisine doğrudan beslenme sağlanmaktadır.',
    },
  ],
  'cilt-analizi': [
    {
      heading: 'Adana Ücretsiz Cilt Analizi Nasıl Yapılır?',
      content: 'Adana ücretsiz cilt analizi için Göksum Güzellik Salonu\'na randevu alarak gelebilirsiniz. Modern cilt analiz cihazlarımız sayesinde yüzünüzün farklı bölgelerindeki nem, yağ dengesi, gözenek yapısı ve olası leke alanları 30 dakika içinde değerlendirilir. Analiz sonucunda kişiye özel yazılı bakım raporu hazırlanır.',
    },
    {
      heading: 'Adana Kişisel Cilt Bakım Programı ve Danışmanlık',
      content: 'Adana cilt bakım danışmanlığı hizmetimizde uzman estetisyenimiz analiz sonuçlarını yorumlayarak günlük cilt bakım rutini, profesyonel salon bakım sıklığı ve ürün önerilerini paylaşır. Adana yağlı cilt, kuru cilt, karma cilt ve hassas cilt için farklı bakım protokolleri mevcuttur.',
    },
    {
      heading: 'Adana Cilt Analizi Sonrası Neler Yapılır?',
      content: 'Adana cilt analizi tamamlandıktan sonra tespit edilen sorunlara yönelik profesyonel bakım seansları planlanabilir. Ayrıca doğru ürün kullanımı konusunda da yönlendirilirsiniz; salon bakımının etkisi ev bakımıyla pekiştirilir. Cilt analizi randevusu için +90 541 190 13 90 numaralı hattı arayabilirsiniz.',
    },
  ],
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceData(params.slug);
  if (!service) return { title: 'Hizmet Bulunamadı' };
  const seo = serviceSeoData[service.slug];
  return {
    title: seo?.title || `${service.title} | Adana Seyhan - Göksum Güzellik`,
    description: seo?.description || service.description,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.title || service.title,
      description: seo?.description || service.description,
      url: `https://www.goksumguzellik.com/hizmetlerimiz/${service.slug}`,
      type: 'website',
      images: [{ url: `https://www.goksumguzellik.com${service.image}`, width: 1200, height: 630, alt: service.title }],
    },
    alternates: { canonical: `https://www.goksumguzellik.com/hizmetlerimiz/${service.slug}` },
  };
}

export async function generateStaticParams() {
  return getServicesStaticPaths();
}

/* ─── Sayfa bileşeni ───────────────────────────────────────────────────────── */
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug);
  if (!service) notFound();

  const faqs = faqMap[service.slug] ?? [];
  const infoSections = infoSectionsData[service.slug] ?? [];

  return (
    <div className="bg-white">

      {/* ── Banner ──────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
        <Image
          src={service.bannerImage || service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        {/* Çok katmanlı overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/hizmetlerimiz" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#C9A84C' }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>
                Göksum Güzellik
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
              {service.title}
            </h1>
            {service.subtitle && (
              <p className="text-base md:text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {service.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Ana içerik ──────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Sol: içerik ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Açıklama */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-beauty-900 mb-4">
                {service.longTitle || service.title} Nedir?
              </h2>
              <div className="h-0.5 w-16 mb-5" style={{ background: '#C9A84C' }} />
              <div className="text-beauty-700 leading-relaxed whitespace-pre-line text-base">
                {service.longDescription || service.description}
              </div>
            </div>

            {/* Hizmet kapsamı */}
            <div className="rounded-2xl p-7" style={{ background: '#FAF7F0', border: '1px solid rgba(201,168,76,0.18)' }}>
              <h3 className="text-xl font-display font-semibold text-beauty-900 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: '#C9A84C' }}>✓</span>
                Hizmet Kapsamı
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <FaCheckCircle className="mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} size={14} />
                    <span className="text-beauty-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Faydalar */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="rounded-2xl p-7" style={{ background: '#0C0B08' }}>
                <h3 className="text-xl font-display font-semibold text-white mb-5">
                  Bu Hizmetin Faydaları
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                           style={{ background: '#C9A84C' }} />
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Uygulama süreci — timeline */}
            {service.process && service.process.length > 0 && (
              <div>
                <h3 className="text-xl font-display font-semibold text-beauty-900 mb-6">
                  Uygulama Süreci
                </h3>
                <div className="space-y-0">
                  {service.process.map((step, i) => (
                    <div key={i} className="relative flex gap-5">
                      {/* Dikey çizgi */}
                      {i < service.process!.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px"
                             style={{ background: 'rgba(201,168,76,0.25)' }} />
                      )}
                      {/* Numara balonu */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center
                                      text-sm font-bold text-white flex-shrink-0 z-10"
                           style={{ background: '#C9A84C', minWidth: '2.5rem' }}>
                        {i + 1}
                      </div>
                      {/* İçerik */}
                      <div className="pb-7">
                        <h4 className="font-semibold text-beauty-900 mb-1">{step.title}</h4>
                        <p className="text-beauty-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SSS */}
            {faqs.length > 0 && (
              <div>
                <h3 className="text-xl font-display font-semibold text-beauty-900 mb-5">
                  Sıkça Sorulan Sorular
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-xl p-5"
                         style={{ border: '1px solid rgba(201,168,76,0.2)', background: '#FFFEF9' }}>
                      <h4 className="font-semibold text-beauty-900 mb-2 text-sm">{faq.question}</h4>
                      <p className="text-beauty-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Yerel SEO içerik */}
            {service.seoContent && (
              <div className="rounded-2xl p-7" style={{ background: '#FFFEF9', border: '1px solid rgba(201,168,76,0.15)' }}>
                <h3 className="text-xl font-display font-semibold text-beauty-900 mb-4 flex items-center gap-2">
                  <span style={{ color: '#C9A84C' }}>📍</span>
                  Adana Seyhan&apos;da {service.title}
                </h3>
                <div className="h-0.5 w-12 mb-5" style={{ background: '#C9A84C' }} />
                <div className="text-beauty-700 leading-relaxed text-sm space-y-4 whitespace-pre-line">
                  {service.seoContent}
                </div>
              </div>
            )}

            {/* Anahtar kelimeli bilgi blokları */}
            {infoSections.length > 0 && (
              <div className="space-y-6">
                {infoSections.map((sec, i) => (
                  <div key={i} className="rounded-2xl p-7"
                       style={{ background: '#FFFEF9', border: '1px solid rgba(201,168,76,0.15)' }}>
                    <h3 className="text-xl font-display font-semibold text-beauty-900 mb-3">
                      {sec.heading}
                    </h3>
                    <div className="h-0.5 w-10 mb-4" style={{ background: '#C9A84C' }} />
                    <p className="text-beauty-700 leading-relaxed text-sm">{sec.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA bölümü */}
            <div className="rounded-2xl p-7 md:p-9 text-center md:text-left"
                 style={{ background: 'linear-gradient(135deg, #FAF7F0 0%, #F5EEE0 100%)', border: '1px solid rgba(201,168,76,0.25)' }}>
              <h3 className="text-xl font-display font-semibold text-beauty-900 mb-3">
                Randevu Almak İster misiniz?
              </h3>
              <p className="text-beauty-700 mb-6 text-sm leading-relaxed">
                {service.ctaText || 'Bu hizmet hakkında daha fazla bilgi almak veya randevu oluşturmak için bizimle iletişime geçin.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/randevu"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold
                             py-3 px-7 rounded-full transition-all duration-300"
                  style={{ background: '#C9A84C' }}
                >
                  Randevu Al
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 font-semibold
                             py-3 px-7 rounded-full transition-all duration-300"
                  style={{ border: '1px solid #C9A84C', color: '#A8893A', background: 'transparent' }}
                >
                  İletişime Geç
                </Link>
              </div>
            </div>

          </div>

          {/* ── Sağ: Kenar çubuğu ────────────────────────────────────────── */}
          <div className="order-first lg:order-last">
            <div className="sticky top-28 space-y-5">

              {/* Hizmet bilgileri kartı */}
              <div className="rounded-2xl overflow-hidden shadow-lg"
                   style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
                {/* Kart başlığı */}
                <div className="py-4 px-6" style={{ background: '#0C0B08' }}>
                  <h3 className="text-base font-semibold text-white">Hizmet Bilgileri</h3>
                </div>
                <div className="p-6 space-y-4 bg-white">
                  {/* Kimler için */}
                  {service.recommendedFor && (
                    <div className="flex items-start gap-3">
                      <BsPeople className="mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} size={15} />
                      <div>
                        <p className="text-xs text-beauty-500 mb-0.5">Kimler İçin Uygun</p>
                        <p className="text-beauty-800 text-sm">{service.recommendedFor}</p>
                      </div>
                    </div>
                  )}

                  {/* Randevu butonu */}
                  <div className="pt-2">
                    <Link
                      href="/randevu"
                      className="flex items-center justify-center gap-2 w-full text-white font-semibold
                                 py-3 rounded-full transition-all duration-300 text-sm"
                      style={{ background: '#C9A84C' }}
                    >
                      Hemen Randevu Al
                    </Link>
                  </div>
                </div>
              </div>

              {/* İlgili hizmetler */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div className="rounded-2xl overflow-hidden shadow-sm"
                     style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
                  <div className="py-4 px-6" style={{ background: '#FAF7F0' }}>
                    <h3 className="text-sm font-semibold text-beauty-800">İlgili Hizmetler</h3>
                  </div>
                  <div className="p-4 bg-white">
                    {service.relatedServices.map((slug) => {
                      const rel = getServiceData(slug);
                      if (!rel) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/hizmetlerimiz/${slug}`}
                          className="flex items-center justify-between p-3 rounded-lg
                                     hover:bg-cream-100 transition-colors group"
                        >
                          <span className="text-beauty-800 text-sm group-hover:text-gold-600 transition-colors">
                            {rel.title}
                          </span>
                          <MdOutlineArrowForward style={{ color: '#C9A84C' }} size={15} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* WhatsApp hızlı iletişim */}
              <a
                href="https://wa.me/905411901390"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300"
                style={{
                  background: '#25D366',
                  color: 'white',
                }}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div className="font-semibold text-sm">WhatsApp ile Yaz</div>
                  <div className="text-xs opacity-80">Hızlı randevu & bilgi</div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
