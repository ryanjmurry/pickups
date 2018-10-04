import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import PickupDashboard from '../../features/pickup/PickupDashboard/PickupDashboard';
import LoginForm from '../../features/auth/Login/LoginForm';
import SignUpForm from '../../features/auth/SignUp/SignUpForm';
import NavBar from '../../features/nav/NavBar/NavBar';
import PickupForm from '../../features/pickup/PickupForm/PickupForm';
import PickupDetailPage from '../../features/pickup/PickupDetail/PickupDetailPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';

const bodyStyles = {
  paddingTop: '4.2em'
}

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div style={bodyStyles}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/pickups" component={PickupDashboard} />
            <Route path="/newpickup" component={PickupForm} />
            <Route path="/edit/:id" component={PickupForm} />
            <Route path="/pickup/:id" component={PickupDetailPage} />
            <Route path="/settings" component={SettingsDashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
