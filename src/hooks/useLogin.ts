import type { DefaultError } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import axiosInstance from '@/lib/axios';
import { setCookie } from 'cookies-next';

type LoginResponse = {
  accessToken?: string;
  error?: string;
};

type LoginCredentials = {
  username: string;
  password: string;
};

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      '/auth/login',
      credentials,
    );

    if (response.data.error) {
      throw new Error();
    }

    return response.data;
  } catch (ex) {
    throw new Error('Something went wrong');
  }
};

// eslint-disable-next-line no-unused-vars
type OnSuccess = (data: LoginResponse) => void;

export const useLogin = (onSuccess?: OnSuccess) => {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, DefaultError, LoginCredentials>({
    mutationFn: login,
    mutationKey: ['login'],
    onSuccess: (data: LoginResponse) => {
      setCookie('accessToken', data.accessToken);
      queryClient.resetQueries({ queryKey: ['currentUser'] });
      onSuccess?.(data);
    },
  });
};
