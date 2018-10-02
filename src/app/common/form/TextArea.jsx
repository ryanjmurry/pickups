import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextInput = ({ input, rows, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Field error={touched && !!error}>
      <input {...input} placeholder={placeholder} rows={rows} />
      {touched &&
        error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default TextInput;
