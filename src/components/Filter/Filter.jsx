import { Input, Label } from '../ContactForm/ContactForm.styled.js';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

    function handleFind (e) {
     
      
      dispatch(filterContact(e.target.value));
  };
  
  
  return (
    <div>
      <Label htmlFor="">
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={value}
          onChange={(handleFind)}
        />
      </Label>
    </div>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   filter: PropTypes.func.isRequired,
// };