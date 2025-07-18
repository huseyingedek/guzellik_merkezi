import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
} 