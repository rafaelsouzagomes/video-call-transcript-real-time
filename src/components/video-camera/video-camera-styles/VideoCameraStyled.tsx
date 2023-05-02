import React, { LegacyRef, ReactElement, useRef } from 'react';
import styles from './videocamperastyles.module.css'
import VideoTools, { VideoToolsProps } from '../video-tools-styled/video-tools-styled';
import VideoCameraChildren from '../video-camera-children/VIdeo-camera-children';
import ChatHistory, { ChatHistoryProps } from '../../chat-history/chat-history';
import { VideoCameraChildrenProps } from './../video-camera-children/VIdeo-camera-children';

export interface VideoCameraStyledProps {
  playsInline: boolean  | undefined;
  muted: boolean  | undefined;
  refCamera: LegacyRef<HTMLVideoElement> | undefined;
  autoPlay: boolean  | undefined;
  videoSize: 'fullScreen' | 'midScreen';
  cameraChildren:LegacyRef<HTMLVideoElement> | undefined;
  videoTools:ReactElement<VideoToolsProps, typeof VideoTools>;
  chatHistory:ReactElement<ChatHistoryProps, typeof ChatHistory>;
  videoCameraChildren: ReactElement<VideoCameraChildrenProps, typeof VideoCameraChildren>;
}

const VideoCameraStyled: React.FC<VideoCameraStyledProps> = ({playsInline, 
                                                              muted, 
                                                              refCamera, 
                                                              videoSize,
                                                              autoPlay,
                                                              videoCameraChildren,
                                                              videoTools,
                                                              chatHistory}: VideoCameraStyledProps) => {
  return (
    <div>
      <div className={ ` ${styles['container']} ${videoSize} `} >
        <video  className={styles['video']}   
                playsInline={playsInline}
                muted={muted} 
                ref={refCamera} 
                autoPlay={autoPlay} />
        {chatHistory}
        {videoCameraChildren}
        {videoTools} 
      </div>
    </div>
  )
}

export default VideoCameraStyled;