import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axiosInstance from '@lib/axios';

import type { User } from '@/types/user';

type Response = { status: 'success' | 'failure'; user: User | null };

const fetchCurrentUserData = async (): Promise<Response> => {
  const response = await axiosInstance.get('/users/me');

  if (response.data.id) {
    return { status: 'success', user: response.data };
  }

  return { status: 'failure', user: null };
};

export const useGetCurrentUser = (
  options: Omit<UseQueryOptions<Response>, 'queryFn' | 'queryKey'> = {},
) =>
  useQuery<Response>({
    queryFn: fetchCurrentUserData,
    queryKey: ['currentUser'],
    ...options,
  });
