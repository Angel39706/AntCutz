import React from 'react';
import antLogo from './images/ant2.png';

const HomePage: React.FC = () => (
  <div className="flex flex-col md:flex-row min-h-screen w-full bg-black">
    {/* Logo Section */}
    <div className="flex-1 flex items-center justify-center p-6 md:p-12">
      <img 
        src={antLogo} 
        alt="AntCutz Logo" 
        className="w-full h-72 max-w-xs md:w-[642px] md:h-[656px] md:max-w-none object-contain"
      />
    </div>
    {/* Content Section */}
    <div className="flex-1 flex items-center justify-center p-6 md:p-12">
      <div className="flex flex-col items-center md:items-start w-full max-w-xl space-y-8 md:space-y-10 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">Book Your<br/>Haircut Appointment</h1>
        <button className="px-6 py-2 bg-[#232f3e] text-white rounded-full text-base md:text-lg font-semibold shadow hover:bg-[#1a2533] transition">Booking Policy</button>
        <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0 pt-2 w-full md:w-auto">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl md:text-2xl text-white font-semibold">5.0</span>
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
          </div>
          <span className="text-xl md:text-2xl text-white font-normal">13 Reviews</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage; 