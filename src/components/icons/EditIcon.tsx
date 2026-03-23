import * as React from "react";
import type { SVGProps } from "react";
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <circle
      cx={32}
      cy={32}
      r={31}
      fill="#0F172A"
      fillOpacity={0.5}
      stroke="#0F172A"
      strokeWidth={2}
    />
    <path
      fill="#fff"
      d="M33.31 23.866a1 1 0 0 1 1.366-.366l3.372 1.947a1 1 0 0 1 .366 1.366l-7.23 12.524a1 1 0 0 1-.492.427l-3.57 1.44a.5.5 0 0 1-.683-.399l-.489-3.782a1 1 0 0 1 .126-.628z"
    />
  </svg>
);
export default SvgEditIcon;
