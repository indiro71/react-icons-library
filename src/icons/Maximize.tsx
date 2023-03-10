import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Maximize({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9 21v-6m0 6h6m-6 0l6-6 6-6m0 0v6m0-6h-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
export default Maximize;
