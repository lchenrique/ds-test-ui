import { Button, Flex, Form } from '@/ui'
import { IDrawer } from '@/ui/components/Feedback/Drawer'
import { cn } from '@/ui/lib/utils'
import { HtmlHTMLAttributes } from 'react'

type PickDrawerProps = Pick<IDrawer, 'placement' | 'cancelText' | 'okText' | 'showCancelButton'>

export interface IDrawerFooterProps extends PickDrawerProps, HtmlHTMLAttributes<HTMLDivElement> {
    isLoading?: boolean
    showFooter?: boolean
}

const DrawerFooter = ({ placement, cancelText, onClick, showCancelButton, okText, isLoading, showFooter = true }: IDrawerFooterProps) => {
    const verticalPosition = placement === 'top' ? '-bottom-14 rounded-b-border-radius-l overflow-hidden' : placement === 'bottom' ? '-bottom-14' : ''

    return (
        showFooter && (
            <div className={cn('ado-drawer-footer absolute bottom-0 ', verticalPosition)}>
                <Flex justify="end" gap="padding-s" className="px-5 py-2">
                    {showCancelButton && (
                        <Form.Item className="p-0 m-0">
                            <Button type="secondary" onClick={onClick} disabled={isLoading}>
                                {cancelText || 'Cancel'}
                            </Button>
                        </Form.Item>
                    )}
                    <Form.Item className="p-0 m-0">
                        <Button htmlType="submit" loading={isLoading}>
                            {okText || 'Save'}
                        </Button>
                    </Form.Item>
                </Flex>
            </div>
        )
    )
}

export { DrawerFooter }
