import React, { useState, useEffect } from 'react';
import './ReservationPage.css'; // Reusing styling from ReservationPage mostly
import './BookingConfirmation.css'; // For the success modal styles

const generateTimeSlots = (date) => {
    if (!date) return [];
    const slots = [];
    for (let h = 11; h <= 22; h++) {
        slots.push(`${h.toString().padStart(2, '0')}:00`);
        if (h < 22) slots.push(`${h.toString().padStart(2, '0')}:30`);
    }
    return slots;
};

const SuccessModal = ({ onClose }) => {
    return (
        <div className="bc-modal-overlay">
            <div className="bc-modal">
                <div className="bc-modal-icon">
                    <span>i</span>
                </div>
                <h2>Success</h2>
                <p>Update success</p>
                <button className="bc-modal-btn" onClick={onClose}>Okey</button>
            </div>
        </div>
    );
};

const ModifyBooking = ({ bookingData, onBack }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        partySize: '',
        date: '',
        time: '',
        specialRequest: '',
    });
    const [bookingId, setBookingId] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (bookingData) {
            setForm({
                name: bookingData.name || '',
                email: bookingData.email || '',
                // Strip +62 if present for the form input
                phone: (bookingData.phone || '').replace(/^\+62/, ''),
                partySize: bookingData.partySize || '',
                date: bookingData.date ? bookingData.date.split('T')[0] : '', // ensure format yyyy-mm-dd
                time: bookingData.time || '',
                specialRequest: bookingData.specialRequest || '',
            });
            setBookingId(bookingData.bookingId || '');
        }
    }, [bookingData]);

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

        if (!bookingId) {
            setApiError('Booking ID is missing. Cannot update.');
            return;
        }

        setLoading(true);
        setApiError('');

        try {
            const response = await fetch(`http://localhost:3001/api/reservations/${bookingId}`, {
                method: 'PUT',
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

            setShowSuccess(true);
        } catch (err) {
            setApiError('Cannot connect to the server. Please make sure the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);

        // Update URL hash with new data
        const params = new URLSearchParams({
            name: form.name,
            email: form.email,
            phone: `+62${form.phone}`,
            partySize: form.partySize,
            date: form.date,
            time: form.time,
            specialRequest: form.specialRequest || '',
            bookingId: bookingId,
        });

        // Return to confirmation page with updated data
        window.location.hash = `#confirmation?${params.toString()}`;
    };

    const timeSlots = generateTimeSlots(form.date);

    return (
        <div className="reservation-page" style={{ justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
            {showSuccess && <SuccessModal onClose={handleCloseSuccess} />}

            <div className="reservation-form-panel" style={{ width: '100%', maxWidth: '800px', margin: '40px auto', borderRadius: '16px' }}>
                <button className="reservation-close-btn" onClick={onBack} aria-label="Close" style={{ left: '20px', right: 'auto' }}>←</button>

                <form className="reservation-form" onSubmit={handleSubmit} noValidate>
                    <div className="reservation-form-header" style={{ marginBottom: '30px', textAlign: 'center' }}>
                        <br />
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
                                placeholder="123 123 123"
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
                                style={{ fontWeight: 'bold' }}
                            >
                                <option value="">- choose size -</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                                ))}
                                <option value="10+">10+ People</option>
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
                                style={{ fontWeight: 'bold' }}
                            />
                        </div>
                        {errors.date && <p className="form-error">{errors.date}</p>}
                    </div>

                    {/* Preferred Time (Grid layout as in screenshot) */}
                    <div className="form-group">
                        <label className="form-label">Preferred Time</label>
                        {!form.date && <p className="form-note">*Please select a date first</p>}

                        <div className="time-slots-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '10px' }}>
                            {timeSlots.slice(0, 8).map(t => (
                                <div
                                    key={t}
                                    className={`time-slot-btn ${form.time === t ? 'selected' : ''}`}
                                    onClick={() => handleChange({ target: { name: 'time', value: t } })}
                                    style={{
                                        padding: '12px 10px',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                        backgroundColor: form.time === t ? '#000' : '#fff',
                                        color: form.time === t ? '#fff' : '#000',
                                    }}
                                >
                                    {t}
                                </div>
                            ))}
                        </div>
                        {errors.time && <p className="form-error">{errors.time}</p>}
                    </div>

                    {/* Special Request */}
                    <div className="form-group" style={{ marginTop: '20px' }}>
                        <label className="form-label">Do you have a special request?:</label>
                        <div className="form-input-wrapper" style={{ border: 'none', paddingLeft: 0, backgroundColor: 'transparent' }}>
                            <span className="form-input-icon" style={{ left: 0 }}>✏️</span>
                            <input
                                type="text"
                                name="specialRequest"
                                className="form-input"
                                placeholder="test"
                                value={form.specialRequest}
                                onChange={handleChange}
                                style={{ paddingLeft: '30px', fontWeight: 'bold' }}
                            />
                        </div>
                    </div>

                    {apiError && (
                        <p className="form-api-error">{apiError}</p>
                    )}

                    <div style={{ marginTop: '40px' }}>
                        <button
                            type="submit"
                            className="btn-confirm-reservation"
                            disabled={loading}
                            style={{ backgroundColor: '#200080', color: 'white' }}
                        >
                            {loading ? 'Submitting...' : 'Update Booking'}
                        </button>

                        <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#666' }}>
                            We'll notify you when your turn is getting closer<br />
                            Thank you for your patience!
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModifyBooking;
