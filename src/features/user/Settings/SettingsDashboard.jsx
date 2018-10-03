import React from 'react';
// import SettingsNav from './SettingsNav';
import AuthSettings from './AuthSettings';
import GeneralSettings from './GeneralSettings';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { updateProfile } from '../userActions';

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
});

const actions = {
  updateProfile
}

const SettingsDashboard = ({ providerId, user, updateProfile }) => {
  return (
    <div>
      <h1>Settings Dash</h1>
      <Switch>
        <Redirect exact from="/settings" to="/settings/general" />
        <Route path="/settings/auth" render={() => <AuthSettings providerId={providerId} />} />
        <Route path="/settings/general" render={() => <GeneralSettings initialValues={user} updateProfile={updateProfile}/>} />
      </Switch>
    </div>
  );
};

export default connect(mapState, actions)(SettingsDashboard);
