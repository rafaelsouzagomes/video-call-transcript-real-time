import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import ChatHistoryStyles from './chat-history-styles/chat-history-styles';
import ChatBalloon, { ChatBallonProps } from '../chat-balloon/chat-ballon';

export interface ChatHistoryProps {

}

// const MyContext = React.createContext<ReactElement<ChatBallonProps, FC<ChatBallonProps>>>(chatMessage);
const MyChatContext = React.createContext<string>('');


const ChatHistory: React.FC<ChatHistoryProps> = ({}:ChatHistoryProps) => {
  
  const [currentText, setCurrentText] = useState<string>('');
  const intervalIdRef = useRef<number|null>(null);
  const messages:string[] = ['ola', 'tchau', 'tudo bem', 'estou bem sim', 'vamos conversar','teste', 'teste2', 'teste3'];
  const [contador, setContador] = useState<number>(0);
  const [chatMessage, setChatMessage] = useState<ReactElement<ChatBallonProps,FC<ChatBallonProps>>>(
                                          <ChatBalloon isSpeaking={false} type='historic-balloon-chat' text='ola' />);
  
  useEffect(() => {
    intervalIdRef.current! = setInterval(() => {
      let cont = contador;
      if(cont==7){
        setContador(0);
      }else {
        setContador(cont+1);
      }
      setCurrentText(messages[contador]);
    }, 4000);

      return () => {
        clearInterval(intervalIdRef.current!);
      };
 
  }, [contador])
  

  return (
    <MyChatContext.Provider value={currentText}>
    <ChatHistoryStyles
      
      />
    </MyChatContext.Provider>
  );

}

export { MyChatContext as MyContext };
export default ChatHistory;