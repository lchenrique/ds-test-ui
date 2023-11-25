import { SpinProps } from "antd";
import { ReactNode } from "react";

import "./style.css";
export interface SpinnerProps extends SpinProps {
  children?: ReactNode;
  isLoading?: boolean;
  white?: boolean;
  className?: string;
}

function Spinner({
  children,
  isLoading,
  white,
  className,
  ...rest
}: SpinnerProps) {
  const spin = (
    <div className="absolute w-full h-full min-h-[184px] max-h-[672px] ">
      <div className="w-full h-full flex justify-center">
        <div className="indicator" />
        <div className="indicator-spin" />
      </div>
    </div>
  );

  return children ? (
    <div className={`relative  ${className ? className : "w-auto"}`}>
      {isLoading && (
        <div className="absolute w-full h-full bg-white  opacity-50 z-[49]" />
      )}

      {isLoading && spin}
      {children}
    </div>
  ) : isLoading ? (
    spin
  ) : (
    <></>
  );
}

export { Spinner };
