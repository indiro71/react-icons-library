import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DownloadFileIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 502 502"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M491.951 414.346l-66.37-66.37a24.218 24.218 0 00-26.468-5.264 24.214 24.214 0 00-14.993 22.438v9.98a4.292 4.292 0 01-4.287 4.287h-6.713V103c0-2.652-1.054-5.196-2.929-7.071l-93-93A10.001 10.001 0 00270.12 0h-253c-5.523 0-10 4.477-10 10v482c0 5.523 4.477 10 10 10h346c5.523 0 10-4.477 10-10v-28.583h6.713a4.292 4.292 0 014.287 4.287v9.98a24.214 24.214 0 0014.993 22.438 24.327 24.327 0 009.319 1.861 24.225 24.225 0 0017.149-7.125l66.37-66.37a10.001 10.001 0 000-14.142zM280.12 34.142L338.978 93H280.12V34.142zm73 447.858h-326V20h233v83c0 5.523 4.477 10 10 10h83v266.417h-21c-5.523 0-10 4.477-10 10v64c0 5.523 4.477 10 10 10h21V482zm58.318-1.284c-1.762 1.763-3.683 1.338-4.672.929-.988-.41-2.646-1.468-2.646-3.961v-9.98c0-13.392-10.895-24.287-24.287-24.287H342.12v-44h37.713c13.392 0 24.287-10.895 24.287-24.287v-9.98c0-2.492 1.658-3.551 2.646-3.96.988-.41 2.91-.834 4.672.929l59.299 59.298-59.299 59.299z" />
      <path d="M77.62 174h165.5c5.523 0 10-4.477 10-10s-4.477-10-10-10H77.62c-5.523 0-10 4.477-10 10s4.477 10 10 10zM302.62 220h-225c-5.523 0-10 4.477-10 10s4.477 10 10 10h225c5.523 0 10-4.477 10-10s-4.477-10-10-10zM302.62 286h-225c-5.523 0-10 4.477-10 10s4.477 10 10 10h225c5.523 0 10-4.477 10-10s-4.477-10-10-10zM302.62 352h-225c-5.523 0-10 4.477-10 10s4.477 10 10 10h225c5.523 0 10-4.477 10-10s-4.477-10-10-10zM302.62 154h-22c-5.523 0-10 4.477-10 10s4.477 10 10 10h22c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
    </svg>
  );
}
export default DownloadFileIcon;
