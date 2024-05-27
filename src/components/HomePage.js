// src/components/HomePage.js

import React, { useState } from 'react';
import './HomePage.css';
import Property from './Property';
import SellerView from './SellerView';
import BuyerView from './BuyerView';

function HomePage() {
  const [isSellerView, setIsSellerView] = useState(false);
  const toggleView = () => {
    setIsSellerView(!isSellerView);
  };
  return (
    <div className="home-container">
      
      <nav>
          <button onClick={toggleView}>{isSellerView ? 'Switch to Buyer View' : 'Switch to Seller View'}</button>
        </nav>
        <main className='propertList'>
        {isSellerView ? <SellerView /> : <BuyerView />}
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Rentify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
