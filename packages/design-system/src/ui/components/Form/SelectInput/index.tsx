import { Form, FormItemProps, Select } from "antd";
import { Fragment, Ref, forwardRef } from "react";
import { Icon } from "../../General";

type SelectProps = Parameters<typeof Select>[0];

export interface ISelectInputProps extends SelectProps {
  withFormItem?: FormItemProps;
}

function SelectInputComponent(
  { withFormItem, className, ...rest }: ISelectInputProps,
  ref: Ref<any>,
) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <Select
        {...rest}
        ref={ref}
        className="w-full"
        suffixIcon={
          <Icon fill="icon-primary" name="chevron-down" size="spacing-s" />
        }
      />
    </FormItem>
  );
}

export const SelectInput = forwardRef(SelectInputComponent);
