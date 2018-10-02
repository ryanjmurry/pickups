import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Route, Switch } from 'react-router-dom';
import SplashPage from '../../features/splash/SplashPage';
import PickupDashboard from '../../features/pickup/PickupDashboard/PickupDashboard';
import LoginForm from '../../features/auth/Login/LoginForm';
import { Container, Button } from 'semantic-ui-react';
import SignUpForm from '../../features/auth/SignUp/SignUpForm';
import NavBar from '../../features/nav/NavBar/NavBar';
import PickupForm from '../../features/pickup/PickupForm/PickupForm';
import PickupDetailPage from '../../features/pickup/PickupDetail/PickupDetailPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';

class App extends Component {
  handleSignOut = () => {
    this.props.firebase.logout();
  };
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <br />
          <br />
          <br />
          <br />
          <Button onClick={this.handleSignOut}>Logout of Firebase</Button>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route path="/pickups" component={PickupDashboard} />
            <Route path="/newpickup" component={PickupForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/edit/:id" component={PickupForm} />
            <Route path="/pickup/:id" component={PickupDetailPage} />
            <Route path='/settings' component={SettingsDashboard} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withFirebase(App);
