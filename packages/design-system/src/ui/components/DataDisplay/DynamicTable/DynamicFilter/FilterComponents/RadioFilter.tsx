import { Radio, Select } from "antd";
import React from "react";
import { FilterAction } from "..";
import { uuid } from "../../../../..";
import { Flex } from "../../../../General/Flex";
import { useDynamicTable } from "../../useTable";

const RadioFilter: React.FC<
  Omit<FilterAction, "order"> & {
    id: string;
    options: Parameters<typeof Select>[0]["options"];
  }
> = (props) => {
  const { setFilter, filters } = useDynamicTable();

  return (
    <Flex>
      <Radio.Group
        value={
          filters[props.id] && filters[props.id][(props.name as any) || ""]
        }
        size="large"
        name={props?.name}
        className="flex"
        onChange={(e) =>
          setFilter(props.id, { [e.target.name!]: e.target.value })
        }
      >
        {props?.options?.map((radio) => {
          return (
            <Radio.Button
              key={uuid()}
              name="all"
              className=" text-center whitespace-nowrap"
              value={radio.value}
            >
              {radio.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </Flex>
  );
};

RadioFilter.displayName = "RadioFilter";

export { RadioFilter };
