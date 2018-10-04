import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PickupDashboardHeader from './PickupDashboardHeader';
import PickupDashboardSlogan from './PickupDashboardSlogan';

const mapState = state => ({
  pickups: state.firestore.ordered.pickups,
  auth: state.firebase.auth
});

class PickupDashboard extends Component {
  render() {
    const { pickups, auth } = this.props;
    return (
      <div>
        <div style={{ position: 'relative', marginBottom: '-400px', zIndex: '-1' }}>
          <PickupDashboardHeader />
        </div>
        <div style={{position: 'absolute', left: '250px', top: '220px'}}>
          <PickupDashboardSlogan auth={auth}/>
        </div >
        <div style={{marginTop: '175px'}}/>
      </div>
    );
  }
}

export default connect(mapState)(firestoreConnect([{ collection: 'pickups' }])(PickupDashboard));
