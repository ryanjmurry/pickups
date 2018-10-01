import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashPage from '../../features/splash/SplashPage';
import PickUpDashboard from '../../features/pickup/PickUpDashboard/PickUpDashboard';
import LoginForm from '../../features/auth/Login/LoginForm';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route path="/pickups" component={PickUpDashboard} />
            <Route path='/login' component={LoginForm} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
