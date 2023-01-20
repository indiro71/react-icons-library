import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function NewFileIcon({
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
      <path
        d="M356.57 342.707a74.265 74.265 0 0139.32 11.213V105.273L300.617 10H70.783v445.916H292.35l.188-.185c-6.736-11.215-10.615-24.342-10.615-38.377 0-41.227 33.42-74.647 74.647-74.647z"
        fill="#50a5dc"
      />
      <path
        d="M396.288 354.162c-.131-.083-.267-.16-.399-.242a74.262 74.262 0 00-39.32-11.213c-41.226 0-74.647 33.42-74.647 74.646 0 14.035 3.879 27.162 10.615 38.377.071.119.138.241.21.359C305.844 477.62 329.527 492 356.57 492c41.226 0 74.647-33.42 74.647-74.647-.001-26.624-13.951-49.977-34.929-63.191z"
        fill="#c7ebff"
      />
      <g>
        <path d="M405.889 348.576V105.273c0-2.652-1.054-5.196-2.929-7.071L307.688 2.929A10 10 0 00300.617 0H70.783c-5.523 0-10 4.477-10 10v445.916c0 5.523 4.477 10 10 10h216.442C303.083 488.611 328.615 502 356.57 502c46.674 0 84.646-37.972 84.646-84.646.001-27.527-13.114-52.869-35.327-68.778zM80.783 20h215.691l76.158 76.158h-51.151c-5.522 0-10 4.477-10 10s4.478 10 10 10h64.408v221.789a84.497 84.497 0 00-29.319-5.241c-46.675 0-84.647 37.973-84.647 84.647 0 9.793 1.692 19.45 4.955 28.562H80.783V20zM356.57 482c-22.766 0-43.43-11.629-55.277-31.107-6.13-10.077-9.37-21.675-9.37-33.539 0-35.646 29.001-64.647 64.647-64.647a64.43 64.43 0 0133.334 9.278c.474.355.979.67 1.513.938 18.668 11.975 29.799 32.278 29.799 54.431C421.217 453 392.217 482 356.57 482z" />
        <path d="M394.345 407.354h-27.776v-27.776c0-5.523-4.478-10-10-10s-10 4.477-10 10v27.776h-27.776c-5.522 0-10 4.477-10 10s4.478 10 10 10h27.776v27.776c0 5.523 4.478 10 10 10s10-4.477 10-10v-27.776h27.776c5.522 0 10-4.477 10-10s-4.477-10-10-10zM292.56 106.158c0-5.523-4.478-10-10-10h-11.447c-5.522 0-10 4.477-10 10s4.478 10 10 10h11.447c5.523 0 10-4.477 10-10z" />
      </g>
    </svg>
  );
}
export default NewFileIcon;
