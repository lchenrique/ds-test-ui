import { ReactNode } from "react";
import { cn } from "../../../lib/utils";

const Box = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-3 border rounded-md", className)}>{children}</div>
  );
};

export { Box };
