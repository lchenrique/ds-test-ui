import { cva } from 'class-variance-authority'
import { useAvatarContext } from '.'
import { cn } from '../../../lib/utils'

const subText = {
    text: {
        default: 'text-sm',
        small: 'text-sm',
        xSmall: 'text-xs',
        large: 'text-base',
        xLarge: 'text-md',
    },
    disabled: {
        true: 'text-@text-disabled-secondary',
    },
}

const subVariant = cva('text-variation-@text-light--700  m-0', {
    variants: subText,
    defaultVariants: { text: 'default' },
})

const AvatarSub: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => {
    const { size, disabled } = useAvatarContext()

    return (
        <p {...props} id="ado-avatar-sub" className={cn(subVariant({ text: size, disabled }), props.className)}>
            {props.children}
        </p>
    )
}

AvatarSub.displayName = 'Avatar.Sub'

export { AvatarSub }
