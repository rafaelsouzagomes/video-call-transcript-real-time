import React, { useEffect, useState } from 'react';
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export interface WebSpeechTranscriptProps {
  language: LanguageOption,
  isSpeaking: boolean
}

const WebSpeechTranscript: React.FC<WebSpeechTranscriptProps> = ({language,isSpeaking}:WebSpeechTranscriptProps)  => {

  const { transcript,finalTranscript, listening, resetTranscript } = useSpeechRecognition();
  SpeechRecognition.startListening({  continuous: true, 
                                      language});
    
                                    

  const [currentText, setCurrentText] = useState<string>('Your Transcrip will appear here');
  const maxCaracters: number = 60;

  useEffect(() => {
    if(transcript.length>0){
      setCurrentText(transcript);
    }
    if(transcript.length >= maxCaracters){
      resetTranscript();
      setCurrentText('Your Transcrip will appear here');
    }
  }, [transcript.length])


  useEffect(() => {
    const intervalId = setInterval(() => {
      if(!isSpeaking){
        resetTranscript();
        setCurrentText('Your Transcrip will appear here');
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isSpeaking]);


  
  return <> {true && currentText} </>;
}

export default WebSpeechTranscript;