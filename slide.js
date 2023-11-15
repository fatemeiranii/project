import React, { useState, useEffect } from 'react';
import './slide.css';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'PIC1.JPG',
    'pic2.jpg',
    'pic3.jpg (3).jpg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img src={images[currentImage]} alt="Slider" />
    </div>
  );
};

export default ImageSlider;