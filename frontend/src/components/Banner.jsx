import { useState } from 'react';

const Carousel = () => {
  // Array of image URLs
  const images = [
    '/bn5.png',
    '/bn2.png',
    '/bn3.png',	
    '/bn4.png',
    '/bn1.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for moving to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handler for moving to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden rounded-lg">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full"
      >
        ❯
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
