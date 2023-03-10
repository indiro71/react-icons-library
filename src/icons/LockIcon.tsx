import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function LockIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 271.333 271.333"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M218.292 106h-8.736V73.889C209.555 33.146 176.409 0 135.665 0 94.923 0 61.777 33.146 61.777 73.889V106h-8.735c-8.906 0-16.125 7.219-16.125 16.125v133.083c0 8.906 7.219 16.125 16.125 16.125h165.25c8.906 0 16.125-7.219 16.125-16.125V122.125c0-8.906-7.22-16.125-16.125-16.125zm-66.959 84.235v26.432c0 8.652-7.014 15.666-15.666 15.666-8.652 0-15.666-7.014-15.666-15.666v-26.432c-5.885-4.639-9.668-11.826-9.668-19.901 0-13.992 11.342-25.334 25.334-25.334 13.992 0 25.334 11.342 25.334 25.334 0 8.075-3.783 15.262-9.668 19.901zm18.222-85.735h-67.778V73.889c0-18.687 15.202-33.889 33.889-33.889s33.89 15.202 33.89 33.889V104.5z" />
    </svg>
  );
}
export default LockIcon;
