import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OpenInWidgetIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M907.493 631.345c9.873-6.389 17.568-14.664 23.085-24.828 5.517-10.163 8.275-21.342 8.275-33.538V154.837c0-19.165-6.823-35.571-20.471-49.219-13.648-13.648-30.054-20.471-49.219-20.471H154.837c-19.165 0-35.571 6.823-49.219 20.471-13.648 13.648-20.471 30.054-20.471 49.219v418.142c0 12.196 2.758 23.375 8.275 33.538 5.518 10.164 13.213 18.44 23.085 24.828l99.309 63.592v243.916h592.368V694.937zM285.506 869.163V433.598l152.448-108.02c20.907-15.1 45.59-22.649 74.046-22.649 28.457 0 53.139 7.55 74.046 22.65l152.448 108.02v435.564H285.506zM808.184 612.18V481.51l54.881 38.33c4.646 3.485 8.276 7.84 10.89 13.067 2.613 5.227 3.92 10.454 3.92 15.68 0 12.196-5.227 21.779-15.681 28.748zM215.816 481.51v130.67l-54.01-34.845c-10.454-6.97-15.68-16.552-15.68-28.748 0-5.226 1.306-10.453 3.92-15.68 2.613-5.227 6.243-9.582 10.889-13.067z" />
    </svg>
  );
}
export default OpenInWidgetIcon;