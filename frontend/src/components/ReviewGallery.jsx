import React from 'react';
import './ReviewGallery.css';

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
                    <div className="g-icon-small mt-3">G</div>
                </div>
            </div>

            {/* Full width bottom image gallery */}
            <div className="food-gallery">
                <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Spring Rolls" className="food-img" />
                <img src="https://images.unsplash.com/photo-1563379926898-05f45c514d68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Nasi Goreng" className="food-img" />
                <img src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Satay" className="food-img" />
                <img src="https://images.unsplash.com/photo-1626804475297-41609ea094eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Curry" className="food-img" />
            </div>

            {/* Sticky Bottom Bar simulation (relative for now, can be fixed) */}
            <div className="bottom-action-bar">
                <p className="action-quote">"This truly was an amazing experience."</p>
                <div className="action-buttons">
                    <button className="btn-primary w-full max-w-xs">Get A Table</button>
                    <button className="btn-white w-full max-w-xs">Visit Us Now</button>
                </div>
            </div>
        </section>
    );
};

export default ReviewGallery;
