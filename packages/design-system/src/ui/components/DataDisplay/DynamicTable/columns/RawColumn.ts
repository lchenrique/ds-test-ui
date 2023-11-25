import React from "react";
import { IDynamicDataColumn } from "../../../../interfaces";
import { BaseColumn } from "./BaseColumn";

export class RawColumn extends BaseColumn implements IDynamicDataColumn {
  public load: string[];
  public render?: (data: any) => React.ReactElement;
  public exportRender?: (data: any) => string;
  public hideOnExport?: boolean;
  public primary: boolean;

  constructor(_title: React.ReactElement, _load: string[], _primary = false) {
    super();
    this.title = _title;
    this.load = _load;
    this.primary = _primary;
  }

  public setRender(_render: (data: any) => React.ReactElement) {
    this.render = _render;

    return this;
  }

  public setExportRender(show: boolean, _render: (data: any) => any) {
    this.hideOnExport = !show;
    this.exportRender = _render;

    return this;
  }
}
