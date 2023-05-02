import React from 'react';
import styles from './video-tools-styled.module.css'

import audioOfImg from '../../../assets/call-icones/audio-off-chat.svg'
import cameraOffChatImg from '../../../assets/call-icones/camera-off-chat.svg'
import outChatImg from '../../../assets/call-icones/out-chat.svg'
import screenShareChatImg from '../../../assets/call-icones/screen-share-chat.svg'
import translateChatImg from '../../../assets/call-icones/translate-chat.svg'
import ToolsBtnStyled from './tools-btn-styled/tools-btn-styled';
import ChatBalloon from '../../chat-balloon/chat-ballon';

export interface VideoToolsProps  {
  isSpeaking: boolean
}

const VideoTools: React.FC<VideoToolsProps> = ({isSpeaking}:VideoToolsProps) => {
  return (
    <div className={styles['tools-container']}>
    <div className={styles['tools-container-video']}>
      <ToolsBtnStyled imageBtnSrc={audioOfImg} name={'Audio Off'} colorType='inative'   />
      <ToolsBtnStyled imageBtnSrc={translateChatImg} name={'Language Transcrip'} colorType='opac'  />
      <ToolsBtnStyled imageBtnSrc={cameraOffChatImg} name={'Camera Off'} colorType='inative'  />
      <ToolsBtnStyled imageBtnSrc={screenShareChatImg} name={'Screen Share Chatting'} colorType='success'   />
    </div>
    <div className={styles['tools-container-chat']}>
      <ChatBalloon isSpeaking={isSpeaking} type='real-time-balloon-chat' />
      {/* <ToolsBtnStyled imageBtnSrc={addUserChatImg} name={'Add new User'} colorType='opac'  />
      <ToolsBtnStyled imageBtnSrc={ballonChatsImg} name={'Open Chat'}  colorType='neutro' /> */}
    </div>
    <div className={styles['tools-container-out']}>
      <ToolsBtnStyled imageBtnSrc={outChatImg} name={'Out'} colorType='opac' />
    </div>
  </div>
  )
}

export default  VideoTools;