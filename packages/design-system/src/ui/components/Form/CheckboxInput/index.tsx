import {
  Checkbox,
  CheckboxOptionType,
  CheckboxProps,
  Form,
  FormItemProps,
} from "antd";
import { Fragment, ReactNode, useEffect, useState } from "react";
import "./style.css";
import { Flex } from "../../General";

export interface ICheckboxInputProps extends Omit<CheckboxProps, "onChange"> {
  withFormItem?: FormItemProps;
  prefix?: ReactNode;
  suffix?: ReactNode;
  message?: ReactNode;
  onChange?: (value: boolean) => void;
}

function CheckboxInputBase({ withFormItem, ...props }: ICheckboxInputProps) {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Flex className="flex-col items-start gap-2">
      <Flex className="gap-2">
        {props.prefix}
        <Checkbox
          {...props}
          checked={value}
          onChange={(e) => {
            if (!props.indeterminate) {
              setValue(e.target.checked);
              if (props.onChange) props.onChange(e.target.checked);
            }
          }}
        />
        {props.suffix}
      </Flex>
      <Flex className="gap-2 text-@text-light">
        {props.prefix && (
          <div
            style={{
              visibility: "hidden",
            }}
          >
            {props.prefix}
          </div>
        )}
        {props.message}
      </Flex>
    </Flex>
  );
}

function CheckboxInput({ withFormItem, ...props }: ICheckboxInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <CheckboxInputBase {...props} />
    </FormItem>
  );
}
export type { CheckboxOptionType as CheckboxInputOptionType };

export { CheckboxInput };
