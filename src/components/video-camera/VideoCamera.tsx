import React, {useEffect, useRef,useState} from 'react';
import VideoCameraStyled from './video-camera-styles/VideoCameraStyled';
import DetectorSpeaking from './detector-speaking/detector-speaking';
import ChatHistory from '../chat-history/chat-history';
import VideoTools from './video-tools-styled/video-tools-styled';
import VideoCameraChildren from './video-camera-children/VIdeo-camera-children';

export interface VideoCameraProps {
}

export interface MyChatContextProps {
  setTranscript?: React.Dispatch<React.SetStateAction<string>>,
  transcriptText: string,
  isSpeaking: boolean
}
const MyChatContext = React.createContext<MyChatContextProps>({transcriptText:'', isSpeaking:false});

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
    const soundMinConsideredSpeaking: number = 20;
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
  
  //Texto baloes para teste..
  const [transcript, setTranscript] = useState<string>('');
  const intervalIdRef = useRef<number|null>(null);
  const messages:string[] = ['ola', 'tchau', 'tudo bem', 'estou bem sim', 'vamos conversar','teste', 'teste2', 'teste3'];
  const [contador, setContador] = useState<number>(0);

  // useEffect(() => {
  //   intervalIdRef.current! = setInterval(() => {
  //     let cont = contador;
  //     if(cont==7){
  //       setContador(0);
  //     }else {
  //       setContador(cont+1);
  //     }
  //     setTranscript(messages[contador]);
  //   }, 4000);

  //     return () => {
  //       clearInterval(intervalIdRef.current!);
  //     };
 
  // }, [contador])
    
  return (
      
    <MyChatContext.Provider value={{transcriptText:transcript, setTranscript:setTranscript, isSpeaking:isSpeaking}}>
      
         {isSpeaking ? 'falando': 'nao está falando'  }
    <div>
      {audioLevel}
    </div> 
      <VideoCameraStyled playsInline  
                        muted 
                        refCamera={myCamera} 
                        autoPlay 
                        videoSize='fullScreen' 
                        videoCameraChildren={ <VideoCameraChildren refCamera={cameraChildren}  />}
                        videoTools={<VideoTools isSpeaking={isSpeaking} />} 
                        cameraChildren={cameraChildren}
                        chatHistory={<ChatHistory />}
                        />
    </MyChatContext.Provider>
  );
}


export default VideoCamera;

export { MyChatContext };
    {/* {isSpeaking ? 'falando': 'nao está falando'  }
    <div>
      {audioLevel}
    </div> */}