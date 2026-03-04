import React from 'react';
import './OurStory.css';

const OurStory = () => {
    return (
        <section className="our-story-section">
            <div className="container">
                <h2 className="story-title">Our Story...</h2>

                <div className="story-content-wrapper">
                    <div className="story-background-box">
                        <div className="story-text-container">
                            <p>
                                <strong>"THIS IS BALI" offers authentic Balinese food and desserts</strong>, along with a world-class restaurant experience, right in the center of Ubud. <span className="underline">A must-visit for anyone looking to eat in Ubud.</span>
                            </p>

                            <p>
                                Our restaurant is born from a love of traditional Balinese street food & desserts.
                            </p>

                            <p>
                                We wanted to create a place where South-East Asian flavors are celebrated using clean, healthy & pure ingredients.
                            </p>

                            <p>
                                We've spent a lot of time developing the THIS IS BALI menu.
                            </p>

                            <p>
                                Everything is cooked freshly every day using hand-selected, high-quality ingredients, free of MSG, preservatives or additives.
                            </p>

                            <p>
                                THIS IS BALI truly is a love letter to Bali's rich tastes and flavors.
                            </p>

                            {/* Extra text to simulate what might be scrolling off-screen */}
                            <p>
                                We serve all of this in a warm, welcoming space designed to make you feel right at home.
                            </p>

                            <p className="story-signature mt-3">
                                Adina & the THIS IS BALI team
                            </p>
                        </div>
                    </div>

                    <div className="story-image-container">
                        <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="THIS IS BALI Interior" className="story-img" />
                        <div className="story-img-badge">
                            <svg viewBox="0 0 100 100" className="badge-svg">
                                <path d="M50 5 L55 15 L66 12 L68 23 L79 24 L77 35 L86 40 L80 50 L86 60 L77 65 L79 76 L68 77 L66 88 L55 85 L50 95 L45 85 L34 88 L32 77 L21 76 L23 65 L14 60 L20 50 L14 40 L23 35 L21 24 L32 23 L34 12 L45 15 Z" fill="#ffe100" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
