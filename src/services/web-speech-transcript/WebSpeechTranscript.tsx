import React, { useEffect, useState } from 'react';
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { DataMessage, MyChatContext, MyChatContextProps } from '../../components/video-camera/VideoCamera';
import useWebSocket from 'react-use-websocket';
import { loadData } from '../../utils/LocalStorageUtil';

const WebSpeechTranscript: React.FC = ()  => {

  const dataMessageLocal: DataMessage = {
    avatarIcon: loadData('avatarIcon'),
    languageUser: loadData('language'),
    sender: loadData('idUser'),
    username: loadData('username')
  };
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { setTranscript, setDataMessage, muted, language} = React.useContext<MyChatContextProps>(MyChatContext);
  const { sendJsonMessage } = useWebSocket('ws://localhost:3000');
  const [currentText, setCurrentText] = useState<string>('Your Transcrip will appear here');

  useEffect(() => {
    if(muted){
      SpeechRecognition.stopListening()
    } else{
      SpeechRecognition.startListening({  continuous: true, language});
    }
  }, [muted])

  useEffect(() => { 
    SpeechRecognition.stopListening();
    SpeechRecognition.startListening({  continuous: true, language});
  }, [language]);

  useEffect(() => {
    const maxCaracters: number = 60;
    if(transcript.length>0){
      setCurrentText(transcript);
    }
    if(transcript.length >= maxCaracters){
      sendDataMessage();
      sendTranscript();
    }
  }, [transcript.length])

  const [timerId, setTimerId] = useState<any>(null);

  //Send message when the user stop talking by 3 seconds
  useEffect(() => {
    clearTimeout(timerId);
    const length = transcript.length;
    const newTimerId = setTimeout(() => {
      if(length == transcript.length){
        sendDataMessage();
        sendTranscript();
      } 
    }, 3000);
    setTimerId(newTimerId);
    return () => clearTimeout(newTimerId);
  }, [transcript.length]);

  function sendMessage(){
    if(transcript.length && transcript.length >0){
      sendJsonMessage({ sender: dataMessageLocal.sender, 
                        text: transcript, 
                        avatarIcon: dataMessageLocal.avatarIcon, 
                        idUser: dataMessageLocal.sender,
                        username: dataMessageLocal.username, 
                        languageUser: dataMessageLocal.languageUser });
    }
  }

  function sendTranscript() {
    if (setTranscript) {
      setTranscript(transcript);
      sendMessage();
      resetTranscript();
      setCurrentText('Your Transcrip will appear here');
      SpeechRecognition.startListening({  continuous: true, language});
    }
  }

  function sendDataMessage() {
    if (setDataMessage) {
      setDataMessage(dataMessageLocal);
    }
  }
  
  return <> {true && currentText} </>;
}

export default WebSpeechTranscript;