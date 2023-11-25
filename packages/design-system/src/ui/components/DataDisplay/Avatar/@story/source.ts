export const importCode = `#### First import Avatar component:
~~~tsx
import { Avatar, IAvatarProps } from '@adopets/react'`;

export const avatarCode = `#### You can customize the component separately:
~~~tsx
<>
  <Avatar {...args} tooltip={{ title: args["tooltip.title"] }} />
  <Avatar name="Home" fallback={<Icon fill="surface-primary" name={"home"} />}>
    <Avatar.Sub className='text-@surface-primary'>sweet home</Avatar.Sub>
  </Avatar>
</>`;

export const avatarGroupCode = `#### Exemple:
~~~tsx
<Avatar.Group maxCount={5} maxPopoverTrigger="click" >
    <Avatar  {...args}  />
    <Avatar  {...args}  />
    <Avatar  {...args}  />
    <Avatar  {...args}  />
</Avatar.Group>`;
