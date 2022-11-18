import { nanoid } from 'nanoid';

// екшон для додавання контакту
export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

// екшон для видалення контакту
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: {
      id: contactId,
    },
  };
};

// ^екшон для фільтру за ім'ям???
export const setFilterContacts = value => {
  return {
    type: 'filters/filterContacts',
    payload: {
      filter: value,
    },
  };
};
