import React from 'react';

const servicesData = {
  "Haircut Services": [
    "Classic Haircut",
    "Skin Fade",
    "Taper Fade",
    "Buzz Cut",
    "Scissor Cut",
    "Kids' Haircut"
  ],
  "Beard & Facial Hair Grooming": [
    "Beard Trim",
    "Beard Fade",
    "Mustache Trim",
    "Goatee Shaping"
  ],
  "Line-Ups & Clean-Ups": [
    "Edge-Up / Line-Up",
    "Neck Clean-Up"
  ],
  "Custom & Add-On Services": [
    "Hair Designs",
    "Custom Part"
  ]
};

const ServicesPage: React.FC = () => (
  <div className="min-h-screen w-full bg-black flex flex-col items-center py-12 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">Our Services</h1>
    <div className="w-full max-w-3xl space-y-10">
      {Object.entries(servicesData).map(([category, services]) => (
        <div key={category}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">{category}</h2>
          <ul className="space-y-2">
            {(services as string[]).map(service => (
              <li key={service} className="text-lg md:text-xl text-gray-200 bg-[#232f3e] rounded-lg px-5 py-3 shadow-sm">{service}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesPage; 