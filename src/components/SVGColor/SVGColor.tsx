import Box, { BoxProps } from '@mui/material/Box';
import { ForwardedRef, forwardRef } from 'react';

interface SVGColorProps extends BoxProps {
  src: string;
}

export const SVGColor = forwardRef<HTMLSpanElement, SVGColorProps>(
  ({ src, sx, ...other }, ref: ForwardedRef<HTMLSpanElement>) => (
    <Box
      component="span"
      className="svg-color"
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  ),
);

SVGColor.displayName = 'SVGColor';
