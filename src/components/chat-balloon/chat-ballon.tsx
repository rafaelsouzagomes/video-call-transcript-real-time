import React from 'react';
import styles from './chat-ballon.module.css'
import ChatBallonStyled from './chat-ballon-styled/chat-ballon-styled';
import WebSpeechTranscript from '../../services/web-speech-transcript/WebSpeechTranscript';

export interface ChatBallonProps{
  text ?: string,
  type: 'historic-balloon-chat' | 'real-time-balloon-chat' ,
  isSpeaking: boolean

}

const ChatBalloon: React.FC<ChatBallonProps> = ({type, isSpeaking, text}: ChatBallonProps) => {

  const webSpeechApi = type === 'real-time-balloon-chat' ?
                                    <WebSpeechTranscript language='en-US' isSpeaking={isSpeaking} />
                                    : undefined;  
  return (<ChatBallonStyled type={type} 
                            transcriptor={webSpeechApi}
                            text={text} />);
}

export default ChatBalloon;