import React from 'react'
import { Segment, Container } from 'semantic-ui-react';
import BackgroundSlideshow from 'react-background-slideshow';
import dashBg from '../../../app/assets/dash-bg.jpg'

const headerSegmentStyles = {
  height: '400px',
};

const PickupDashboardHeader = () => {
  return (
    <div>
       <Segment style={headerSegmentStyles}>
        <BackgroundSlideshow
          images={[dashBg]}
          disableInterval={true}
          disableClick={true}
        />
          <Container>
            <h1><span>p i c k u p s</span></h1>
            <h3>get your game on!</h3>
          </Container>
        </Segment>
    </div>
  )
}

export default PickupDashboardHeader;
