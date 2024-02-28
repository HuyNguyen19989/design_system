import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export type IconBaseProps = SvgIconProps & { children: React.ReactNode }

export default function IconBase({ children, ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      {children}
    </SvgIcon>
  );
}