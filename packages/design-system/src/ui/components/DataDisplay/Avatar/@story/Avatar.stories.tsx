import { Avatar, IAvatarProps, Icon } from '@/ui'
import { Meta } from '@storybook/react'
import { useEffect, useState } from 'react'

export default {
    title: 'Components/DataDisplay/Avatar',
    component: Avatar,
    args: {
        name: 'Carlos',
        sub: 'Front-end',
        ['tooltip.title']: 'Carlos',
    },
} as Meta<IAvatarProps>

export const AvatarStory = {
    args: {
        showInfo: true,
    },
    argTypes: {
        showInfo: {
            control: 'boolean',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        name: {
            control: 'text',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        sub: {
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        showTooltip: {
            control: 'boolean',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        ['tooltip.title']: {
            control: 'text',
            if: { arg: 'showTooltip' },
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        size: {
            options: ['default', 'xSmall', 'small', 'large', 'xLarge'],
            control: 'inline-radio',
            defaultValue: 'default',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        shape: {
            options: ['square', 'circle'],
            control: 'inline-radio',
            defaultValue: 'square',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'square' },
            },
        },
        loading: {
            control: 'boolean',
            defaultValue: false,
            table: {
                category: 'Avatar',
                defaultValue: { summary: false },
            },
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            table: {
                category: 'Avatar',
                defaultValue: { summary: false },
            },
        },

        fallback: {
            control: 'text',
            description: 'AvatarFallback: A React component for handling missing user avatars.',
            table: {
                defaultValue: { summary: 'default' },
                type: {},
                category: 'Avatar',
            },
        },
    },
    render: (args: IAvatarProps & { ['tooltip.title']: string }) => {
        return (
            <div className="flex gap-3 w-full flex-wrap items-center">
                <Avatar {...args} tooltip={{ title: args['tooltip.title'] }} />
                <Avatar name="Home" fallback={<Icon fill="surface-primary" name={'home-user'} />}>
                    <Avatar.Sub className="text-@surface-primary">sweet home</Avatar.Sub>
                </Avatar>
            </div>
        )
    },
}

export const AvatarGroupStory = {
    args: {
        ['number of avatars']: 10,
        maxCount: 5,
    },
    argTypes: {
        ['number of avatars']: {
            control: { type: 'number', min: 2, max: 20 },
            table: {
                category: 'Avatar.Group',
            },
        },
        maxCount: {
            control: { type: 'number' },
            table: {
                category: 'Avatar.Group',
            },
        },
        ['avatar size']: {
            options: ['default', 'xSmall', 'small', 'large', 'xLarge'],
            control: 'inline-radio',
            defaultValue: 'default',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'default' },
            },
        },
        ['avatar shape']: {
            options: ['square', 'circle'],
            control: 'inline-radio',
            defaultValue: 'square',
            table: {
                category: 'Avatar',
                defaultValue: { summary: 'square' },
            },
        },
        loading: {
            control: 'boolean',
            defaultValue: false,
            table: {
                category: 'Avatar',
                defaultValue: { summary: false },
            },
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            table: {
                category: 'Avatar',
                defaultValue: { summary: false },
            },
        },
    },
    render: ({
        'number of avatars': noa,
        maxCount,
        'tooltip.title': tooltipTitle,
        ...args
    }: Parameters<typeof Avatar.Group>[0] &
        IAvatarProps & {
            ['number of avatars']: number
            ['tooltip.title']: string
            ['avatar size']: any
            ['avatar shape']: any
        }) => {
        const [users, setUsers] = useState([])

        useEffect(() => {
            fetch(`https://dummyjson.com/users?limit=${noa}`)
                .then((res) => res.json())
                .then((e) => setUsers(e.users))
        }, [noa])

        return (
            <div className="flex gap-3 w-full flex-wrap items-center">
                <Avatar.Group maxCount={maxCount} maxPopoverTrigger="click" size={'large'}>
                    {users.map((user: any, i) => {
                        return (
                            <a key={i}>
                                <Avatar
                                    {...args}
                                    name={user.firstName}
                                    size={args['avatar size']}
                                    shape={args['avatar shape']}
                                    src={`https://i.pravatar.cc/600?img=${i + 1}`}
                                    tooltip={{ title: user.firstName }}
                                />
                            </a>
                        )
                    })}
                </Avatar.Group>
            </div>
        )
    },
}
