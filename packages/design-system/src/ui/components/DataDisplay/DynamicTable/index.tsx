import { Checkbox, Form } from "antd";
import { DotsSixVertical } from "phosphor-react";
import { Ref, forwardRef, useEffect, useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { uuid } from "../../..";
import { ICON_SIZE } from "../../../config/default";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { convertColumn } from "../../../hooks/useCreateColumns";
import {
  IDynamicDataColumn,
  IDynamicTable,
  IDynamicTableRef,
} from "../../../interfaces";
import { useTable } from "../../../services/tables";
import { Pagination } from "../../Navigation";
import { ExpandedRow } from "./ExpandedRow";
import { MobileTable } from "./MobileTable";
import { TableBase } from "./TableComponents/TableBase";
import { ColumnGroup } from "./columns";
import "./style.css";

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

const SortableItem: any = SortableElement(
  ({ value, onVisibilityChange }: any) => (
    <div className="flex justify-between bg-@soft-neutral-100 border-b z-[1031]  my-1 rounded-sm">
      <div className="flex gap-2">
        <Checkbox
          checked={value.isVisible}
          onChange={(e) => onVisibilityChange(e.target.checked, value.key)}
        />
        {value.label}
      </div>
      <DotsSixVertical size={ICON_SIZE} weight="bold" />
    </div>
  ),
);

const SortableList: any = SortableContainer(
  ({ items, onVisibilityChange }: any) => {
    return (
      <div>
        {items.map((value: any, index: number) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={value}
            onVisibilityChange={onVisibilityChange}
          />
        ))}
      </div>
    );
  },
);

let _filters = {} as any;

