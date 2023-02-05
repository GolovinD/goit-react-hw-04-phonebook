import React, { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handleNumberChange = event => {
  setNumber(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name, number);
    
    if (name === '' || number === '') {
      return
    }

    onSubmit(name, number);
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form
        className={css.form}
        onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            value={number}
            onChange={handleNumberChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className="btn"
          type="submit"
          >Add contact
        </button>
      </form>
    </div>
  )
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};