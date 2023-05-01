import React, { useEffect } from 'react'
import './App.css'
import VideoConferencePage from './pages/video-conference-page/video-conference-page';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="./themes.css" />
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <VideoConferencePage />
    </div>
  )
}

export default App
