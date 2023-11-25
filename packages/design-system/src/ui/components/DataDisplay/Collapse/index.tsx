import { CollapseProps } from 'antd'
import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode, useState } from 'react'
import { useToggle } from 'usehooks-ts'
import { cn } from '../../../lib/utils'
import { Flex, Icon } from '../../General'
import './style.css'

const collapseVariant = {
    size: {
        default: 'pb-padding-m',
        small: 'pb-padding-s',
        large: 'pb-padding-l',
    },
}

const collapseHeaderVariant = {
    size: {
        default: 'p-padding-m',
        small: 'p-padding-s',
        large: 'p-padding-l',
    },
}

const collapseSizeVariant = {
    size: {
        default: 'h-16',
        small: 'h-spacing-xxxl',
        large: 'h-20',
    },
}

const collapseHeaderVariantCVA = cva('', {
    variants: collapseHeaderVariant,
    defaultVariants: { size: 'default' },
})
const collapseVariantCVA = cva('', {
    variants: collapseVariant,
    defaultVariants: { size: 'default' },
})
const collapseSizeVariantCVA = cva('', { variants: collapseSizeVariant })

export interface IAccordionProps extends VariantProps<typeof collapseVariantCVA> {
    header: ReactNode
    content?: ReactNode
    className?: string
    headerClassName?: string
    panelClassName?: string
    expandIcon?: ((isOpen: boolean) => ReactNode) | undefined
}

export interface ICollapseProps extends Omit<CollapseProps, 'size' | 'expandIcon'>, VariantProps<typeof collapseVariantCVA> {
    headerClassName?: string
    panelClassName?: string
    expandIcon?: ((isOpen: boolean) => ReactNode) | undefined
}

const Accordion = ({ header, className, headerClassName, panelClassName, content, size = 'default', expandIcon }: IAccordionProps) => {
    const [value, _, setValue] = useToggle()

    const [display, setDisplay] = useState('none')
    const [opacity, setOpacity] = useState(0)

    const toggleVisibility = () => {
        if (display === 'none') {
            setDisplay('')

            setTimeout(() => {
                setOpacity(1)
                setValue(true)
            }, 1)
        } else {
            setOpacity(0)
            setValue(false)
            setTimeout(() => {
                setDisplay('none')
            }, 1)
        }
    }

    const panelClass = {
        default: 'px-spacing-m',
        small: 'px-spacing-s',
        large: 'px-spacing-l',
    }

    console.log('size', size)
    return (
        <div
            className={cn(
                'flex flex-col items-center  w-full  transition-all overflow-hidden collapse-border',
                cn(collapseVariantCVA({ size }), collapseSizeVariantCVA({ size: value ? undefined : size })),
                className
            )}
        >
            <div
                onClick={toggleVisibility}
                className={cn('flex items-center  justify-between w-full  ', collapseHeaderVariantCVA({ size }), collapseSizeVariantCVA({ size: size }), headerClassName)}
            >
                <>{header}</>{' '}
                <Flex>
                    {expandIcon ? expandIcon(value) : <Icon fill="surface-primary" name={value ? 'chevron-up' : 'chevron-down'} size="padding-s" className="ml-spacing-xxs" />}
                </Flex>
            </div>
            <div
                className={cn('w-full  overflow-hidden transition-all ')}
                style={{
                    display,
                    opacity,
                    height: value ? 'auto' : 0,
                }}
            >
                <div className={cn(size ? panelClass[size] : '', panelClassName)}>{content}</div>
            </div>
        </div>
    )
}

const CollapseBase = ({ items, className, headerClassName, panelClassName, size, expandIcon, ...props }: ICollapseProps) => {
    return (
        <>
            <div className="collapse-wrapper w-full">
                {items?.map((v) => {
                    return (
                        <Accordion
                            size={size}
                            header={v.label}
                            className={cn(className, 'accordion-collapse')}
                            headerClassName={cn(headerClassName)}
                            panelClassName={cn(panelClassName)}
                            content={v.children}
                            expandIcon={expandIcon}
                        />
                    )
                })}
            </div>
        </>
    )
}

export { CollapseBase as Collapse }
