import React from 'react';
import styles from './tools-btn-styled.module.css';

export interface ToolsBtnStyledProps {
  imageBtnSrc: string,
  name: string,
  colorType: 'inative' | 'success' | 'neutro' | 'opac' 
}

const ToolsBtnStyled: React.FC<ToolsBtnStyledProps> = ( {imageBtnSrc, name, colorType}:ToolsBtnStyledProps) => {
  return (
    <button className={styles['btn']}>
        <img src={imageBtnSrc} alt={name} className={`${styles['chat-btn']} ${colorType}`}  />
    </button>
  );
}

export default ToolsBtnStyled;