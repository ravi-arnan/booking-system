import React from 'react';
import './Hero.css';
import bgVideo from '../assets/THIS-IS-BALI-The-WORLDs-Best-Indonesian-Restaurant.mp4';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background Video Area */}
            <div className="hero-bg">
                <video src={bgVideo} autoPlay loop muted playsInline className="hero-video" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="badges-container">
                    <div className="badge google-badge">
                        <span className="g-icon">G</span>
                        <div className="stars">
                            ★★★★★
                        </div>
                        <span className="rating-text">15.000 Reviews, 4.9 Rating</span>
                    </div>

                    <div className="badge award-badge">
                        <span className="award-icon">🏆</span>
                        <span className="award-text">Bali International Customers<br />Satisfaction Award 2024</span>
                    </div>
                </div>

                <h1 className="hero-title">Welcome To THIS IS BALI</h1>
            </div>

            {/* Gradient fade to white at the bottom */}
            <div className="hero-fade-bottom"></div>
        </section>
    );
};

export default Hero;
