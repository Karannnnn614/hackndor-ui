import { User } from '@/types';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useGetCurrentUser } from './useGetCurrentUser';

type Session =
  | {
      status: 'loading' | 'unauthenticated';
      user: undefined;
    }
  | {
      status: 'authenticated';
      user: User;
    };

export const useSession = () => {
  const accessToken = getCookie('accessToken');
  const [session, setSession] = useState<Session>({
    status: 'loading',
    user: undefined,
  });

  const { data, isError, isSuccess, isLoading } = useGetCurrentUser({
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (isSuccess && data.status === 'success') {
      setSession({
        status: 'authenticated',
        user: data.user as User,
      });

      return;
    }

    if (isError) {
      setSession({ status: 'unauthenticated', user: undefined });

      return;
    }

    if (isLoading) {
      setSession({ status: 'loading', user: undefined });

      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isSuccess]);

  return session;
};
