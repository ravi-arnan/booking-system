import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="navbar-container">
                <div className="nav-left">
                    <button className="menu-btn" aria-label="Menu">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                    <div className="logo">
                        <span className="logo-text">THIS <span className="logo-is">IS</span> BALI</span>
                    </div>
                </div>

                <div className="nav-right">
                    <button className="book-table-btn">BOOK TABLE</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
