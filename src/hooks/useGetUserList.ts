import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import axiosInstance from '@/lib/axios';
import { User } from '@/types/user';

type Response = User[];

const getUserList = async (): Promise<Response> => {
  try {
    const response = await axiosInstance.get('/users');

    return response.data;
  } catch (error) {
    return [];
  }
};

export const useGetUserList = (
  options: Omit<UseQueryOptions<Response>, 'queryFn' | 'queryKey'> = {},
) =>
  useQuery<Response>({
    queryFn: getUserList,
    queryKey: ['getUserList'],
    initialData: [],
    ...options,
  });
