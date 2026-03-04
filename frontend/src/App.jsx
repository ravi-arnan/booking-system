import React, { useState } from 'react';
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

function App() {
  const [showReservation, setShowReservation] = useState(false);

  const handleBookTable = () => {
    setShowReservation(true);
    window.scrollTo(0, 0);
  };

  const handleCloseReservation = () => {
    setShowReservation(false);
  };

  if (showReservation) {
    return <ReservationPage onClose={handleCloseReservation} />;
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

