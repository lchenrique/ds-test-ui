import React from "react";
import { cn } from "../../../lib/utils";
import { Flex } from "../../General/Flex";
import { Text } from "../../Typography";

const HeaderTitle: React.FC<Parameters<typeof Text>[0]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text
      asChild
      className={cn("font-semibold leading-[100%] gap-1", className)}
      color="text-plain"
      size="xl"
      {...props}
    >
      <Flex>{children}</Flex>
    </Text>
  );
};

HeaderTitle.displayName = "PageHeader.Title";

export { HeaderTitle };
