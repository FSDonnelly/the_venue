import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNFO';

function App() {
  return (
    <div className='App'>
      <Header />
      <Featured />
      <VenueNfo />
    </div>
  );
}

export default App;
