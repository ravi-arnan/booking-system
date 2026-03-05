import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoSvg from '../assets/black.svg';
import AdminLoginModal from './AdminLoginModal';

const Navbar = ({ onBookTable }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
                    <div className="logo" onClick={() => setIsLoginModalOpen(true)} style={{ cursor: 'pointer' }}>
                        <img src={logoSvg} alt="THIS IS BALI" className="navbar-logo-img" />
                    </div>
                </div>

                <div className="nav-right">
                    <button className="book-table-btn" onClick={onBookTable}>BOOK TABLE</button>
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

            <AdminLoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLoginSuccess={() => {
                    setIsLoginModalOpen(false);
                    window.location.hash = '#admin';
                }}
            />
        </nav>
    );
};

export default Navbar;
