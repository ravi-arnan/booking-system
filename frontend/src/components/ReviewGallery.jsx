import React from 'react';
import './ReviewGallery.css';
import img1 from '../assets/this-is-bali-spring-rolls-1024x1024-1.jpg';
import img2 from '../assets/this-is-bali-mie-goreng-1024x1024-1.jpg';
import img3 from '../assets/honey-chicken-1024x1024-1.jpg';
import img4 from '../assets/this-is-bali-pumpkin-curry-1024x1024-1.jpg';
import img5 from '../assets/sprouts-tofu-1024x1024-1.jpg';
import img6 from '../assets/this-is-bali-honey-chicken-1024x1024-1.jpg';
import img7 from '../assets/eggpant-tomato-1024x1024-1.jpg';
import img8 from '../assets/this-is-bali-dessert-1024x1024-1.jpg';
import menuPdf from '../assets/THIS-IS-BALI-Full-Menu.pdf';
import googleLogo from '../assets/Google_Icons-09-512.webp';

const ReviewGallery = () => {
    return (
        <section className="review-gallery">
            <div className="review-header container">
                <h2 className="review-title">People Love Our Food...</h2>
                <p className="review-subtitle">
                    We are famouse for our tasty food, hand-selected, high-quality ingredients, free of MSG, preservatives or additives.
                </p>

                {/* Featured Google Review Card */}
                <div className="review-card shadow-premium">
                    <div className="stars mb-2">★★★★★</div>
                    <p className="review-text">
                        I really love the vibes here. The food is typical Indonesian and the flavors are truly authentic. If you're looking for Indonesian food served in an aesthetic way, this is definitely the place.
                    </p>
                    <img src={googleLogo} alt="Google" className="g-icon-small-img mt-3" />
                </div>
            </div>

            {/* Full width bottom image gallery */}
            <div className="food-gallery">
                <img src={img1} alt="Spring Rolls" className="food-img" />
                <img src={img2} alt="Mie Goreng" className="food-img" />
                <img src={img3} alt="Honey Chicken" className="food-img" />
                <img src={img4} alt="Pumpkin Curry" className="food-img" />
                <img src={img5} alt="Sprouts Tofu" className="food-img" />
                <img src={img6} alt="Honey Chicken Ribs" className="food-img" />
                <img src={img7} alt="Eggplant Tomato" className="food-img" />
                <img src={img8} alt="Dessert" className="food-img" />
            </div>

            <div className="explore-menu-section">
                <a href={menuPdf} target="_blank" rel="noopener noreferrer" className="btn-explore-menu">
                    <svg className="menu-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477.15 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Explore Our Full Menu
                </a>
            </div>
        </section>
    );
};

export default ReviewGallery;
