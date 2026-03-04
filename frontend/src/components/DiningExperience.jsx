import React from 'react';
import './DiningExperience.css';

const DiningExperience = () => {
    return (
        <section className="dining-experience container">
            <div className="dining-header">
                <h2 className="dining-title">One Of A Kind Dining Experience</h2>
                <p className="dining-desc">
                    Join us and indulge your heart and taste buds at Bali's highest rated Indonesian restaurant.
                </p>
            </div>

            <div className="dining-grid">
                {/* Column 1 */}
                <div className="dining-card">
                    <div className="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Beautiful Ambience" className="dining-img" />
                    </div>
                    <h3 className="card-title">Be Wowed By Our Beautiful And Unique Ambience</h3>
                    <p className="card-text">
                        Immerse yourself in a unique dining experience with meticulously handcrafted elements throughout our restaurant. From the chairs to the plates, every detail is designed to elevate your experience.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="dining-card">
                    <div className="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Award Winning Service" className="dining-img" />
                    </div>
                    <h3 className="card-title">Experience Our Award Winning Service</h3>
                    <p className="card-text">
                        From the moment you step through our doors, you'll feel the difference. At THIS IS BALI, we don't just serve food, we create lasting memories through heartfelt hospitality, warm smiles, and a team that truly cares.
                    </p>
                </div>

                {/* Column 3 */}
                <div className="dining-card">
                    <div className="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Exquisite Creations" className="dining-img" />
                    </div>
                    <h3 className="card-title">Exquisite Creations By Award-Winning Chefs</h3>
                    <p className="card-text">
                        Prepare your taste buds for a treat! Our award-winning chefs have mastered the art of creating mouthwatering, homemade Indonesian delicacies that are sure to satisfy your cravings.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DiningExperience;
