import { Dropdown } from "antd";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { cn } from "../../../lib/utils";
import { IAction } from "../../DataDisplay/DynamicTable/columns/ActionColumn";
import { Icon } from "../../General";
import { Button } from "../../General/Button";
import { Flex } from "../../General/Flex";

type IFlex = Parameters<typeof Flex>[0];
export interface IHeaderActions extends IFlex {
  actions?: IAction<null>[];
  maxActions?: number;
}

function HeaderActions({
  children,
  className,
  actions,
  maxActions,
  ...props
}: IHeaderActions) {
  const { sm } = useBreakpoint();

  if (
    (!sm && actions && actions.length > 1) ||
    (maxActions && actions && actions.length > maxActions)
  ) {
    return (
      <Flex
        className={cn("justify-end  h-full gap-1  pl-padding-xs", className)}
        {...props}
      >
        {actions && (
          <Dropdown
            placement="bottomRight"
            menu={{
              items: actions?.map((v, i) => {
                return {
                  key: i,
                  className: cn(
                    `flex  gap-1 items-center  text-center [&>.ado-dropdown-menu-title-content]:flex-none  `,
                    v.className,
                  ),
                  icon: v?.icon,
                  disabled: v.isDisabled,
                  onClick: () => {
                    v.action && v.action();
                    v.url && v.url();
                  },
                  label: (
                    <span className={cn(``, v.className)}>
                      {v.label
                        ? typeof v.label === "function"
                          ? v.label()
                          : v.label || v.label
                        : null}
                    </span>
                  ),
                };
              }) as any,
            }}
          >
            <Button icon={<Icon name="ellipsis-v" />} />
          </Dropdown>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      className={cn("justify-end h-full gap-1  pl-padding-xs", className)}
      {...props}
    >
      {actions?.map((v, i) => {
        return (
          <Button type={v.type} key={i}>
            {
              <span className={cn(``, v.className)}>
                {v.label
                  ? typeof v.label === "function"
                    ? v.label()
                    : v.label || v.label
                  : null}
              </span>
            }
          </Button>
        );
      })}

      {!actions && children}
    </Flex>
  );
}

HeaderActions.displayName = "PageHeader.Actions";

export { HeaderActions };
