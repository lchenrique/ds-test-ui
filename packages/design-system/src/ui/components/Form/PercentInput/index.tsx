import { Form, FormItemProps, theme } from "antd";
import React, { Fragment } from "react";
import CurrencyInput from "react-currency-input";

export interface PercentInputProps {
  withFormItem?: FormItemProps;
  thousandSeparator?: string;
  decimalSeparator?: string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onChange?: (value?: number) => void;
  suffix?: React.ReactNode;
  autoFocus?: boolean;
  className?: string;
}

function PercentInput({
  addonBefore,
  addonAfter,
  withFormItem,
  suffix,
  onChange,
  className,
  ...rest
}: PercentInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};
  const { useToken } = theme;

  const { token } = useToken();

  const valueToMultiply = Number(String(token.controlHeight).charAt(0));
  const padding = Math.floor((token.controlHeight * valueToMultiply) / 20);
  const style = {
    paddingTop: padding,
    paddingBottom: padding,
  };
  return (
    <FormItem {...FormItemProps}>
      <CurrencyInput
        {...rest}
        // className={className ? InputClassName + ' ' + className : InputClassName}
        suffix={suffix || " %"}
        decimalSeparator="."
        thousandSeparator=""
        allowNegative
        onChangeEvent={(event: any, maskedvalue: any, floatvalue: any) => {
          if (onChange) {
            onChange(floatvalue);
          }
        }}
        style={style}
      />
    </FormItem>
  );
}

export { PercentInput };
