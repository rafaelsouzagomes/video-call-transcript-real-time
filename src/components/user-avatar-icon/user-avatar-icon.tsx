import React from 'react';
import { defaultThemes } from '../../themes';
import styled from 'styled-components';

export interface UserAvatarIconProps{
  avatar:string,
  checked: boolean
}
interface RadioButtonIconProps {
  checked: boolean;
  defaultThemes: any;
}

const UserAvatarIcon: React.FC<UserAvatarIconProps> = ({avatar,checked}:UserAvatarIconProps) => {

  const UserSettingsAvatar =styled.div<RadioButtonIconProps>`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-color: ${({ checked, defaultThemes }) =>
      checked
        ?'#4caf50'
        : defaultThemes.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
  `;

  const UserSettingsAvatarAvatar =styled.img`
    width: 5.5rem;
  `;
  return(
    <UserSettingsAvatar checked={checked} defaultThemes={defaultThemes} >
      <UserSettingsAvatarAvatar src={avatar} />
    </UserSettingsAvatar>
  )
}

export default UserAvatarIcon;