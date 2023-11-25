import { Empty } from "antd";
import Table from "rc-table";
import { useCallback, useMemo, useState } from "react";
import { cn } from "../../../../lib/utils";
import { Spinner } from "../../../Feedback/Spinner";
import { Flex } from "../../../General";
import {
  ITableHeaderCellProps,
  TSorter,
  TableHeaderCell,
} from "./TableHeaderCell";

type TTable = Parameters<typeof Table>[0];

export interface ITableBaseProps extends TTable {
  onSort?: ITableHeaderCellProps["onSort"];
  isLoading?: boolean;
  wrapperClassName?: string;
}

export const TableBase = ({
  columns,
  data,
  onSort,
  isLoading,
  wrapperClassName,
  ...props
}: ITableBaseProps) => {
  const [sort, setSort] = useState<any>();
  const DATA = data || [];

  const onHandleSort = useCallback(
    (sorter: TSorter) => {
      setSort(sorter);
      onSort && onSort(sorter);
    },
    [DATA],
  );

  const memoizedColumns = useMemo(
    () =>
      columns?.map((column: any) => ({
        ...column,
        render: column && column?.render ? column.render : undefined,
      })),
    [columns],
  );

  return (
    <div className={cn("relative", wrapperClassName)}>
      <Spinner isLoading={isLoading}>
        <div
          className={cn(
            "relative w-full  min-h-[200px]",
            DATA.length > 0 ? "" : "empty",
          )}
        >
          <Table
            columns={memoizedColumns?.concat([])}
            data={DATA}
            rowClassName={`ado-table-body-cell`}
            emptyText={() => <></>}
            components={{
              header: {
                wrapper: ({ className, ...props }: any) => (
                  <thead
                    className={`bg-@surface-light text-@text-light`}
                    {...props}
                  />
                ),
                // cell: TableHeaderCell,
                row: ({ className, ...props }: any) => {
                  return (
                    <tr className="ado-table-head-row" {...props}>
                      {props.children.map((v: any) => {
                        return (
                          <TableHeaderCell order={sort} onSort={onHandleSort}>
                            {v}
                          </TableHeaderCell>
                        );
                      })}
                    </tr>
                  );
                },
              },
            }}
            rowKey={(record: any) => {
              return record?.uuid;
            }}
            {...props}
          />
          {DATA?.length === 0 && (
            <Flex
              justify="center"
              className="absolute -translate-x-1/2 -translate-y-1/2 top-[calc(50%+58px)]  left-1/2"
            >
              <Empty />
            </Flex>
          )}
        </div>
      </Spinner>
    </div>
  );
};
