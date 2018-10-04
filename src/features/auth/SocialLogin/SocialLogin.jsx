import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


// reusable social login component for future authentication services
const SocialLogin = ({ socialLogin }) => {
  return (
    <div>
      <Button onClick={() => socialLogin('google')} type="button"  color='black' basic fluid style={{fontSize: '1.4em', fontWeight: 'bolder', color:'black'}}>
        <Icon name="google"/>
        login with google
      </Button>
    </div>
  );
};

export default SocialLogin;
