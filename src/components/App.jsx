import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';


export const App = () => {
  const BASEContact = useSelector(state =>state.contacts);
  console.log('BASEContact', typeof BASEContact);
  console.log('BASEContact', BASEContact); 
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('user-contact')) || localStorage.setItem('user-contact', JSON.stringify(BASEContact))
  );
  const [filtered,setFiltered] = useState(' ');
  // const [bad, setBad] = useState(0);

  // useEffect(() => {
  //   const savedUserState = localStorage.getItem('user-contact');
  //   // if (savedUserState !== null) {
  //   //   this.props.createContacts(
  //   //     JSON.parse(savedUserState))
  //   if (savedUserState !== null) {
  //     setContacts( JSON.parse(savedUserState) );
  //   }
  // }, []);

  useEffect(() => {
    
   localStorage.setItem('user-contact', JSON.stringify(contacts));
  }, [contacts]);
    useEffect(() => {
      localStorage.setItem('user-contact', JSON.stringify(contacts));
    }, [contacts]);

  //  componentDidMount() {
  //   const savedUserState = localStorage.getItem('user-contact') ;
  //   // if (savedUserState !== null) {
  //   //   this.props.createContacts(
  //   //     JSON.parse(savedUserState))
  //    if (savedUserState !== null) {
  //      this.setState({ contacts: JSON.parse(savedUserState) });
  //    }

  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts.length !== this.state.contacts.length) {
  //     localStorage.setItem('user-contact', JSON.stringify(this.state.contacts));
  //   }
  // }
  //додавання контакту до списку
  const createContacts = data => {
    const haveNameInPhonebook = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if (haveNameInPhonebook) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts([{ id: nanoid(), ...data }, ...contacts]);
  };
  //видалення контакту зі списку
  const handleDelete = idContact => {
    setContacts(prevContacts => (
      prevContacts.filter(contact => contact.id !== idContact
      )
    ));
  };
  // фільт імен
  // const onFilter = e => {
  //   setFilter({ prevFilter: e.currentTarget.value });
  // }

  // const onFilter = e => {
  //   console.log(e);
  //   setFilter(e.currentTarget.value);
  // };
  // onFilter();
  // слідкування за вводом на інпутах
  const handleFind = ({ target }) => {
    setFiltered(target.value.toLowerCase().trim());
  };

  const normalizedFilter = filtered.toLowerCase();
console.log(contacts);
  const visibleFilter  = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  
// console.log(visibleFilter);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook </h1> <ContactForm createContacts={createContacts} />
        <h2>Contacts</h2>
        <Filter value={filtered} filter={handleFind} />
        <ContactList contacts={
          visibleFilter
        } onDeleteContact={handleDelete} />
      </div>
    </div>
  );
};
