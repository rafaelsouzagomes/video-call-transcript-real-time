import React, { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './chat-history-styles.module.css';
import { MyChatContext, MyChatContextProps } from '../video-camera/VideoCamera';  
import ChatBalloon from './../chat-balloon/chat-ballon';

const ChatHistory: React.FC = () => {
  
  const [chat1, setChat1 ] = useState<BallonPosition>({active:false, positionRef:0, text:'', transition: 'bottom 1s ease-in-out'});
  const [chat2, setChat2 ] = useState<BallonPosition>({active:false, positionRef:0, text:'', transition: 'bottom 1s ease-in-out'});
  const [chat3, setChat3 ] = useState<BallonPosition>({active:false, positionRef:0, text:'', transition: 'bottom 1s ease-in-out'});
  const [chat4, setChat4 ] = useState<BallonPosition>({active:false, positionRef:0, text:'', transition: 'bottom 1s ease-in-out'});
  const [chat5, setChat5 ] = useState<BallonPosition>({active:false, positionRef:0, text:'', transition: 'bottom 1s ease-in-out'});
  
  const chat1ElementRef = useRef<HTMLDivElement>(null);
  const chat2ElementRef = useRef<HTMLDivElement>(null);
  const chat3ElementRef = useRef<HTMLDivElement>(null);
  const chat4ElementRef = useRef<HTMLDivElement>(null);
  const chat5ElementRef = useRef<HTMLDivElement>(null);

  const chats: chat[]  = [{ chat:chat1, setChat:setChat1,elementRef:chat1ElementRef}, 
                          {chat:chat2, setChat:setChat2, elementRef:chat2ElementRef},
                          {chat:chat3, setChat:setChat3, elementRef:chat3ElementRef},
                          {chat:chat4, setChat:setChat4, elementRef:chat4ElementRef},
                          {chat:chat5, setChat:setChat5, elementRef:chat5ElementRef}];

  const positionsBallon = ['0rem', '6rem', '12rem', '18rem', '24rem', '30rem'];

  const  {transcriptText, dataMessage}  = React.useContext<MyChatContextProps>(MyChatContext);
  
  useEffect(() => {
    if(transcriptText.length > 0){
      moveChatsUp();
      addNewMessageToChatAvailable();
    }
  }, [transcriptText])
  
  function moveChatsUp(callback?: any): void {
    chats.forEach((chat) => {
      const currentChat = chat.chat;
      if (currentChat.active) {
        const newPosition = currentChat.positionRef + 1;
        if (newPosition >= positionsBallon.length - 1) {
          chat.setChat({ active: false, positionRef: 0, text: '', transition: 'bottom 1s ease-in-out'});
        } else {
          chat.setChat({ active: true, positionRef: newPosition, text: currentChat.text , transition: 'bottom 1s ease-in-out', avatarIcon: currentChat.avatarIcon, userName: currentChat.userName});
        }
      }
    });
  }

  function addNewMessageToChatAvailable(): void {
    let messagedAdded = false;
    chats.forEach((chat) => {
      const currentChat = chat.chat;
      if (currentChat.active == false && messagedAdded == false) {
        chat.setChat({ active: true, positionRef: 0, text: transcriptText, transition: 'bottom 1s ease-in-out', avatarIcon: dataMessage?.avatarIcon, userName: dataMessage?.username });
        messagedAdded = true;
      }
    });
    if(messagedAdded==false){
      const maxPositionRefObj:chat = chats.sort((a, b) => b.chat.positionRef - a.chat.positionRef)[0];
      if(maxPositionRefObj.elementRef.current){
        maxPositionRefObj.elementRef.current.classList.add(styles['animation-teste']);
      }
      maxPositionRefObj.setChat({active:false, positionRef:0, text:transcriptText, transition: 'none'});
      moveChatsUp();
      maxPositionRefObj.setChat({active:true, positionRef:0, text:transcriptText, transition: 'none', avatarIcon: dataMessage?.avatarIcon, userName: dataMessage?.username });
    }
  }

  const handleAnimationEnd = (element: RefObject<HTMLDivElement>) => {
    if( element.current){
      element.current.classList.remove(styles['animation-teste']);
    }
  };
  return (
    <div className={styles['container']}  > 
      <div ref={chat1ElementRef}  onAnimationEnd={() =>handleAnimationEnd(chat1ElementRef)}  className={`${styles.message} ${styles['animation-teste']}`} style={{bottom:positionsBallon[chat1.positionRef], transition:chat1.transition, display: chat1.active?'block':'none'}}>  
        <ChatBalloon type='historic-balloon-chat' text={chat1.text} username={chat1.userName} avatarIcon={chat1.avatarIcon} />
      </div>
      <div ref={chat2ElementRef}  onAnimationEnd={() =>handleAnimationEnd(chat2ElementRef)}  className={`${styles.message} ${styles['animation-teste']}`} style={{bottom:positionsBallon[chat2.positionRef],transition:chat2.transition, display: chat2.active?'block':'none'}}>  
        <ChatBalloon type='historic-balloon-chat' text={chat2.text} username={chat2.userName} avatarIcon={chat2.avatarIcon} />
      </div>
      <div ref={chat3ElementRef}  onAnimationEnd={() =>handleAnimationEnd(chat3ElementRef)}  className={`${styles.message} ${styles['animation-teste']}`} style={{bottom:positionsBallon[chat3.positionRef],transition:chat3.transition, display: chat3.active?'block':'none'}}>  
        <ChatBalloon  type='historic-balloon-chat' text={chat3.text} username={chat3.userName} avatarIcon={chat3.avatarIcon} />
      </div>
      <div ref={chat4ElementRef}  onAnimationEnd={() =>handleAnimationEnd(chat4ElementRef)}  className={`${styles.message} ${styles['animation-teste']}`} style={{bottom:positionsBallon[chat4.positionRef],transition:chat4.transition, display: chat4.active?'block':'none'}}>  
        <ChatBalloon  type='historic-balloon-chat' text={chat4.text} username={chat4.userName} avatarIcon={chat4.avatarIcon} />
      </div>
      <div ref={chat5ElementRef}  onAnimationEnd={() =>handleAnimationEnd(chat5ElementRef)}  className={`${styles.message} ${styles['animation-teste']}`} style={{bottom:positionsBallon[chat5.positionRef],transition:chat5.transition, display: chat5.active?'block':'none'}}>  
        <ChatBalloon type='historic-balloon-chat' text={chat5.text} username={chat5.userName} avatarIcon={chat5.avatarIcon} />
      </div>
    </div>
  );
}

interface BallonPosition{
  positionRef:number,
  active: boolean,
  transition: 'bottom 1s ease-in-out' | 'none'
  text: string,
  avatarIcon ?: string,
  userName?:string
}
interface chat {
 chat:BallonPosition;
 setChat:Dispatch<SetStateAction<BallonPosition>>,
 elementRef: RefObject<HTMLDivElement>
}

export default ChatHistory;