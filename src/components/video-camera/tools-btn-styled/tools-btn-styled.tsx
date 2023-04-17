import React from 'react';
import styles from './tools-btn-styled.module.css';

export interface ToolsBtnStyledProps {
  imageBtnSrc: string,
  name: string
}

const ToolsBtnStyled: React.FC<ToolsBtnStyledProps> = ( {imageBtnSrc, name}:ToolsBtnStyledProps) => {
  return (
    <button>
        <img src={imageBtnSrc} alt={name} className={styles['chat-btn']}  />
    </button>
  );
}

export default ToolsBtnStyled;