import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingInfo from './components/BookingInfo';
import DiningExperience from './components/DiningExperience';
import GuestsImpression from './components/GuestsImpression';
import ReviewGallery from './components/ReviewGallery';
import GuestReviews from './components/GuestReviews';
import OurStory from './components/OurStory';
import ReadyToVisit from './components/ReadyToVisit';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReservationPage from './components/ReservationPage';
import BookingConfirmation from './components/BookingConfirmation';
import ModifyBooking from './components/ModifyBooking';

const getHash = () => window.location.hash.split('?')[0];

const getBookingFromUrl = () => {
  const search = window.location.hash.includes('?')
    ? window.location.hash.split('?')[1]
    : window.location.search.slice(1);
  if (!search) return null;
  const p = new URLSearchParams(search);
  const name = p.get('name');
  if (!name) return null;
  return {
    name,
    email: p.get('email') || '',
    phone: p.get('phone') || '',
    partySize: p.get('partySize') || '',
    date: p.get('date') || '',
    time: p.get('time') || '',
    specialRequest: p.get('specialRequest') || '',
    bookingId: p.get('bookingId') || '',
  };
};

function App() {
  const [currentHash, setCurrentHash] = useState(() => getHash());
  const [bookingData, setBookingData] = useState(() => getBookingFromUrl());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(getHash());
      setBookingData(getBookingFromUrl());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Tombol Book Table dari halaman utama → buka tab baru
  const handleBookTable = () => {
    window.open('/#reservation', '_blank');
  };

  // Tombol close di halaman form → kembali ke halaman utama tanpa hash
  const handleCloseReservation = () => {
    setCurrentHash('');
    history.replaceState('', document.title, window.location.pathname + window.location.search);
  };

  useEffect(() => {
    if (currentHash === '#reservation' || currentHash === '#confirmation') {
      window.scrollTo(0, 0);
    }
  }, [currentHash]);

  if (currentHash === '#confirmation') {
    return <BookingConfirmation booking={bookingData} />;
  }

  if (currentHash === '#reservation') {
    return <ReservationPage onClose={handleCloseReservation} />;
  }

  if (currentHash === '#modify') {
    return (
      <ModifyBooking
        bookingData={bookingData}
        onBack={() => {
          const params = new URLSearchParams(window.location.hash.split('?')[1]);
          window.location.hash = `#confirmation?${params.toString()}`;
        }}
      />
    );
  }

  return (
    <div className="app">
      <Navbar onBookTable={handleBookTable} />
      <Hero />
      <BookingInfo onBookTable={handleBookTable} />
      <DiningExperience />
      <div className="combined-gallery-section">
        <GuestsImpression />
        <ReviewGallery />
      </div>
      <GuestReviews />
      <OurStory />
      <ReadyToVisit onBookTable={handleBookTable} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
