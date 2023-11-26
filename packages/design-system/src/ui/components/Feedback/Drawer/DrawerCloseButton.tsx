import { IDrawer } from '@/ui/components/Feedback/Drawer'
import { closeBtnVariantCVA } from '@/ui/components/Feedback/Drawer/variants'
import { Button, Icon } from '@/ui/components/General'
import { cn } from '@/ui/lib/utils'
import { HtmlHTMLAttributes } from 'react'

export interface IDrawerCloseButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    right?: boolean
    onlyIcon?: boolean
    placement: IDrawer['placement']
}

const DrawerCloseButton = ({ onlyIcon, onClick, style, placement }: IDrawerCloseButtonProps) => {
    if (onlyIcon) {
        return (
            <div onClick={onClick} style={style} className={cn('ado-drawer-close-button cursor-pointer bg-red-100', closeBtnVariantCVA({ placement }))}>
                <Icon name="close" size="padding-m" />
            </div>
        )
    }

    return (
        <Button
            size="small"
            onClick={onClick}
            style={style}
            shape="circle"
            className={cn('ado-drawer-close-button', closeBtnVariantCVA({ placement }))}
            icon={<Icon name="close" />}
        />
    )
}

export { DrawerCloseButton }
