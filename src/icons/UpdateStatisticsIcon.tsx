import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function UpdateStatisticsIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47 47"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11.355 22.761v7.406a2.962 2.962 0 105.925 0v-7.406a2.963 2.963 0 00-5.925 0zM18.763 19.797v10.37a2.962 2.962 0 002.963 2.963 2.962 2.962 0 002.963-2.963v-10.37a2.963 2.963 0 10-5.926 0zM26.169 16.833v13.333a2.962 2.962 0 002.963 2.963 2.962 2.962 0 002.964-2.963V16.833a2.962 2.962 0 00-2.964-2.962 2.961 2.961 0 00-2.963 2.962z" />
      <path d="M46.906 20.119a.987.987 0 00-.893-.569h-2.93C41.223 9.451 32.355 1.774 21.726 1.774 9.746 1.774 0 11.521 0 23.5s9.746 21.726 21.726 21.726c7.73 0 14.941-4.161 18.816-10.858a1.975 1.975 0 10-3.419-1.977c-3.172 5.479-9.071 8.887-15.397 8.887C11.924 41.275 3.95 33.303 3.95 23.5c0-9.802 7.974-17.775 17.775-17.775 8.443 0 15.515 5.921 17.317 13.825h-2.905a.992.992 0 00-.895.569.991.991 0 00.136 1.051l4.938 5.926a.99.99 0 001.517 0l4.938-5.926a.985.985 0 00.135-1.051z" />
    </svg>
  );
}
export default UpdateStatisticsIcon;
