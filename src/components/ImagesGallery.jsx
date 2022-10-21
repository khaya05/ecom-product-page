import { useState } from 'react';
import { useGlobalContext } from '../context';
import { next, previous } from '../assets';
import { images } from '../data';

import './styles/ImagesGallery.css';

function ImagesGallery() {
  const { showBackdrop, setShowBackdrop, main, index, setMain, setIndex } =
    useGlobalContext();

  const handleNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((oldState) => oldState + 1);
    }

    setMain(images[index]);
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((oldState) => oldState - 1);
    }
    setMain(images[index]);
  };

  const handleMainClick = () => {
    if (screen.width >= 620) {
      setShowBackdrop((prevState) => !prevState);
    }
  };

  return (
    <section id="images-container">
      <img
        src={main.url}
        alt="main-image"
        className="main-image"
        onClick={handleMainClick}
      />
      <button className="mobile-slider-btn previous-btn" onClick={handlePrev}>
        <img src={previous} alt="" />
      </button>

      <button className="mobile-slider-btn next-btn" onClick={handleNext}>
        <img src={next} alt="" />
      </button>

      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.thumb}
              alt={image.name}
              key={image.id}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ImagesGallery;
