import { Form, FormItemProps, theme } from "antd";
import React, { Fragment } from "react";
import CurrencyInput from "react-currency-input";

export interface MoneyInputProps {
  withFormItem?: FormItemProps;
  thousandSeparator?: string;
  decimalSeparator?: string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onChange?: (value?: number) => void;
  prefix?: React.ReactNode;
  autoFocus?: boolean;
  defaultValue?: number;
  className?: string;
}

function MoneyInput({
  addonBefore,
  addonAfter,
  withFormItem,
  prefix,
  onChange,
  defaultValue,
  className,
  ...rest
}: MoneyInputProps) {
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
        // value={defaultValue}
        {...rest}
        // className={className ? InputClassName + ' ' + className : InputClassName}
        prefix={prefix || "$ "}
        defaultValue={defaultValue}
        decimalSeparator="."
        thousandSeparator=","
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

export { MoneyInput };
