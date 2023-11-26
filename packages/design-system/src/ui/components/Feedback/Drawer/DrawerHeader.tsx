import { Text } from '@/ui/components/Typography'
import { ReactNode } from 'react'

export interface IDrawerHeaderProps {
    title: ReactNode
    subTitle?: ReactNode
}

const DrawerHeader = ({ title, subTitle }: IDrawerHeaderProps) => {
    return (
        <div className="ado-drawer-header-wrapper">
            <Text as="h1" size="lg" color="text-plain" className="font-semibold">
                {title}
            </Text>
            {subTitle && (
                <Text as="p" className="ado-drawer-header-subtitle">
                    {subTitle}
                </Text>
            )}
        </div>
    )
}

export { DrawerHeader }
