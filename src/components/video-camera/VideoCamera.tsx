import React, {useEffect, useRef,useState} from 'react';
import VideoCameraStyled from './video-camera-styles/VideoCameraStyled';
import DetectorSpeaking from './detector-speaking/detector-speaking';
import ChatHistory from '../chat-history/chat-history';

export interface VideoCameraProps {
}

const VideoCamera: React.FC<VideoCameraProps> = ({}: VideoCameraProps) => {
  const [audioLevel, setAudioLevel] = useState(0);
  const myCamera = useRef<HTMLVideoElement>(null);
  const cameraChildren = useRef<HTMLVideoElement>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      identifyIfSomeoneIsSpeaking(stream);
      setUpVideoConfigs(stream);
     
    });   
  }, []);

  function setUpVideoConfigs(stream: MediaStream){
    if(myCamera.current && cameraChildren.current){
      myCamera.current.srcObject = stream;
      cameraChildren.current.srcObject = stream;
    }
  }

  function identifyIfSomeoneIsSpeaking(stream: MediaStream) {
    const soundMinConsideredSpeaking: number = 70;
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const loop = () => {
      requestAnimationFrame(loop);
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((acc, val) => acc + val) / bufferLength;
      setAudioLevel(average);
      
      if(average > soundMinConsideredSpeaking){
        setIsSpeaking(true);
      }
      if(average < 57){
        setIsSpeaking(false);
      }
    };
    loop();
  }
    
  return (<>
    {/* {isSpeaking ? 'falando': 'nao está falando'  }
    <div>
      {audioLevel}
    </div> */}
    <VideoCameraStyled playsInline  
                       muted 
                       refCamera={myCamera} 
                       autoPlay 
                       videoSize='fullScreen' 
                       withTools 
                       isSpeaking={isSpeaking}
                       cameraChildren={cameraChildren}
                       chatHistory={<ChatHistory />}
                       />
  </>
  );
}

export default VideoCamera;