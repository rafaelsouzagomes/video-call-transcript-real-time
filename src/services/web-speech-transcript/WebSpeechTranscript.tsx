import React, { ReactElement } from 'react';
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export interface WebSpeechTranscriptProps {
  language: LanguageOption
}

const WebSpeechTranscript: React.FC<WebSpeechTranscriptProps> = ({language}:WebSpeechTranscriptProps)  => {

  const { transcript, listening, resetTranscript } = useSpeechRecognition()
  SpeechRecognition.startListening({  continuous: true, language});
  return <> {transcript} </>;
}

export default WebSpeechTranscript;