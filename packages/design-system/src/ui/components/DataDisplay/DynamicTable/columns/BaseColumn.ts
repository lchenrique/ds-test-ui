import {
  IDynamicDataColumnFilter,
  IDynamicDataColumnOptions,
} from "../../../../interfaces";

export class BaseColumn {
  public options?: IDynamicDataColumnOptions;
  public filter?: IDynamicDataColumnFilter;
  public title: React.ReactNode;

  public setOptions(_options: IDynamicDataColumnOptions) {
    this.options = _options;

    return this;
  }

  public setFilter(_filter: IDynamicDataColumnFilter) {
    this.filter = _filter;
    this.filter.label = this.title;
    return this;
  }
}
