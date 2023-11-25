import { Form, FormItemProps, Input } from "antd";
import { PasswordProps } from "antd/lib/input/Password";
import { cloneElement, Fragment } from "react";

interface PasswordInputProps extends Omit<PasswordProps, "prefix"> {
  withFormItem?: FormItemProps;
  prefix?: React.ReactElement;
}
function PasswordInput({
  withFormItem,
  prefix,
  onChange,
  ...rest
}: PasswordInputProps) {
  const form = Form.useFormInstance();
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  const prefixNode = prefix
    ? cloneElement(prefix, { className: "prefix" })
    : null;

  return (
    <FormItem {...FormItemProps}>
      <Input.Password
        {...rest}
        prefix={prefixNode}
        onChange={(e) => {
          onChange && onChange(e);
        }}
      />
    </FormItem>
  );
}

export { PasswordInput };
