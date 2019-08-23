import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUnitl';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />
      <div className='artist_name'>
        <div className='wrapper'>Chance The Rapper</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
