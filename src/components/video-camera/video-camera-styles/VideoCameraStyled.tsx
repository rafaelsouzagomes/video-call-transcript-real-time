import React, { LegacyRef, ReactElement, useRef } from 'react';
import styles from './videocamperastyles.module.css'
import VideoTools from '../video-tools-styled/video-tools-styled';
import VideoCameraChildren from '../video-camera-children/VIdeo-camera-children';
import ChatHistory, { ChatHistoryProps } from '../../chat-history/chat-history';

export interface VideoCameraStyledProps {
  playsInline: boolean  | undefined;
  muted: boolean  | undefined;
  refCamera: LegacyRef<HTMLVideoElement> | undefined;
  autoPlay: boolean  | undefined;
  videoSize: 'fullScreen' | 'midScreen';
  withTools?: boolean,
  isSpeaking: boolean,
  cameraChildren:LegacyRef<HTMLVideoElement> | undefined;
  chatHistory:ReactElement<ChatHistoryProps, typeof ChatHistory>;
}

const VideoCameraStyled: React.FC<VideoCameraStyledProps> = ({playsInline, 
                                                              muted, 
                                                              refCamera, 
                                                              videoSize,
                                                              autoPlay,
                                                              withTools,
                                                              cameraChildren,
                                                              isSpeaking,
                                                              chatHistory}: VideoCameraStyledProps) => {
   withTools = withTools ?? false ;


   

  return (
    <div>
      <div className={ ` ${styles['container']} ${videoSize} `} >
        <video  className={styles['video']}   
                playsInline={playsInline}
                muted={muted} 
                ref={refCamera} 
                autoPlay={autoPlay} />
                
          {chatHistory}

          <VideoCameraChildren refCamera={cameraChildren}  />
        {withTools && <VideoTools isSpeaking={isSpeaking} /> }
      </div>
    </div>
  )
}

export default VideoCameraStyled;