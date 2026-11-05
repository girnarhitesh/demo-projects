import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Secondpage.css';

function Secondpage() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    // Button click karne par Image Gallery wale page par redirect karega
    navigate('/gallerypage');
  };

  return (
    <div className="secondpage-container">
      {/* Background Floating/Falling Elements */}
      <div className="falling-bg-container">
        <div className="falling-element" style={{ left: '15%', animationDuration: '8s', animationDelay: '0s' }}>💖</div>
        <div className="falling-element" style={{ left: '50%', animationDuration: '6s', animationDelay: '2s' }}>✨</div>
        <div className="falling-element" style={{ left: '80%', animationDuration: '7s', animationDelay: '1s' }}>🌸</div>
      </div>

      <div className="secondpage-content">

        {/* Best Friend Note */}
        <div className="friend-note-box">
          <h2 className="note-heading">A Special Note For You</h2>
          <p className="note-text">
            "Dear Shivani, you becoming my friend is the best thing for me. My day goes so wonderfully just by talking to you, and if you ever got angry with me about anything, please forgive me thinking of me as a true friend. You truly are one of a kind!" 💖✨
          </p>
        </div>

        {/* Bottom Button with Navigation to Gallery Page */}
        <div className="button-container">
          <button className="next-page-btn" onClick={handleNextPage}>
            View Gallery ➔
          </button>
        </div>

      </div>
    </div>
  );
}

export default Secondpage;