import { DatePicker as AntDatePicker, Form, FormItemProps } from "antd";
import { DatePickerProps } from "antd/lib/date-picker";
import dayjs from "dayjs";
import { Fragment } from "react";
import { DATE_FORMAT } from "../../../config/default";

type DatePickerInputProps = DatePickerProps & {
  withFormItem?: FormItemProps;
};

function DatePickerInput({
  withFormItem,
  value,
  ...rest
}: DatePickerInputProps) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <AntDatePicker
        size="large"
        format={DATE_FORMAT}
        {...rest}
        value={value && dayjs(value)}
      />
    </FormItem>
  );
}
export { DatePickerInput };
