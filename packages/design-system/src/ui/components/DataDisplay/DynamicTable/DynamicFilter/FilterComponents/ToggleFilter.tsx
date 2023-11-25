import { Switch } from "antd";
import React from "react";
import { FilterAction } from "..";
import { Flex } from "../../../../General/Flex";
import { Text } from "../../../../Typography";
import { useDynamicTable } from "../../useTable";

type ToggleType = string | number | boolean;
const ToggleFilter: React.FC<
  Omit<FilterAction, "order"> & {
    label: string;
    id: string;
    true?: ToggleType;
    false?: ToggleType;
    defaultChecked?: boolean;
  }
> = (props) => {
  const { setFilter, filters } = useDynamicTable();

  const onChange = (checked: ToggleType) => {
    if (checked) {
      setFilter(props.id, { [props.name]: checked });
      return;
    }

    setFilter(props.id, { [props.name]: undefined });
  };

  return (
    <Flex className="gap-2 col-start-auto flex-2">
      <Switch
        id="toggle"
        defaultChecked={props.defaultChecked}
        checkedChildren={props.true}
        unCheckedChildren={props.false}
        onChange={onChange}
      />
      <Text className="whitespace-nowrap">{props.label}</Text>
    </Flex>
  );
};

ToggleFilter.displayName = "ToggleFilter";

export { ToggleFilter };
