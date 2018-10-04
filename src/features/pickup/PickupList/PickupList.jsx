import React from 'react';
import PickupGame from './PickupGame';
import { Segment, Divider } from 'semantic-ui-react';

const PickupList = ({ pickups }) => {
  return (
    <div>
      <Segment style={{ border: '3px solid #a333c8', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '1.5em', fontFamily: 'Righteous' }}>p i c k u p s</h1>
        <Divider />
        {pickups && pickups.map(pickup => <PickupGame key={pickup.id} pickup={pickup} />)}
      </Segment>
    </div>
  );
};

export default PickupList;
