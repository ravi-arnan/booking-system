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
                {/* Content moved to BookingInfo */}
            </div>

            {/* Gradient fade to white at the bottom */}
            <div className="hero-fade-bottom"></div>
        </section>
    );
};

export default Hero;
