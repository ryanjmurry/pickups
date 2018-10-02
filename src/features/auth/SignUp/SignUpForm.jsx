import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Label } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import { signUpUser, socialLogin } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';

const actions = {
  signUpUser,
  socialLogin
};

const SignUpForm = ({ signUpUser, handleSubmit, error, socialLogin }) => {
  return (
    <Form onSubmit={handleSubmit(signUpUser)}>
      <Segment>
        <Field name="name" type="text" component={TextInput} placeholder="Display Name" />
        <Field name="email" type="text" component={TextInput} placeholder="Email Address" />
        <Field name="password" type="password" component={TextInput} placeholder="Password" />
        <div>
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
        </div>
        <Button color="green">Game On!</Button>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: 'signUpForm' })(SignUpForm));
