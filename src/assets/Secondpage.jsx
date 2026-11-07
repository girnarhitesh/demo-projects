import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Secondpage.css';

function Secondpage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Envelope open hone ki state

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  const handleNextPage = () => {
    navigate('/gallerypage');
  };

  return (
    <div className="secondpage-container">
      {/* Background Falling Elements */}
      <div className="falling-bg-container">
        <div className="falling-element" style={{ left: '15%', animationDuration: '8s', animationDelay: '0s' }}>💖</div>
        <div className="falling-element" style={{ left: '50%', animationDuration: '6s', animationDelay: '2s' }}>✨</div>
        <div className="falling-element" style={{ left: '80%', animationDuration: '7s', animationDelay: '1s' }}>🌸</div>
      </div>

      <div className="secondpage-content">
        
        {/* Jab tak envelope open nahi hota, tab tak bada envelope dikhega */}
        {!isOpen ? (
          <div className="envelope-wrapper" onClick={handleOpenEnvelope}>
            <div className="envelope-img-box">
              {/* Yahan aap apne envelope image ka path de sakte hain, jaise '/envelope.png' */}
              <div className="envelope-icon">💌</div>
              <p className="envelope-instruction">Tap to Open Letter ✨</p>
            </div>
          </div>
        ) : (
          /* Envelope click hone ke baad bada message card khulega */
          <div className="friend-note-box wide-note-box popup-open-animation">
            <h2 className="note-heading">A Special Note For You 🤍</h2>
            
            <p className="note-text">
              "Dear Shivani, you becoming my friend is the best thing for me. My day goes so wonderfully just by talking to you, and if you ever got angry with me about anything, please forgive me thinking of me as a true friend. You truly are one of a kind!" 💖✨
            </p>

            <div className="note-footer-text">
              <span>~ Always be with me ✨</span>
            </div>

            {/* Bottom Button to View Gallery */}
            <div className="button-container">
              <button className="next-page-btn" onClick={handleNextPage}>
                View Gallery ➔
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Secondpage;