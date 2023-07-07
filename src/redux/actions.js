import { nanoid } from 'nanoid';
export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = contId => {
  return {
    type: 'contacts/deleteContact',
    payload: contId,
  };
};

export const filterContact = input => {
  return {
    type: 'contacts/filter',
    payload: input,
  };
};
