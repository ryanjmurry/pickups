import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Label } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import { createPickup } from '../pickupActions';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

const mapState = state => {
  let pickup = {};

  // setting initial values of the pickup
  if (state.firestore.ordered.pickups && state.firestore.ordered.pickups[0]) {
    pickup = state.firestore.ordered.pickups[0];
  }
  return {
    initialValues: pickup,
    pickup
  };
};

const actions = {
  createPickup
};

const skillLevel = [
  { key: 'rookie', text: 'Rookie', value: 'rookie' },
  { key: 'pro', text: 'Pro', value: 'pro' },
  { key: 'allstar', text: 'All-Star', value: 'allstar' },
  { key: 'superstar', text: 'Superstar', value: 'superstar' }
];



class PickupForm extends Component {
  
  onFormSubmit = values => {
    if(this.props.initialValues.id) {
      this.props.updatePickup(values);
    } else {
      this.props.createPickup(values)
    }
  }

  render() {
    const { handleSubmit, invalid, submitting, pristine, pickup } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onFormSubmit)}>
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
        <Button color="teal">Create Pickup!</Button>
      </Form>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(reduxForm({ form: 'pickupForm' })(PickupForm))
);
