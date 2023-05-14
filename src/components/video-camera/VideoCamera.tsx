import React, {useEffect, useRef,useState} from 'react';
import VideoCameraStyled from './video-camera-styles/VideoCameraStyled';
import ChatHistory from '../chat-history/chat-history';
import VideoTools from './video-tools-styled/video-tools-styled';
import VideoCameraChildren from './video-camera-children/VIdeo-camera-children';
import ChatReciever from './chat-reciever/chat-reciever';

export interface MyChatContextProps {
  setTranscript?: React.Dispatch<React.SetStateAction<string>>,
  transcriptText: string,
  isSpeaking: boolean
  dataMessage ?: DataMessage ;
  setDataMessage?: React.Dispatch<React.SetStateAction<DataMessage | undefined>>,
  muted?: boolean,
  setMuted?: React.Dispatch<React.SetStateAction<boolean>>,
  language: LanguageOption;
  setLanguage?: React.Dispatch<React.SetStateAction<LanguageOption>>,
  turnOnVideo?: () => void,
  turnOffVideo?: () => void,
  isCameraOn ?: boolean;
}

const MyChatContext = React.createContext<MyChatContextProps>({transcriptText:'', 
                                                              isSpeaking:false, 
                                                              language: 'en-US'});

export interface DataMessage {
  sender?: number, 
  text?: string;
  avatarIcon?: string;
  username?:string;
  languageUser?: string;
}

const VideoCamera: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState(0);
  const myCamera = useRef<HTMLVideoElement>(null);
  const cameraChildren = useRef<HTMLVideoElement>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [dados, setDados] = React.useState<DataMessage>();
  const [language, setLanguage] = React.useState<LanguageOption>('en-US');
  const [cameraStream, setCameraStream] = useState<any>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');

  useEffect(() => {
    turnOnVideo();   
  }, []);

  function turnOffVideo(){
    cameraStream.getTracks()[0].stop();
    cameraStream.getTracks()[1].stop();
    setIsCameraOn(false);
  }

  function turnOnVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      identifyIfSomeoneIsSpeaking(stream);
      setUpVideoConfigs(stream);

    });
  }

  function setUpVideoConfigs(stream: MediaStream){
    if(myCamera.current && cameraChildren.current){
      myCamera.current.srcObject = stream;
      cameraChildren.current.srcObject = stream;
      setCameraStream(stream);
      setIsCameraOn(true);
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
  
  return (
    <MyChatContext.Provider value={{transcriptText:transcript, 
                                    setTranscript:setTranscript, 
                                    isSpeaking:isSpeaking,
                                    setDataMessage:setDados,
                                    dataMessage: dados,
                                    muted,
                                    setMuted,
                                    language: language,
                                    setLanguage: setLanguage,
                                    turnOnVideo,
                                    turnOffVideo,
                                    isCameraOn
                                    }}>
        <VideoCameraStyled  playsInline  
                            muted 
                            refCamera={myCamera} 
                            autoPlay 
                            videoSize='fullScreen' 
                            videoCameraChildren={ <VideoCameraChildren refCamera={cameraChildren}  />}
                            videoTools={<VideoTools />} 
                            cameraChildren={cameraChildren}
                            chatHistory={<ChatHistory />}
                            chatReciever={<ChatReciever />} 
                            />
      <div style={{display:'none'}}>
          {isSpeaking ? 'speaking': 'not speaking'  }
        {audioLevel}
      </div> 
    </MyChatContext.Provider>
  );
}
export default VideoCamera;

export { MyChatContext };
