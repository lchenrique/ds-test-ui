import React from "react";
import { cn } from "../../../lib/utils";
import { Text } from "../../Typography";

const HeaderSubTitle: React.FC<Parameters<typeof Text>[0]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text
      asChild
      className={cn("leading-[130%] gap-1 whitespace-nowrap", className)}
      {...props}
    >
      <div
        style={{
          flex: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {children}
      </div>
    </Text>
  );
};

HeaderSubTitle.displayName = "PageHeader.SubTitle";

export { HeaderSubTitle };
