import React from 'react';
import styled from 'styled-components';

export interface FlagIconProps {
  img: string;
  label:string;
  checked: boolean;
}

const FlagIcon: React.FC<FlagIconProps> = ({img,label, checked}:FlagIconProps) => {

  const Flag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
    border-width: 4px;
    border-style: solid;
    border-color: ${checked ? '#4caf50': 'transparent'};
    border-radius: 20px;
    width: 10rem;
  `;
  const FlagImage = styled.img`
    width: 4rem;
    height: 3.5rem;
  `;
  const FlagLangName = styled.div`
    color:gray;
  `;
  return (
    <Flag>
      <FlagImage src={img} />
      <FlagLangName> {label} </FlagLangName>
    </Flag>
  );
}

export default FlagIcon;