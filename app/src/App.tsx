import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 