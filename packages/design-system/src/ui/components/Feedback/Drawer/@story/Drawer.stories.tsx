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
            openDrawer({
                title: 'Drawer',
                subTitle: 'sdsaldapsdsada',
                content: (
                    <>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>

                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                        <div>content</div>
                    </>
                ),
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
