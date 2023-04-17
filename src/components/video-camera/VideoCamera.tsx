import React, {useRef,useState} from 'react';
import VideoCameraStyled from './video-camera-styles/VideoCameraStyled';

export interface VideoCameraProps {

}

const VideoCamera: React.FC = ({}: VideoCameraProps) => {
  const myCamera = useRef<HTMLVideoElement>(null)

  navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
    if(myCamera.current){
      myCamera.current.srcObject = stream
    }
  })

  return (
    <VideoCameraStyled playsInline muted refCamera={myCamera} autoPlay />
  );
}

export default VideoCamera;