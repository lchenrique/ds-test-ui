import { MenuOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React, { forwardRef, Ref, useEffect, useState } from "react";
import type { SortableContainerProps, SortEnd } from "react-sortable-hoc";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";

function arrayMoveMutable(array: any[], fromIndex: number, toIndex: number) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
}

function arrayMoveImmutable(array: any[], fromIndex: number, toIndex: number) {
  array = [...array];
  arrayMoveMutable(array, fromIndex, toIndex);
  return array;
}

const DragHandle: any = SortableHandle(() => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
));

const SortableItem: any = SortableElement(
  (props: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />,
);
const SortableBody: any = SortableContainer(
  (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
);

function SorteableTableBase(
  {
    dataSource: data,
    columns,
    onChange,
    pagination,
    ...rest
  }: Parameters<typeof Table>[0],
  ref: Ref<any>,
) {
  const [dataSource, setDataSource] = useState<any>(data);

  useEffect(() => {
    setDataSource(
      data
        ?.map((item: any, i) => ({ ...item, index: i }))
        .sort((a, b) => a.index - b.index),
    );
  }, [data]);

  const onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    if (oldIndex !== newIndex) {
      const newData: any = arrayMoveImmutable(
        dataSource.slice(),
        oldIndex,
        newIndex,
      )
        .filter((el: unknown) => !!el)
        .map((el: any, i) => ({ ...el, index: i }));
      setDataSource(newData);

      onChange && onChange(null as any, null as any, null as any, newData);
      // onChange && onChange();
    }
  };

  const DraggableContainer = (props: SortableContainerProps) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow: React.FC<any> = ({ ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x: any) => x.index === restProps["data-row-key"],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  columns?.unshift({
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  });

  return (
    <Table
      {...rest}
      ref={ref}
      onChange={(pagination, filters, sorter) => {
        onChange && onChange(pagination, filters, sorter, dataSource);
      }}
      pagination={false}
      dataSource={
        dataSource?.map((v: any, i: number) => ({
          ...v,
          index: v?.position || i,
        })) || []
      }
      columns={columns}
      rowKey={"index"}
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  );
}

const SorteableTable = forwardRef(SorteableTableBase) as any;

export { SorteableTable };
