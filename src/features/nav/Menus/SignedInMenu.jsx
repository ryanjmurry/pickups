import React from 'react';
import { Menu, Image } from 'semantic-ui-react'

const SignedInMenu = () => {
  return (
    <Menu.Item position="right">
      <Image avatar src="https://api.adorable.io/avatars/80/.png" />
    </Menu.Item>
  );
};

export default SignedInMenu;
