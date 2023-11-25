import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IDynamicDataColumn } from "../../../../interfaces";
import { actionColumn } from "./ActionColumn";
export interface IColumnDef<T> extends IDynamicDataColumn<T> {
  mobileIcon?: IconProp;
  isVisible?: boolean | ((data: T) => boolean);
}

export type RowData = unknown | object | any[];

export type ColumnHelper<T extends RowData> = {
  set: typeof column<T>;
  action: typeof actionColumn<T>;
};

export const columnHelper = {
  set: column,
  action: actionColumn,
};

export function column<T = any>(
  title: React.ReactNode,
  config?: IColumnDef<T>,
): IDynamicDataColumn {
  return {
    isVisible: true,
    title,
    filter: config?.filter,
    ...config,
    render: (value, data: T) => config?.render && config?.render(value, data),
    shouldCellUpdate: (record, prevRecord) => !shallowEqual(record, prevRecord),
  };
}

export function createColumn<T extends RowData>(): ColumnHelper<T> {
  return columnHelper;
}

function shallowEqual(objA: any, objB: any) {
  if (objA === objB) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}
