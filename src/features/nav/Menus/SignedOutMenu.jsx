import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const menuStyles = {
  marginRight: '15px'
};

const SignedOutMenu = () => {
  return (
    <Menu.Menu position="right" style={menuStyles}>
      <Menu.Item as={Link} to="/pickups">
        <span style={{ color: '#a333c8', fontWeight: 'bold' }}>view all pickups</span>
      </Menu.Item>
      <Menu.Item as={Link} to="/login">
        log in
      </Menu.Item>
      <Menu.Item as={Link} to="/signup">
        sign up
      </Menu.Item>
    </Menu.Menu>
  );
};

export default SignedOutMenu;
