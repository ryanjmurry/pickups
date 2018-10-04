import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Label, Grid, Divider } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import { login, socialLogin } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';

const loginHeaderStyle = {
  fontFamily: 'Righteous',
  fontSize: '4em'
};

const actions = {
  login,
  socialLogin
};

const loginFormStyle = {
  width: '400px',
  margin: 'auto'
}

class LoginForm extends Component {
  handleFormSubmission = values => {
    this.props.login(values);
    this.props.history.push('/pickups');
  };

  render() {
    const { error, socialLogin } = this.props;
    return (
      <Segment centered basic style={loginFormStyle}>
        <Form onSubmit={this.props.handleSubmit(this.handleFormSubmission)}>
          <Segment.Group>
            <Segment textAlign="center">
              <h1 style={loginHeaderStyle}>log in</h1>
              <h3>
                not a user?{' '}
                <span>
                  <Link to="/signup" style={{ color: '#a333c8' }}>
                    sign up
                  </Link>
                </span>
              </h3>
            </Segment>
            <Segment padded>
              <Field name="email" type="text" component={TextInput} placeholder="Email Address" />
              <Field name="password" type="password" component={TextInput} placeholder="Password" />
              <div>
                {error && (
                  <Label basic color="red">
                    {error}
                  </Label>
                )}
              </div>
              <Button color="purple" style={{ fontSize: '1.25em' }}>
                log in
              </Button>
            </Segment>
            <Divider horizontal>Or</Divider>
            <Segment basic>
              <SocialLogin socialLogin={socialLogin} />
            </Segment>
          </Segment.Group>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  null,
  actions
)(reduxForm({ form: 'loginForm' })(LoginForm));
