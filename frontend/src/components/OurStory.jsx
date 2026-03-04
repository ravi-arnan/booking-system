import React from 'react';
import './OurStory.css';
import storyImg from '../assets/THIS-IS-BALI-Indonesian-Restaurant.jpg';
import badgeImg from '../assets/Xpert_badge-2.png';
import signatureImg from '../assets/tib-signature.svg';

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

                            <div className="story-signature-container mt-3">
                                <img src={signatureImg} alt="Much Love Signature" className="signature-img" />
                                <p className="story-signature-text">
                                    Adina & the THIS IS BALI team
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="story-image-container">
                        <img src={storyImg} alt="THIS IS BALI Interior" className="story-img" />
                        <div className="story-img-badge">
                            <img src={badgeImg} alt="Award Background" className="badge-img-asset" />
                            <div className="badge-text">
                                AWARD<br />WINNING<br /><span>-2023-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
