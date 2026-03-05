import React from 'react';
import { Facebook, Instagram, Music, Youtube } from 'lucide-react';
import './Footer.css';
import logo from '../assets/TIB-LIGHT-LOGO-FOR-HOMEPAGE.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Left Column: Brand & Details */}
                <div className="footer-col footer-brand">
                    <img src={logo} alt="This is Bali" className="footer-logo" />
                    <p className="footer-mb">2026 All rights reserved.</p>
                    <div className="footer-address">
                        <p>PT Unicom Food And Services</p>
                        <p>Jl. Goutama No.2, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571</p>
                    </div>
                </div>

                {/* Middle Column: Payments */}
                <div className="footer-col footer-payments">
                    <h4 className="footer-heading">YOU CAN PAY SAFELY WITH</h4>
                    <div className="payment-icons">
                        {/* Simulating payment icons with simple stylized spans/images */}
                        <div className="pay-icon visa">VISA</div>
                        <div className="pay-icon mastercard"><div></div><div></div></div>
                        <div className="pay-icon amex">AMEX</div>
                    </div>
                </div>

                {/* Right Column: Socials */}
                <div className="footer-col footer-social">
                    <h4 className="footer-heading">FOLLOW US ON</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                            <Facebook size={22} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <Instagram size={22} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
                            <Music size={22} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                            <Youtube size={22} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>PRIVACY POLICY &nbsp;|&nbsp; TERMS & DISCLAIMER &nbsp;|&nbsp; GUIDES</p>
            </div>
        </footer>
    );
};

export default Footer;
