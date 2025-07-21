import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from './images/profile.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Appointment', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Centered Nav Links (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="px-5 py-2 bg-[#232f3e] rounded-full font-medium transition hover:bg-[#1a2533] hover:text-gray-200 shadow text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Profile Image (Right) */}
          <div className="flex-shrink-0 flex items-center ml-auto">
            <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <div className="flex justify-center mb-4">
            <img src={profileImg} alt="Profile" className="w-16 h-16 rounded-full border-2 border-white object-cover" />
          </div>
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} className="block text-center py-2 text-lg hover:text-gray-300 font-medium transition" onClick={() => setMenuOpen(false)}>{link.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 