import { Tabs as AntTabs, Badge } from "antd";
import type { TabsProps as AntTabsProps } from "antd";
import "./style.css";
import { Flex } from "../Flex";
import { Icon } from "../Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface TabItemsProps {
  key: string;
  label: React.ReactNode;
  children?: React.ReactNode;
  icon?: IconProp;
  badge?: number;
}

export interface ITabsProps extends AntTabsProps {
  hasBorderBottom?: boolean;
  tabs: TabItemsProps[];
}

function Tabs({ ...props }: ITabsProps) {
  const items = props.tabs?.map((tab, i) => {
    const id = String(i + 1);

    return {
      label: (
        <Flex className="text-base">
          {tab.icon && (
            <Icon name={tab.icon} size="spacing-s" className="mr-2" />
          )}
          {tab.label}
          {tab.badge && (
            <Badge
              count={tab.badge}
              color="#FF4747"
              style={{ marginLeft: 8 }}
            />
          )}
        </Flex>
      ),
      key: tab.key || id,
      children: tab.children,
    };
  });
  return (
    <AntTabs
      className={props.hasBorderBottom ? "hasBorderBottom" : ""}
      {...props}
      items={items}
    />
  );
}

export { Tabs };
