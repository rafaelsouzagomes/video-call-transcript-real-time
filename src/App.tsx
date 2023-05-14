import React, { useEffect } from 'react'
import './App.css'
import VideoConferencePage from './pages/video-conference-page/video-conference-page';
import InitialPage from './pages/initial-page/Initial-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import usarDefaultPhoto from './assets/user/icon-1-lion.png'

function App() {
  return (

    <div>
      <link rel="stylesheet" href="./themes.css" />
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/video/:codigo" element={<VideoConferencePage />} />
        </Routes>
    </Router>
    </div>


  )
}

export default App
