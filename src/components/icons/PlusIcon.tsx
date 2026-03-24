import type { SVGProps } from 'react';
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M2 8h12M8 14V2" />
  </svg>
);
export default SvgPlusIcon;
