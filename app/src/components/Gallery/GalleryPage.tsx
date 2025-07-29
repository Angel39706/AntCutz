import React from 'react';
import Card from '../Card';

const images = [
  { src: require('../../images/profile.png'), caption: 'Fresh Fade' },
  { src: require('../../images/profile.png'), caption: 'Classic Cut' },
  { src: require('../../images/profile.png'), caption: 'Beard Trim' },
  { src: require('../../images/profile.png'), caption: 'Kids Cut' },
  { src: require('../../images/profile.png'), caption: 'Design Work' },
  { src: require('../../images/profile.png'), caption: 'Line Up' },
];

const GalleryPage: React.FC = () => (
  <div className="min-h-screen w-full bg-black flex flex-col items-center py-12 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {images.map((img, idx) => (
        <Card key={idx} src={img.src} caption={img.caption} />
      ))}
    </div>
  </div>
);

export default GalleryPage; 