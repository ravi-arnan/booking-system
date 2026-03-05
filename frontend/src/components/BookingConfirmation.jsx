import React from 'react';
import './BookingConfirmation.css';

const BookingConfirmation = ({ booking }) => {
    if (!booking) {
        return (
            <div className="bc-not-found">
                <p>Booking not found.</p>
            </div>
        );
    }

    const {
        name,
        email,
        phone,
        partySize,
        date,
        time,
        specialRequest,
        bookingId,
    } = booking;

    // Format tanggal: Thu Mar 12, 2026
    const formatDate = (d) => {
        if (!d) return '';
        const dt = new Date(d + 'T00:00:00');
        return dt.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const handleCalendar = () => {
        const eventDate = new Date(date + 'T' + time + ':00');
        const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000); // +2 hours
        const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=THIS+IS+BALI+Reservation&dates=${fmt(eventDate)}/${fmt(endDate)}&details=VIP+Reservation+for+${partySize}+guests&location=THIS+IS+BALI,+Ubud,+Bali`;
        window.open(url, '_blank');
    };

    const handleWhatsApp = () => {
        const msg = encodeURIComponent(
            `Hi! I have a reservation at THIS IS BALI.\nBooking ID: ${bookingId || 'N/A'}\nDate: ${formatDate(date)}\nTime: ${time}\nGuests: ${partySize}\nName: ${name}`
        );
        window.open(`https://wa.me/628123456789?text=${msg}`, '_blank');
    };

    const handleShare = async () => {
        const text = `I just reserved a table at THIS IS BALI! 🌴\nDate: ${formatDate(date)} at ${time}\nGuests: ${partySize}`;
        if (navigator.share) {
            await navigator.share({ title: 'THIS IS BALI Reservation', text });
        } else {
            await navigator.clipboard.writeText(text);
            alert('Booking details copied to clipboard!');
        }
    };

    const handleCancel = () => {
        if (window.confirm('Are you sure you want to cancel this reservation?')) {
            window.close();
        }
    };

    const handleDirection = () => {
        window.open('https://maps.google.com/?q=THIS+IS+BALI+Ubud', '_blank');
    };

    return (
        <div className="bc-page">
            {/* Header */}
            <div className="bc-header">
                <h1 className="bc-header-title">
                    Your VIP Reservation Is <span className="bc-confirmed-word">Confirmed</span>
                </h1>
            </div>

            {/* Card */}
            <div className="bc-card-wrapper">
                <div className="bc-card">
                    {/* Status Row */}
                    <div className="bc-status-row">
                        <span className="bc-status-label">Booking Status</span>
                        <span className="bc-status-badge">Confirmed</span>
                    </div>

                    {/* Stats */}
                    <div className="bc-stats">
                        <div className="bc-stat">
                            <span className="bc-stat-value">-</span>
                            <span className="bc-stat-label">People Ahead</span>
                        </div>
                        <div className="bc-stat-divider" />
                        <div className="bc-stat">
                            <span className="bc-stat-value">5</span>
                            <span className="bc-stat-label">Wait (min)</span>
                        </div>
                        <div className="bc-stat-divider" />
                        <div className="bc-stat">
                            <span className="bc-stat-value">{partySize}</span>
                            <span className="bc-stat-label">Guests</span>
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="bc-datetime-row">
                        <div className="bc-datetime-box">
                            <span className="bc-datetime-icon">📅</span>
                            <span>{formatDate(date)}</span>
                        </div>
                        <div className="bc-datetime-box">
                            <span className="bc-datetime-icon">🕐</span>
                            <span>{time}</span>
                        </div>
                    </div>

                    {/* Name & Email */}
                    <div className="bc-info-box">
                        <span className="bc-info-label">Guest Name</span>
                        <span className="bc-info-value">{name}</span>
                    </div>

                    {/* Special Request */}
                    {specialRequest && (
                        <div className="bc-info-box">
                            <span className="bc-info-label">Special Request</span>
                            <span className="bc-info-value">{specialRequest}</span>
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="bc-actions">
                        <button className="bc-btn-primary" onClick={() => {
                            const params = new URLSearchParams(window.location.hash.split('?')[1]);
                            window.location.hash = `#modify?${params.toString()}`;
                        }}>
                            ✏️ &nbsp;Modify Booking
                        </button>
                        <button className="bc-btn-secondary" onClick={handleDirection}>
                            ➤ &nbsp;Direction
                        </button>
                    </div>

                    {/* Icon Buttons */}
                    <div className="bc-icon-row">
                        <button className="bc-icon-btn" onClick={handleCalendar} title="Add to Calendar">
                            📅
                        </button>
                        <button className="bc-icon-btn" onClick={handleShare} title="Share">
                            ↗️
                        </button>
                        <button className="bc-icon-btn" onClick={handleWhatsApp} title="WhatsApp">
                            💬
                        </button>
                        <button className="bc-icon-btn bc-icon-btn--danger" onClick={handleCancel} title="Cancel Reservation">
                            🗑️
                        </button>
                    </div>

                    {/* Notice */}
                    <div className="bc-notice">
                        <span className="bc-notice-icon">ℹ️</span>
                        <p>
                            Your booking is confirmed. We would appreciate it if you could arrive on time.
                            Please note that we will release a booked table to other guests if guests do not
                            arrive on time or we do not receive a notification. Thank you for your understanding. ❤️
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
