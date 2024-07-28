import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { RouteGuard } from '@/components/RouteGuard';
import { Providers } from '@/providers';

export type NextPageWithProperties<
  P = Record<string, never>,
  IP = P,
> = NextPage<P, IP> & {
  isPublic?: boolean;
};

type AppPropsWithProperties = AppProps & {
  Component: NextPageWithProperties;
};

export default function App({ Component, pageProps }: AppPropsWithProperties) {
  return (
    <Providers>
      <RouteGuard Component={Component} pageProps={pageProps} />
    </Providers>
  );
}
