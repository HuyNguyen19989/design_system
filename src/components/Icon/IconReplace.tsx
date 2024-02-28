import { SvgIconProps } from "@mui/material";
import IconBase from "./IconBase";

export default function IconReplace(props: SvgIconProps) {
  return (
    <IconBase {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11.3438" fill="#00818D" />
        <circle cx="12.0687" cy="11.9312" r="7.5625" fill="white" />
        <ellipse cx="12.0687" cy="11.9313" rx="6.875" ry="6.875" fill="#00818D" fill-opacity="0.75" />
        <path d="M12.116 15.8156L8.85991 10.0148L15.372 10.0148L12.116 15.8156Z" fill="#FFD970" />
      </svg>
    </IconBase>
  );
}