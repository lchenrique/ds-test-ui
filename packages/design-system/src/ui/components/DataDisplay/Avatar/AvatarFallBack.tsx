import { useAvatarContext } from '.'
import { cn } from '../../../lib/utils'
import { textVariant } from './styles'

const AvatarFallBack: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, children, ...rest } = props
    const { name, size, disabled } = useAvatarContext()

    const first = String(name)?.split(' ')[0]
    const second = String(name)?.split(' ')[1]
    return (
        <div {...rest} id="ado-avatar-fallback" data-size={size || 'default'} className={cn(textVariant({ text: size, disabled }), 'uppercase', className)}>
            {props.children || `${first?.charAt(0)}${second ? second.charAt(0) : ''}`}
        </div>
    )
}

AvatarFallBack.displayName = 'Avatar.FallBack'

export { AvatarFallBack }
