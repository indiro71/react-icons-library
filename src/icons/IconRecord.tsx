import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function IconRecord({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.226 24h16.548C18.45 24 19 23.45 19 22.774V17.5a.5.5 0 00-1 0v5.274a.227.227 0 01-.226.226H1.226A.227.227 0 011 22.774V2.226C1 2.102 1.102 2 1.226 2h1.866c.207.581.757 1 1.408 1h10c.651 0 1.201-.419 1.408-1h1.866c.124 0 .226.102.226.226v3.839a.5.5 0 001 0V2.226C19 1.55 18.45 1 17.774 1h-1.866c-.207-.581-.757-1-1.408-1h-10c-.651 0-1.201.419-1.408 1H1.226C.55 1 0 1.55 0 2.226v20.549C0 23.45.55 24 1.226 24zM4.5 1h10a.5.5 0 010 1h-10a.5.5 0 010-1z" />
      <path d="M15 7.5a.5.5 0 00-.5-.5h-10a.5.5 0 000 1h10a.5.5 0 00.5-.5zM12.286 12.5a.5.5 0 00-.5-.5H4.5a.5.5 0 000 1h7.286a.5.5 0 00.5-.5zM4.5 17a.5.5 0 000 1h5a.5.5 0 000-1h-5zM13.5 17.5a.507.507 0 00.133-.018l2.318-.639a.496.496 0 00.221-.129l7.334-7.335a1.69 1.69 0 000-2.386c-.637-.637-1.749-.637-2.386 0l-7.334 7.335a.503.503 0 00-.128.221l-.639 2.317a.5.5 0 00.481.634zm1.086-2.558l7.241-7.241c.26-.26.712-.26.972 0a.688.688 0 010 .972l-7.241 7.241-1.341.37.369-1.342z" />
    </svg>
  );
}
export default IconRecord;