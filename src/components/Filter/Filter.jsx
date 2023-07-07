import { filter } from 'redux/filtersSlise.js';
import { Input, Label } from '../ContactForm/ContactForm.styled.js';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();

  const [filterok, setFilter] = useState('');

  const handleFind=(e)=> {
    setFilter(e.target.value);
    
  }
dispatch(filter(filterok));
  return (
    <div>
      <Label htmlFor="">
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={filterok}
          onChange={handleFind}
        />
      </Label>
    </div>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   filter: PropTypes.func.isRequired,
// };
