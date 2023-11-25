import { cn } from '../../../lib/utils'

const AvatarImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return <img {...props} src={props.src} className={cn('object-cover', props.className)} />
}

AvatarImage.displayName = 'Avatar.Image'
export { AvatarImage }
