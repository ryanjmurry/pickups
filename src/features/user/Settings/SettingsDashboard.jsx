import React from 'react'
import SettingsNav from './SettingsNav';
import AuthSettings from './AuthSettings';
import GeneralSettings from './GeneralSettings';

const SettingsDashboard = () => {
  return (
    <div>
      <h1>Settings Dash</h1>
      <AuthSettings />
      <GeneralSettings />
      <SettingsNav />
    </div>
  )
}

export default SettingsDashboard
