import type { SVGProps } from "react";
const SvgCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#7C3AED" />
    <path
      stroke="#FEFCE8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M8 16.286 13.818 22 24 12"
    />
  </svg>
);
export default SvgCheckedIcon;
