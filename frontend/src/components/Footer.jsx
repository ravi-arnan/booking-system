import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                {/* Left Column: Brand & Details */}
                <div className="footer-col footer-brand">
                    <div className="footer-logo">THIS <span className="logo-is">IS</span> BALI</div>
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
                        <span className="social-icon">f</span>
                        <span className="social-icon pt-1">📷</span>
                        <span className="social-icon">♪</span>
                        <span className="social-icon">▶</span>
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
