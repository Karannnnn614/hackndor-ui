import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { JSX, PropsWithChildren } from 'react';

import { DatePickerLocalizationProvider } from './DatePickerLocalizationProvider';
import { ReactQueryProvider } from './ReactQueryProvider';
import { ThemeProvider } from './ThemeProvider';

export type ProvidersProps = Readonly<PropsWithChildren>;

export function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <DatePickerLocalizationProvider>
          {children}
          <ToastContainer />
        </DatePickerLocalizationProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
