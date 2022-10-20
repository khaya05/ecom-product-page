import ReactDom from 'react-dom';
import { ImagesGallery } from './';
import { useGlobalContext } from '../context';

import './styles/Modal.css';

function Backdrop() {
  const { showBackdrop } = useGlobalContext();

  console.log(showBackdrop);
  return (
    <div className={`${showBackdrop ? 'show-backdrop' : 'backdrop'}`}></div>
  );
}

function ProductsOverlay() {
  return (
    <div className="overlay">
      {/* <ImagesGallery /> */}
    </div>
  );
}

function Modal() {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.querySelector('#backdrop-root')
      )}

      {ReactDom.createPortal(
        <ProductsOverlay />,
        document.querySelector('#products-overlay-root')
      )}
    </>
  );
}

export default Modal;
