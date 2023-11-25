import { Checkbox, Form, FormItemProps } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { Fragment } from "react";

export interface ICheckboxGroupProps extends CheckboxGroupProps {
  withFormItem?: FormItemProps;
}

function CheckboxGroup({
  children,
  withFormItem,
  ...props
}: ICheckboxGroupProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <Checkbox.Group {...props}>{children}</Checkbox.Group>
    </FormItem>
  );
}

export { CheckboxGroup };
