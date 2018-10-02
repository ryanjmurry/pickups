import React, { Component } from 'react';
import PickupList from '../PickupList/PickupList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapState = state => ({
  pickups: state.firestore.ordered.pickups
})

class PickupDashboard extends Component {
  render() {
    const { pickups } = this.props;
    return (
      <div>
        <h1>PickUp Dashboard</h1>
        <PickupList pickups={pickups}/>
      </div>
    );
  }
}

export default connect(mapState)(firestoreConnect([{ collection: 'pickups' }])(PickupDashboard));
