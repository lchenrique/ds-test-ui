import { Form } from "antd";
import { Store, StoreValue } from "antd/es/form/interface";
import { FormInstance } from "antd/lib";
import { useEffect } from "react";
import { useDynamicTable } from "../../useTable";
import { IAdvancedFilterProps } from "./AdvancedFilters";

let labels: any[] = [];
let newLabels: any[] = [];

function FilterActions(props: IAdvancedFilterProps) {
  const { setFilter, setOptions, filters, options } = useDynamicTable();

  const [form]: [item: FormInstance] = Form.useForm();

  const handleSubmit = (values: any) => {
    const arr = [...new Set(newLabels)];

    setOptions(props.id, arr);

    setFilter(props.id, values);
  };

  useEffect(() => {
    if (filters[props.id]) {
      for (let key in filters[props.id]) {
        let value = filters[props.id][key];
        if (!value) {
          form.resetFields([key]);
        }
      }
    }
  }, [filters]);

  useEffect(() => {
    if (options[props.id]) {
      for (let key in options[props.id]) {
        let value = options[props.id][key];
        if (!value) {
          setOptions(props.id, [
            ...new Set(newLabels.filter((v) => v.value !== key)),
          ]);
        }
      }
    }
  }, [options]);

  return (
    <Form
      form={form}
      onValuesChange={(value: any, allValues: any) => {
        handleSubmit(value);
      }}
      className="flex items-center gap-spacing-xs  justify-between flex-nowrap  flex-row"
    >
      {props?.filters &&
        props?.filters?.map(({ title, name, component, normalize }) => {
          labels.push({ name, label: title });

          const HasFormItem =
            typeof component === "function" ? "div" : Form.Item;
          const normalizeFunction = (
            value: StoreValue,
            prevValue: StoreValue,
            allValues: Store,
          ) => {
            const values =
              (normalize && normalize(value, prevValue, allValues)) || value;

            labels.forEach((v) => {
              if (v.name === name) {
                newLabels.push({ ...v, value: values?.label || values });
              }
            });

            return values?.value ?? values;
          };
          const formItemProps =
            typeof component !== "function"
              ? {
                  normalize: normalizeFunction,
                  name,
                  className: "w-full",
                  noStyle: true,
                }
              : undefined;

          return (
            <HasFormItem {...formItemProps}>
              {component &&
                (typeof component === "function"
                  ? component(name, normalizeFunction)
                  : component)}
            </HasFormItem>
          );
        })}
    </Form>
  );
}

export { FilterActions };
