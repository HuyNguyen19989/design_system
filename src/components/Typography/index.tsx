import { Typography as MuiTypography, TypographyProps } from '@mui/material';

export default function Typography({variant, ...props}: TypographyProps) {
  return (
    <MuiTypography {...props} variant={variant} />
  );
}