const DynamicTableComponent = <TModel,>(
  {
    id,
    url,
    ApiService,
    columns: propCols,
    defaultSort,
    limit,
    where,
    meta,
    computed,
    join,
    load,
    noExpand,
    bordered,
    expandable,
    filterLabel,
    isSortable,
    hiddenAciveFilter: hiddenActiveFilter,
    onChange,
    noPagination,
    noOrder,
    onLoad: onLoadData,
    configMenu = true,
    searchBar = true,
    activeKey,
    orderBy: externalOrderBy,
    customElement,
    onDragEnd,
    ...rest
  }: IDynamicTable,
  ref: Ref<IDynamicTableRef>,
) => {
  const [form] = Form.useForm();
  const [activeFilter, setActiveFilter] = useState<any>(true);
  const [gFilters, setGFilters] = useState([]);
  const [cols, setCols] = useState<any[]>([]);
  const [info, setInfo] = useState<{ page?: number; sort?: any }>({
    page: 1,
    sort: defaultSort ? defaultSort : undefined,
  });

  const [search, setSearch] = useState<any>({});
  const { md } = useBreakpoint();

  // const { setKeys, active, isLoading: isRefrashing, setFilter } = useDynamicTable()

  useEffect(() => {
    loadCols(noOrder ? null : `asc-${defaultSort}`);
  }, [propCols.length, md, defaultSort, noOrder]);

  async function loadCols(sort: any) {
    const groupsMap: {
      [index: number]: {
        group: ColumnGroup;
        columns: IDynamicDataColumn[];
      };
    } = {};

    const _columns: any[] = [];

    propCols.forEach((element) => {
      if (element?.group) {
        groupsMap[element.group.id] = groupsMap[element.group.id] || {
          group: element.group,
          columns: [],
        };

        groupsMap[element.group.id].columns.push(element);
      } else {
        convertColumn(element, _columns, noOrder ? null : [sort]);
      }
    });

    const groups = Object.values(groupsMap);

    groups.forEach((v) => {
      const _children: any = [] as any;

      v.columns.forEach((c) =>
        convertColumn(c, _children, noOrder ? null : [sort]),
      );

      _columns.push({
        title: v.group.title,
        className: v.group.title ? "title_table_group" : "table_group_no_title",
        children: _children,
      });
    });

    setCols(_columns);
  }

  const _limit = limit || search.limit || 20;

  const currentPage = search.offset
    ? Math.ceil((search.offset + 1) / _limit)
    : 1;

  const _page = info.page || currentPage || 1;

  const activeFilterProp = {};

  _filters = where ? ({ ...where } as any) : ({} as any);

  const _where = Object.assign(
    _filters,
    activeKey ? {} : { ...activeFilterProp },
  );

  const orderBy = info.sort
    ? {
        sort: info.sort,
      }
    : externalOrderBy && {
        sort: externalOrderBy,
      };

  let params = {
    _select: [] as string[],
    _options: {
      limit: _limit,
      offset: (_page - 1) * _limit,
      page: info.page && info?.page - 1,
    },
    _where: { ..._where },
    _join: join || [],
  };

  // if (id && filters[id]) {
  // 	Object.assign(params, { _filters: { ...filters[id] } })
  // }

  if (info.sort) {
    Object.assign(params._options, orderBy);
  } else {
    if (externalOrderBy)
      Object.assign(params._options, {
        sort: externalOrderBy,
      });
  }

  if (!activeKey) {
    Object.assign(params._where, { ...activeFilterProp });
  }

  if (load) {
    load.forEach((element) => {
      params._select.push(element);
    });
  }

  const hasJoin = params?._join && params?._join.length > 0;
  let colKeys: string[] = [];

  propCols.forEach((column) => {
    // Add all keys column in select prop
    if (column?.key && !column.key.includes("data_action")) {
      if (column.load && column.load?.length > 0) {
        column.load.forEach((v: any) => colKeys.push(v));
      } else {
        colKeys.push(column.key);
      }

      const _join =
        hasJoin && params?._join?.reduce((cc, acc) => Object.keys(acc), []);

      colKeys = [...new Set(colKeys)].filter((v) =>
        _join && _join?.length > 0 ? !_join.includes(v) : v,
      );

      if (hasJoin && _join && _join.includes(column.key)) {
        // params._join = params?._join?.map((v) => v)
        // console.log('after  ', params._join)
        // params._join = params?._join?.map((v) => {
        // 	if (column?.key && v[column.key] && column?.filter) {
        // 		// // let _filter = { ...joinFilters } as any
        // 		// if (id && column.key && filters[id]) {
        // 		// 	// let value =
        // 		// 	// 	filters[id][
        // 		// 	// 	column?.filterKey
        // 		// 	// 		? `${column.key}.${column?.filterKey}`
        // 		// 	// 		: (column.key as any)
        // 		// 	// 	]
        // 		// 	// let key = column.key
        // 		// 	// if (column?.filter?.handle && value) {
        // 		// 	// 	value = column?.filter?.handle(value)
        // 		// 	// }
        // 		// 	// if (column?.filter?.wrapper && key) {
        // 		// 	// 	key = column?.filter?.wrapper(key)
        // 		// 	// }
        // 		// 	// if (column?.key) {
        // 		// 	// 	_filter[key] = value
        // 		// 	// }
        // 		// 	// let filterKey: string
        // 		// 	// if (Array.isArray(column?.filterKey) || Array.isArray(column?.key)) {
        // 		// 	// 	filterKey = column?.filterKey?.[0] || column?.key?.[0] || ''
        // 		// 	// } else {
        // 		// 	// 	filterKey = column?.filterKey || column?.key || ''
        // 		// 	// }
        // 		// 	// if (v[column.key]?._where) {
        // 		// 	// 	if (value) {
        // 		// 	// 		Object.assign(v[column.key]._where, deepen(filterKey, value))
        // 		// 	// 	} else {
        // 		// 	// 		const firstKey = filterKey?.split('.')[0]
        // 		// 	// 		if (firstKey) v[column.key]._where[firstKey] = undefined
        // 		// 	// 	}
        // 		// 	// } else {
        // 		// 	// 	Object.assign(v[column.key], {
        // 		// 	// 		_where: deepen(filterKey, _filter[filterKey]),
        // 		// 	// 	})
        // 		// 	// }
        // 		// }
        // 		// // if (activeKey === column.key) {
        // 		// // 	// Object.assign(_filter, { ...activeFilterProp })
        // 		// // }
        // 		// return v
        // 	}
        // 	return v
        // })
      } else {
        // if (id && column.key && filters[id]) {
        // 	let filterKey: string
        // 	if (Array.isArray(column?.filterKey) || Array.isArray(column?.key)) {
        // 		filterKey = column?.filterKey?.[0] || column?.key?.[0] || ''
        // 	} else {
        // 		filterKey = column?.filterKey || column?.key || ''
        // 	}
        // 	let value = filters[id][filterKey as any]
        // 	if (column?.filter?.handle && value) {
        // 		value = column?.filter?.handle({ value })
        // 	}
        // 	if (column?.filter?.wrapper && filterKey) {
        // 		filterKey = column?.filter?.wrapper(filterKey)
        // 	}
        // 	if (filterKey) {
        // 		_filters[filterKey] = value
        // 	}
        // 	if (params._where) {
        // 		if (_filters[filterKey]) {
        // 			Object.assign(params._where, deepen(filterKey, _filters[filterKey]))
        // 		}
        // 	}
        // }
      }
    }
  });
  // const activeF = id ? active[id] : undefined
  // const searchFilter = id && (filters[id] as any)?.["or"] ? { ...filters[id] } : undefined

  // if (searchFilter) {
  // 	params?._join.push(searchFilter)
  // }

  if (colKeys) {
    colKeys.forEach((element) => {
      params._select.push(element);
    });
  }

  const {
    data,
    isLoading,
    isFetching,
    refetch,
    isFetched,
    remove,
    isRefreshing,
  } = useTable(id || "", ApiService, url, params, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  // useEffect(() => {
  // 	if (data?.hasMore) {
  // 		queryClient.prefetchQuery([...keys, info.page ?? +1], () => refetch())
  // 	}

  // 	// setKeys(id, keys)
  // }, [data, info.page, queryClient, activeFilter])

  // useImperativeHandle<IDynamicTableRef, any>(
  // 	ref,
  // 	() => ({
  // 		reset: async () => {
  // 			remove()
  // 			form.resetFields()
  // 			setSearch({})
  // 			setGFilters([])
  // 			setActiveFilter(true)
  // 			setInfo({ page: 1 })
  // 			await refetch()
  // 		},
  // 		reload: async () => {
  // 			remove()
  // 			await refetch()
  // 		},
  // 		refresh: () => {

  // 		},
  // 		active: activeFilter,
  // 	}),
  // 	[form, search, gFilters, activeFilter, info],
  // )
  const [sort, setSort] = useState<any>();

  function onTableChange(sorter: any, filters?: any) {
    let _sort = info.sort as any;
    if (sorter?.order) {
      const key = sorter.columnKey.split("[-]")[0];
      const column = propCols.find((v) => {
        if (v.sorterKey === key || v.key === key) {
          return v;
        } else return undefined;
      });

      if (column && column.sorterKey) {
        _sort = [`${sorter.order === "descend" ? "-" : ""}${column.sorterKey}`];
      } else {
        _sort = [`${sorter.order === "descend" ? "-" : ""}${key}`];
      }
    } else {
      _sort = defaultSort ? [`${defaultSort}`] : undefined;
    }

    let _sortOrder = "";

    _sort = _sort?.length > 0 ? _sort[0] : "";

    const _sotCols = cols.map((element) => {
      const sortkeyInfo = _sort;
      if (element?.children) {
        const childrens = element?.children.map((child: any) => {
          const key = child?.key?.split("[-]")[0];
          if (_sort) {
            const descend = _sort.includes("-");

            if (sortkeyInfo.includes(key)) {
              _sortOrder = descend ? "descend" : "ascend";
            }
          }
          return {
            ...child,
            sortOrder: _sort.includes(key) ? _sortOrder : "",
          };
        });
        return {
          ...element,
          children: childrens,
        };
      } else {
        const key = element?.key?.split("[-]")[0];

        if (_sort) {
          const descend = _sort.includes("-");

          if (sortkeyInfo?.split(".")[0].includes(key)) {
            _sortOrder = descend ? "descend" : "ascend";
          }
        }
        return {
          ...element,
          sortOrder: sortkeyInfo.includes(key) ? _sortOrder : "",
        };
      }
    });

    _sort = _sort ? [_sort] : "";

    setCols(_sotCols);
    setInfo((info) => ({ ...info, sort: _sort }));
    if (filters) {
      // setFilter(id, filters)
    }
  }

  const expandedRender = (data: any) => {
    const _columns = propCols.filter((v) => {
      return !v.primary;
    });

    return <ExpandedRow columns={_columns} record={data} />;
  };

  // const configContent = () => {
  // 	const items = cols
  // 		.filter((v) => !v?.key?.includes('data_action'))
  // 		.map((element, i) => {
  // 			return {
  // 				label: cloneElement(element.title, {
  // 					className: 'text-@soft-neutral-500 m-0 capitalize',
  // 				}),
  // 				key: i,
  // 				isVisible: element.isVisible,
  // 			}
  // 		})

  // 	const onSortEnd = ({ oldIndex, newIndex }: any) => {
  // 		setCols(arrayMoveImmutable(cols, oldIndex, newIndex))
  // 	}

  // 	return (
  // 		<>
  // 			<SortableList
  // 				items={items}
  // 				onSortEnd={onSortEnd}
  // 				lockAxis={'y'}
  // 				transitionDuration={100}
  // 				onVisibilityChange={(isVisible: boolean, key: number) => {
  // 					const _columns = cols.map((element, i) => {
  // 						if (i === key) {
  // 							element.isVisible = isVisible
  // 							if (element.sortOrder) {
  // 								onTableChange('')
  // 							}
  // 						}
  // 						return element
  // 					})
  // 					setCols(_columns)
  // 				}}
  // 			/>
  // 			<Button block size="small" type="secondary" onClick={() => loadCols(null)}>
  // 				Reset
  // 			</Button>
  // 		</>
  // 	)
  // }

  const datacols = cols.filter((v) => !v?.key?.includes("data_action"));

  const actionCols = propCols
    .filter((v) => v?.key?.includes("data_action"))
    .map(({ options, ...rest }) => {
      return {
        ...options,
        ...rest,
      };
    });

  const tableColumns =
    actionCols?.length > 0
      ? datacols?.filter((v) => v.isVisible).concat(actionCols)
      : datacols?.filter((v) => v.isVisible);

  // const MainTable = isSortable ? SorteableTable : AntTable

  const DATA =
    data?.results?.map((v: any) => ({
      ...v,
      uuid: v?.uuid || uuid(),
    })) || [];

  return (
    <div className="min-h-[226px]">
      <div className={` main-custom-table`}>
        {!md ? (
          <MobileTable
            dataSource={DATA}
            tableColumns={tableColumns}
            isLoading={
              isFetched
                ? (id ? isRefreshing[id] : false) || isLoading
                : isFetching
            }
          />
        ) : (
          <TableBase
            wrapperClassName="hidden sm:block"
            columns={tableColumns}
            data={DATA}
            onSort={onTableChange}
            isLoading={
              isFetched
                ? (id ? isRefreshing[id] : false) || isLoading
                : isFetching
            }
          />
        )}
        {/* <AntTable columns={tableColumns} dataSource={DATA} onChange={(p, f, s, e) => {
					console.log('s', s)
					if (s) onTableChange(s)

				}} /> */}
        {/* {DATA.map((item) => {
					const items: any = [
						{
							key: item.uuid,
							label: <Flex className="flex-1" >{item.uuid}</Flex>,
							children: <></>
						}

					]


					return <Collapse
						className={` border-none`}
						items={items}
						size="large"

					/>

				})} */}
        {/* <MainTable
					rowClassName={(record: any, index: any) => `
						${index % 2 === 0
							? '[&>td]:bg-@surface-light'
							: '[&>td]:bg-@colors-neutrals-050 '} 
							[&>td]:border-none [&>td]:hover:bg-variation-@surface-primary--100/30 text-@text-plain [&>td]:h-[80px]  [&>td]:min-h-[80px]`}
					{...rest}
					components={{
						header: {
							wrapper: ({ className, ...props }: any) => <thead className={`bg-@surface-light text-@text-light`} {...props} />,
							cell: ({ className, ...props }: any) => <td className={`${className} last:bg-transparent last:hover:bg-transparent hover:bg-variation-@surface-primary--100/30 hover:cursor-pointer h-[60px] min-h-[60px]`} {...props} />,
							row: ({ className, ...props }: any) => <tr className={`${className} hover:bg-variation-@surface-primary--100/30 hover:cursor-pointer h-[60px] min-h-[60px] rounded-tr-md `} {...props} />,
						}
					}}
					className="hidden sm:block"
					size="small"
					showSorterTooltip={false}
					scroll={{ x: 'max-content' }}
					columns={tableColumns}
					rowKey={(record: any) => {
						return record?.uuid
					}}
					dataSource={DATA}
					onChange={(pagination, filters, sorter, extra) => {
						if (pagination) {
							setInfo({ page: pagination?.current })
							setSearch({
								...search,
								offset:
									pagination &&
									pagination.current &&
									pagination?.pageSize &&
									(pagination?.current - 1) * pagination?.pageSize,
								limit: pagination.pageSize,
							})
						}
						if (sorter) onTableChange(sorter, filters)

						onChange && onChange({ pagination, filters, sorter, extra })
					}}
					pagination={
						!noPagination && {
							current: _page,
							pageSize: _limit,
							total: data?.total,
							showSizeChanger: true,
							showQuickJumper: true,
							className: 'hidden',

						}
					}
					// loading={{
					// 	// spinning: isFetched ? (id ? isRefrashing[id] : false) || isLoading : isFetching,
					// 	indicator: <div className="loader animate-rotate z-50 " />
					// }}
					bordered={bordered}
					expandable={
						expandable ||
						((!md &&
							!noExpand && {
							expandedRowRender: (record: any) =>
								expandedRender && expandedRender(record),
						}) as any)
					}
				/> */}
        <div className="w-full bg-black">
          {!noPagination && (
            <Pagination
              current={_page}
              currentTotal={DATA?.length || 0}
              total={data?.total}
              pageSize={_limit}
              onChange={(page, pageSize) => {
                if (page) {
                  setInfo((info) => ({ ...info, page }));
                  setSearch({
                    ...search,
                    offset: pageSize && (page - 1) * pageSize,
                    limit: pageSize,
                  });
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const DynamicTable = forwardRef(DynamicTableComponent);

DynamicTable.displayName = "DynamicTable";

export { DynamicTable };
