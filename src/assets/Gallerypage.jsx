import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import './Imagepage.css';

function Gallerypage() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null); // Popup state

    // Gallery Images List
    const galleryImages = [
        { id: 1, src: "public/5.jpeg", title: "Beautiful Moments" },
        { id: 2, src: "public/4.jpeg", title: "Sweet Memories" },
        { id: 3, src: "public/2.jpeg", title: "Best Times" },
        { id: 4, src: "public/1.jpeg", title: "Forever Friends" },
        { id: 5, src: "public/3.jpeg", title: "Special Bond" },
    ];

    return (
        <div className="imagepage-container">
            {/* Background Falling Animation */}
            <div className="falling-bg-container">
                <div className="falling-element" style={{ left: '20%', animationDuration: '7s', animationDelay: '0s' }}>💖</div>
                <div className="falling-element" style={{ left: '70%', animationDuration: '6s', animationDelay: '1s' }}>✨</div>
                <div className="falling-element" style={{ left: '45%', animationDuration: '8s', animationDelay: '2s' }}>🌸</div>
            </div>

            <div className="gallery-content-wrapper">
                <h2 className="gallery-title">Memorable Moments 📸</h2>

                {/* Swiper Cards Container */}
                <div className="swiper-cards-wrapper">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        loop={true}           
                        rewind={true}       
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {galleryImages.map((item) => (
                            <SwiperSlide
                                key={item.id}
                                onClick={() => setSelectedImage(item)} // 👈 Ab sirf image/card par click karne par hi modal open hoga
                                className="gallery-swiper-slide"
                            >
                                <div className="swiper-slide-inner">
                                    <img src={item.src} alt={item.title} className="swiper-card-img" />
                                    <div className="swiper-card-overlay">
                                        <h4 className="swiper-card-title">{item.title}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Back Button */}
                <div className="back-btn-wrapper">
                    <button
                        onClick={() => navigate(-1)}
                        className="gallery-back-btn"
                    >
                        ⬅️ Back
                    </button>
                </div>
            </div>

            {/* Image Popup Modal */}
            {selectedImage && (
                <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} className="modal-img" />
                        <h3>{selectedImage.title}</h3>
                        <button className="close-modal-btn" onClick={() => setSelectedImage(null)}>❌ Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallerypage;