import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { registerForPickupGame, unregisterForPickupGame } from '../../user/userActions';

const mapState = state => {
  let pickup = {};
  if (state.firestore.ordered.pickups && state.firestore.ordered.pickups[0]) {
    pickup = state.firestore.ordered.pickups[0];
  }
  return {
    pickup
  };
};

const actions = {
  registerForPickupGame, 
  unregisterForPickupGame
}

class PickupDetailPage extends Component {
  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let pickup = await firestore.get(`pickups/${match.params.id}`);
    if (!pickup.exists) {
      history.push('/events');
    }
  }

  render() {
    const { pickup, registerForPickupGame, unregisterForPickupGame } = this.props;
    return (
      <div>
        <h1>Pickup Detail</h1>
        <Button as={Link} to={`/edit/${pickup.id}`} content="Edit Event" />
        <Button onClick={() => registerForPickupGame(pickup)} content="Join Pickup" />
        <Button onClick={() => unregisterForPickupGame(pickup)} content="Leave Pickup" />
      </div>
    );
  }
}

export default withFirestore(connect(mapState, actions)(PickupDetailPage));
