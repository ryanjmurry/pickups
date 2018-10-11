import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { Button, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { registerForPickupGame, unregisterForPickupGame } from '../../user/userActions';
import PickupHeader from './PickupHeader';
import PickupChat from './PickupChat';
import PickupRegisteredPlayers from './PickupRegisteredPlayers';
import PickupInformation from './PickupInformation';
import { objectToArray } from '../../../app/common/util/helpers';

const mapState = state => {
  let pickup = {};
  if (state.firestore.ordered.pickups && state.firestore.ordered.pickups[0]) {
    pickup = state.firestore.ordered.pickups[0];
  }
  return {
    pickup,
    auth: state.firebase.auth
  };
};

const actions = {
  registerForPickupGame,
  unregisterForPickupGame
};

class PickupDetailPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`pickups/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`pickups/${match.params.id}`);
  }

  render() {
    const { pickup, registerForPickupGame, unregisterForPickupGame, auth } = this.props;
    const attendees = pickup && pickup.attendees && objectToArray(pickup.attendees)
    return (
      <div>
        <Segment>
          <h1 style={{ fontFamily: 'Righteous', fontSize: '5em' }}>{pickup.title}</h1>
          <Grid columns={2}>
            <Grid.Row stretched>
              <Grid.Column width={11}>
                <Segment>
                  <PickupHeader
                    pickup={pickup}
                    auth={auth}
                    registerForPickupGame={registerForPickupGame}
                    unregisterForPickupGame={unregisterForPickupGame}
                  />
                </Segment>
                <Segment>
                  <PickupChat />
                </Segment>
              </Grid.Column>
              <Grid.Column width={5}>
                <Segment>
                  <PickupRegisteredPlayers attendees={attendees} />
                </Segment>
                <Segment>
                  <PickupInformation pickup={pickup} auth={auth} />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(PickupDetailPage)
);
