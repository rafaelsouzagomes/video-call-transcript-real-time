import React, { LegacyRef } from 'react';
import styles from './video-camera-children.module.css'

export interface VideoCameraChildrenProps{
  refCamera: LegacyRef<HTMLVideoElement> | undefined;
}

const VideoCameraChildren: React.FC<VideoCameraChildrenProps> = ({refCamera}:VideoCameraChildrenProps) => {
  return(
    <div className={ ` ${styles['container']} `} >
      <div className={styles['video-container']}>
        <video  className={styles['video']}   
                playsInline
                muted 
                ref={refCamera} 
                autoPlay />
      </div>
    </div>
  );
}

export default VideoCameraChildren;