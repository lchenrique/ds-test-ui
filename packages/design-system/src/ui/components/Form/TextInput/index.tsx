import { Form, FormItemProps, Input } from "antd";
import { Fragment, cloneElement } from "react";
type InputProps = Parameters<typeof Input>[0];

export interface TextInputProps extends Omit<InputProps, "prefix"> {
  withFormItem?: FormItemProps;
  prefix?: React.ReactElement;
}

function TextInput({
  withFormItem,
  prefix,
  onChange,
  ...rest
}: TextInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  const prefixNode = prefix
    ? cloneElement(prefix, { className: "prefix" })
    : null;

  return (
    <FormItem {...FormItemProps}>
      <Input
        {...rest}
        size="large"
        prefix={prefixNode}
        onChange={(e) => {
          onChange && onChange(e);
        }}
      />
    </FormItem>
  );
}

export { TextInput };
