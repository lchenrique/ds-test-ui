import { ReactElement } from "react";
import { isArray } from "util";
import { IDynamicDataColumn } from "../../../../interfaces";
import { BaseColumn } from "./BaseColumn";

export class HiddenColumn extends BaseColumn implements IDynamicDataColumn {
  public key: string;
  public load?: string[];
  public hideOnExport?: boolean;
  public filterKey?: string;
  public exportRender?: (data: any) => string;
  public isHidden: boolean;
  public isHiddenOnOptions: boolean;

  constructor(_key: string | string[], _primary = false, title?: ReactElement) {
    super();
    if (isArray(_key)) {
      this.load = _key;
      this.key = _key[0];
    } else {
      this.key = _key;
    }
    this.title = title;

    this.isHidden = true;
    this.isHiddenOnOptions = false;
  }

  public setFilterKey(_key: string) {
    this.filterKey = _key;
    return this;
  }

  public setExport(show: boolean, _render: (data: any) => any) {
    this.hideOnExport = !show;
    this.isHiddenOnOptions = !show;
    this.exportRender = _render;

    return this;
  }
}
