import React from 'react';
import styles from './video-tools-styled.module.css'

import addUserChatImg from '../../../assets/call-icones/add-user-chat.svg'
import audioOfImg from '../../../assets/call-icones/audio-off-chat.svg'
import ballonChatsImg from '../../../assets/call-icones/ballon-chat.svg'
import cameraOffChatImg from '../../../assets/call-icones/camera-off-chat.svg'
import outChatImg from '../../../assets/call-icones/out-chat.svg'
import screenShareChatImg from '../../../assets/call-icones/screen-share-chat.svg'
import translateChatImg from '../../../assets/call-icones/translate-chat.svg'
import ToolsBtnStyled from '../tools-btn-styled/tools-btn-styled';

const VideoTools: React.FC = () => {
  return (
    <div className={styles['tools-container']}>
    <div className={styles['tools-container-video']}>
      <ToolsBtnStyled imageBtnSrc={audioOfImg} name={'Audio Off'}   />
      <ToolsBtnStyled imageBtnSrc={translateChatImg} name={'Language Transcrip'}   />
      <ToolsBtnStyled imageBtnSrc={cameraOffChatImg} name={'Camera Off'}   />
      <ToolsBtnStyled imageBtnSrc={screenShareChatImg} name={'Screen Share Chatting'}   />
    </div>
    <div className={styles['tools-container-chat']}>
      <ToolsBtnStyled imageBtnSrc={addUserChatImg} name={'Add new User'}   />
      <ToolsBtnStyled imageBtnSrc={ballonChatsImg} name={'Open Chat'}   />
    </div>
    <div className={styles['tools-container-out']}>
      <ToolsBtnStyled imageBtnSrc={outChatImg} name={'Out'}   />
    </div>
  </div>
  )
}

export default  VideoTools;