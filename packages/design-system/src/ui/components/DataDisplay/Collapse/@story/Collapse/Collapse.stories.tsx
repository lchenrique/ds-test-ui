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
    title: 'Components/DataDisplay/Collapse',
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'default', 'large'],
        },
    },
} as Meta

export const CollapseStory = {
    args: {
        additionalProp: 'AdditionalValue',
    },

    render: (args: any) => {
        return <Collapse items={items} {...args} />
    },
}
