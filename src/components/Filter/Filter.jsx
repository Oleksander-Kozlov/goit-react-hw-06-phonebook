import { Input, Label } from '../ContactForm/ContactForm.styled.js';
import PropTypes from 'prop-types';

export const Filter = ({ value, filter }) => {
  return (
    <div>
      <Label htmlFor="">
        Find contacts by name
        <Input name="filter" type="text" value={value} onChange={filter} />
      </Label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};