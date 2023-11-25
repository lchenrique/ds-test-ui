import { Form, FormItemProps, Input } from "antd";
import { Fragment } from "react";
import { PatternFormat, PatternFormatProps } from "react-number-format";

interface MaskInputProps
  extends Omit<PatternFormatProps, "size" | "name" | "onChange"> {
  withFormItem?: FormItemProps;
  valueType?: "number" | "text" | "mask";
  thousandSeparator?: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  format: string;
  onChange?: (value?: number | string) => void;
  inputRef?: any;
}

const NumberFormatInput = ({
  defaultValue,
  valueType = "number",
  thousandSeparator = true,
  addonBefore,
  addonAfter,
  onChange,
  className,
  withFormItem,
  inputRef,
  ...rest
}: MaskInputProps) => {
  return (
    <PatternFormat
      {...rest}
      getInputRef={inputRef}
      customInput={Input}
      // className={InputClassName + ' ' + className}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      defaultValue={defaultValue}
      onValueChange={({ value, floatValue, formattedValue }, sourceInfo) => {
        if (valueType === "number") {
          onChange && onChange(floatValue);
        }
        if (valueType === "text") {
          onChange && onChange(value);
        }
        if (valueType === "mask") {
          onChange && onChange(formattedValue);
        }
      }}
      onChange={(e) => {}}
    />
  );
};

function MaskInput({ withFormItem, ...rest }: MaskInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <NumberFormatInput {...rest} />
    </FormItem>
  );
}

export { MaskInput };
