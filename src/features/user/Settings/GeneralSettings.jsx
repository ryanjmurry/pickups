import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import DateInput from '../../../app/common/form/DateInput';
import TextArea from '../../../app/common/form/TextArea';

const GeneralSettings = () => {
  return (
    <Form>
      <h1>General Settings</h1>
      <Field name="displayName" component={TextInput} placeholder="What name do you go by?" />
      <Field
        name="dateOfBirth"
        component={DateInput}
        width={8}
        placeholder="When's your birthday?"
        dateFormat="YYYY-MM-DD"
        showYearDropdown={true}
        showMonthDropdown={true}
        dropdownMode="select"
      />
      <Field name="city" component={TextInput} placeholder="What is your city of residence?" />
      <Field
        name="about"
        component={TextArea}
        rows={2}
        placeholder="Tell us a little bit about yourself!"
      />
      <Button content="Update Profile!" />
    </Form>
  );
};

export default reduxForm({ form: 'aboutForm', enableReinitialize: true, destroyOnUnmount: false })(
  GeneralSettings
);
