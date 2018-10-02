import React from 'react';
import PickupGame from './PickupGame';

const PickupList = ({ pickups }) => {
  return (
    <div>
      <h1>Pick up List</h1>
      {pickups && pickups.map(pickup => <PickupGame key={pickup.id} pickup={pickup} />)}
    </div>
  );
};

export default PickupList;
