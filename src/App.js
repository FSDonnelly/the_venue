import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNFO';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Element name='featured'>
        <Featured />
      </Element>
      <Element name='venuNFO'>
        <VenueNfo />
      </Element>
      <Element name='highlight'>
        <Highlight />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
