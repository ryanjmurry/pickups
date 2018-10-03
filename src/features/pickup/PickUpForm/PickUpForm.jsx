import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import { createPickup, updatePickup, cancelPickupToggle } from '../pickupActions';
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
  createPickup,
  updatePickup,
  cancelPickupToggle
};

const skillLevel = [
  { key: 'rookie', text: 'Rookie', value: 'rookie' },
  { key: 'pro', text: 'Pro', value: 'pro' },
  { key: 'allstar', text: 'All-Star', value: 'allstar' },
  { key: 'superstar', text: 'Superstar', value: 'superstar' }
];

const pickupType = [
  { key: 'rec', text: 'Recreational', value: 'rec' },
  { key: 'table', text: 'Table-Top', value: 'table' },
  { key: 'video', text: 'Video', value: 'video' }
];

class PickupForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updatePickup(values);
    } else {
      this.props.createPickup(values);
    }
  };

  handleTogglePickup = () => {
    const { pickup } = this.props;
    this.props.cancelPickupToggle(!pickup.cancelled, pickup.id)
  };

  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`pickups/${match.params.id}`)
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`pickups/${match.params.id}`)
  }

  render() {
    const { handleSubmit, pickup } = this.props;
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
          name="type"
          type="text"
          component={SelectInput}
          options={pickupType}
          placeholder="What type of pickup game is it?"
        />
        <Field
          name="maxCapacity"
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
        <Button color="teal" content={pickup.id ? 'Update Pickup' : 'Create Pickup'} />
        <Button
          onClick={(this.handleTogglePickup)}
          type='button'
          content={pickup.cancelled ? 'Revive pickup' : 'Cancel pickup'}
        />
      </Form>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(reduxForm({ form: 'pickupForm', enableReinitialize: true })(PickupForm))
);

