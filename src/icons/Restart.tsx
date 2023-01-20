import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Restart({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M96.1 103.6C85.7 112 72.6 116 59.3 114.7c-10.5-1-20.3-5.1-28.2-11.8H44v-8H18v26h8V109c9.1 7.7 20.4 12.5 32.6 13.6 1.9.2 3.7.3 5.5.3 13.5 0 26.5-4.6 37-13.2 19.1-15.4 26.6-40.5 19.1-63.9l-7.6 2.4c6.4 20.4 0 42.1-16.5 55.4zM103 19.7C81.8 1 49.5-.3 26.9 18.1 7.9 33.5.4 58.4 7.7 81.7l7.6-2.4c-6.3-20.1.2-41.7 16.6-54.9C51.6 8.4 79.7 9.6 98 26H85v8h26V8h-8v11.7z" />
    </svg>
  );
}
export default Restart;
