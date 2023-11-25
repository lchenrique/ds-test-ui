import { theme } from "@adopets/tokens";
import { Select as AntSelect, SelectProps, Tag } from "antd";
import { Loader2 } from "lucide-react";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import * as React from "react";
import { Icon } from "../Icon";
import CustomSelectOption, { SelectOptionProps } from "./SelectOption";

export interface ISelectProps extends Omit<SelectProps, "disabled" | "icon"> {
  disabled?: boolean | null | undefined;
  loading?: boolean;
  options?: SelectOptionProps[] | undefined;
}

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3, marginTop: 4, marginBottom: 4 }}
      color={theme.colors("surface-disabled-light")}
    >
      <span className="text-@text-light text-base">{label}</span>
    </Tag>
  );
};

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  (
    { options, mode, disabled, loading, children, size = "large", ...props },
    ref,
  ) => {
    const Comp = AntSelect;
    const [selected, setSelected] = React.useState<any>([]);
    const [open, setOpen] = React.useState(false);
    //const [radioVal, setRadioVal] = React.useState(false);

    React.useEffect(() => {
      setSelected(props.value);
    }, [props.value]);

    const objects = options;

    return (
      <Comp
        {...props}
        loading={loading}
        data-disabled={disabled}
        disabled={disabled || loading}
        tagRender={tagRender}
        mode={mode}
        value={selected}
        open={open}
        size={size}
        onDropdownVisibleChange={(visible) => setOpen(visible)}
        onChange={(newValue: string[], option) => {
          setSelected(newValue);
          if (props.onChange) props.onChange(newValue, option);
        }}
        optionLabelProp="label"
        labelInValue
        suffixIcon={
          loading ? (
            <Loader2 size="17" className="animate-spin" />
          ) : (
            <Icon
              name="chevron-down"
              size="spacing-s"
              fill={disabled ? "icon-primary-disabled" : "surface-primary"}
            />
          )
        }
        dropdownRender={(menu) =>
          mode === "multiple" ? (
            <div>
              <div className="flex flex-col mt-spacing-xs">
                <div className="flex flex-row">
                  <div
                    className="text-@text-link flex flex-row items-center mt-auto p-padding-xxs cursor-pointer"
                    onClick={() => {
                      setSelected(objects);
                      setOpen(false);
                    }}
                  >
                    <Icon
                      name="circle-plus"
                      size="spacing-s"
                      className="mr-spacing-xxs"
                      fill="text-link"
                    />{" "}
                    Select All
                  </div>
                  <div
                    className="text-@text-link ml-spacing-s flex flex-row items-center mt-auto p-padding-xxs cursor-pointer"
                    onClick={() => setSelected([])}
                  >
                    <Icon
                      name="trash"
                      size="spacing-s"
                      className="mr-spacing-xxs"
                      fill="text-link"
                    />{" "}
                    Clear
                  </div>
                </div>
                {/* RADIO GROUP <div className="flsex flex-row p-padding-xxs mt-spacing-xs mb-spacing-xs">
                            <Radio.Group onChange={(e) => setRadioVal(e.target.value)} value={radioVal}>
                                <Radio value={1}>Option 1</Radio>
                                <Radio value={2}>Option 2</Radio>
                                <Radio value={3}>Option 3</Radio>
                            </Radio.Group>
                        </div>*/}
              </div>
              {menu}
            </div>
          ) : (
            menu
          )
        }
      >
        {objects?.map((item) => {
          return (
            <Comp.Option key={item.value} value={item.value} label={item.label}>
              <CustomSelectOption
                values={selected}
                label={item.label}
                type={item.type as any}
                suffix={item.suffix}
                description={item.description}
                descriptionIcon={item.descriptionIcon}
                labelIcon={item.labelIcon}
              />
            </Comp.Option>
          );
        })}
      </Comp>
    );
  },
);

Select.displayName = "Select";

export { Select };
export type { SelectOptionProps };
