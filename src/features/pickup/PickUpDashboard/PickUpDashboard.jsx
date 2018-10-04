import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PickupDashboardHeader from './PickupDashboardHeader';

const mapState = state => ({
  pickups: state.firestore.ordered.pickups
});

class PickupDashboard extends Component {
  render() {
    const { pickups } = this.props;
    return (
      <div>
        <PickupDashboardHeader />
      </div>
    );
  }
}

export default connect(mapState)(firestoreConnect([{ collection: 'pickups' }])(PickupDashboard));
