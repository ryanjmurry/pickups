import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import DateInput from '../../../app/common/form/DateInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';

const GeneralSettings = () => {
  return (
    <Form>
      <h1>General Settings</h1>
      <Field name='displayName' component={TextInput}/>
      <Field name='dateOfBirth' component={DateInput}/>
      <Field name='city' component={TextInput}/>
      <Field name='about' component={TextArea}/>
      <Field name='interests' component={SelectInput}/>
    </Form>
  );
};

export default reduxForm({ form: 'aboutForm' })(GeneralSettings);
