import React from 'react';
import { Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const sloganHeaderStyles = {
  fontFamily: 'Righteous',
  fontSize: '3em',
  color: 'white',
  marginBottom: '-20px'
};

const sloganTagStyles = {
  fontFamily: 'Righteous',
  fontSize: '2.8em',
  color: 'white'
};

const buttonStyles = {
  fontWeight: 'bold'
};

const PickupDashboardSlogan = ({ auth }) => {
  let isLoggedIn = !auth.isEmpty

  return (
    <div>
      <h1 style={sloganHeaderStyles}>p i c k u p s</h1>
      <h3 style={sloganTagStyles}>get your game on!</h3>
      <Button as={Link} to={isLoggedIn ? '/newpickup' : '/signup'} basic color="white" inverted size="huge" style={buttonStyles} content={isLoggedIn ? "create a pickup" : "let's go!"} icon={isLoggedIn ? 'plus': 'user plus'}/>
    </div>
  );
};

export default PickupDashboardSlogan;
