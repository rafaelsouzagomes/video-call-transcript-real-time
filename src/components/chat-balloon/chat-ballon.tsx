import React from 'react';
import styles from './chat-ballon.module.css'
import ChatBallonStyled from './chat-ballon-styled/chat-ballon-styled';
import WebSpeechTranscript from '../../services/web-speech-transcript/WebSpeechTranscript';
import photoDefault from '../../assets/user/photousertest.png';


export interface ChatBallonProps{
  text ?: string,
  type: 'historic-balloon-chat' | 'real-time-balloon-chat' ,
  avatarIcon ?: string,
  username ?: string

}

const ChatBalloon: React.FC<ChatBallonProps> = ({type, text, avatarIcon, username}: ChatBallonProps) => {

  const avatar: string =  avatarIcon ?? photoDefault;

  const usernameChat: string = username ?? 'user';

  const webSpeechApi = type === 'real-time-balloon-chat' ?
                                    <WebSpeechTranscript />
                                    : undefined;  
  return (<ChatBallonStyled type={type} 
                            transcriptor={webSpeechApi}
                            text={text} 
                            avatar={avatar}
                            username={usernameChat} />);
}

export default ChatBalloon;