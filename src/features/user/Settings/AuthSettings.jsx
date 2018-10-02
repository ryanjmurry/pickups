import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';

const AuthSettings = () => {
  return (
    <Form>
        <Field name="newPassword1" type="password" component={TextInput} placeholder="Enter your new password" />
        <Field name="newPassword2" type="password" component={TextInput} placeholder="Confirm new password" />
    </Form>
  );
};

export default reduxForm({ form: 'authSettingsForm' })(AuthSettings);

//if email provider, provide way to update email
// if google provider, provide link to google account to update there
