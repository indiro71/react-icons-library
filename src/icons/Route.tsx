import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Route({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 202 186"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M33.3 9.1c-9.7 2.8-15.4 9.7-16.1 19-.6 7.8 1.7 13.8 6.9 18.3 11.6 9.9 30.1 5.2 34.6-8.9l1-3 44.4-.3 44.4-.2 6.1 3c19.7 9.7 19.2 36.1-.8 45.1-5.3 2.4-5.4 2.4-55.8 2.9l-50.5.5-5 2.7c-24.5 13-24.5 45.4 0 57.8l7 3.5 33.4.3 33.3.3-8.2 8.5c-5.7 5.8-8 8.9-7.6 10 .3.8.6 1.8.6 2 0 .2 1 .4 2.3.4 2.6 0 25.7-22.5 25.7-25 0-2.1-23.1-25-25.2-25-1 0-2.2 1-2.9 2.1-1 1.9-.3 3 7.2 10.5 6.5 6.5 7.9 8.5 6.6 8.9-.9.4-15.5.5-32.4.3-26.3-.3-31.4-.6-34.6-2.1-10.6-4.7-16.2-12.9-16.2-23.7.1-9.6 5-17.5 14-22.3 3.9-2.2 5.1-2.2 54.5-2.7l50.5-.5 6.1-2.8c7-3.2 13.1-9.1 16.6-15.7 1.7-3.4 2.4-6.6 2.7-12.8.3-7.7.1-8.8-2.8-14.7-3.8-7.7-9.9-13.4-17.7-16.3-5.4-2.1-6.9-2.2-50.5-2.2H60l-.6-2.8c-.7-2.8-4.7-8.8-7.4-10.9-4.9-3.9-13.4-5.8-18.7-4.2zm13.5 9.5c9.6 7.4 6.9 22.2-4.7 25.4-11.5 3.1-22.1-9.4-16.7-19.8 1.6-3 5.3-6.6 7.6-7.5 4.2-1.5 10.4-.6 13.8 1.9zM159.9 125.4c-6.3 1.7-10.3 5.1-13.5 11.4-8.9 17.7 9.2 37 27.4 29.2 9.4-4.1 13.8-11.4 13-22.1-1-13.2-13.8-22-26.9-18.5zm14.7 9.7c10.2 9.5 4.6 25.2-9.1 25.2-14.5 0-19.6-18.6-7.2-26.4 4.5-2.8 12.7-2.2 16.3 1.2z" />
    </svg>
  );
}
export default Route;
