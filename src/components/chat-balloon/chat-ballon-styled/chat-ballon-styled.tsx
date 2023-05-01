import React, { ReactElement } from 'react';
import styles from './chat-ballon-styled.module.css'
import photoTest from '../../../assets/user/photousertest.png'
import WebSpeechTranscript from '../../../services/web-speech-transcript/WebSpeechTranscript';

interface ChatBallonStyledProps {
  text?: string;
  type: 'historic-balloon-chat' | 'real-time-balloon-chat' 
  transcriptor: ReactElement<any, any> | undefined
}

const ChatBallonStyled: React.FC<ChatBallonStyledProps> = ({type,transcriptor, text}:ChatBallonStyledProps) => {

  type = type ?? 'historic-balloon-chat';
  
  return (
    <div className={` ${styles['container']} ${type}`}>
      <div className={styles['photo-user']}>
        <img src={photoTest} alt="ft user" />
      </div>
      <div className={styles['content']}>
        <h2> Devon Hawkins</h2>
        <p className={styles['chat-message']}>
          {transcriptor ? transcriptor : text}
        </p>
      </div>
    </div>);
}

export default ChatBallonStyled;