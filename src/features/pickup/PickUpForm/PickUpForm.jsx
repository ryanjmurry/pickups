import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Label } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const skillLevel = [
  { key: 'rookie', text: 'Rookie', value: 'rookie' },
  { key: 'pro', text: 'Pro', value: 'pro' },
  { key: 'allstar', text: 'All-Star', value: 'allstar' },
  { key: 'superstar', text: 'Superstar', value: 'superstar' }
];

class PickupForm extends Component {
  render() {
    return (
      <Form>
        <Field name="title" type="text" component={TextInput} placeholder="Title your pickup!" />
        <Field
          name="level"
          type="text"
          component={SelectInput}
          options={skillLevel}
          placeholder="What's the desired skill level of players?"
        />
        <Field
          name="capacity"
          type="number"
          min={2}
          component={TextInput}
          placeholder="How many players is too many?"
        />
        <Field
          name="description"
          type="text"
          component={TextArea}
          placeholder="Tell us about the pickup!"
        />
        <Field name="city" type="text" component={TextInput} placeholder="Pickup city?" />
        <Field
          name="address"
          type="text"
          component={TextInput}
          placeholder="Enter the pickup address"
        />
        <Field name="venue" type="text" component={TextInput} placeholder="Enter the venue name" />
        <Field
          name="date"
          type="text"
          component={DateInput}
          placeholder="Date and time?"
          dateFormat="YYYY-MM-DD HH:mm"
          timeFormat="HH:mm"
          timeCaption="time"
          showTimeSelect
        />
        <Button color='teal'>
          Create Pickup!
        </Button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'pickupForm' })(PickupForm);
