import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const dispatch = useDispatch();

  function handlerSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const contact = form.number.value;

    // надсилання екшона додавання контакту за допомогою useDispatch
    dispatch(addContact(name, contact));

    toast.success(`${name} is added to the contact list!`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    form.reset();
  }

  return (
    <form onSubmit={handlerSubmit} className={css.form}>
      <ul className={css.formList}>
        <li className={css.formListItem}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </li>
        <li>
          <p>Contact</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </li>
      </ul>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
