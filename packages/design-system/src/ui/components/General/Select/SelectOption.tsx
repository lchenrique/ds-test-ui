import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Checkbox } from "antd";
import React from "react";
import { Icon } from "../Icon";

export interface SelectOptionProps {
  label: React.ReactNode;
  value?: string | number | null;
  labelIcon?: IconName;
  description?: string;
  descriptionIcon?: IconName;
  suffix?: React.ReactNode;
  type?: "text" | "checkbox";
  values?: any[];
}

const CustomSelectOption: React.FC<SelectOptionProps> = ({
  label,
  labelIcon,
  description,
  descriptionIcon,
  suffix,
  type = "text",
  values = [],
}) => {
  return (
    <div className="p-padding-xs flex flex-row justify-between h-full">
      <div className="flex flex-col justify-between h-full">
        <span
          aria-label="China"
          className="text-@text-plain flex flex-row items-center"
        >
          {type === "checkbox" && (
            <Checkbox
              className="mr-spacing-xxs"
              checked={
                values.filter((value) => value.label === label).length > 0
                  ? true
                  : false
              }
            />
          )}
          {labelIcon && (
            <Icon
              name={labelIcon}
              size="spacing-s"
              className="mr-spacing-xxxs"
              fill="text-plain"
            />
          )}
          {label}
        </span>
        <span className="text-@text-light flex flex-row items-center">
          {descriptionIcon && (
            <Icon
              name={descriptionIcon}
              size="spacing-s"
              className="mr-spacing-xxxs"
              fill="text-light"
            />
          )}{" "}
          {description}
        </span>
      </div>
      <div id="active" className="flex flex-col h-full">
        {suffix && (
          <span className="text-@text-light flex flex-row items-center mt-auto">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};
export default CustomSelectOption;
