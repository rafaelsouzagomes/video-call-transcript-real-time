import React from 'react';
import { MyChatContext, MyChatContextProps } from '../VideoCamera';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';

const ChatReciever: React.FC = () => {

  const  { setTranscript, setDataMessage}  = React.useContext<MyChatContextProps>(MyChatContext);
  const { lastMessage } = useWebSocket('ws://localhost:3000');

  React.useEffect(() => {
    if(lastMessage?.data){
      const dataMessage = JSON.parse(lastMessage?.data);
      const message:string = dataMessage.text ?? '';
      if(setTranscript){
        setTranscript(message);
      }
      if(setDataMessage){
        setDataMessage(dataMessage);
      }
    }
  }, [lastMessage]);
  return (<></>);
}

export default ChatReciever;