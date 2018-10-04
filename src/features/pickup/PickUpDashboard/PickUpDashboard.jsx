import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PickupDashboardHeader from './PickupDashboardHeader';
import PickupDashboardSlogan from './PickupDashboardSlogan';
import PickupList from '../PickupList/PickupList';

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
        <div style={{ position: 'relative', left: '150px', top: '180px', marginBottom: '190px' }}>
          <PickupDashboardSlogan auth={auth} />
        </div>
        <div style={{width: '800px', margin: 'auto'}}>
          <PickupList pickups={pickups}/>
        </div>
      </div>
    );
  }
}

export default connect(mapState)(firestoreConnect([{ collection: 'pickups' }])(PickupDashboard));
