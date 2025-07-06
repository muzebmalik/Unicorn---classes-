'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import StudentDashboard from '@/components/StudentDashboard';

export default function DashboardPage() {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
      } else if (userRole === 'admin') {
        router.push('/admin');
      } else if (userRole === 'student') {
        // Stay on dashboard page for students
        return;
      }
    }
  }, [user, userRole, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user || userRole !== 'student') {
    return null; // Will redirect
  }

  return <StudentDashboard />;
} 