import { Dropdown, Select } from "antd";
import React from "react";
import { useBreakpoint } from "../../../../../hooks/useBreakpoint";
import { Button } from "../../../../General";

const ActionFilter: React.FC<{
  id: string;
  options: Parameters<typeof Select>[0]["options"];
}> = (props) => {
  const { md } = useBreakpoint();

  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: props?.options?.map((v, i) => ({
          ...v,
          onClick: () => {},
        })) as any,
      }}
    >
      <Button type="primary" className="w-full sm:w-min">
        Actions
      </Button>
    </Dropdown>
  );
};

ActionFilter.displayName = "SelectFilter";

export { ActionFilter };
