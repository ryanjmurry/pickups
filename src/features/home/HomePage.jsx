import React from 'react';
import Slideshow from './Slideshow';
import Hook from './Hook';
import HowItWorks from './HowItWorks';

const HomePage = () => {
  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '-400px', zIndex: '-1' }}>
        <Slideshow />
      </div>
      <div>
        <Hook />
      </div>
      <div style={{marginTop: '175px'}}>
        <HowItWorks />
      </div>
    </div>
  );
};

export default HomePage;
