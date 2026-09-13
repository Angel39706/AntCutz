import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import GalleryPage from './components/Gallery';
import CalendarPage from './components/Appointment/CalendarPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section id="home">
          <HomePage />
        </section>
        <section id="gallery">
          <GalleryPage />
        </section>
        <section id='calendar'>
          <CalendarPage />
        </section>
      </div>
    </>
  );
};

export default App; 