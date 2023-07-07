import { combineReducers } from 'redux';
const initialState = JSON.parse(localStorage.getItem('user-contact')) || [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const haveNameInPhonebook = state.some(
        ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (haveNameInPhonebook) {
        return alert(`${action.payload.name} is already in contacts`);
      }
      const updatePhonebook = [...state, action.payload];
      localStorage.setItem('user-contact', JSON.stringify(updatePhonebook));
      return updatePhonebook;

  
    
    case 'contacts/deleteContact':
      const withoutRemovedContact = state.filter(
        contact => contact.id !== action.payload
      );

      localStorage.setItem(
        'user-contact',
        JSON.stringify(withoutRemovedContact)
      );
      return withoutRemovedContact;
    default:
      return state;
  }
};
const filtersInitialState = {
  input: "",
};
export const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'contacts/filter':
      return {
      
        input: action.payload,
      };
    default:
      return state;
  }
};

// Код редюсерів tasksReducer та filtersReducer
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
