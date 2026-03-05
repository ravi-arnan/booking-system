import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AdminCalendar.css';

const localizer = momentLocalizer(moment);

const AdminCalendar = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/reservations');
                if (!response.ok) throw new Error('Failed to fetch reservations');

                const data = await response.json();

                const calendarEvents = data.map(res => {
                    const startDateTime = moment(`${res.date.split('T')[0]} ${res.time}`, 'YYYY-MM-DD HH:mm').toDate();
                    // Assume 1 hour default duration for table booking visualization
                    const endDateTime = moment(startDateTime).add(1, 'hours').toDate();

                    return {
                        id: res.id,
                        title: `${res.name} (${res.partySize} pax)`,
                        start: startDateTime,
                        end: endDateTime,
                        resource: res
                    };
                });

                setEvents(calendarEvents);
            } catch (err) {
                console.error(err);
                setError('Failed to load reservations');
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event.resource);
    };

    const closePopup = () => {
        setSelectedEvent(null);
    };

    if (loading) return <div className="admin-loading">Loading reservations...</div>;
    if (error) return <div className="admin-error">{error}</div>;

    return (
        <div className="admin-calendar-container">
            <h1 className="admin-calendar-title">Reservation Dashboard</h1>

            <div className="calendar-wrapper">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '80vh' }}
                    onSelectEvent={handleSelectEvent}
                    views={['month', 'week', 'day']}
                    defaultView="week"
                    step={30}
                    timeslots={2}
                />
            </div>

            {selectedEvent && (
                <div className="admin-modal-overlay" onClick={closePopup}>
                    <div className="admin-modal" onClick={e => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <h2>Booking Details</h2>
                            <button className="admin-close-btn" onClick={closePopup}>✕</button>
                        </div>
                        <div className="admin-modal-body">
                            <p><strong>Name:</strong> {selectedEvent.name}</p>
                            <p><strong>Email:</strong> {selectedEvent.email}</p>
                            <p><strong>Phone:</strong> {selectedEvent.phone}</p>
                            <p><strong>Party Size:</strong> {selectedEvent.partySize}</p>
                            <p><strong>Date:</strong> {moment(selectedEvent.date).format('MMMM Do YYYY')}</p>
                            <p><strong>Time:</strong> {selectedEvent.time}</p>
                            {selectedEvent.specialRequest && (
                                <p><strong>Special Request:</strong> {selectedEvent.specialRequest}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCalendar;
