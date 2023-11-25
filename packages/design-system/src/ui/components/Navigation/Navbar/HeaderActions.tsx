import React from "react";
import { SelectOptionProps } from "../../../../dist";
import { cn } from "../../../lib/utils";
import { Avatar } from "../../DataDisplay";
import { Button, Icon, Select } from "../../General";
import { Flex } from "../../General/Flex";

const objects2: SelectOptionProps[] = [
  {
    label: "Los Angeles",
    value: "item01",
    type: "text",
  },
  {
    label: "Los Santos",
    value: "item02",
    type: "text",
  },
];

const HeaderActions: React.FC<Parameters<typeof Flex>[0]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Flex
      className={cn("justify-end flex-1 h-full gap-1", className)}
      {...props}
    >
      <Flex className="w-[200px]">
        <Select
          size="middle"
          placeholder="Choose an location"
          loading={false}
          options={objects2}
        />
      </Flex>
      <Flex className="gap-2 mx-4">
        <Button
          type="secondary"
          size="small"
          icon={
            <Icon
              name={["far", "comment-alt-lines"]}
              fill={"surface-primary"}
            />
          }
        ></Button>
        <Button
          type="secondary"
          size="small"
          icon={<Icon name={["far", "book-open"]} fill={"surface-primary"} />}
        ></Button>
      </Flex>
      <Avatar size="default" shape="circle" src={`https://i.pravatar.cc/600`} />
    </Flex>
  );
};

HeaderActions.displayName = "PageHeader.Actions";

export { HeaderActions };
