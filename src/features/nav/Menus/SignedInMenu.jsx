import React from 'react';
import { Menu, Image, Dropdown, Button, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const style = {
  marginRight: '15px'
};

const SignedInMenu = ({ onLogOut, auth }) => {
  return (
    <Menu.Menu position="right">
      <Menu.Item as={Link} to="/pickups">
        <span style={{ color: '#a333c8', fontWeight: 'bold' }}>view all pickups</span>
      </Menu.Item>
      <Menu.Item style={style}>
        <Image avatar src={auth.photoURL || `https://api.adorable.io/avatars/80/${auth.uid}.png`} />
        <Dropdown pointing="top right">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/profile" text="profile" icon="user circle" />
            <Dropdown.Item as={Link} to="/mypickups" text="my pickups" icon="trophy" />
            <Dropdown.Item as={Link} to="/settings" text="settings" icon="setting" />
            <Dropdown.Item onClick={onLogOut} text="log out" icon="sign out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu.Menu>
  );
};

export default SignedInMenu;
