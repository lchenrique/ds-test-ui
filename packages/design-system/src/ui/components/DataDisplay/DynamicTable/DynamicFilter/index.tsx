import { padding } from "@adopets/tokens";
import { FormInstance } from "antd/lib";
import { useElementSize } from "usehooks-ts";
import { Form, Select, TSearchFilter } from "../../../..";
import { cn } from "../../../../lib/utils";
import { Flex } from "../../../General/Flex";
import Tools from "../Tools";
import { useDynamicTable } from "../useTable";
import { ActionFilter } from "./FilterComponents";
import { ActiveFilters } from "./FilterComponents/ActiveFilters";
import {
  AdvancedFilters,
  IAdvancedFilterProps,
} from "./FilterComponents/AdvancedFilters";
import { FilterActions } from "./FilterComponents/FilterActions";
import { SearchInputFilter } from "./FilterComponents/SearchInputFilter";

export type FilterAction = { order: number; name: string };
export interface IFilterProps extends Partial<IAdvancedFilterProps> {
  id: any;
  search: TSearchFilter;
  customElement?: any;
  hideActiveFilter?: boolean;
  actions?: { options: Parameters<typeof Select>[0]["options"] };
  type?: "primary" | "secondary";
  inlineFilter?: IAdvancedFilterProps["filters"];
}

export function Filter({
  id,
  customElement,
  actions,
  inlineFilter,
  search,
  type = "primary",
  filters: AdvancedFiltersArr,
}: IFilterProps) {
  const [form]: [item: FormInstance] = Form.useForm();
  const a: [item: FormInstance] = Form.useWatch("search", form);
  const { setFilter, setOptions } = useDynamicTable();

  const handleSubmitValues = (values: any) => {
    const valuesNormalized =
      (search.normalize &&
        search.normalize(
          values[search.name],
          values[search.name],
          values[search.name],
        )) ||
      values;

    console.log("values", values);
    if (values) {
      setFilter(id, { [search.name]: valuesNormalized.value });

      setOptions(id, [
        {
          name: search.name,
          label: valuesNormalized?.label,
          value: values[search.name],
        },
      ]);
    }
  };

  console.log("a", a);

  const [elementRef, { width }] = useElementSize();
  const elementSize = width <= 900 && actions && actions && inlineFilter;

  return (
    <Flex
      className="flex-col items-stretch  justify-between px-padding-xxs md:px-padding-l my-spacing-xl border-@stroke-light"
      style={{
        borderBottom: type === "secondary" ? "1px solid" : "none",
        padding: type === "secondary" ? padding["padding-m"] : undefined,
      }}
    >
      <Flex
        ref={elementRef}
        className={`gap-3  w-full flex-col sm:flex-row ${
          !elementSize ? "justify-between" : " justify-end "
        }  flex-wrap`}
      >
        <Form
          form={form}
          onKeyDown={(v) => {
            if (v.key === "Enter") {
              form.submit();
            }
          }}
          className={`flex-1 w-full ${
            !elementSize ? " mr-spacing-l" : "md:mr-0"
          }  `}
          onFinish={handleSubmitValues}
        >
          <Flex className={`w-full gap-spacing-xs   flex-col sm:flex-row`}>
            <SearchInputFilter
              type={type}
              search={search}
              className={!elementSize ? "max-w-[450px]" : ""}
            />
            {AdvancedFiltersArr && AdvancedFiltersArr.length > 0 && (
              <Flex className={`gap-3 items-center flex-1 w-full `}>
                <AdvancedFilters id={id} filters={AdvancedFiltersArr} />
              </Flex>
            )}
          </Flex>
        </Form>

        <Flex
          className={cn(
            `flex items-center gap-spacing-xs justify-end  w-full sm:w-min flex-nowrap flex-col sm:flex-row`,
          )}
        >
          {inlineFilter && inlineFilter.length > 0 && (
            <FilterActions id={id} filters={inlineFilter} />
          )}
          <Flex className="gap-spacing-xs w-full sm:w-min">
            <Tools id={id} />
            {actions?.options && (
              <ActionFilter id={id} options={actions?.options} />
            )}
          </Flex>
        </Flex>

        {customElement && <>{customElement}</>}
      </Flex>

      <ActiveFilters id={id} />
    </Flex>
  );
}

Filter.displayName = "Filter";
