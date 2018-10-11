import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Segment, Header, Label } from 'semantic-ui-react';
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
    pickup,
    auth: state.firebase.auth
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
  { key: 'video', text: 'Video', value: 'console' }
];

const loginHeaderStyle = {
  fontFamily: 'Righteous',
  fontSize: '4em'
};

const loginFormStyle = {
  width: '800px',
  margin: 'auto',
};

// const ribbonStyle = {
//   position: 'relative',
//   zIndex: '1000',
//   bottom: '60px',
//   right: '30px'
// };

class PickupForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updatePickup(values);
      this.props.history.push('/pickups')
    } else if (!this.props.auth.isEmpty) {
      this.props.createPickup(values);
      this.props.history.push('/pickups')
    } else {
      this.props.history.push('/signup')
    }
  };

  handleTogglePickup = () => {
    const { pickup } = this.props;
    this.props.cancelPickupToggle(!pickup.cancelled, pickup.id);
  };

  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`pickups/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`pickups/${match.params.id}`);
  }

  render() {
    const { handleSubmit, pickup } = this.props;
    return (
      <Segment centered basic style={loginFormStyle}>
        <Form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Segment.Group>
            <Segment textAlign="center">
              <h1 style={loginHeaderStyle}>create a pickup</h1>
            </Segment>
            {/* <Label color="red" ribbon="right" style={ribbonStyle}>
              pick up cancelled
            </Label> */}
            <Segment padded>
              <Header sub color="purple" content="PICK UP DETAILS" />
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="pickup title"
              />
              <Form.Group inline width='equal'>
              <Field
                name="level"
                type="text"
                component={SelectInput}
                options={skillLevel}
                placeholder="skill level of pickup"
              />
              <Field
                name="type"
                type="text"
                component={SelectInput}
                options={pickupType}
                placeholder="type of pickup"
              />
              <Field
                name="maxCapacity"
                type="number"
                min={2}
                component={TextInput}
                placeholder="max players"
              />
              </Form.Group>
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="pickup description"
              />
              <Header sub color="purple" content="PICK UP DETAILS" />
              <Field name="city" type="text" component={TextInput} placeholder="pickup city" />
              <Field
                name="address"
                type="text"
                component={TextInput}
                placeholder="pick up address"
              />
              {/* <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Enter the venue name"
              /> */}
              <Field
                name="date"
                type="text"
                component={DateInput}
                placeholder="date and time"
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                timeCaption="time"
                showTimeSelect
              />
              <Button
                color="purple"
                content={pickup.id ? 'update pickup' : 'create pickup'}
                size="large"
                disabled={pickup.cancelled}
              />
              <Button
                onClick={this.handleTogglePickup}
                type="button"
                color={!pickup.id ? 'teal' : pickup.cancelled ? 'green' : 'red'}
                content={
                  !pickup.id ? 'cancel' : pickup.cancelled ? 'revive pickup' : 'cancel pickup'
                }
                floated="right"
                size="large"
                basic
              />
            </Segment>
          </Segment.Group>
        </Form>
      </Segment>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(reduxForm({ form: 'pickupForm', enableReinitialize: true })(PickupForm))
);
