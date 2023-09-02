import * as React from "react";
import { SVGProps } from "react";
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    fill='none'
    {...props}
  >
    <rect width={32} height={32} fill='#fff' rx={3} />
    <path
      fill='#000'
      d='M6.333 2.5a2.833 2.833 0 1 0 0 5.667 2.833 2.833 0 0 0 0-5.667ZM3.667 10.5a.167.167 0 0 0-.167.167V28c0 .092.075.167.167.167H9A.167.167 0 0 0 9.167 28V10.667A.167.167 0 0 0 9 10.5H3.667ZM12.333 10.5a.167.167 0 0 0-.166.167V28c0 .092.074.167.166.167h5.334a.167.167 0 0 0 .166-.167v-9.333a2.5 2.5 0 1 1 5 0V28c0 .092.075.167.167.167h5.333A.167.167 0 0 0 28.5 28V16.507c0-3.236-2.814-5.767-6.034-5.474a9.553 9.553 0 0 0-2.89.73l-1.743.746v-1.842a.167.167 0 0 0-.166-.167h-5.334Z'
    />
  </svg>
);
export default LinkedinIcon;
