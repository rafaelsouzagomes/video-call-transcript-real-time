import React, { LegacyRef } from 'react';
import styles from './videocamperastyles.module.css'
import VideoTools from '../video-tools-styled/video-tools-styled';

export interface VideoCameraStyledProps {
  playsInline: boolean  | undefined;
  muted: boolean  | undefined;
  refCamera: LegacyRef<HTMLVideoElement> | undefined;
  autoPlay: boolean  | undefined;
}

const VideoCameraStyled: React.FC<VideoCameraStyledProps> = ({playsInline, 
                                                              muted, 
                                                              refCamera, 
                                                              autoPlay}: VideoCameraStyledProps) => {
  
  return (
    <div>
      <div className={styles['container']} >
        <video  className={styles['video']}   
                playsInline 
                muted 
                ref={refCamera} 
                autoPlay />
        <VideoTools />
      </div>
    </div>
  )
}

export default VideoCameraStyled;