import React from "react";
import { cn } from "../../../lib/utils";
import { Text } from "../../Typography";

const HeaderTitle: React.FC<Parameters<typeof Text>[0]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text
      asChild
      className={cn(
        "font-semibold leading-[100%] gap-1 w-ful text-ellipsis",
        className,
      )}
      color="text-plain"
      size="xl"
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

HeaderTitle.displayName = "PageHeader.Title";

export { HeaderTitle };
