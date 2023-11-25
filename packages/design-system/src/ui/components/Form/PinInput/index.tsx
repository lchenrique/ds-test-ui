import { Form, FormItemProps } from "antd";
import { Fragment } from "react";
import PinField, { PinFieldProps } from "react-pin-field";

export interface IPinFielProps extends PinFieldProps {
  withFormItem?: FormItemProps;
}

export function PinInput({
  withFormItem,
  validate,
  length = 4,
  ...rest
}: IPinFielProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  const twClassName = {
    css: `      
		box-border
		text-@text-plain
		leading-[1.5714285714285714]
		relative inline-block w-16 h-16
		min-w-0 bg-white bg-none border
		transition-all duration-200 m-0 px-[11px] py-1 rounded-md border-solid border-s-@stroke-brand-secondary
		hover:border-@primary-600
		focus:shadow-[0_0_0_2px_rgb(5_145_255_/_10%)] focus:border-@primary-600 focus:outline-0
		focus-within:shadow-[0_0_0_2px_rgb(5_145_255_/_10%)] focus-within:border-@primary-600 focus-within:outline-0
		text-center text-lg
	  `,
  };

  return (
    <FormItem {...FormItemProps}>
      <div className="flex items-center gap-2">
        <PinField
          {...rest}
          className={twClassName.css}
          validate={validate || /[0-9]/}
          length={length}
        />
      </div>
    </FormItem>
  );
}
