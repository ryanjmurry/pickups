import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

//reusable date input for redux form fields
const DateInput = ({
  input: { value, onChange, onBlur, ...restInput },
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  if (value) {
    value = moment(value, 'X'); // parsing value using moment and formatting to unix timestamp uniformity
  }
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={onChange}
        onBlur={() => onBlur()}
        {...restInput}
      />
      {touched &&
        error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default DateInput;
