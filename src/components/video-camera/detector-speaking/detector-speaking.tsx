import React, { useState, useEffect, useRef } from 'react';

export interface DetectorSpeakingProps {
  setIsSpeakingExport: (isSpeaking: boolean) => void;
  minLevelofSoundConsideredSpeaking ?: number
}
const DetectorSpeaking:React.FC<DetectorSpeakingProps> = ( {setIsSpeakingExport, minLevelofSoundConsideredSpeaking: minimoLevelofSoundConsideredSpeaking }: DetectorSpeakingProps) => {
  const [audioLevel, setAudioLevel] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef(null);
  const soundConsideredSpeaking: number = minimoLevelofSoundConsideredSpeaking ?? 50;

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
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
        setIsSpeaking(average > soundConsideredSpeaking);
        setIsSpeakingExport(average>soundConsideredSpeaking);
      };

      loop();
    });
  }, []);
  const isVisibleDisplay = { display: 'flex' };
  return (
    <div style={isVisibleDisplay}>
      <div> Display for Test </div> 
      {isSpeaking ? 'Está falando' : 'Não está falando'}
      <br />
      Nível de áudio: {audioLevel}
      <br />
      <audio ref={audioRef} autoPlay></audio>
    </div>
  );
};

export default DetectorSpeaking;