import React from 'react';

interface CardProps {
  src: string;
  caption?: string;
}

const Card: React.FC<CardProps> = ({ src, caption }) => (
  <div className="bg-[#232f3e] border-2 border-white overflow-hidden shadow-lg flex flex-col items-center">
    <img src={src} alt={caption || 'Gallery Image'} className="w-full h-64 object-cover" />
    {caption && (
      <div className="p-4 w-full text-center">
        <span className="text-white text-lg font-medium">{caption}</span>
      </div>
    )}
  </div>
);

export default Card; 