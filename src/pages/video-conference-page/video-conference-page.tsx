import React from 'react';
import VideoCamera from '../../components/video-camera/VideoCamera';
import styles from './video-conference-page.module.css';

const VideoConferencePage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <VideoCamera></VideoCamera>
    </div>
  )
}

export default VideoConferencePage;