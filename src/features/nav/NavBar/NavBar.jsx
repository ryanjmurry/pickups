import React from 'react';
import { Menu } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

const NavBar = () => {
  return (
    <Menu inverted color="black" fixed="top">
      <Menu.Item header>Pickups</Menu.Item>
      {/* <SignedInMenu /> */}
      {/* <SignedOutMenu /> */}
    </Menu>
  );
};

export default NavBar;
