import React from 'react';
import './GuestsImpression.css';

const GuestsImpression = () => {
    return (
        <section className="guests-impression container">
            <div className="impression-header">
                <h2 className="impression-title">THIS IS BALI Restaurant</h2>
                <p className="impression-subtitle">Here are some impression shared by our guests.</p>
            </div>

            <div className="impression-grid">
                <div className="impression-card">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Interior Impression" className="impression-img" />
                    <div className="play-btn-overlay">
                        {/* Simulating a video play button if it were a reel */}
                    </div>
                </div>

                <div className="impression-card">
                    <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Food Impression" className="impression-img" />
                </div>

                <div className="impression-card">
                    <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dining Impression" className="impression-img" />
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
