import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import { login, socialLogin } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';

const actions = {
  login,
  socialLogin
};

const LoginForm = ({ login, handleSubmit, error, socialLogin }) => {
  return (
    <Form onSubmit={handleSubmit(login)}>
      <Segment>
        <Field name="email" type="text" component={TextInput} placeholder="Email Address" />
        <Field name="password" type="password" component={TextInput} placeholder="Password" />
        <div>
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
        </div>
        <Button color="green">Login</Button>
        <SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: 'loginForm' })(LoginForm));
