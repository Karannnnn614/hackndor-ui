import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function useResponsive(
  query: 'up' | 'down' | 'between' | 'only',
  start: Breakpoint,
  end?: Breakpoint,
): boolean {
  const theme = useTheme<Theme>();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start, end || start),
  );
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

export function useWidth(): Breakpoint {
  const theme = useTheme<Theme>();

  const keys = [...theme.breakpoints.keys] as Breakpoint[];

  return (
    keys.reverse().reduce<Breakpoint | null>((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
