import React from 'react';
import { Navbar, ProductInfo } from './components';
import { useGlobalContext } from './context';

import Cart from './components/Cart';
import Aside from './components/Aside';

import './components/styles/Aside.css'

import './App.css';
import Modal from './components/Modal';
function App() {
  const { showAside, showBackdrop } = useGlobalContext();
  return (
    <>
      <header>
        <div className={showAside ? 'aside-open' : 'aside-close'}>
          <Aside />
        </div>
        <div className="nav-container">
          <Navbar />
        </div>
      </header>
      <main>
        <div>
          <Cart />
        </div>
        { showBackdrop && <div className="">
          <Modal />
        </div> }
        <ProductInfo />
      </main>
    </>
  );
}

export default App;
