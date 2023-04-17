import React from 'react';
import VideoCamera from '../../components/video-camera/VideoCamera';
import WebSpeechTranscript from '../../services/web-speech-transcript/WebSpeechTranscript';

const VideoConferencePage: React.FC = () => {
  
  return (
    <div>
      <VideoCamera></VideoCamera>
    
      <div style={{display:'block', position:'relative', top:100}}>
        <WebSpeechTranscript language='en-US' />
      </div>
    </div>
  )
}

export default VideoConferencePage;