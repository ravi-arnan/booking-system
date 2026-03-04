import React from 'react';
import './BookingInfo.css';

const BookingInfo = () => {
    return (
        <section className="booking-info container">

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
    );
};

export default BookingInfo;
