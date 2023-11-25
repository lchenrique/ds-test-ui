import { Avatar } from 'antd'
import { GroupProps } from 'antd/es/avatar'
import React, { createContext, useContext } from 'react'
import { IAvatarProps } from '.'

const AvatarGroupContext = createContext<IAvatarGroupProps>({} as IAvatarGroupProps)

export interface IAvatarGroupProps extends Omit<GroupProps, 'size'>, Pick<IAvatarProps, 'size'> {}

export const AvatarGroup: React.FC<IAvatarGroupProps> = ({ size, ...props }) => {
    return (
        <AvatarGroupContext.Provider value={props}>
            <Avatar.Group
                {...props}
                className="flex items-center"
                maxStyle={{
                    cursor: 'pointer',
                    borderWidth: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    ...props?.maxStyle,
                }}
            >
                {props.children}
            </Avatar.Group>
        </AvatarGroupContext.Provider>
    )
}

AvatarGroup.displayName = 'Avatar.Group'

export function useAvatarGroupContext() {
    return useContext<IAvatarGroupProps>(AvatarGroupContext)
}
