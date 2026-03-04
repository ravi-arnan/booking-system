import React from 'react';
import './BookingInfo.css';
import googleLogo from '../assets/Google_Icons-09-512.webp';

const BookingInfo = () => {
    return (
        <div className="booking-info-wrapper">
            <section className="booking-info container">

                <div className="badges-container">
                    <div className="badge google-badge">
                        <img src={googleLogo} alt="Google" className="g-icon-img" />
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

                <p className="subtitle">The WORLD's Best Indonesian Restaurant</p>

                <p className="description">
                    Visit THIS IS BALI Today And Experience <strong>Award Winning</strong> Authentic<br />
                    Balinese Food And Desserts In The Heart Of Ubud.
                </p>

                <div className="cta-container">
                    <button className="btn-primary w-full max-w-md">RESERVE A TABLE</button>
                    <button className="btn-white w-full max-w-md">VISIT US NOW</button>
                </div>

                <div className="highlights-box">
                    <h3 className="highlights-title">HIGHLIGHTS</h3>
                    <ul className="highlights-list">
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            More Than <strong>10.000 5-Star Reviews</strong>
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <strong>Award Winning</strong> Service & Design
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Viral Interactive <strong>Stamp Menu</strong>
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <strong>Floating Tables</strong>
                        </li>
                        <li>
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <strong>4.9</strong> Star Rating
                        </li>
                    </ul>
                </div>

                <button className="btn-white whatsapp-btn">
                    WRITE US ON WHATSAPP
                </button>

            </section>
        </div>
    );
};

export default BookingInfo;
