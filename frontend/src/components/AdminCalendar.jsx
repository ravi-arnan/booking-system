import React, { useState, useEffect, useMemo } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import MiniCalendar from 'react-calendar';
import {
    Menu, ChevronLeft, ChevronRight, Search, HelpCircle,
    Settings, LogOut, Plus, Users, CalendarDays
} from 'lucide-react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
import './AdminCalendar.css';

const localizer = momentLocalizer(moment);

const AdminCalendar = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentView, setCurrentView] = useState('month');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/reservations');
                if (!response.ok) throw new Error('Failed to fetch reservations');

                const data = await response.json();

                const calendarEvents = data.map(res => {
                    const startDateTime = moment(`${res.date.split('T')[0]} ${res.time}`, 'YYYY-MM-DD HH:mm').toDate();
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

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        window.location.hash = '#';
    };

    const goToBack = () => {
        if (currentView === 'month') setCurrentDate(moment(currentDate).subtract(1, 'months').toDate());
        else if (currentView === 'week') setCurrentDate(moment(currentDate).subtract(1, 'weeks').toDate());
        else setCurrentDate(moment(currentDate).subtract(1, 'days').toDate());
    };

    const goToNext = () => {
        if (currentView === 'month') setCurrentDate(moment(currentDate).add(1, 'months').toDate());
        else if (currentView === 'week') setCurrentDate(moment(currentDate).add(1, 'weeks').toDate());
        else setCurrentDate(moment(currentDate).add(1, 'days').toDate());
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Derived states
    const headerDateText = useMemo(() => {
        if (currentView === 'month') {
            return moment(currentDate).format('MMMM YYYY');
        } else if (currentView === 'week') {
            const start = moment(currentDate).startOf('week');
            const end = moment(currentDate).endOf('week');
            if (start.format('MM') !== end.format('MM')) return `${start.format('MMM')} - ${end.format('MMM YYYY')}`;
            return `${start.format('MMMM YYYY')}`;
        }
        return moment(currentDate).format('D MMMM YYYY');
    }, [currentDate, currentView]);

    const todaysReservations = useMemo(() => {
        const todayStr = moment(currentDate).format('YYYY-MM-DD');
        return events
            .filter(e => moment(e.start).format('YYYY-MM-DD') === todayStr)
            .sort((a, b) => a.start - b.start);
    }, [events, currentDate]);

    if (loading) return <div className="gc-loading">Memuat kalender...</div>;
    if (error) return <div className="gc-error">{error}</div>;

    return (
        <div className="gc-layout">
            {/* TOP HEADER */}
            <header className="gc-header">
                <div className="gc-header-left">
                    <button className="gc-icon-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu size={20} />
                    </button>
                    <div className="gc-logo-wrapper">
                        <div className="gc-logo-icon">
                            <CalendarDays size={22} color="#1a73e8" />
                        </div>
                        <span className="gc-logo-text">Kalender</span>
                    </div>
                </div>

                <div className="gc-header-center">
                    <button className="gc-today-btn" onClick={goToToday}>Hari ini</button>
                    <div className="gc-nav-arrows">
                        <button className="gc-icon-btn" onClick={goToBack}><ChevronLeft size={20} /></button>
                        <button className="gc-icon-btn" onClick={goToNext}><ChevronRight size={20} /></button>
                    </div>
                    <h2 className="gc-date-label">{headerDateText}</h2>
                </div>

                <div className="gc-header-right">
                    <button className="gc-icon-btn hidden-mobile"><Search size={20} /></button>
                    <button className="gc-icon-btn hidden-mobile"><HelpCircle size={20} /></button>
                    <button className="gc-icon-btn hidden-mobile"><Settings size={20} /></button>

                    <div className="gc-view-selector">
                        <select
                            value={currentView}
                            onChange={(e) => setCurrentView(e.target.value)}
                            className="gc-view-select"
                        >
                            <option value="day">Hari</option>
                            <option value="week">Minggu</option>
                            <option value="month">Bulan</option>
                        </select>
                    </div>

                    <div className="gc-profile-actions">
                        <button className="gc-logout-btn" onClick={handleLogout} title="Logout">
                            <LogOut size={18} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN CONTAINER */}
            <div className="gc-main-container">

                {/* SIDEBAR */}
                {isSidebarOpen && (
                    <aside className="gc-sidebar">
                        <button className="gc-create-btn">
                            <div className="gc-create-icon-wrapper">
                                <Plus size={24} color="#ea4335" />
                            </div>
                            <span>Buat</span>
                        </button>

                        <div className="gc-mini-calendar">
                            <MiniCalendar
                                onChange={setCurrentDate}
                                value={currentDate}
                                prev2Label={null}
                                next2Label={null}
                                formatShortWeekday={(locale, date) => moment(date).format('dd').charAt(0)}
                            />
                        </div>

                        <div className="gc-sidebar-section">
                            <div className="gc-section-header">
                                <Users size={16} />
                                <span>Today's Reservations</span>
                            </div>
                            <div className="gc-today-list">
                                {todaysReservations.length === 0 ? (
                                    <div className="gc-no-reservations">Tiada reservasi untuk tanggal ini.</div>
                                ) : (
                                    todaysReservations.map((ev) => (
                                        <div
                                            key={ev.id}
                                            className="gc-agenda-item"
                                            onClick={() => setSelectedEvent(ev.resource)}
                                        >
                                            <div className="gc-agenda-dot"></div>
                                            <div className="gc-agenda-info">
                                                <span className="gc-agenda-time">{moment(ev.start).format('HH:mm')}</span>
                                                <span className="gc-agenda-title">{ev.resource.name} ({ev.resource.partySize}p)</span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </aside>
                )}

                {/* BIG CALENDAR CONTENT */}
                <main className="gc-calendar-content">
                    <BigCalendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '100%' }}
                        onSelectEvent={handleSelectEvent}
                        views={['month', 'week', 'day']}
                        view={currentView}
                        date={currentDate}
                        onNavigate={(date) => setCurrentDate(date)}
                        onView={(view) => setCurrentView(view)}
                        step={30}
                        timeslots={2}
                        toolbar={false} /* We handle toolbar in our custom header */
                        dayLayoutAlgorithm="no-overlap"
                    />
                </main>
            </div>

            {/* MODAL POPUP */}
            {selectedEvent && (
                <div className="gc-modal-overlay" onClick={closePopup}>
                    <div className="gc-modal" onClick={e => e.stopPropagation()}>
                        <div className="gc-modal-header">
                            <h2>Detail Reservasi</h2>
                            <button className="gc-close-btn" onClick={closePopup}>✕</button>
                        </div>
                        <div className="gc-modal-body">
                            <div className="gc-modal-row">
                                <span className="gc-modal-label">Name:</span>
                                <span className="gc-modal-value">{selectedEvent.name}</span>
                            </div>
                            <div className="gc-modal-row">
                                <span className="gc-modal-label">Email:</span>
                                <span className="gc-modal-value">{selectedEvent.email}</span>
                            </div>
                            <div className="gc-modal-row">
                                <span className="gc-modal-label">Phone:</span>
                                <span className="gc-modal-value">{selectedEvent.phone}</span>
                            </div>
                            <div className="gc-modal-row">
                                <span className="gc-modal-label">Party Size:</span>
                                <span className="gc-modal-value">{selectedEvent.partySize} People</span>
                            </div>
                            <div className="gc-modal-row">
                                <span className="gc-modal-label">Date:</span>
                                <span className="gc-modal-value">{moment(selectedEvent.date).format('dddd, MMMM Do YYYY')}</span>
                            </div>
                            <div className="gc-modal-row">
                                <span className="gc-modal-label">Time:</span>
                                <span className="gc-modal-value">{selectedEvent.time}</span>
                            </div>
                            {selectedEvent.specialRequest && (
                                <div className="gc-modal-row">
                                    <span className="gc-modal-label">Request:</span>
                                    <span className="gc-modal-value">{selectedEvent.specialRequest}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCalendar;
