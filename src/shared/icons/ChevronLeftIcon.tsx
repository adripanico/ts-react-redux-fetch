import { SVGProps } from 'react';

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
    </svg>
  );
};
