import React from 'react';
import logo from './logo.svg';
import './App.css';
import PriceTracker from "./components/price-tracker.js"


function App() {


  return (
    <div className="App">
      <div>
        <h2>Luno(NGN) to Kraken(USD) Arbitrage Prices</h2>
        <PriceTracker/>
      </div>
    </div>
  );
}

export default App;
