import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from './contacts/ContactList';
import ContactForm from './form/ContactForm';
import { Filter } from './filter/Filter';
import css from './App.module.css';

document.title = 'PhonebookBox_redux';

const App = () => {
  return (
    <div className={css.phonebookBox}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
