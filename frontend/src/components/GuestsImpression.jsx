import React from 'react';
import './GuestsImpression.css';

// Import images
import img1 from '../assets/THIS-IS-BALI-1.webp';
import img2 from '../assets/THIS-IS-BALI-2.webp';
import img3 from '../assets/THIS-IS-BALI-3.webp';
import img4 from '../assets/THIS-IS-BALI-4.webp';
import img5 from '../assets/THIS-IS-BALI-5.webp';
import img6 from '../assets/THIS-IS-BALI-6.webp';

const images = [img1, img2, img3, img4, img5, img6];

const GuestsImpression = () => {
    return (
        <section className="guests-impression container">
            <div className="impression-header">
                <h2 className="impression-title">THIS IS BALI Restaurant</h2>
                <p className="impression-subtitle">Here are some impression shared by our guests.</p>
            </div>

            <div className="impression-carousel">
                <div className="impression-track">
                    <div className="impression-slide-group">
                        {images.map((src, idx) => (
                            <div className="impression-card" key={`original-${idx}`}>
                                <img src={src} alt={`Guest Impression ${idx + 1}`} className="impression-img" loading="lazy" />
                                <div className="play-btn-overlay"></div>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate group to create infinite scrolling loop */}
                    <div className="impression-slide-group">
                        {images.map((src, idx) => (
                            <div className="impression-card" key={`duplicate-${idx}`}>
                                <img src={src} alt={`Guest Impression ${idx + 1}`} className="impression-img" loading="lazy" />
                                <div className="play-btn-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="impression-quote">
                <p>"This truly was an amazing experience."</p>
            </div>

            <div className="cta-container-small">
                <button className="btn-primary">Get A Table</button>
                <button className="btn-white">Visit Us Now</button>
            </div>
        </section>
    );
};

export default GuestsImpression;
