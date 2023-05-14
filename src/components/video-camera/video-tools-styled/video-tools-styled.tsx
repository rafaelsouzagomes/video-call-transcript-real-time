import React from 'react';
import styles from './video-tools-styled.module.css'
import audioOfImg from '../../../assets/call-icones/audio-off-chat.svg'
import cameraOffChatImg from '../../../assets/call-icones/camera-off-chat.svg'
import outChatImg from '../../../assets/call-icones/out-chat.svg'
import cameraOn from '../../../assets/call-icones/CameraOn.png';
import ToolsBtnStyled from './tools-btn-styled/tools-btn-styled';
import ChatBalloon from '../../chat-balloon/chat-ballon';
import audioOn from '../../../assets/call-icones/audio-on.png'
import { MyChatContext, MyChatContextProps } from '../VideoCamera';
import { useNavigate } from 'react-router-dom';
import { languagesAvailable } from '../../../model/languagesAvailable';
import { loadData } from '../../../utils/LocalStorageUtil';

const VideoTools: React.FC = ({}) => {
  const  { setLanguage, 
           turnOnVideo, 
           isCameraOn, 
           turnOffVideo}  = React.useContext<MyChatContextProps>(MyChatContext);

  const  { muted, setMuted}  = React.useContext<MyChatContextProps>(MyChatContext);
  const [currentLang, setcurrentLang] = React.useState<number>(findLangSelected(loadData('language')));

  const navigate = useNavigate();

  function findLangSelected(lang:LanguageOption ): number{
    if(setLanguage){
      setLanguage(lang);
    }
    return languagesAvailable.findIndex((item) => item.sigla == lang);
  }

  const onHandleBtnMuted = () => {
    if(setMuted){
      setMuted(!muted);
    }
  }

  const onHandleBtnLanguage = () => {
    let next = currentLang + 1;
    if(next == 3){
      next=0;
      setcurrentLang(next);
    } else{
      setcurrentLang(next);
    }
    if(setLanguage){
      setLanguage(languagesAvailable[next].sigla);
    }
  }

  const onHandleBtnVideo = () => {
    if(isCameraOn){
      if(turnOffVideo){
        turnOffVideo();
      }
    } else{
      if(turnOnVideo){
        turnOnVideo();
      }
    }
  }
  const onHandleBtnOut = () => {
    navigate('/');
  }

  return (
    <div className={styles['tools-container']}>
      <div className={styles['tools-container-video']}>
        <ToolsBtnStyled onClick={onHandleBtnMuted} imageBtnSrc={audioOfImg} imageActive={audioOn} name={'Audio Off'}  active={!muted}   />
        <ToolsBtnStyled onClick={onHandleBtnLanguage} imageBtnSrc={languagesAvailable[currentLang].flag} name={'Language Transcrip'} colorType='opac'  />
        <ToolsBtnStyled onClick={onHandleBtnVideo} imageActive={cameraOn} active={isCameraOn}  imageBtnSrc={cameraOffChatImg} name={'Camera Off'}   />
      </div>
      <div className={styles['tools-container-chat']}>
        <ChatBalloon  type='real-time-balloon-chat' avatarIcon={loadData('avatarIcon')} username={loadData('username')}   />
      </div>
      <div className={styles['tools-container-out']}>
        <ToolsBtnStyled  onClick={onHandleBtnOut}  imageBtnSrc={outChatImg} name={'Out'} colorType='opac' />
      </div>
    </div>
  )
}

export default  VideoTools;