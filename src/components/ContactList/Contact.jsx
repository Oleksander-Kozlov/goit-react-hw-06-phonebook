import { CotactItem, ButtonDelete } from '../ContactList/Contact.styled.js';
import PropTypes from 'prop-types';
export const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <CotactItem>
      {name}: {number}{' '}
      <ButtonDelete onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
    </CotactItem>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
