import { useState } from 'react';
import { useGlobalContext } from '../context';
import { images } from '../data';

import './styles/ImagesGallery.css';

function ImagesGallery() {
  const [main, setMain] = useState(images[0]);
  const { showBackdrop, setShowBackdrop } = useGlobalContext();

  console.log(showBackdrop);

  return (
    <section id="images-container">
      <img
        src={main.url}
        alt="main-image"
        className="main-image"
        onClick={() => setShowBackdrop((prevState) => !prevState)}
      />
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
