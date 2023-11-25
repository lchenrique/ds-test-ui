import { Form, FormItemProps, Radio, RadioProps } from "antd";
import { Fragment, ReactNode, useEffect, useState } from "react";
import "./style.css";
import { Flex } from "../../General";

export interface IRadioInputProps extends Omit<RadioProps, "onChange"> {
  withFormItem?: FormItemProps;
  prefix?: ReactNode;
  suffix?: ReactNode;
  message?: ReactNode;
  onChange?: (value: boolean) => void;
}

function RadioInputBase({ withFormItem, ...props }: IRadioInputProps) {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <Flex className="flex-col items-start gap-2">
      <Flex className="gap-2">
        {props.prefix}
        <Radio
          {...props}
          checked={value}
          onChange={(e) => {
            setValue(e.target.checked);
            //if (props.onChange) props.onChange(e.target.checked)
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

function RadioInput({ withFormItem, ...props }: IRadioInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <RadioInputBase {...props} />
    </FormItem>
  );
}
//export type { RadioOptionType as RadioInputOptionType}

export { RadioInput };
