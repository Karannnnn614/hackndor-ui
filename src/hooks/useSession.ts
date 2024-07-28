import { User } from '@/types';
import { getCookie } from 'cookies-next';
import { useMemo } from 'react';
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

  const { data, isError, isSuccess, isLoading } = useGetCurrentUser({
    enabled: !!accessToken,
  });

  const session: Session = useMemo(() => {
    if (isSuccess && data.status === 'success') {
      return {
        status: 'authenticated',
        user: data.user as User,
      };
    }

    if (isError) {
      return { status: 'unauthenticated', user: undefined };
    }

    if (isLoading) {
      return { status: 'loading', user: undefined };
    }

    return { status: 'unauthenticated', user: undefined };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isSuccess]);

  return session;
};
