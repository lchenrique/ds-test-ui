import { PaginationProps } from "antd";
import { cn } from "../../../lib/utils";
import { Icon } from "../../General";

import { useElementSize } from "usehooks-ts";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Flex } from "../../General/Flex";
import { Text } from "../../Typography";
import { pagesClassNameVariant } from "./style";

export interface IPaginationProps extends PaginationProps {
  currentTotal: number;
}

function Pagination({
  className,
  size,
  onChange,
  current = 1,
  currentTotal,
  ...rest
}: IPaginationProps) {
  const { sm } = useBreakpoint();

  const [ref, { height }] = useElementSize();
  const sizeLimit = height > 112;

  const onChangePage = (page: number, pageSize: number) => {
    onChange && onChange(page, pageSize);
  };

  const totalPages =
    (rest.total && rest.pageSize && Math.ceil(rest.total / rest.pageSize)) || 1;

  const pages =
    Array.from({ length: totalPages }).map((_, index) => {
      const pagesIndex = index + 1;
      const active = current === pagesIndex;

      return (
        <li
          key={index}
          onClick={() => onChangePage(pagesIndex, rest?.pageSize || 0)}
          className={cn(pagesClassNameVariant({ className, active }))}
        >
          {pagesIndex}
        </li>
      );
    }) || [];

  const pageNumbers = pages.slice(
    current - 1,
    current == 1 ? current + 4 : current + 3,
  );

  const pagesBefore = pages.slice(
    current === totalPages && totalPages > 10
      ? current - 4
      : current == 2
        ? current - 2
        : current - 3,
    current - 1,
  );

  const first = pagesBefore.length >= 2 && current > 3 ? pages[0] : null;

  const last =
    current < totalPages && totalPages > 2 ? pages[pages.length - 1] : null;

  const currentPage = pages[current - 1];

  const disabledAngleLeft = current === 1;
  const disabledAngleRight = current === totalPages;

  const LeftControl = (mobile?: boolean) => {
    return (
      <>
        {(first || (mobile && current > 2)) && (
          <li
            onClick={() => onChangePage(1, rest.pageSize || 0)}
            className={cn(pagesClassNameVariant({ className }))}
          >
            <Icon name="angles-left" size="spacing-s" fill="surface-primary" />
          </li>
        )}
        <li
          onClick={() =>
            !disabledAngleLeft && onChangePage(current - 1, rest.pageSize || 0)
          }
          className={cn(
            pagesClassNameVariant({ className, disabled: disabledAngleLeft }),
          )}
        >
          <Icon
            name="angle-left"
            size="spacing-s"
            fill={
              disabledAngleLeft ? "text-disabled-primary" : "surface-primary"
            }
          />
        </li>
      </>
    );
  };

  const rightControl = (mobile?: boolean) => {
    return (
      <>
        <li
          onClick={() =>
            !disabledAngleRight && onChangePage(current + 1, rest.pageSize || 0)
          }
          className={cn(
            pagesClassNameVariant({ className, disabled: disabledAngleRight }),
          )}
        >
          <Icon
            name="angle-right"
            size="spacing-s"
            fill={
              disabledAngleRight ? "text-disabled-primary" : "surface-primary"
            }
          />
        </li>
        {(last || (mobile && current < totalPages)) && (
          <li
            onClick={() => onChangePage(totalPages, rest.pageSize || 0)}
            className={cn(pagesClassNameVariant({ className }))}
          >
            <Icon name="angles-right" size="spacing-s" fill="surface-primary" />
          </li>
        )}
      </>
    );
  };

  const renderInfo = (mobile?: boolean) => {
    return (
      <Flex
        gap="padding-s"
        justify={sizeLimit ? "center" : "end"}
        className="leading-none   w-full "
      >
        <Text as="span" className="whitespace-nowrap">
          <Text className="text-@text-brand-primary leading-none">
            {rest.total}{" "}
          </Text>
          Selected items
        </Text>

        <Flex className="gap-1 text-@text-light flex-nowrap ">
          <Text className="flex gap-1 leading-none whitespace-nowrap ">
            Displaying:
            <Text className="text-@text-brand-primary leading-none whitespace-nowrap">
              {
                (currentTotal &&
                  rest.pageSize &&
                  (current - 1) * rest.pageSize + currentTotal) ||
                  (rest.pageSize && current * rest?.pageSize)
                //  || <span className="inline-block animate-pulse h-3 w-5 bg-@colors-neutrals-200 px-2  m-0" />
              }
            </Text>
            out of
          </Text>
          <Text className="text-@text-brand-primary whitespace-nowrap">
            {rest.total}
          </Text>
        </Flex>
      </Flex>
    );
  };

  if (!sm) {
    return (
      <Flex
        ref={ref}
        justify="between"
        vertical
        className="w-full p-padding-xl bg-white  gap-5 "
      >
        <ul className="flex gap-padding-xs p-0 m-0">
          {LeftControl(true)}
          {currentPage}
          {rightControl(true)}
        </ul>
        {renderInfo(true)}
      </Flex>
    );
  }
  return (
    <Flex
      ref={ref}
      justify={sizeLimit ? "center" : "between"}
      wrap="wrap"
      className="w-full p-padding-xl bg-white gap-5 "
    >
      <ul className="flex gap-padding-xs p-0 m-0">
        {LeftControl()}
        {pagesBefore}
        {pageNumbers}
        {rightControl()}
      </ul>
      <div>{renderInfo()}</div>
    </Flex>
  );
}

export { Pagination };
