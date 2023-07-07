import { createSlice, nanoid } from '@reduxjs/toolkit';

const InitialState = JSON.parse(localStorage.getItem('user-contact')) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: InitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // state.push(action.payload);
        // const haveNameInPhonebook = state.some(
        //   ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
            // );
            const haveNameInPhonebook = state.find(
              ({ name }) => name === action.payload.name
            );
        if (haveNameInPhonebook) {
          return alert(`${action.payload.name} is already in contacts`);
        }
        const updatePhonebook = [...state, action.payload];
        localStorage.setItem('user-contact', JSON.stringify(updatePhonebook));
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      //   const index = state.findIndex(task => task.id === action.payload);
      //     state.splice(index, 1);

      const withoutRemovedContact = state.filter(
        contact => contact.id !== action.payload
      );

      localStorage.setItem(
        'user-contact',
        JSON.stringify(withoutRemovedContact)
      );
      return withoutRemovedContact;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
