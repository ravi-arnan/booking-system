import React from 'react';
import './GuestReviews.css';
import googleLogo from '../assets/Google_Icons-09-512.webp';

const GuestReviews = () => {
    return (
        <section className="guest-reviews-section">
            <div className="container">
                <h2 className="guest-reviews-title">What Our Guests Say...</h2>

                <div className="reviews-grid">
                    {/* Review 1 */}
                    <div className="review-box">
                        <div className="stars-container">★★★★★</div>
                        <p className="review-content">
                            It was delicious ! The service is extremely well too! The concept is very interesting as it gives you the possibility of trying all tastes of Balinese food. Using stamps on the card :) it was fun and yummy ! I strongly recommend !
                        </p>
                        <img src={googleLogo} alt="Google" className="google-logo-img" />
                    </div>

                    {/* Review 2 */}
                    <div className="review-box">
                        <div className="stars-container">★★★★★</div>
                        <p className="review-content">
                            Absolutely fantastic all round! As a vegetarian, it's not easy to get access to really good and flavorsome pure vegetarian Balinese cuisine. This is Bali were fantastic! Staff were so friendly and accommodating.
                        </p>
                        <img src={googleLogo} alt="Google" className="google-logo-img" />
                    </div>

                    {/* Review 3 */}
                    <div className="review-box">
                        <div className="stars-container">★★★★★</div>
                        <p className="review-content">
                            Delicious Balinese food. Attentive and kind staff. Trying a little bit of everything is my preferred style of eating, so I enjoyed the stamp card concept. I highly recommend trying the jackfruit curry!
                        </p>
                        <img src={googleLogo} alt="Google" className="google-logo-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuestReviews;
