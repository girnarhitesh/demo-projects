import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link component for navigation
import './Firsrpage.css';

const Firstpage = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [actionMessage, setActionMessage] = useState("");

    // Track each balloon's popped state
    const [poppedBalloons, setPoppedBalloons] = useState({
        b1: false,
        b2: false,
        b3: false,
        b4: false
    });

    const handleBalloonClick = (id) => {
        setPoppedBalloons(prev => ({ ...prev, [id]: true }));
        setShowMessage(true);
    };

    const balloonData = [
        { id: 'b1', word: 'My' },
        { id: 'b2', word: 'Best' },
        { id: 'b3', word: 'Friend' },
        { id: 'b4', word: 'Shivani' }
    ];

    return (
        <>
            <div className="firstpage-container">
                {/* Background Falling Hearts & Roses Animation */}
                <div className="falling-bg-container">
                    <div className="falling-element" style={{ left: '10%', animationDuration: '7s', animationDelay: '0s' }}>❤️</div>
                    <div className="falling-element" style={{ left: '25%', animationDuration: '9s', animationDelay: '2s' }}>🌹</div>
                    <div className="falling-element" style={{ left: '40%', animationDuration: '6s', animationDelay: '1s' }}>💖</div>
                    <div className="falling-element" style={{ left: '55%', animationDuration: '8s', animationDelay: '3s' }}>🌸</div>
                    <div className="falling-element" style={{ left: '70%', animationDuration: '5s', animationDelay: '0.5s' }}>❤️</div>
                    <div className="falling-element" style={{ left: '85%', animationDuration: '10s', animationDelay: '2.5s' }}>🌹</div>
                </div>

                <div className="firstpage-content">

                    {/* Main Friend Image */}
                    <div className="img-wrapper">
                        <img src="public/I Love You Bunny GIF by rabbittobi.gif" alt="Best Friend" className="friend-photo" />
                    </div>

                    {/* 4 Balloons Grid */}
                    <div className="balloons-grid">
                        {balloonData.map((item) => (
                            <div
                                key={item.id}
                                className={`balloon-item ${item.id}`}
                                onClick={() => !poppedBalloons[item.id] && handleBalloonClick(item.id)}
                            >
                                {/* Text is always in background, hidden or shown based on popped state */}
                                <span className="balloon-text" style={{ opacity: poppedBalloons[item.id] ? 1 : 0 }}>
                                    {item.word}
                                </span>

                                {/* Balloon shows only if not popped */}
                                {!poppedBalloons[item.id] && (
                                    <span className="balloon-emoji">🎈</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Sandesh Buttons Section */}
                    <div className="sandesh-buttons-container">
                        {/* Clean Link wrapper for smooth navigation to Secondpage */}
                        <Link to="/secondpage">
                            <button className="sandesh-icon-btn" title="Agla Sandesh / Naya Page">
                                💌
                            </button>
                        </Link>
                    </div>

                    {/* Display Action Message from Balloon Click */}
                    {actionMessage && (
                        <div className="balloon-secret-msg">
                            {actionMessage}
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default Firstpage;