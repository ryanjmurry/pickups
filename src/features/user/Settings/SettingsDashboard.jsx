import React from 'react';
import SettingsNav from './SettingsNav';
import AuthSettings from './AuthSettings';
import GeneralSettings from './GeneralSettings';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
});

const SettingsDashboard = ({ providerId, user }) => {
  return (
    <div>
      <h1>Settings Dash</h1>
      <Switch>
        <Redirect exact from="/settings" to="/settings/general" />
        <Route path="/settings/auth" render={() => <AuthSettings providerId={providerId} />} />
        <Route path="/settings/general" render={() => <GeneralSettings initialValues={user}/>} />
      </Switch>
    </div>
  );
};

export default connect(mapState)(SettingsDashboard);
