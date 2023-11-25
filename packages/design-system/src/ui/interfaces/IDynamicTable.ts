import { DataSourceItemObject } from "antd/lib/auto-complete";
import { GetRowKey, TableRowSelection } from "antd/lib/table/interface";
import { ReactNode } from "react";
import { PermissionsList } from "../archive";
import { NormalizeType } from "../components/DataDisplay/DynamicTable/DynamicFilter/FilterComponents/AdvancedFilters";
import { ColumnGroup } from "../components/DataDisplay/DynamicTable/columns";

export type TSearchFilter = {
  placeholder: string;
  name: string;
  normalize?: NormalizeType;
};

export interface IParams {
  _select: string[];
  _options: {
    limit: number;
    offset: number;
    order_by?: any;
    page: number;
  };
  _where: Object;
  _join: any[];
}
export interface FiltersOrMetaOrRelations {}

interface IData {
  result: any[];
  summary?: {
    limit: number;
    offset: number;
    result: any[];
    total: number;
    hasMore: boolean;
  };
}
export interface IDynamicTable extends DynamicTableProps {
  ApiService: {
    load: (url: string, params?: IParams) => Promise<IData>;
  };
  filterLabel?: string;
  isSortable?: boolean;
  hiddenAciveFilter?: boolean;
  configMenu?: boolean;
  searchBar?: boolean;
  activeKey?: string;
  customElement?: ReactNode;
  id?: string;
}

export interface IDynamicDataComputed {
  query?: boolean;
  field: string;
  method: "count" | "sum";
  alias: string;
  filters?: any;
}

export interface IDynamicDataColumnOptions {
  permission?: PermissionsList;
  width?: string | number;
  ellipsis?: boolean;
  className?: string;
  fixed?: "left" | "right";
  sorter?: boolean;
  align?: "left" | "right" | "center";
}

export interface IDynamicTableRef {
  reset: () => void;
  reload: () => void;
  active?: boolean;
}

export interface IDynamicDataColumnFilter {
  label: React.ReactNode;
  primary?: boolean;
  type?:
    | "text"
    | "select"
    | "selectRequest"
    | "number"
    | "date"
    | "month"
    | "money"
    | "cpf"
    | "cnpj"
    | "cpf_cnpj";
  getListOptions?: (search: any) => Promise<DataSourceItemObject[]>;
  handle?: (v: any) => any;
  displayHandle?: (v: any) => any;
  wrapper?: (v: string) => string;
}

export interface IDynamicDataColumn<T = any> {
  filter?: IDynamicDataColumnFilter;
  title?: React.ReactNode;
  filterKey?: string | string[];
  key?: string;
  load?: string[];
  render?: (value: T[keyof T], data: T) => ReactNode;
  options?: IDynamicDataColumnOptions;
  primary?: boolean;
  hideOnExport?: boolean;
  exportRender?: (data: T) => string;
  mobileRender?: (data: T) => React.ReactNode;
  responsive?: any[];
  isHidden?: boolean;
  group?: ColumnGroup;
  sorterCallBack?: (sorter: string) => string[];
  isVisible?: boolean | ((data: T) => boolean);
  sorterKey?: string;
  shouldCellUpdate?: (record: T, prevRecord: any) => boolean;
}
export interface DynamicTableProps {
  bordered?: boolean;
  url: string;
  columns: IDynamicDataColumn[];
  load?: string[];
  where?: any;
  meta?: any;
  limit?: number;
  defaultPageSize?: number;
  scroll?: {
    x?: string | number | boolean;
    y?: string | number | boolean;
  };
  orderBy?: string[];
  isLoading?: boolean;
  skeletonLoading?: boolean;
  defaultSort?: string;
  onRow?: any;
  drag?: (data: any, index: number) => boolean;
  onDrag?: (data: any, index: number) => void;
  onDragEnd?: (data: any, index: number) => void;
  className?: string;
  rowSelection?: TableRowSelection<any>;
  rowSelect?: TableRowSelection<any>;
  rowClassName?: (r: any, i: number) => string;
  expandable?: {
    expandedRowRender?: (data: any) => React.ReactNode;
  };
  onLoad?: (data?: any) => void;
  components?: any;
  exportFilename?: string;
  rowKey?: string | GetRowKey<any>;
  computed?: IDynamicDataComputed[];
  join?: any[];
  noPaginationSize?: boolean;
  noPagination?: boolean;
  onChange?: ({
    pagination,
    filters,
    sorter,
    extra,
  }: {
    pagination: any;
    filters: any;
    sorter: any;
    extra: any;
  }) => void;
  indexReference?: any;
  columnsOrder?: any[];
  onOpenConfig?: () => void;
  hiddenItems?: string[] | number[];
  noOrder?: boolean;
  sorteable?: boolean;
  noExpand?: boolean;
  noOptions?: boolean;
  name?: string;
}

export interface IOrderBy {
  attribute: string;
  sort: string;
}
