import React from 'react';
import './ReadyToVisit.css';

const ReadyToVisit = () => {
    return (
        <section className="ready-to-visit-section">
            <div className="container ready-container">
                <h2 className="ready-title">Ready To Visit Us?</h2>

                <p className="ready-subtitle">
                    We are there for you Monday to Sunday from 11am - 11pm.
                </p>

                <p className="ready-warning">
                    <span className="heart-icon">❤️</span> People love us, to minimize wait time, please reserve a table below.
                </p>

                <div className="cta-container-vertical">
                    <button className="btn-primary w-full ready-btn">RESERVE A TABLE</button>
                    <button className="btn-white w-full ready-btn">WRITE US ON WHATSAPP</button>
                    <button className="btn-white w-full ready-btn">DIRECTIONS</button>
                </div>
            </div>
        </section>
    );
};

export default ReadyToVisit;
