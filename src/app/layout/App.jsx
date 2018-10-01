import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Route, Switch } from 'react-router-dom';
import SplashPage from '../../features/splash/SplashPage';
import PickUpDashboard from '../../features/pickup/PickUpDashboard/PickUpDashboard';
import LoginForm from '../../features/auth/Login/LoginForm';
import { Container, Button } from 'semantic-ui-react';
import SignUpForm from '../../features/auth/SignUp/SignUpForm';

class App extends Component {
  handleSignOut = () => {
    this.props.firebase.logout();
  }
  render() {
    return (
      <div>
        <Container>
          <Button onClick={this.handleSignOut}>Logout of Firebase</Button>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route path="/pickups" component={PickUpDashboard} />
            <Route path='/sign_in' component={LoginForm} />
            <Route path='/sign_up' component={SignUpForm} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withFirebase(App);
