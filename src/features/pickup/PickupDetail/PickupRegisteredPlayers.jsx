import React from 'react';
import { Segment, List, Item } from 'semantic-ui-react';

const PickupRegisteredPlayers = ({ attendees }) => {
  return (
    <Segment basic>
      <h1 style={{ fontSize: '2em' }}>registered players</h1>
      <List>
        {attendees &&
          attendees.map(attendee => (
            <Item key={attendee.id}>
              <Item.Image size="tiny" src={attendee.photoURL} />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <a>{attendee.displayName}</a>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
      </List>
    </Segment>
  );
};

export default PickupRegisteredPlayers;
