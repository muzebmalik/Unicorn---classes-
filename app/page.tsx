import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TeacherSection from '@/components/TeacherSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TeacherSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
} 