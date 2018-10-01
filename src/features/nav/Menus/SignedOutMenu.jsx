import React from 'react';
import { Menu } from 'semantic-ui-react';

const SignedOutMenu = () => {
  return (
    <Menu.Menu position="right">
      <Menu.Item>Sign In</Menu.Item>
      <Menu.Item>Sign Up</Menu.Item>
    </Menu.Menu>
  );
};

export default SignedOutMenu;
