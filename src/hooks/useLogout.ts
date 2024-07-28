import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';

import type { DefaultError } from '@tanstack/react-query';

import axiosInstance from '@/lib/axios';

type LogoutResponse = {
  message: string;
};

const logout = async (): Promise<LogoutResponse> => {
  const response = await axiosInstance.post('/auth/logout');

  return response.data;
};

// eslint-disable-next-line no-unused-vars
type OnSuccess = (data: LogoutResponse) => void;

export const useLogout = (onSuccess?: OnSuccess) => {
  const queryClient = useQueryClient();

  return useMutation<LogoutResponse, DefaultError, LogoutResponse>({
    mutationFn: logout,
    mutationKey: ['logout'],
    onSuccess: (data: LogoutResponse) => {
      deleteCookie('accessToken');
      queryClient.resetQueries({ queryKey: ['currentUser'] });
      onSuccess?.(data);
    },
  });
};
