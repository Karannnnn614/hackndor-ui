import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { JSX, PropsWithChildren } from 'react';

import axiosInstance from '@/lib/axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await axiosInstance.get(queryKey[0] as string);

        return data;
      },
    },
  },
});

export type ReactQueryProviderProps = PropsWithChildren;

export const ReactQueryProvider = ({
  children,
}: ReactQueryProviderProps): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};
