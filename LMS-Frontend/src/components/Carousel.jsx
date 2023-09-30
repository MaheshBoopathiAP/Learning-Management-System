import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "../assets/slide-1.jpg";
import image2 from "../assets/slide-2.png";
import image3 from "../assets/slide-3.jpg";
import image4 from "../assets/slide-4.jpg";
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MyCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlePreviousClick = () => {
    setSelectedItem(selectedItem - 1);
  };

  const handleNextClick = () => {
    setSelectedItem(selectedItem + 1);
  };

  const totalSlides = 4; // Adjust the total number of slides

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-full  md:h-screen"> {/* Apply full-screen height on small devices */}
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          interval={3000}
          selectedItem={selectedItem}
          onChange={(index) => {
            setSelectedItem(index);
          }}
        >
          <div>
            <img src={image1} alt="Image 1" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
          <div>
            <img src={image4} alt="Image 4" />
          </div>
        </Carousel>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {/* Pagination dots */}
      </div>
      <button
        onClick={handlePreviousClick}
        className="prev-button absolute top-1/2 left-4 transform -translate-y-1/2  text-gray-400 p-3 rounded-full transition hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faAngleLeft} size='2x' />
      </button>
      <button
        onClick={handleNextClick}
        className="next-button absolute top-1/2 right-4 transform -translate-y-1/2  text-gray-400 p-3 rounded-full transition hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faAngleRight} size='2x' />
      </button>
    </div>
  );
};

export default MyCarousel;
