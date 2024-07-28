import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { useMemo } from 'react';

import type { ThemeOptions } from '@mui/material/styles';
import type { JSX, PropsWithChildren } from 'react';

import {
  customShadows,
  overrides,
  palette,
  shadows,
  typography,
} from '@/theme';

export type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const memoizedValue: ThemeOptions = useMemo(
    () =>
      ({
        palette: palette(),
        typography,
        shadows: shadows(),
        customShadows: customShadows(),
        shape: { borderRadius: 8 },
      }) as unknown as ThemeOptions,
    [],
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
