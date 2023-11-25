import type { FormItemProps } from "antd";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";
import { useCallback, useEffect, useState } from "react";
import { filterOptionsSearch } from "../../../utils/filteroOptionsSearch";
import { searchKeyup } from "../../../utils/searchKeyup";
import { SelectInput } from "../SelectInput";

export type SelectInputProps = Parameters<typeof SelectInput>[0];

export interface ISelectInputSearchProps extends SelectInputProps {
  ApiService: { load: (url: string, options: any) => Promise<any> };
  url: string;
  valuekey: string;
  withFormItem?: FormItemProps<any>;
  defaultValue?: string;
  attributes?: string[];
  label?: string;
  description?: string;
  filter?: any;
  join?: any[];
  disabled?: boolean;
  type?: "text" | "number";
  limit?: number;
  orderBy?: {
    sort: "asc" | "desc";
    attribute: string;
  };
  fullData?: boolean;
  onLoad?: (data: (BaseOptionType | DefaultOptionType)[]) => void;
}

let isMounted = false;

export function SelectInputSearch({
  ApiService,
  url,
  withFormItem,
  defaultValue,
  attributes,
  description,
  label,
  filter,
  join,
  valuekey,
  disabled,
  type = "text",
  limit,
  orderBy,
  fullData,
  value,
  onLoad,
  ...rest
}: ISelectInputSearchProps) {
  const [defaultValueState, setDefaultValueState] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, [defaultValueState, limit]);

  const load = useCallback(
    async (search?: string) => {
      setIsLoading(true);
      const select = attributes
        ? [label ? label : undefined, valuekey, ...attributes]
        : label
          ? [label, valuekey]
          : [valuekey];
      let _where = {} as any;
      if (search) {
        _where[label || "name"] = ["ilike", search];
      }
      if (defaultValueState) {
        _where.uuid = defaultValueState;
      }

      if (filter) {
        Object.assign(_where, { ...filter });
      }

      if (description) {
        select.push(description);
      }
      const _data = (
        await ApiService.load(url, {
          _select: select,
          _where,
          _join: join,
          _options: {
            limit: limit,
            order_by: orderBy,
          },
        })
      )?.result;

      if (_data) {
        const values = _data?.map((v: any) => {
          const hasDescription =
            description && v[description] ? ` ${v[description]}` : "";

          return {
            value: type === "number" ? Number(v[valuekey]) : v[valuekey],
            label:
              ((label && v[label]) || v.name || v[valuekey]) + hasDescription,
            ...v,
          };
        });

        if (onLoad) {
          onLoad(values);
        }

        setData(values);
      }

      setIsLoading(false);
      isMounted = true;
    },
    [defaultValueState, limit],
  );

  return (
    <SelectInput
      {...rest}
      options={data.map((v) => ({ value: v.value, label: v.label }))}
      disabled={disabled}
      loading={isLoading}
      filterOption={filterOptionsSearch}
      onKeyUp={(e: any) => searchKeyup(e, load)}
      onDropdownVisibleChange={(open) => {
        setDefaultValueState("");
        if (open) load();
      }}
      onSelect={(v) =>
        rest?.onSelect &&
        rest?.onSelect(
          fullData && data.length ? data.find((item) => item?.value === v) : v,
          {},
        )
      }
      popupClassName={rest.className}
      showSearch
      withFormItem={withFormItem}
      data-cy={withFormItem?.name}
      labelInValue
    />
  );
}
