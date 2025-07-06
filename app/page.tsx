'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TeacherSection from '@/components/TeacherSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      if (userRole === 'admin') {
        router.push('/admin');
      } else if (userRole === 'student') {
        router.push('/dashboard');
      }
    }
  }, [user, userRole, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return null; // Will redirect
  }

  // Show landing page for non-authenticated users
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TeacherSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
} 