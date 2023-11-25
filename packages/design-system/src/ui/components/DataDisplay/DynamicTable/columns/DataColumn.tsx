import React from "react";
import { IDynamicDataColumn } from "../../../../interfaces";
import { BaseColumn } from "./BaseColumn";
import { ColumnGroup } from "./ColumnGroup";

export class DataColumn<T> extends BaseColumn implements IDynamicDataColumn {
  public key: string;
  public child?: { title: React.ReactNode };
  public filterKey?: string | string[] = "";
  public sorterKey?: string;
  public load?: string[];
  public render?: (data: T) => React.ReactNode;
  public hideOnExport?: boolean;
  public exportRender?: (data: any) => string;
  public primary: boolean;
  public isHidden: boolean;
  public isVisible: boolean;
  public isHiddenOnOptions: boolean;
  public group?: ColumnGroup;
  public sorterCallBack?: (sorter: string) => string[];

  constructor(
    _title: React.ReactNode,
    _key: string | string[],
    _primary = false,
    _isHidden = false,
    _isHiddenOnOptions = false,
  ) {
    super();
    if (Array.isArray(_key)) {
      this.load = _key;
      this.key = _key[0];
    } else {
      this.key = _key;
    }

    this.title = _title;

    this.primary = _primary;
    this.isHidden = _isHidden;
    this.isVisible = true;
    this.isHiddenOnOptions = _isHiddenOnOptions;
  }

  public setFilterKey(custom_key: string | string[]) {
    this.filterKey = custom_key;

    return this;
  }

  public setRender(_render: (data: T) => React.ReactNode) {
    this.render = _render;
    return this;
  }

  public setExport(show: boolean, _render: (data: any) => any) {
    this.hideOnExport = this.isHidden || !show;
    this.exportRender = _render;
    return this;
  }

  public setGroup(_group: ColumnGroup) {
    this.group = _group;

    return this;
  }

  public setSort(serterKey: string) {
    this.sorterKey = serterKey;

    return this;
  }
}
