import ReactDom from 'react-dom';
import { ImagesGallery } from './';
import { useGlobalContext } from '../context';

import './styles/Modal.css';

function Backdrop() {
  const { showBackdrop } = useGlobalContext();
  return (
    <div className={`backdrop ${showBackdrop ? 'show-backdrop' : ''}`}></div>
  );
}

function ProductsOverlay() {
  return (
    <div className="overlay">
      <ImagesGallery />
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
        document.getElementById('products-overlay-root')
      )}
    </>
  );
}

export default Modal;
