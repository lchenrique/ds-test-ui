import { TooltipProps } from 'antd'
import { AvatarProps } from 'antd/lib'
import { VariantProps } from 'class-variance-authority'
import { ReactNode, createContext, useContext } from 'react'
import { Tooltip } from '../..'
import { cn, getChildren } from '../../../lib/utils'
import { AvatarFallBack } from './AvatarFallBack'
import { AvatarGroup, useAvatarGroupContext } from './AvatarGroup'
import { AvatarImage } from './AvatarImage'
import { AvatarName } from './AvatarName'
import { AvatarSub } from './AvatarSub'
import { avatarVariants, flexRow, flexSide, loaderVariants } from './styles'

export interface IAvatarProps extends Omit<AvatarProps, 'size' | 'shape'>, VariantProps<typeof avatarVariants> {
    name?: string
    sub?: string
    loading?: boolean
    fallback?: ReactNode
    placement?: 'left' | 'right'
    src?: string
    tooltip?: TooltipProps
    showInfo?: boolean
}

const AvatarContext = createContext<IAvatarProps>({} as IAvatarProps)

const Avatar = ({ showInfo = true, ...props }: IAvatarProps) => {
    const { children: hasGroup } = useAvatarGroupContext()

    const getImage = () => {
        return getChildren(props.children, 'Avatar.Image')?.props?.src
    }

    const getName = () => {
        return getChildren(props.children, 'Avatar.Name')
    }

    const getFallback = () => {
        return getChildren(props.children, 'Avatar.FallBack') || (getName() && <AvatarFallBack>{(getName()?.props.children[0] as string)?.toUpperCase()}</AvatarFallBack>)
    }

    const getSub = () => {
        return getChildren(props.children, 'Avatar.Sub')
    }

    const flexClass = props.placement && flexRow[props.placement]
    const sideClass = props.placement && flexSide[props.placement]
    const avatarWrapperClass = cn('flex justify-start items-center gap-2 overflow-hidden', flexClass, props.disabled ? 'cursor-not-allowed' : '')
    const avatarUrl = props?.src || getImage()

    return (
        <div>
            <AvatarContext.Provider value={props}>
                <span className={avatarWrapperClass}>
                    <Tooltip {...props.tooltip}>
                        <div
                            className={cn(
                                loaderVariants({
                                    size: props.size,
                                    shape: props.shape || 'square',
                                })
                            )}
                        >
                            {props.loading && <div className="loader animate-rotate z-50 m-1"></div>}
                            <div
                                className={cn(
                                    avatarVariants({
                                        shape: props.shape || 'square',
                                        size: props.size,
                                        disabled: props.disabled,
                                    }),
                                    'text-@icon-neutral, p-0',
                                    hasGroup ? 'border-[2px] border-solid absolute z-[0]' : '',
                                    props.className
                                )}
                                style={props?.style}
                            >
                                {avatarUrl ? (
                                    <img
                                        data-id="ado-avatar"
                                        className={cn(
                                            avatarVariants({
                                                shape: props.shape || 'square',
                                                size: props.size,
                                                disabled: props.disabled,
                                            }),
                                            'text-@icon-neutral, p-0',
                                            hasGroup ? 'border-[2px] border-solid absolute z-[0]' : '',
                                            props.className
                                        )}
                                        src={avatarUrl}
                                        data-size={props.size || 'default'}
                                    />
                                ) : (
                                    getFallback() || <AvatarFallBack>{props?.fallback}</AvatarFallBack>
                                )}
                            </div>
                        </div>
                    </Tooltip>

                    {!hasGroup && (getName() || getSub() || props.name || props.sub) && showInfo && (
                        <div id="info" className={cn('flex flex-col justify-center items-start', sideClass, props.disabled ? 'cursor-not-allowed' : '')}>
                            {getName() || <AvatarName>{props.name}</AvatarName>}
                            {getSub() || (props.sub && <AvatarSub>{props.sub}</AvatarSub>)}
                        </div>
                    )}
                </span>
            </AvatarContext.Provider>
        </div>
    )
}

Avatar.Fallback = AvatarFallBack
Avatar.Image = AvatarImage
Avatar.Name = AvatarName
Avatar.Sub = AvatarSub
Avatar.Group = AvatarGroup
Avatar.id = 'ado-avatar'

Avatar.displayName = 'Avatar'

export { Avatar }

export function useAvatarContext() {
    return useContext<IAvatarProps>(AvatarContext)
}
