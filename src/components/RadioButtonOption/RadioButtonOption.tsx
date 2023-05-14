import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface RadioButtonOptionProps{
  label: string,
  value: string,
  name: string,
  checked: boolean,
  onChange: (x:any)=> void;
  icon:ReactElement<any, any>;
  withLabels  ?: boolean
}

const RadioButtonOption: React.FC<RadioButtonOptionProps> = ({ icon,
                                                               label, 
                                                               value,
                                                               name, 
                                                               checked, 
                                                               onChange,
                                                               withLabels }:RadioButtonOptionProps) => {
  
  const showlabel = withLabels ?? false;
  
  const RadioButton = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    input[type='radio'] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
  `;
  const RadioButtonLabel = styled.span`
    font-size: 16px;
    color: #333;
  `;
return (
  <RadioButton>
    <input type="radio" value={value} name={name} checked={checked} onChange={onChange} />
    {icon}
    {showlabel && <RadioButtonLabel>{label}</RadioButtonLabel> }
  </RadioButton>
  );
}
export default RadioButtonOption;


