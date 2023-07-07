import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ContactFormStyle,
  Input,
  Label,
  ButtonAddContacts,
} from '../ContactForm/ContactForm.styled.js';
import PropTypes from 'prop-types';
import { addContact } from 'redux/contactsSlise.js';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(' ');
  const [number, setNumber] = useState(' ');
  //стейт для данних ім"я та номеру

  // state = {
  //   name: '',
  //   number: '',
  // };
  //Слухач інпутів
  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };
  //Сабміт форми
  const handleSabmit = e => {
    // Cкидую налаштування
    e.preventDefault();
    // Записую значення з імпуту до об"єкту
    dispatch(addContact( name, number ));
    // Оновлюю інпут
    setName('');
    setNumber('');
  };

  return (
    <ContactFormStyle onSubmit={handleSabmit}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </div>

      <div>
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </div>
      <ButtonAddContacts type="submit">add contacts</ButtonAddContacts>
    </ContactFormStyle>
  );
};

ContactForm.propTypes = {
  children: PropTypes.node,
};
