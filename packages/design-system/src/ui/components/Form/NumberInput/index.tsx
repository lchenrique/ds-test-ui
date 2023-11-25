import { Form, FormItemProps, Input } from "antd";
import { Fragment } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface MaskInputProps extends Omit<NumericFormatProps, "size" | "onChange"> {
  withFormItem?: FormItemProps;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onChange?: (value: number | undefined) => void;
}

function NumberInput({
  addonBefore,
  addonAfter,
  withFormItem,
  prefix,
  onChange,
  ...rest
}: MaskInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <NumericFormat
        {...rest}
        customInput={Input}
        addonBefore={prefix}
        onValueChange={({ floatValue }) => {
          if (onChange) {
            onChange(floatValue);
          }
        }}
      />
    </FormItem>
  );
}

export { NumberInput };
