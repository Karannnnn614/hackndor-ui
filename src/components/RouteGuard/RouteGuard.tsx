import { UserProvider } from '@/contexts';
import { useSession } from '@/hooks/useSession';
import { NextPageWithProperties } from '@/pages/_app';
import { User } from '@/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DashboardLayout } from '../DashboardLayout';

interface RouteGuardProps {
  Component: NextPageWithProperties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

export const RouteGuard = ({ Component, pageProps }: RouteGuardProps) => {
  const router = useRouter();
  const session = useSession();

  const isAuthenticated =
    Component.isPublic || session.status === 'authenticated';

  useEffect(() => {
    if (
      router.pathname === '/auth/login' &&
      session.status === 'authenticated'
    ) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, session]);

  useEffect(() => {
    if (!isAuthenticated && session.status !== 'loading') {
      router.push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component]);

  if (session.status === 'loading' && !Component.isPublic) {
    return 'Loading...';
  }

  if (!isAuthenticated) {
    return 'You are unauthenticated to view';
  }

  if (Component.isPublic) {
    return <Component {...pageProps} />;
  }

  return (
    <UserProvider user={session.user as User}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </UserProvider>
  );
};
