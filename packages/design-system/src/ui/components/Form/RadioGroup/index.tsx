import { Form, FormItemProps, Radio, RadioGroupProps } from "antd";
import { Fragment } from "react";

export interface IRadioGroupProps extends RadioGroupProps {
  withFormItem?: FormItemProps;
}

function RadioGroup({ children, withFormItem, ...props }: IRadioGroupProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <Radio.Group {...props}>{children}</Radio.Group>
    </FormItem>
  );
}

export { RadioGroup };
