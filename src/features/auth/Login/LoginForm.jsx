import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Label, Grid, Divider } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import { login, socialLogin } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';

const mapState = state => ({
  auth: state.firebase.auth
});

const actions = {
  login,
  socialLogin
};

const loginHeaderStyle = {
  fontFamily: 'Righteous',
  fontSize: '4em'
};

const loginFormStyle = {
  width: '400px',
  margin: 'auto'
};

class LoginForm extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.auth.isEmpty && this.props.auth.isEmpty !== prevProps.auth.isEmpty) {
      this.props.history.push('/pickups');
    } 
  }

  handleFormSubmission = values => {
    this.props.login(values);
  };

  render() {
    const { error, socialLogin, auth } = this.props;
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
              <Button
                color="purple"
                style={{ fontSize: '1.25em' }}
                disabled={!auth.isEmpty}
                content={!auth.isEmpty ? 'already logged in' : 'log in'}
              />
            </Segment>
            {auth.isEmpty &&
            <span>
              <Divider horizontal>Or</Divider>
              <Segment basic>
                <SocialLogin socialLogin={socialLogin} auth={auth} />
              </Segment>
            </span>}
          </Segment.Group>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: 'loginForm' })(LoginForm));
