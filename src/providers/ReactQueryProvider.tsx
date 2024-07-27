'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { JSX, PropsWithChildren } from 'react';

const queryClient = new QueryClient();

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
