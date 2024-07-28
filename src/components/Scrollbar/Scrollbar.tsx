import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import { forwardRef, memo, ReactNode } from 'react';

import { StyledRootScrollbar, StyledScrollbar } from './styles';

interface ScrollbarProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const Scrollbar = forwardRef<HTMLElement, ScrollbarProps>(
  ({ children, sx, ...other }, ref) => {
    const userAgent =
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  },
);

Scrollbar.displayName = 'Scrollbar';

export default memo(Scrollbar);
