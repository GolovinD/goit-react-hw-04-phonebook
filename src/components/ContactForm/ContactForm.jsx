import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  
  static propTypes = {
    onContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  }

  handleNameChange = event => {
    const { name, value } = event.currentTarget
    // console.log(value);
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    const IsSuccess = this.props.onSubmit(this.state);
    if (IsSuccess) { this.reset(); }
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  } 

  render() {
    return (
      <div>
        <form
          className={css.form}
          onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
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
              value={this.state.number}
              onChange={this.handleNameChange}
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
}

export default ContactForm;