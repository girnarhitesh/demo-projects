import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Audio Play / Pause Toggle Function
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Cursor click heart animation effect (Heart icon set as per user preference)
  useEffect(() => {
    const handleMouseClick = (e) => {
      const heart = document.createElement('div');
      heart.className = 'cursor-heart';
      heart.style.left = `${e.pageX}px`;
      heart.style.top = `${e.pageY}px`;
      heart.innerHTML = '💖';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    window.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  const handleSurprise = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(() => {})
    }

    // Confetti explosion animation
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    })

    // Delay dekar Firstpage par redirect
    setTimeout(() => {
      navigate('/firstpage')
    }, 600)
  }

  return (
    <div className="hero-section">
      {/* Background Falling Hearts & Roses Animation */}
      <div className="falling-bg-container">
        <div className="falling-element" style={{ left: '10%', animationDuration: '7s', animationDelay: '0s' }}>❤️</div>
        <div className="falling-element" style={{ left: '25%', animationDuration: '9s', animationDelay: '2s' }}>🌹</div>
        <div className="falling-element" style={{ left: '40%', animationDuration: '6s', animationDelay: '1s' }}>💖</div>
        <div className="falling-element" style={{ left: '55%', animationDuration: '8s', animationDelay: '3s' }}>🌸</div>
        <div className="falling-element" style={{ left: '70%', animationDuration: '5s', animationDelay: '0.5s' }}>❤️</div>
        <div className="falling-element" style={{ left: '85%', animationDuration: '10s', animationDelay: '2.5s' }}>🌹</div>
      </div>

      {/* Background Floating Animated Elements */}
      <div className="floating-bubble bubble-1">💖</div>
      <div className="floating-bubble bubble-2">✨</div>
      <div className="floating-bubble bubble-3">🌸</div>
      <div className="floating-bubble bubble-4">⭐</div>

      <div className="animated-card">
        {/* Heading */}
        <h1 className="title">My Best Friend 💖</h1>

        {/* Centered Image Wrapper with Floating Animation Class */}
        <div className="img-wrapper animated-teddy">
          <img src="public/1.gif" alt="Best Friend" className="friend-photo" />
        </div>

        {/* Subtitle Text */}
        <p className="subtitle">
          Phool bahut khoobsurat hote hain.. <br />
          lekin kuch log unse bhi zyada khoobsurat hote hain. <br />
          Jaise Aap: 🤍🌸
        </p>

        {/* Centered & Styled Button */}
        <button className="surprise-btn" onClick={handleSurprise}>
          Click for Surprise ✨
        </button>
      </div>
    </div>
  )
}

export default App;