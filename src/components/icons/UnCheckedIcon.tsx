import type { SVGProps } from "react";
const SvgUnCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <circle
      cx={16}
      cy={16}
      r={15}
      fill="#FEFCE8"
      stroke="#0F172A"
      strokeWidth={2}
    />
  </svg>
);
export default SvgUnCheckedIcon;
