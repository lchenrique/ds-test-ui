import { Button } from '@/ui/components/General'
import useDrawer from '@/ui/hooks/useDrawer'
import { Meta } from '@storybook/react'

export default {
    title: 'Components/Feedback/Drawer',
} as Meta

export const DrawerStory = {
    render: (args: any) => {
        const { openDrawer } = useDrawer()
        const open = (placement: string, customFooter?: boolean) => {
            openDrawer({
                title: 'Drawer',
                subTitle: 'sdsaldapsdsada',
                className: customFooter ? 'overflow-hidden px-padding-none' : '',
                content: (
                    <div className="h-full flex flex-col ">
                        <div className="px-padding-l flex-1" style={{ overflow: customFooter ? 'auto' : 'initial' }}>
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
                        </div>

                        {customFooter && <div className="h-16 w-full bg-blue-500">Footer</div>}
                    </div>
                ),
                onOk: !customFooter ? () => true : undefined,
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

                <Button
                    onClick={() => {
                        open('left', true)
                    }}>
                    Left footer custom
                </Button>
                <Button
                    onClick={() => {
                        open('top', true)
                    }}>
                    Top footer custom
                </Button>
                <Button
                    onClick={() => {
                        open('right', true)
                    }}>
                    Right footer custom
                </Button>
                <Button
                    onClick={() => {
                        open('bottom', true)
                    }}>
                    Bottom footer custom
                </Button>
            </div>
        )
    },
}
