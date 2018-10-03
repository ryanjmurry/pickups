import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


// reusable social login component for future authentication services
const SocialLogin = ({ socialLogin }) => {
  return (
    <div>
      <Button onClick={() => socialLogin('google')} type="button" color="google plus">
        <Icon name="google plus" />
        Login with Google!
      </Button>
    </div>
  );
};

export default SocialLogin;
