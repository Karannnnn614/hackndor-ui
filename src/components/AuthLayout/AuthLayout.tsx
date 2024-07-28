import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import type { PropsWithChildren } from 'react';

import { bgGradient } from '@/theme/css';

export function AuthLayout({ children }: PropsWithChildren) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: '100vh',
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          {children}
        </Card>
      </Stack>
    </Box>
  );
}
