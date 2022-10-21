import ReactDom from 'react-dom';
import { useGlobalContext } from '../context';
import { next, previous, closeIcon } from '../assets';
import { images } from '../data';

import './styles/Modal.css';

function Backdrop() {
  const { showBackdrop } = useGlobalContext();
  return (
    <div className={`${showBackdrop ? 'show-backdrop' : 'backdrop'}`}>
      <div className="imagesGallery-container">
        <ProductImagesGallery />
      </div>
    </div>
  );
}

function ProductImagesGallery() {
  const { setShowBackdrop, main, index, setMain, setIndex } =
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

  const closeFullScreen = () => {
    setShowBackdrop(false);
  };
  return (
    <section id="full-screen-gallery">
      <button className="full-screen__close-btn" onClick={closeFullScreen}>
        <img src={closeIcon} alt="" />
      </button>
      <img src={main.url} alt="main-image" className="full-screen-main-image" />
      <button
        className="full-screen-slider-btn full-screen-previous-btn"
        onClick={handlePrev}
      >
        <img src={previous} alt="" />
      </button>

      <button
        className="full-screen-slider-btn full-screen-next-btn"
        onClick={handleNext}
      >
        <img src={next} alt="" />
      </button>

      <div className="full-screen-thumbnails-gallery">
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

function Modal() {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.querySelector('#backdrop-root')
      )}
    </>
  );
}

export default Modal;
