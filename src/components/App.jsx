// import { nanoid } from 'nanoid';
// import { useSelector } from 'react-redux';
// import React, { useEffect } from 'react';

// import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';

export const App = () => {
  

  
  // JSON.parse(localStorage.getItem('user-contact'));



 


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
        <h1>Phonebook </h1>{' '}
        <ContactForm
        // createContacts={createContacts}
        />
        <h2>Contacts</h2>
        <Filter
        // value={filtered} filter={handleFind}
        />
        <ContactList
        //   contacts={
        //   visibleFilter
        // }
        // onDeleteContact={handleDelete}
        />
      </div>
    </div>
  );
};
