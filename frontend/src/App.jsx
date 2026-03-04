import React from 'react';
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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BookingInfo />
      <DiningExperience />
      <GuestsImpression />
      <ReviewGallery />
      <GuestReviews />
      <OurStory />
      <ReadyToVisit />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
