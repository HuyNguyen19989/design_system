import { useMemo } from 'react';
import { colors } from '../foundations/colors';
import { typography } from '../foundations/typography';
import { ThemeOptions, createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import '@fontsource/public-sans';
import { shadows } from '../foundations/shadow';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      palette: colors,
      typography,
      shadows: shadows,
    }),
    []
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};