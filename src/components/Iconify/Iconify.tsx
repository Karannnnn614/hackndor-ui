import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { forwardRef } from 'react';

import type { BoxProps } from '@mui/material/Box';

interface IconifyProps extends BoxProps {
  icon: string | JSX.Element;
  width?: number;
}

export const Iconify = forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  ),
);

Iconify.displayName = 'Iconify';
