export const importCode = `#### First import Tabs component:
~~~tsx
import { Tabs, ITabsProps, TabItemsProps } from "@/ui"`;

export const tabsCode = `#### You can customize the component separately:
~~~tsx
    const items: TabItemsProps[] = [
	{
		key: '1',
		label: 'Tab 1',
		children: 'Content of Tab Pane 1',
	},
	{
		key: '2',
		label: 'Tab 2',
		children: 'Content of Tab Pane 2',
		badge: 5,
		icon: 'icon'
	},
	{
		key: '3',
		label: 'Tab 3',
		children: 'Content of Tab Pane 3',
	},
	];
<>
    <Tabs defaultActiveKey="1" tabs={items} onChange={onChange} />
    <Tabs defaultActiveKey="1" tabs={items} onChange={onChange} hasBorderBottom />
</>`;
