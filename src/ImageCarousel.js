import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://via.placeholder.com/300x200/FF0000/FFFFFF',
    'https://via.placeholder.com/300x200/00FF00/FFFFFF',
    'https://via.placeholder.com/300x200/0000FF/FFFFFF'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <img src={images[currentIndex]} alt="Carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
