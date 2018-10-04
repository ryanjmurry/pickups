import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const menuStyles = {
  marginRight: '15px'
};

const createButtonStyles ={
  fontSize: '0.8em'
}

const SignedOutMenu = () => {
  return (
    <Menu.Menu position="right" style={menuStyles}>
      <Menu.Item style={createButtonStyles}>
        <Button as={Link} to="/newpickup" basic size='mini'>
          <Icon name="add" />
          create pickup
        </Button>
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
