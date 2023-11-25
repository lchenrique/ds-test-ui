import { Layout, Menu, MenuProps, SiderProps } from "antd";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import React, { useEffect } from "react";
import { ICON_SIZE } from "../../../config/default";

const { Sider } = Layout;

export type MenuItem = Required<MenuProps>["items"][number];

interface ISideBarMenuProps extends SiderProps {
  menuItems: MenuItem[];
  logo?: (collapsed: boolean) => JSX.Element;
  collapsedLogo?: string;
  menuProps?: MenuProps;
  theme?: SiderProps["theme"];
  collapsed?: boolean;
  onCollapse?: (collapsed?: boolean) => void;
}

function SideBarMenu({
  logo,
  collapsedLogo,
  menuItems,
  menuProps,
  theme,
  collapsed: externalCollapsed,
  onCollapse: onExternalCollapse,
  ...props
}: ISideBarMenuProps) {
  const [collapsed, setCollapsed] = React.useState<boolean | undefined>(false);

  function onCollapse(collapsed: boolean) {
    setCollapsed(collapsed);
    onExternalCollapse && onExternalCollapse(collapsed);
  }

  useEffect(() => {
    setCollapsed(externalCollapsed);
    onExternalCollapse && onExternalCollapse(externalCollapsed);
    return () => {
      setCollapsed(undefined);
    };
  }, [externalCollapsed]);

  return (
    <div className={`${theme ? theme : ""} b2b-sider`}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme={theme || "light"}
        width={250}
        breakpoint="md"
        className={theme}
        trigger={
          !collapsed ? (
            <CaretDoubleLeft size={ICON_SIZE} weight="bold" />
          ) : (
            <CaretDoubleRight size={ICON_SIZE} weight="bold" />
          )
        }
        {...props}
      >
        <div className="soft-sidebar">
          <div className="logo mb-8 flex justify-center items-center dark:border-@soft-neutral-dark-400  border-b">
            {logo && logo(collapsed as boolean)}
          </div>
          <Menu
            {...menuProps}
            theme={theme || "light"}
            mode="inline"
            className="soft-sidebar-menu pb-28"
            items={menuItems}
          />
        </div>
      </Sider>
    </div>
  );
}

export { SideBarMenu };
