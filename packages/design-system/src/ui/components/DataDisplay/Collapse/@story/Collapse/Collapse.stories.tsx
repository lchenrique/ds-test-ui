import { Collapse, ICollapseProps } from '@/ui/components/DataDisplay/Collapse'
import { Meta } from '@storybook/react'

const items: ICollapseProps['items'] = [
    {
        key: '1',
        label: 'Header',
        children: <div>Content</div>,
    },
]

export default {
    title: 'Components/Collapse',
    args: {
        prop1: 'Value1',
        prop2: 'Value2',
    },
} as Meta

export const CollapseStory = {
    args: {
        additionalProp: 'AdditionalValue',
    },

    render: (args: any) => {
        return <Collapse items={items} />
    },
}
