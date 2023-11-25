import { cva } from 'class-variance-authority'
import { useAvatarContext } from '.'
import { cn } from '../../../lib/utils'

const nameText = {
    text: {
        default: 'text-md',
        small: 'text-sm',
        xSmall: 'text-xs',
        large: 'text-md',
        xLarge: 'text-lg',
    },
    disabled: {
        true: 'text-@text-disabled-secondary',
    },
}
const nameVariant = cva('text-@text-plain dark:text-variation-@text-light--400 m-0 whitespace-nowrap', { variants: nameText, defaultVariants: { text: 'default' } })

const AvatarName: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
    const { size, disabled } = useAvatarContext()

    return (
        <h3 {...props} id="ado-avatar-name" className={cn(nameVariant({ text: size, disabled, className: props.className }))}>
            {props.children}
        </h3>
    )
}

AvatarName.displayName = 'Avatar.Name'

export { AvatarName }
