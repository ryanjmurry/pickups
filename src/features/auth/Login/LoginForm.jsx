import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { login, logout } from '../authActions';

const actions = {
  login,
  logout
}

const LoginForm = ({ login, logout }) => {
  return <div />;
};

export default connect(null, actions)(reduxForm({ form: 'loginForm' })(LoginForm));
