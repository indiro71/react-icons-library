import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CustomizeColumnsIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 8.731 8.731"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id="customizeColumnsIcon_svg__a">
          <stop offset={0} stopColor="#81c9e7" />
          <stop offset={1} stopColor="#447f9d" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2={5.98}
          x2={29.742}
          y1={5.98}
          x1={3.225}
          id="customizeColumnsIcon_svg__b"
          xlinkHref="#customizeColumnsIcon_svg__a"
        />
      </defs>
      <g stroke="#000">
        <g fill="none">
          <path d="M.794 1.214v6.724h7.143V.794H.795z" strokeWidth={0.15} />
          <path
            d="M.794 2.381h7.143M7.938 6.085H.793M7.938 4.233H.793"
            strokeWidth={0.147}
          />
          <path d="M3.175 7.938V2.38M5.556 7.938V2.38" strokeWidth={0.15} />
        </g>
        <path
          d="M.864 6.155v1.712c.097.012.203.001.303.004.644 0 1.288-.002 1.931-.003.013-.097.002-.203.006-.303l.004-1.41c-.094-.012-.198-.002-.295-.005H.87zM.864 4.303v1.712c.097.012.203.001.303.005h1.935c.013-.097.002-.203.005-.303V4.303c-.096-.012-.202-.002-.302-.005H.87zM3.246 4.303v1.712c.096.012.202.001.303.005h1.934c.013-.097.002-.203.006-.303V4.303c-.097-.012-.203-.002-.303-.005H3.25zM3.246 6.155v1.712c.096.012.202.001.303.004l1.93-.003c.013-.097.003-.203.006-.303l.004-1.41c-.094-.012-.197-.002-.295-.005H3.251zM5.627 6.155v1.712c.097.012.203.001.303.004l1.93-.003c.013-.097.003-.203.007-.303l.003-1.41c-.094-.012-.197-.002-.295-.005H5.632zM5.627 4.303v1.712c.097.012.203.001.303.005h1.935c.012-.097.001-.203.005-.303V4.303c-.097-.012-.203-.002-.303-.005H5.632zM5.627 2.45v1.712c.097.013.203.002.303.006h1.935c.012-.097.001-.203.005-.303V2.45c-.097-.012-.203-.002-.303-.005H5.632zM3.246 2.45v1.712c.096.013.202.002.303.006h1.934c.013-.097.002-.203.006-.303V2.45c-.097-.012-.203-.002-.303-.005H3.25zM.864 2.45v1.712c.097.013.203.002.303.006h1.935c.013-.097.002-.203.005-.303V2.45c-.096-.012-.202-.002-.302-.005H.87z"
          fill="#fff"
          strokeWidth={0.00476244}
        />
        <path
          transform="scale(.26458)"
          d="M16.498 3.255L3.295 3.27c-.057 1.792-.028 3.62-.052 5.426 2.656.047 5.349.006 8.02.02H29.7c.047-1.803.007-3.641.02-5.458-2.656-.044-5.349 0-8.02-.01l-5.203.006z"
          fill="url(#customizeColumnsIcon_svg__b)"
          strokeWidth={0.035}
        />
      </g>
      <g stroke="#000">
        <path
          d="M6.766 4.999c-.21 0-.32.2-.37.377-.028.141-.173.234-.31.18-.177-.054-.385-.199-.56-.055-.195.135-.12.402-.03.577.079.14 0 .33-.162.36-.173.05-.39.161-.374.374-.002.237.253.331.436.401.172.066.145.283.066.412-.088.17-.096.43.106.52.238.154.46-.164.698-.077.183.137.152.466.404.534.172.062.36-.047.412-.218.061-.132.117-.37.309-.33.21.047.467.248.651.034.129-.114.113-.296.04-.435-.063-.13-.137-.362.045-.433.182-.082.457-.165.454-.411.003-.24-.268-.32-.444-.402-.19-.07-.126-.307-.051-.441.055-.09.044-.196.012-.288-.021-.193-.26-.303-.426-.207-.144.055-.35.176-.475.024-.106-.19-.16-.492-.43-.496zm.005.975c.455-.046.851.387.85.828.023.511-.492.956-.994.856-.49-.074-.845-.622-.678-1.097.103-.342.454-.629.822-.587z"
          strokeWidth={0.00416088}
        />
        <path
          d="M6.814 5.932c-.179-.004-.366.007-.515.116-.376.222-.544.737-.349 1.132.154.338.527.574.902.523.303-.016.573-.233.715-.493.206-.36.076-.837-.238-1.09a.757.757 0 00-.515-.188z"
          fill="#fff"
          strokeWidth={0.009632700000000001}
        />
      </g>
    </svg>
  );
}
export default CustomizeColumnsIcon;
