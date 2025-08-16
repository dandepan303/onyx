'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { privateRoutes } from '@/lib/config';
import { isAuthorized } from '@/lib/util/util';
import Loading from '@/components/ui/Loading';
import AuthFlow from './AuthFlow';

interface AuthProtecterProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthProtecter({ children, className }: AuthProtecterProps) {
  const [stage, setStage] = useState<'loading' | 'auth_required' | 'success'>('loading');

  const { profile } = useAuth();
  const router = useRouter();
  const pathname = usePathname() ?? '';

  useEffect(() => {
    if (profile.loading || !pathname) return;

    async function exec() {
      const userRole = profile?.data?.role ?? 'GUEST';

      const requiredRole = Object.entries(privateRoutes).find(
        ([route]) => pathname.startsWith(route)
      )?.[1];

      if (requiredRole && !isAuthorized(userRole, requiredRole)) {
        router.push('/auth/sign-in/');
        return;
      }

      setStage('success');
    }
    exec();
  }, [profile, pathname, router]);

  if (stage === 'loading') {
    return <Loading />;
  }

  if (stage === 'auth_required') {
    return <AuthFlow />;
  }

  return <div className={className}>{children}</div>;
}
