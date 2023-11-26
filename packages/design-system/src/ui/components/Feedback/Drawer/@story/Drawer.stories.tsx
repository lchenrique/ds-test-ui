import { Button } from '@/ui/components/General'
import useDrawer from '@/ui/hooks/useDrawer'
import { Meta } from '@storybook/react'

export default {
    title: 'Components/Feedback/Drawer',
} as Meta

export const DrawerStory = {
    render: (args: any) => {
        const { openDrawer } = useDrawer()
        const open = (placement: string) => {
            console.log('placement', placement)
            openDrawer({
                title: 'Drawer',
                content: <>Content</>,
                onOk: () => true,
                placement: placement as any,
            })
        }

        return (
            <div>
                <Button
                    onClick={() => {
                        open('left')
                    }}>
                    Left
                </Button>
                <Button
                    onClick={() => {
                        open('top')
                    }}>
                    Top
                </Button>
                <Button
                    onClick={() => {
                        open('right')
                    }}>
                    Right
                </Button>
                <Button
                    onClick={() => {
                        open('bottom')
                    }}>
                    Bottom
                </Button>
            </div>
        )
    },
}
