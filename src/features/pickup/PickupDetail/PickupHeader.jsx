import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PickupHeader = ({ pickup, registerForPickupGame, unregisterForPickupGame, auth }) => {
  // const isHost = pickup.attendees[auth.uid].host;

  // let isGoing;

  // var keyArray = Object.keys(pickup.attendees);

  // if (keyArray.includes(auth.uid)) {
  //   isGoing = true;
  // }
  
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>Pick up description</Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Button as={Link} to={`/edit/${pickup.id}`} content="Edit Event" color="orange" />
            <Button
              onClick={() => registerForPickupGame(pickup)}
              content="Join Pickup"
              color="purple"
            />
             <Button
              onClick={() => unregisterForPickupGame(pickup)}
              content="Leave Pickup"
              color="red"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default PickupHeader;
