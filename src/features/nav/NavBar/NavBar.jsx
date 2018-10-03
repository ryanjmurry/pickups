import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

const logoText = {
  fontFamily: 'Righteous',
  fontSize: '1.25em',
  color: 'black'
}

const navStyles = {
  border: '1px solid black'
}

const NavBar = () => {
  return (
    <Menu size='massive' fixed="top" text style={navStyles}>
      <Menu.Item>
        <Header style={logoText}>p i c k u p s</Header>
      </Menu.Item>
      {/* <SignedInMenu /> */}
      {/* <SignedOutMenu /> */}
    </Menu>
  );
};

export default NavBar;
