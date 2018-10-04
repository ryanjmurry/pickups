import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import { signUpUser, socialLogin } from '../authActions';
import SocialLogin from '../SocialLogin/SocialLogin';


const mapState = state => ({
  auth: state.firebase.auth
});

const actions = {
  signUpUser,
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

class SignUpForm extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.auth.isEmpty && this.props.auth.isEmpty !== prevProps.auth.isEmpty) {
      this.props.history.push('/settings');
    } else if (!prevProps.auth.isEmpty && this.props.auth.isEmpty !== prevProps.auth.isEmpty) {
      this.props.history.push('/')
    }
  }

  handleFormSubmission = values => {
    this.props.signUpUser(values);
  };

  render() {
    const { handleSubmit, error, socialLogin, auth, match } = this.props
    return (
      <Segment centered basic style={loginFormStyle}>
      <Form onSubmit={handleSubmit(this.handleFormSubmission)}>
      <Segment.Group>
            <Segment textAlign="center">
              <h1 style={loginHeaderStyle}>sign up</h1>
              <h3>
                already a user?{' '}
                <span>
                  <Link to="/login" style={{ color: '#a333c8' }}>
                    log in
                  </Link>
                </span>
              </h3>
            </Segment>
            <Segment padded>
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
              <Button
                color="purple"
                style={{ fontSize: '1.25em' }}
                disabled={!auth.isEmpty}
                content={!auth.isEmpty ? 'already signed up!' : 'sign up'}
              />
            </Segment>
            {auth.isEmpty &&
            <span>
              <Divider horizontal>Or</Divider>
              <Segment basic>
                <SocialLogin socialLogin={socialLogin} auth={auth} path={match.path}/>
              </Segment>
            </span>}
          </Segment.Group>
    </Form>
    </Segment>
    )
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: 'signUpForm' })(SignUpForm));


