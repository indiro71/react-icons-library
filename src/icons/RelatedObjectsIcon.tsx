import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function RelatedObjectsIcon({
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
      <path d="M400.682 756.05q-19.165 0-36.152 6.969t-29.618 19.6-20.036 29.183-7.405 35.716 7.405 35.716 19.6 29.183 28.748 19.6 35.716 6.97 35.716-6.97 29.183-19.6 19.6-29.183 6.97-35.716q0-20.907-8.712-39.2t-23.52-30.49l40.072-104.536q-32.232-6.969-56.624-21.778zm366.746 47.04q-11.325 20.908-11.325 44.428 0 19.165 7.405 35.716t19.6 29.183 28.747 19.6 35.716 6.97 35.717-6.97 29.183-19.6 19.6-29.183 6.969-35.716-6.969-35.716-19.6-28.748-29.183-19.6-35.717-7.405q-18.293 0-34.845 6.97L683.8 610.57q-19.165 22.65-46.17 39.2zM253.46 523.458q-12.196-19.165-32.232-30.49t-44.427-11.324q-19.165 0-35.716 7.404t-28.748 19.6-19.6 28.748-7.405 35.716 7.405 35.717 19.6 29.183 28.748 19.6 35.716 6.969q35.716 0 60.979-23.085t29.618-57.93l94.082-23.52q-11.324-26.134-13.938-59.237zm284.86 93.21q27.005 0 50.96-10.453t41.38-27.876 27.875-41.378 10.454-50.962-10.454-50.96-27.876-41.38-41.378-27.875-50.961-10.454-50.962 10.454-41.378 27.876-27.876 41.378T407.65 486t10.454 50.962 27.876 41.378 41.378 27.876 50.962 10.454zm0-191.648q25.262 0 43.12 17.859t17.859 43.12-17.859 43.121-43.12 17.859T495.2 529.12 477.34 486t17.859-43.121 43.12-17.859zm309.25-43.556q19.165 0 35.717-6.97t29.183-19.6 19.6-29.182 6.97-35.717-6.97-35.716-19.6-28.747-29.183-19.6-35.716-7.405-35.717 7.404-28.747 19.6-19.6 28.748-7.405 35.716q0 10.454 2.613 20.907l-76.66 47.913q20.908 23.52 32.233 51.396l76.66-47.912q24.39 19.165 56.622 19.165zM365.838 226.403q14.81-21.778 14.81-49.654 0-19.165-6.97-35.717t-19.6-29.183-29.183-19.6-35.716-6.969-35.717 6.969-28.747 19.6-19.6 29.183-7.405 35.717 7.405 35.716 19.6 29.183 28.747 19.6 35.717 6.97q13.938 0 28.747-4.356l77.53 94.953q20.907-23.52 47.041-39.201z" />
    </svg>
  );
}
export default RelatedObjectsIcon;
