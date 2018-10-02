import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PickupGame = ({ pickup }) => {
  return (
    <div>
      <h3>{pickup.title}</h3>
      <Button as={Link} to={`/pickup/${pickup.id}`} content="View" />
    </div>
  );
};

export default PickupGame;
