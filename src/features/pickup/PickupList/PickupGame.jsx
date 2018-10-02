import React from 'react';

const PickupGame = ({ pickup }) => {
  return (
    <div>
      <h1>PickupGame</h1>
      {pickup.address}
    </div>
  );
};

export default PickupGame;
