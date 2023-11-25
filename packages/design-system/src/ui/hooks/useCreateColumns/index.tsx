import { Flex, Icon, Text } from "../../components";

let keyCounter = 0;

export function convertColumn(element: any, cols: any[], sort: any) {
  let _sortOrder = "";
  let _sort = sort;
  _sort = _sort ? _sort[0] : "";

  if (_sort) {
    const descend = _sort?.includes("desc");
    if (_sort?.includes(element.key)) {
      _sortOrder = descend ? "descend" : "ascend";
    }
  }

  const options = element?.options || {};

  if (!options.permission) {
    const pRender = element?.render
      ? {
          render: element.render,
        }
      : { dataIndex: element.key };

    // const propSort = sort ? (!options.noSort ? { sorter: !!element.key } : {}) : {}
    cols.push({
      // ...propSort,
      sortIcon: element?.sortIcon,
      sortOrder: _sortOrder,
      title: (
        <Flex align="center" gap="padding-xs">
          {element?.mobileIcon && (
            <Icon
              fill="surface-primary"
              name={element.mobileIcon}
              className="flex sm:hidden fill-@surface-primary"
            />
          )}
          <Text
            as="span"
            className="m-0 sm:mr-2 text-@text-plain sm:text-@text-light leading-@normal truncate capitalize"
          >
            {element.title}
          </Text>
        </Flex>
      ),
      isVisible: element.isVisible !== undefined ? element.isVisible : true,
      key: element.key
        ? `${element.key}[-]${keyCounter++}`
        : `Key[-]${keyCounter++}`,
      width: options.width || "max-content",
      fixed: options.fixed,
      align: options.align || "left",
      ellipsis: options.ellipsis,
      className: `${options.className ? options.className : ""}`,
      sorter: options?.sorter ?? true,
      ...pRender,
    });
  }
}
