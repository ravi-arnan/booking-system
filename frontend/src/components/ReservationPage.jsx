import React, { useState } from 'react';
import './ReservationPage.css';
import restaurantImg from '../assets/c1cfc952-39dc-49b3-9e03-d42353687774.jpg';

const generateTimeSlots = (date) => {
    if (!date) return [];
    const slots = [];
    for (let h = 11; h <= 22; h++) {
        slots.push(`${h.toString().padStart(2, '0')}:00`);
        if (h < 22) slots.push(`${h.toString().padStart(2, '0')}:30`);
    }
    return slots;
};

const ReservationPage = ({ onClose }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        partySize: '',
        date: '',
        time: '',
        specialRequest: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = '"name" is required';
        if (!form.email.trim()) e.email = '"email" is required';
        if (!form.phone.trim()) e.phone = '"phone" is required';
        if (!form.partySize) e.partySize = '"party_size" is required';
        if (!form.date) e.date = '"date" must be a valid date';
        if (!form.time) e.time = '"time" is required';
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const e2 = validate();
        if (Object.keys(e2).length > 0) {
            setErrors(e2);
            return;
        }
        setSubmitted(true);
    };

    const timeSlots = generateTimeSlots(form.date);

    return (
        <div className="reservation-page">
            {/* Left: Image Panel */}
            <div className="reservation-image-panel">
                <img src={restaurantImg} alt="THIS IS BALI Restaurant" className="reservation-bg-img" />
                <div className="reservation-image-overlay">
                    <div className="reservation-restaurant-info">
                        <h2 className="res-restaurant-name">THIS IS BALI</h2>
                        <p className="res-restaurant-desc">Indonesian · $$ · 4.9 (7.1k reviews)</p>
                    </div>
                </div>
            </div>

            {/* Right: Form Panel */}
            <div className="reservation-form-panel">
                <button className="reservation-close-btn" onClick={onClose} aria-label="Close">✕</button>

                {submitted ? (
                    <div className="reservation-success">
                        <div className="success-icon">🎉</div>
                        <h2>Reservation Confirmed!</h2>
                        <p>Thank you, <strong>{form.name}</strong>! Your table for <strong>{form.partySize}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong> has been reserved.</p>
                        <p>We will send a confirmation to <strong>{form.email}</strong>.</p>
                        <button className="btn-primary res-back-btn" onClick={onClose}>Back to Home</button>
                    </div>
                ) : (
                    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
                        <div className="reservation-form-header">
                            <h1 className="reservation-title">Your VIP Reservation</h1>
                            <p className="reservation-subtitle">How it works: Book your table and get the first available table at your chosen time.</p>
                            <p className="reservation-note"><em>Average wait with VIP reservation is currently 5 minutes.</em></p>
                        </div>

                        {/* Full Name */}
                        <div className="form-group">
                            <label className="form-label">Your Full Name</label>
                            <div className={`form-input-wrapper ${errors.name ? 'error' : ''}`}>
                                <span className="form-input-icon">👤</span>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.name && <p className="form-error">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label className="form-label">Your Email</label>
                            <div className={`form-input-wrapper ${errors.email ? 'error' : ''}`}>
                                <span className="form-input-icon">✉️</span>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email && <p className="form-error">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label className="form-label">Your Phone Number</label>
                            <div className={`form-input-wrapper phone-wrapper ${errors.phone ? 'error' : ''}`}>
                                <span className="phone-flag">🇮🇩</span>
                                <span className="phone-prefix">+62</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-input"
                                    placeholder="812 3456 7890"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.phone && <p className="form-error">{errors.phone}</p>}
                        </div>

                        {/* Party Size */}
                        <div className="form-group">
                            <label className="form-label">How many people are coming:</label>
                            <div className={`form-input-wrapper select-wrapper ${errors.partySize ? 'error' : ''}`}>
                                <select
                                    name="partySize"
                                    className="form-input form-select"
                                    value={form.partySize}
                                    onChange={handleChange}
                                >
                                    <option value="">- choose size -</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                        <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
                                    ))}
                                    <option value="10+">10+ people</option>
                                </select>
                                <span className="select-arrow">⌄</span>
                            </div>
                            {errors.partySize && <p className="form-error">{errors.partySize}</p>}
                        </div>

                        {/* Preferred Date */}
                        <div className="form-group">
                            <label className="form-label">Preferred Date</label>
                            <div className={`form-input-wrapper ${errors.date ? 'error' : ''}`}>
                                <span className="form-input-icon">📅</span>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-input"
                                    min={new Date().toISOString().split('T')[0]}
                                    value={form.date}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.date && <p className="form-error">{errors.date}</p>}
                        </div>

                        {/* Preferred Time */}
                        <div className="form-group">
                            <label className="form-label">Preferred Time</label>
                            {!form.date && <p className="form-note">*Please select a date first</p>}
                            <div className={`form-input-wrapper select-wrapper ${errors.time ? 'error' : ''}`}>
                                <select
                                    name="time"
                                    className="form-input form-select"
                                    value={form.time}
                                    onChange={handleChange}
                                    disabled={!form.date}
                                >
                                    <option value="">- choose time -</option>
                                    {timeSlots.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                <span className="select-arrow">⌄</span>
                            </div>
                            {errors.time && <p className="form-error">{errors.time}</p>}
                        </div>

                        {/* Special Request */}
                        <div className="form-group">
                            <label className="form-label">Do you have a special request?:</label>
                            <div className="form-input-wrapper">
                                <span className="form-input-icon">✏️</span>
                                <input
                                    type="text"
                                    name="specialRequest"
                                    className="form-input"
                                    placeholder="Add your special request"
                                    value={form.specialRequest}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-confirm-reservation">
                            Confirm Reservation
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReservationPage;
