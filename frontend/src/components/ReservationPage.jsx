import React, { useState } from 'react';
import './ReservationPage.css';
import restaurantImg from '../assets/c1cfc952-39dc-49b3-9e03-d42353687774.jpg';

const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>;
const PencilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>;
const PartyPopperIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" /><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" /><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" /><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" /><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" /></svg>;


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
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const e2 = validate();
        if (Object.keys(e2).length > 0) {
            setErrors(e2);
            return;
        }

        setLoading(true);
        setApiError('');

        try {
            const response = await fetch('http://localhost:3001/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: `+62${form.phone}`,
                    partySize: form.partySize,
                    date: form.date,
                    time: form.time,
                    specialRequest: form.specialRequest,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setApiError(data.error || 'Something went wrong. Please try again.');
                }
                return;
            }

            // Buka halaman konfirmasi di tab baru
            const params = new URLSearchParams({
                name: form.name,
                email: form.email,
                phone: form.phone,
                partySize: form.partySize,
                date: form.date,
                time: form.time,
                specialRequest: form.specialRequest || '',
                bookingId: data.data?.id || '',
            });
            window.open(`/#confirmation?${params.toString()}`, '_blank');
            setSubmitted(true);
        } catch (err) {
            setApiError('Cannot connect to the server. Please make sure the backend is running.');
        } finally {
            setLoading(false);
        }
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
                        <div className="success-icon" style={{ color: '#4caf50' }}><PartyPopperIcon /></div>
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
                                <span className="form-input-icon"><UserIcon /></span>
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
                                <span className="form-input-icon"><MailIcon /></span>
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
                                <span className="form-input-icon"><CalendarIcon /></span>
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
                                <span className="form-input-icon"><PencilIcon /></span>
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

                        {apiError && (
                            <p className="form-api-error">{apiError}</p>
                        )}

                        <button
                            type="submit"
                            className="btn-confirm-reservation"
                            disabled={loading}
                        >
                            {loading ? 'Submitting…' : 'Confirm Reservation'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReservationPage;
