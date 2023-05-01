import React, { useState } from 'react';
import VideoCamera from '../../components/video-camera/VideoCamera';
import ChatBalloon from '../../components/chat-balloon/chat-ballon';
import styles from './video-conference-page.module.css';

const VideoConferencePage: React.FC = () => {

  return (
    <div className={styles['container']}>
      <VideoCamera></VideoCamera>
    </div>
  )
}

export default VideoConferencePage;