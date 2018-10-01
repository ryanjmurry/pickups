import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashPage from '../../features/splash/SplashPage';
import PickUpDashboard from '../../features/pickup/PickUpDashboard/PickUpDashboard';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route path='/pickups' component={PickUpDashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
