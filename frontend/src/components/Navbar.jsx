import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                    <button
                        className={`menu-btn ${menuOpen ? 'open' : ''}`}
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <span className="close-icon text-white text-2xl font-light">✕</span>
                        ) : (
                            <>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                            </>
                        )}
                    </button>
                    <div className="logo">
                        <span className="logo-text">THIS <span className="logo-is">IS</span> BALI</span>
                    </div>
                </div>

                <div className="nav-right">
                    <button className="book-table-btn">BOOK TABLE</button>
                </div>
            </div>

            {/* Dropdown Menu Overlay */}
            <div className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#menu" onClick={toggleMenu}>Our menu</a></li>
                    <li><a href="#book" onClick={toggleMenu}>Book a table</a></li>
                    <li><a href="#visit" onClick={toggleMenu}>Visit us</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact us</a></li>
                    <li><a href="#team" onClick={toggleMenu}>Join Our Team</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
