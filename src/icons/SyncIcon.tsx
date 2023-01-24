import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SyncIcon({
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
      <path d="M20.72.22l-1.914 1.914A11.883 11.883 0 0012 0C5.383 0 0 5.383 0 12c0 1.172.172 2.338.512 3.466a.748.748 0 00.934.502.752.752 0 00.502-.935A10.522 10.522 0 011.5 12C1.5 6.21 6.21 1.5 12 1.5c2.08 0 4.055.607 5.732 1.708L16.22 4.72c-.471.471-.136 1.28.53 1.28h4.5a.75.75 0 00.75-.75V.75a.75.75 0 00-1.28-.53zM23.488 8.534a.752.752 0 00-1.437.433c.298.987.449 2.008.449 3.033 0 5.79-4.71 10.5-10.5 10.5-2.075 0-4.048-.604-5.722-1.701l1.505-1.522A.75.75 0 007.25 18h-4.5a.749.749 0 00-.75.758l.05 4.5c.008.666.819.99 1.283.519l1.878-1.899A11.885 11.885 0 0012 24c6.617 0 12-5.383 12-12 0-1.172-.172-2.338-.512-3.466z" />
      <path d="M12 11c-2.307 0-5-.524-5-2s2.693-2 5-2 5 .524 5 2-2.693 2-5 2zM12 12.5c-2.179 0-3.883-.378-5-1.063V12c0 1.476 2.693 2 5 2s5-.524 5-2v-.563c-1.118.685-2.821 1.063-5 1.063zM12 15.5c-2.179 0-3.883-.378-5-1.063V15c0 1.476 2.693 2 5 2s5-.524 5-2v-.563c-1.118.685-2.821 1.063-5 1.063z" />
    </svg>
  );
}
export default SyncIcon;