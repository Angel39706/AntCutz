import React from 'react';
import antLogo from '../../images/ant2.png';

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="text-yellow-400 w-6 h-6 md:w-7 md:h-7 fill-current inline-block"
            >
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/>
            </svg>
          </div>
          <span className="text-xl md:text-2xl text-white font-normal">13 Reviews</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage; 