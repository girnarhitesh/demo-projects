import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import App from './App.jsx'
import Firstpage from './assets/Firstpage.jsx' 
import Secondpage from './assets/Secondpage.jsx' 
import Gallerypage from './assets/Gallerypage.jsx'
import './index.css'

function MainApp() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Browser autoplay policy handler
  useEffect(() => {
    const handleFirstClick = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Audio play error:", err))
      }
    }

    window.addEventListener('click', handleFirstClick, { once: true })
    return () => window.removeEventListener('click', handleFirstClick)
  }, [])

  // Music Play / Pause Toggle Button Function
  const toggleGlobalAudio = (e) => {
    e.stopPropagation()
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Play error:", err))
      }
    }
  }

  return (
    <>
      {/* Permanent Global Audio Element */}
      <audio ref={audioRef} src="/Main Kabhi Bhoolunga Na Tujhe Saudebaazi ft.Aakrosh [Lofi + Slowed + Reverb ] @latenightlofis 🖤.mp3" loop />

      {/* Back to Home Button (Ye tabhi dikhega jab aap main home '/' page par nahi hoge) */}
      {location.pathname !== '/' && (
        <button 
          onClick={() => navigate('/')} 
          style={{
            position: 'fixed',
            top: '15px',
            left: '15px',
            zIndex: 9999,
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#831843',
            border: '2px solid #f472b6',
            padding: '8px 16px',
            borderRadius: '30px',
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: '600',
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(219, 39, 119, 0.3)',
            backdropFilter: 'blur(5px)'
          }}
        >
          ⬅ Home
        </button>
      )}

      {/* Global Floating Music Button */}
      <button 
        onClick={toggleGlobalAudio} 
        style={{
          position: 'fixed',
          top: '15px',
          right: '15px',
          zIndex: 9999,
          background: 'rgba(255, 255, 255, 0.9)',
          color: '#831843',
          border: '2px solid #f472b6',
          padding: '8px 16px',
          borderRadius: '30px',
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: '600',
          fontSize: '0.85rem',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(219, 39, 119, 0.3)',
          backdropFilter: 'blur(5px)'
        }}
      >
        {isPlaying ? '🎵 Pause 🔊' : '🎶 Play Song 🎧'}
      </button>

      {/* Main App Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/secondpage" element={<Secondpage />} />
        <Route path="/gallerypage" element={<Gallerypage />} />
      </Routes>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
)