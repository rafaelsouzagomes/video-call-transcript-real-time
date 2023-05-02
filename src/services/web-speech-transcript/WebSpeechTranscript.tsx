import React, { useEffect, useState } from 'react';
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { MyChatContext, MyChatContextProps } from '../../components/video-camera/VideoCamera';

export interface WebSpeechTranscriptProps {
  language: LanguageOption,
  isSpeaking: boolean
}

const WebSpeechTranscript: React.FC<WebSpeechTranscriptProps> = ({language}:WebSpeechTranscriptProps)  => {

  const { transcript,finalTranscript, listening, resetTranscript } = useSpeechRecognition();
  SpeechRecognition.startListening({  continuous: true, 
                                      language});
    
                                    

  const [currentText, setCurrentText] = useState<string>('Your Transcrip will appear here');
  const maxCaracters: number = 60;

  const  {transcriptText, setTranscript, isSpeaking}  = React.useContext<MyChatContextProps>(MyChatContext);

  useEffect(() => {
    if(transcript.length>0){
      setCurrentText(transcript);
    }
    if(transcript.length >= maxCaracters){
      resetTranscript();
      if(setTranscript){
        console.log(transcript);
        setTranscript(transcript);
      }
      setCurrentText('Your Transcrip will appear here');
    }
  }, [transcript.length])


  useEffect(() => {
    console.log(isSpeaking);
    // const intervalId = setInterval(() => {
    //   if(!isSpeaking){
    //     if(setTranscript){
    //       setTranscript(transcript);
    //     }
    //     resetTranscript();
       
    //     setCurrentText('Your Transcrip will appear here');
    //   }
    // }, 5000);

    if(!isSpeaking){
      if(setTranscript){
        setTranscript(transcript);
      }
      resetTranscript();
     
      setCurrentText('Your Transcrip will appear here');
    }

    // return () => clearInterval(intervalId);
  }, [isSpeaking]);


  
  return <> {true && currentText} </>;
}

export default WebSpeechTranscript;