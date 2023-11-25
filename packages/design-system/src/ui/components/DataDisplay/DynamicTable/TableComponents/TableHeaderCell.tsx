import { useState } from "react";
import { useUpdateEffect } from "usehooks-ts";
import { cn } from "../../../../lib/utils";
import { Flex } from "../../../General";
import "./style.css";

export type TOrder = "ascend" | "descend" | null;

export type TSorter = {
  column: any;
  columnKey: string;
  order?: TOrder;
};

export interface ITableHeaderCellProps {
  order?: TSorter;
  colKey?: string[];
  onSort?: (sorter: TSorter) => void;
  className?: string;
  children: any;
}
export const TableHeaderCell = ({
  className,
  children,
  onSort,
  order,
  colKey,
  ...props
}: ITableHeaderCellProps) => {
  let sortString = "";
  const [sort, setSort] = useState<TOrder>();

  const handleSort = () => {
    if (order && order.columnKey === children.key && order.order === "ascend") {
      setSort("descend");
    } else if (
      order &&
      order.columnKey === children.key &&
      order.order === "descend"
    ) {
      setSort(null);
    } else {
      setSort("ascend");
    }
  };

  if (order && order.columnKey === children.key && order.order === "ascend") {
    sortString = "ascend";
  } else if (
    order &&
    order.columnKey === children.key &&
    order.order === "descend"
  ) {
    sortString = "descend";
  } else {
    sortString = "";
  }

  useUpdateEffect(() => {
    onSort &&
      onSort({
        column: children,
        columnKey: children.key,
        order: sort,
      });
  }, [sort]);

  const SortIcon = children?.props?.column?.sorter && (
    <span
      className={cn(
        "ado-table-column-sorter-inner",
        `${sortString ? `sorter-${sortString}` : ""}`,
      )}
    >
      <svg
        className={cn("ado-table-column-sorter-up triangle")}
        xmlns="http://www.w3.org/2000/svg"
        height="8px"
        width="12px"
        viewBox="0 0 320 212"
      >
        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
      </svg>
      <svg
        className="ado-table-column-sorter-down rotate-180 triangle"
        xmlns="http://www.w3.org/2000/svg"
        height="8px"
        width="12px"
        viewBox="0 0 320 212"
      >
        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
      </svg>
    </span>
  );

  console.log("children", children);
  return (
    <td
      onClick={SortIcon ? handleSort : undefined}
      className={`${className} ado-table-cell `}
      {...props}
    >
      <Flex>
        {children && children} {SortIcon}
      </Flex>
    </td>
  );
};
