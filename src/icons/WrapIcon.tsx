import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function WrapIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 362.667 362.667"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 10.667h341.333v42.667H0zM277.333 138.667H0v42.667h282.667c23.573 0 42.667 19.093 42.667 42.667 0 23.573-19.093 42.667-42.667 42.667h-48V224l-64 64 64 64v-42.667h42.667c47.04 0 85.333-38.293 85.333-85.333s-38.294-85.333-85.334-85.333z" />
      <path d="M0 266.667h128v42.667H0z" />
    </svg>
  );
}
export default WrapIcon;
