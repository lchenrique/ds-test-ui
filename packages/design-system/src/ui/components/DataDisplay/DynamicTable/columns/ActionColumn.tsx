import { Dropdown, TooltipProps } from "antd";
import { CircleNotch } from "phosphor-react";
import { ReactNode, cloneElement } from "react";
import { PermissionsList } from "../../../../archive";
import { ICON_SIZE } from "../../../../config/default";
import { IDynamicDataColumn } from "../../../../interfaces";
import { cn } from "../../../../lib/utils";
import { Button, Flex, IButtonProps, Icon } from "../../../General";
import { IColumnDef } from "./Column";
import "./style.css";

//text-@surface-error-dark
export interface IAction<T>
  extends Omit<IButtonProps, "icon" | "hidden" | "loading"> {
  label?: ReactNode | ((data?: T) => ReactNode);
  loading?: boolean | ((data?: T) => boolean);
  isDisabled?: (data?: T) => boolean | boolean;
  url?: (data?: T) => string;
  action?: (data?: T) => void;
  className?: string;
  tooltip?: TooltipProps;
  permission?: PermissionsList | PermissionsList[];
  primary?: boolean;
  onVerifyPermission?: (data?: T) => boolean;
  icon?: React.ReactElement | ((data?: T) => React.ReactElement);
  hidden?: boolean | ((data?: T) => boolean);
}

export function actionColumn<T = any>(
  title: React.ReactNode,
  actions: IAction<T>[],
  config?: IColumnDef<T> & {
    render?: (value: T[keyof T], data: T) => ReactNode;
  },
): IDynamicDataColumn {
  const actionRender = (data: T) => {
    return action(data, actions);
  };

  return {
    ...config,
    key: "data_action",
    primary: true,
    isVisible: true,
    options: { width: 10, fixed: "right", sorter: false },
    title,
    filter: config?.filter && config?.filter,
    render: config?.render || actionRender,
  };
}

export function isLoading<T>(data: T, item: IAction<T>) {
  if (
    (typeof item.loading === "boolean" && item.loading) ||
    (typeof item.loading === "function" && item.loading(data))
  ) {
    return (
      <CircleNotch className="animate-spin" size={ICON_SIZE} weight="bold" />
    );
  }

  return false;
}

function icon<T>(data: T, item: IAction<T>) {
  if (
    (typeof item.icon === "boolean" && item.icon) ||
    (typeof item.icon === "function" && item.icon(data))
  )
    return cloneElement(item.icon(data), {
      className: "h-4",
    });
}

function action<T>(data: T, _actions: IAction<T>[]) {
  const actions = (_actions || []).filter((v) => !!v).filter((v) => !v.primary);
  const primaryAction = _actions?.filter((v) => v.primary);

  const menuItems = actions
    ?.map((v, i) => {
      const isDisabled = () =>
        v.disabled || (v.isDisabled && v.isDisabled(data));

      const itemMenu = {
        ...v,
        key: i,
        className: cn(
          `flex  gap-1 items-center  text-center [&>.ado-dropdown-menu-title-content]:flex-none  ${
            isDisabled() ? "" : v.className || ""
          }`,
          v.className,
        ),
        icon: isLoading(data, v) || icon(data, v) || v?.icon,
        type: v?.type || "secondary",
        disabled: isDisabled(),
        onClick: () => {
          v.action && v.action(data);
          v.url && v.url(data);
        },
        label: v.label
          ? typeof v.label === "function"
            ? v.label(data)
            : v.label || v.label
          : null,
      };

      if (v && v.onVerifyPermission && v.onVerifyPermission(data)) {
        if (typeof v.hidden === "boolean") {
          if (v.hidden) {
            return null;
          }
        }

        if (typeof v.hidden === "function") {
          if (v.hidden(data)) {
            return null;
          }
        }
        return itemMenu;
      } else if (v && v.onVerifyPermission && !v.onVerifyPermission(data)) {
        return null;
      }

      if (typeof v.hidden === "boolean") {
        if (v.hidden) {
          return null;
        }
      }

      if (typeof v.hidden === "function") {
        if (v.hidden(data)) {
          return null;
        }
      }

      return itemMenu;
    })
    .filter(Boolean) as any[];

  return (
    <>
      <Flex className="sm:hidden flex-col w-full gap-spacing-s pt-spacing-l">
        {menuItems.map((menuItem: any) => {
          return (
            <Button
              block
              size="large"
              type={menuItem.type}
              className={cn(menuItem.className, "btn-action-sm")}
            >
              {menuItem.label}
            </Button>
          );
        })}
      </Flex>
      {menuItems.length > 0 && (
        <Dropdown
          arrow
          trigger={["click"]}
          menu={{
            items: menuItems.map((v) => ({
              ...v,
              label: (
                <span
                  className={cn(`text-sm sm:text-@text-plain`, v.className)}
                >
                  {v.label}
                </span>
              ),
            })),
          }}
        >
          <Flex
            justify="center"
            className="h-spacing-l w-spacing-l cursor-pointer"
          >
            <Icon fill="surface-primary" name="ellipsis-v" />
          </Flex>
        </Dropdown>
      )}
    </>
  );
}
