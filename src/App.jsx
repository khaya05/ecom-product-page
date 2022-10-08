import React from 'react';
import { Navbar, ProductInfo } from './components';

import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="nav-container">
          <Navbar />
        </div>
      </header>
      <main>
        <ProductInfo />
      </main>
    </>
  );
}

export default App;
