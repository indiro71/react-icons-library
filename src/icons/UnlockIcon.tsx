import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function UnlockIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280.417 280.417"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M206.527 4.542c-40.742 0-73.889 33.146-73.889 73.889v32.111H16.125C7.22 110.542 0 117.761 0 126.667V259.75c0 8.906 7.22 16.125 16.125 16.125h165.25c8.906 0 16.125-7.219 16.125-16.125V126.667c0-8.906-7.219-16.125-16.125-16.125h-8.736V78.431c0-18.686 15.202-33.889 33.889-33.889 18.687 0 33.89 15.202 33.89 33.889 0 11.046 8.954 20 20 20s20-8.954 20-20c-.001-40.742-33.148-73.889-73.891-73.889zm-92.111 190.235v26.432c0 8.652-7.014 15.666-15.666 15.666s-15.666-7.014-15.666-15.666v-26.432c-5.885-4.639-9.668-11.826-9.668-19.901 0-13.992 11.342-25.334 25.334-25.334s25.334 11.342 25.334 25.334c0 8.075-3.783 15.262-9.668 19.901z" />
    </svg>
  );
}
export default UnlockIcon;
