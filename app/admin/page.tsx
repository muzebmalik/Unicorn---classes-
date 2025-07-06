'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import AdminDashboard from '@/components/AdminDashboard';

export default function AdminPage() {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
      } else if (userRole !== 'admin') {
        router.push('/dashboard');
      }
    }
  }, [user, userRole, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user || userRole !== 'admin') {
    return null; // Will redirect
  }

  return <AdminDashboard />;
} 