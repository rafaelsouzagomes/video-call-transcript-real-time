import React, { ReactElement } from 'react';
import styles from './chat-ballon-styled.module.css'

interface ChatBallonStyledProps {
  text?: string;
  type: 'historic-balloon-chat' | 'real-time-balloon-chat' 
  transcriptor: ReactElement<any, any> | undefined,
  avatar: string;
  username: string;
}

const ChatBallonStyled: React.FC<ChatBallonStyledProps> = ({type,transcriptor, text, avatar, username}:ChatBallonStyledProps, ) => {

  type = type ?? 'historic-balloon-chat';
  
  return (
    <div className={` ${styles['container']} ${type}`}>
      <div className={styles['photo-user']} style={type === 'real-time-balloon-chat' ? {maxWidth:'10%'}: {} }>
        <img src={avatar} alt="ft user" />
      </div>
      <div className={styles['content']}>
        <h2> {username}</h2>
        <p className={styles['chat-message']}>
          {transcriptor ? transcriptor : text}
        </p>
      </div>
    </div>);
}

export default ChatBallonStyled;