import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

import type { JSX, PropsWithChildren } from 'react';

export type DatePickerLocalizationProviderProps = PropsWithChildren;

export const DatePickerLocalizationProvider = ({
  children,
}: DatePickerLocalizationProviderProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
};
