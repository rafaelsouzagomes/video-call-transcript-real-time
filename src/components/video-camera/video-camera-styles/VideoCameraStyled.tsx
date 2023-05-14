import React, { LegacyRef, ReactElement, useRef } from 'react';
import styles from './videocamperastyles.module.css'
import VideoTools  from '../video-tools-styled/video-tools-styled';
import VideoCameraChildren from '../video-camera-children/VIdeo-camera-children';
import ChatHistory from '../../chat-history/chat-history';
import { VideoCameraChildrenProps } from './../video-camera-children/VIdeo-camera-children';
import ChatReciever from '../chat-reciever/chat-reciever';

export interface VideoCameraStyledProps {
  playsInline: boolean  | undefined;
  muted: boolean  | undefined;
  refCamera: LegacyRef<HTMLVideoElement> | undefined;
  autoPlay: boolean  | undefined;
  videoSize: 'fullScreen' | 'midScreen';
  cameraChildren:LegacyRef<HTMLVideoElement> | undefined;
  videoTools:ReactElement<any, typeof VideoTools>;
  chatHistory:ReactElement<any, typeof ChatHistory>;
  videoCameraChildren: ReactElement<VideoCameraChildrenProps, typeof VideoCameraChildren>;
  chatReciever:ReactElement<any, typeof ChatReciever>;
}

const VideoCameraStyled: React.FC<VideoCameraStyledProps> = ({playsInline, 
                                                              muted, 
                                                              refCamera, 
                                                              videoSize,
                                                              autoPlay,
                                                              videoCameraChildren,
                                                              videoTools,
                                                              chatHistory,
                                                              chatReciever}: VideoCameraStyledProps) => {
  return (
    <div>
      <div className={ ` ${styles['container']} ${videoSize} `} >
        <video  className={styles['video']}   
                playsInline={playsInline}
                muted={true} 
                ref={refCamera} 
                autoPlay={autoPlay} />
        {chatHistory}
        {videoCameraChildren}
        {videoTools} 
      </div>
      {chatReciever}
    </div>
  )
}

export default VideoCameraStyled;