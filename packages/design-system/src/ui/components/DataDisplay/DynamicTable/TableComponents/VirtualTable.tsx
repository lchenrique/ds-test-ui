import { ITableBaseProps } from "@/ui/components/DataDisplay/DynamicTable/TableComponents/TableBase";
import { Table } from "antd";
import React from "react";

const VirtualTable = ({ data, columns, onSort, ...props }: ITableBaseProps) => {
  const tblRef: Parameters<typeof Table>[0]["ref"] = React.useRef(null);
  const DATA = React.useMemo(() => data, [data]);

  return (
    <Table
      {...props}
      virtual
      showSorterTooltip={false}
      columns={columns as any[]}
      scroll={{ x: 2000, y: 4000 }}
      rowKey="id"
      dataSource={DATA}
      pagination={false}
      ref={tblRef}
      // onChange={(p, f, s) => {
      // 	onSort && onSort(s)
      // }}
    />
  );
};

export { VirtualTable };
