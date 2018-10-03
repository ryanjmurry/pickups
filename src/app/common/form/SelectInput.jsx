import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

//reusable select input for redux form fields
const SelectInput = ({ input, placeholder, multiple, options, meta: { touched, error } }) => {
  return (
    <Form.Field>
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
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

export default SelectInput;
