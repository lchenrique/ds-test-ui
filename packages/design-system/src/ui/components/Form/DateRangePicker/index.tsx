import { DatePicker as AntDatePicker, Form, FormItemProps } from "antd";
import { RangePickerProps } from "antd/lib/date-picker";
import { forwardRef, Fragment, LegacyRef } from "react";
import { DATE_FORMAT } from "../../../config/default";

type DateRangePickerProps = RangePickerProps & {
  withFormItem?: FormItemProps;
};

function DateRangePickerBase(
  { withFormItem, value, ...rest }: DateRangePickerProps,
  ref: LegacyRef<any>,
) {
  const FormItem = withFormItem ? Form.Item : Fragment;
  const FormItemProps = withFormItem ? withFormItem : {};

  return (
    <FormItem {...FormItemProps}>
      <AntDatePicker.RangePicker ref={ref} format={DATE_FORMAT} {...rest} />
    </FormItem>
  );
}

export const DateRangePicker = forwardRef(DateRangePickerBase);
