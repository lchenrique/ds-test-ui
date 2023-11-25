import { ReactNode } from "react";
import { actionColumn } from "./ActionColumn";
import { DataColumn } from "./DataColumn";

interface IColumns<T> {
  DataColumn: {
    new (
      _title: ReactNode,
      _key: keyof T | Array<keyof T | ""> | "",
      _primary?: boolean,
      _isHidden?: boolean,
      _isHiddenOnOptions?: boolean,
    ): DataColumn<T>;
    // prototype: DataColumn<T>
  };
  ActionColumn: typeof actionColumn<T>;
}

export function Columns<T = any>(
  cols: (
    col: IColumns<T>,
  ) => (Partial<DataColumn<T>> | Partial<typeof actionColumn<T>>)[],
) {
  return [...cols({ DataColumn, ActionColumn: actionColumn } as any)];
}
