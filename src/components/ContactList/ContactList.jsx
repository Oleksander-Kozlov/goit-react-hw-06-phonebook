
import { List } from '../ContactList/ContactList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ButtonDelete, CotactItem } from './Contact.styled.js';
import { deleteContact } from 'redux/contactsSlise.js';
// import { deleteContact } from 'redux/actions.js';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux/es/hooks/useSelector.js';
// const BASEContact = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
export const ContactList = () => {
  const filters = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  localStorage.setItem('user-contact', JSON.stringify(contacts));
  console.log('contacts', contacts);
  console.log('filters', filters);

  const contactss = JSON.parse(localStorage.getItem('user-contact'))

  console.log('contactss', contactss);
  const visibleFilter = contactss.filter(contact =>
    contact.name.toLowerCase().includes(filters)
  );
  useEffect(() => {
    localStorage.setItem('user-contact', JSON.stringify(contacts));
  }, [contacts]);

  const dispatch = useDispatch();
  //  const handleDelete = (id)=> {dispatch(deleteContact(id))};
    const handleDelete = id => {
      dispatch(deleteContact(id));
    };
  return (
    <List>
      {visibleFilter.map(contact => (
        <CotactItem key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <ButtonDelete onClick={() => handleDelete(contact.id)}>
            Delete
          </ButtonDelete>
        </CotactItem>
      ))}
    </List>
  );
};

