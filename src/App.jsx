import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const navigate = useNavigate()

  // Cursor click heart animation effect (added without changing your code)
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
    // Confetti explosion animation
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    })

    // Thoda delay dekar Firstpage par redirect karega taaki confetti dikhe
    setTimeout(() => {
      navigate('/firstpage') // Route ka path jo aapne router me set kiya ho
    }, 600)
  }

  return (
    <div className="hero-section">
      {/* Background Floating Animated Elements */}
      <div className="floating-bubble bubble-1">💖</div>
      <div className="floating-bubble bubble-2">✨</div>
      <div className="floating-bubble bubble-3">🌸</div>
      <div className="floating-bubble bubble-4">⭐</div>

      <div className="animated-card">
        <div className="img-wrapper">
          <img src="public/OJXMDX0-removebg-preview.png" alt="Best Friend" className="friend-photo" />
        </div>

        <h1 className="title">My Best Friend 💖</h1>
        <p className="subtitle">Phool bahut khoobsurat hote hain.. lekin kuch log unse bhi zyada khoobsurat hote hain. Jaise Aap: 🤍🌸</p>

        <button className="surprise-btn" onClick={handleSurprise}>
          Click for Surprise ✨
        </button>
      </div>
    </div>
  )
}

export default App;