import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Barcode({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.069 47.07"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M9.435 5.878A9.435 9.435 0 000 15.313v15.603a9.188 9.188 0 009.187 9.188v-3.251h-.508a5.425 5.425 0 01-5.426-5.425v-16.91a5.426 5.426 0 015.426-5.426h29.754a5.426 5.426 0 015.426 5.426v16.91a5.426 5.426 0 01-5.426 5.425h-.428v3.251a9.063 9.063 0 009.063-9.062V15.065a9.187 9.187 0 00-9.187-9.187H9.435z" />
      <path d="M11.24 34.818V10.715H9.316a3.991 3.991 0 00-3.991 3.992v16.121a3.991 3.991 0 003.991 3.992h1.924v-.002zM28.918 10.715h5.146v24.103h-5.146zM18.665 10.715h3.786v24.103h-3.786zM24.607 10.715h2.154v24.103h-2.154zM13.384 10.715h3.211v24.103h-3.211zM12.972 36.502c-1.172 0-1.731 1.04-1.731 2.352.009 1.283.525 2.337 1.696 2.337 1.158 0 1.723-.963 1.723-2.365-.001-1.243-.475-2.324-1.688-2.324zm-.008 3.887c-.41 0-.662-.495-.655-1.535-.007-1.054.258-1.549.648-1.549.427 0 .643.53.643 1.535-.001 1.033-.224 1.549-.636 1.549zM17.443 36.502c-1.173 0-1.729 1.04-1.729 2.352.006 1.283.522 2.337 1.694 2.337 1.159 0 1.724-.963 1.724-2.365 0-1.243-.475-2.324-1.689-2.324zm-.006 3.887c-.412 0-.663-.495-.656-1.535-.007-1.054.258-1.549.648-1.549.425 0 .643.53.643 1.535 0 1.033-.224 1.549-.635 1.549zM20.084 37.131l.175.808.865-.398h.014v3.578h1.015v-4.553h-.868zM25.161 40.228l.422-.349c.656-.586 1.209-1.192 1.209-1.953 0-.824-.563-1.424-1.59-1.424-.612 0-1.144.209-1.484.468l.299.761c.238-.182.578-.377.971-.377.523 0 .746.293.746.664-.014.53-.497 1.04-1.487 1.925l-.589.53v.646h3.211v-.894h-1.707l-.001.003zM29.773 36.502c-.997 0-1.709.747-1.709 1.633 0 .879.648 1.417 1.416 1.417.412 0 .703-.119.906-.328l.022.006a1.429 1.429 0 01-.573.838c-.244.168-.566.258-.888.278a2.259 2.259 0 01-.455 0v.831c.122.007.295.014.476 0 .705-.028 1.297-.244 1.729-.634.495-.454.793-1.146.793-2.087.001-1.061-.551-1.954-1.717-1.954zm.579 1.996c-.096.16-.299.301-.584.301-.435 0-.643-.334-.643-.725-.008-.476.258-.795.62-.795.481 0 .664.474.664.955a.465.465 0 01-.057.264zM35.219 38.463c-.322-.231-.761-.328-1.192-.328-.111 0-.196.004-.294.019l.098-.693h1.777v-.896H33.09l-.301 2.386c.189-.027.364-.039.615-.039.906 0 1.277.289 1.277.757 0 .48-.47.69-.908.69-.411 0-.823-.125-1.025-.223l-.188.796c.25.132.711.258 1.263.258 1.222 0 1.946-.745 1.946-1.59.001-.53-.208-.907-.55-1.137zM36.178 10.715v24.103h1.615a3.992 3.992 0 003.992-3.992v-16.12a3.992 3.992 0 00-3.992-3.992l-1.615.001z" />
    </svg>
  );
}
export default Barcode;