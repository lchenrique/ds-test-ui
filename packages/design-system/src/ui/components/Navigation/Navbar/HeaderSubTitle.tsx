import React from "react";
import { cn } from "../../../lib/utils";
import { Flex } from "../../General/Flex";
import { Text } from "../../Typography";

const HeaderSubTitle: React.FC<Parameters<typeof Text>[0]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text asChild className={cn("leading-[130%] gap-1", className)} {...props}>
      <Flex>{children}</Flex>
    </Text>
  );
};

HeaderSubTitle.displayName = "PageHeader.SubTitle";

export { HeaderSubTitle };
