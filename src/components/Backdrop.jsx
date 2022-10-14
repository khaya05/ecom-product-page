import React from 'react';
import { ImagesGallery } from './index';

import './styles/Backdrop.css';

function Backdrop({ children }) {
  return <div className="backdrop"></div>;
}

function ProductsOverlay({ children }) {
  return (
    <div className="overlay">
      <ImagesGallery />
    </div>
  );
}

export default Backdrop;
