import React from 'react';
import styles from './tools-btn-styled.module.css';

export interface ToolsBtnStyledProps {
  imageBtnSrc: string,
  name: string,
  colorType?: 'inative' | 'success' | 'neutro' | 'opac',
  active?: boolean,
  imageActive ?: string,
  onClick: () => void
}

const ToolsBtnStyled: React.FC<ToolsBtnStyledProps> = ( {imageBtnSrc, name, colorType, active,imageActive, onClick}:ToolsBtnStyledProps) => {
  
  active  = active ?? false;
  let backgroundColor = active? 'opac': 'inative';
  backgroundColor = colorType ?? backgroundColor;
  return (
    <button className={styles['btn']} onClick={onClick}>
        <img src={ active ?imageActive:imageBtnSrc} alt={name} className={`${styles['chat-btn']} ${backgroundColor}`}  />
    </button>
  );
}

export default ToolsBtnStyled;