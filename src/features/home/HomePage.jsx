import React from 'react';
import Slideshow from './Slideshow';
import Hook from './Hook';

const HomePage = () => {
  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '-400px', zIndex: '-1'}}>
        <Slideshow />
      </div>
      <div>
        <Hook />
      </div>
    </div>
  );
};

export default HomePage;
