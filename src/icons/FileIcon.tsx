import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function FileIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="file"
      className="fileIcon_svg__svg-inline--fa fileIcon_svg__fa-file fileIcon_svg__fa-w-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"
      />
    </svg>
  );
}
export default FileIcon;