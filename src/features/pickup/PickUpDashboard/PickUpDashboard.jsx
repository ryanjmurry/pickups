import React, { Component } from 'react';
import PickupList from '../PickupList/PickupList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Segment, Container } from 'semantic-ui-react';
import BackgroundSlideshow from 'react-background-slideshow';
import dashBg from '../../../app/assets/dash-bg.jpg'

const mapState = state => ({
  pickups: state.firestore.ordered.pickups
});

const headerSegmentStyles = {
  height: '400px',
};

class PickupDashboard extends Component {
  render() {
    const { pickups } = this.props;
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
        <PickupList pickups={pickups} />
      </div>
    );
  }
}

export default connect(mapState)(firestoreConnect([{ collection: 'pickups' }])(PickupDashboard));
