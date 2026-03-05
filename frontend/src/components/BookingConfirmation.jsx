import React from 'react';
import './BookingConfirmation.css';

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const PencilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>;
const NavigationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>;
const MessageCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>;
const Trash2Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>;

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
                            <span className="bc-datetime-icon"><CalendarIcon /></span>
                            <span>{formatDate(date)}</span>
                        </div>
                        <div className="bc-datetime-box">
                            <span className="bc-datetime-icon"><ClockIcon /></span>
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
                            <PencilIcon /> &nbsp;Modify Booking
                        </button>
                        <button className="bc-btn-secondary" onClick={handleDirection}>
                            <NavigationIcon /> &nbsp;Direction
                        </button>
                    </div>

                    {/* Icon Buttons */}
                    <div className="bc-icon-row">
                        <button className="bc-icon-btn" onClick={handleCalendar} title="Add to Calendar">
                            <CalendarIcon />
                        </button>
                        <button className="bc-icon-btn" onClick={handleShare} title="Share">
                            <ShareIcon />
                        </button>
                        <button className="bc-icon-btn" onClick={handleWhatsApp} title="WhatsApp">
                            <MessageCircleIcon />
                        </button>
                        <button className="bc-icon-btn bc-icon-btn--danger" onClick={handleCancel} title="Cancel Reservation">
                            <Trash2Icon />
                        </button>
                    </div>

                    {/* Notice */}
                    <div className="bc-notice">
                        <span className="bc-notice-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><InfoIcon /></span>
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
