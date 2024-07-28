import type { DefaultError, UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import axiosInstance from '@/lib/axios';
import { User } from '@/types/user';

type Response = User;

type CreateUserPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  country?: string;
  organizationId: number;
};

const createUser = async (payload: CreateUserPayload): Promise<Response> => {
  const response = await axiosInstance.post('/users', payload);

  return response.data;
};

export const useCreateUser = (
  options: Omit<
    UseMutationOptions<Response, DefaultError, CreateUserPayload>,
    'mutationFn' | 'mutationKey'
  > = {},
) =>
  useMutation<Response, DefaultError, CreateUserPayload>({
    mutationFn: createUser,
    mutationKey: ['createUser'],
    ...options,
  });
