import { ITabsProps, TabItemsProps, Tabs } from "@/ui";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  argTypes: {
    fill: {
      control: { type: "color" },
      defaultValue: "#000000",
    },
  },
} as Meta<ITabsProps>;

export const Types = (args: ITabsProps) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabItemsProps[] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
      icon: "dog",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
      badge: 5,
      icon: "dog",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Tab 4",
      children: "Content of Tab Pane 4",
      badge: 1,
    },
  ];
  return (
    <div className="flex gap-3 w-full flex-wrap flex-col">
      <Tabs defaultActiveKey="1" tabs={items} onChange={onChange} />
      <br />
      <Tabs
        defaultActiveKey="1"
        tabs={items}
        onChange={onChange}
        hasBorderBottom
      />
    </div>
  );
};
