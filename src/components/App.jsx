import React from 'react'
import { nanoid } from 'nanoid'

import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import Section from './Section/Section'

class App extends React.Component {

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  addContacts = ({ name, number }) => {
       
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);

      return false
}
    
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
      
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      
    }));

    return true
  }

  findContact =  filter => {
    // console.log(filter)
    this.setState(prevState => ({
      filter: filter,
    }));
  }

  getWantedContacts = () => {
    const { contacts, filter } = this.state;
    // console.log(filter);

    const standarValue = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(standarValue)
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

    handleNameChange = event => {
        const { name, value } = event.currentTarget
        // console.log(value);
        this.setState({ [name]: value });    
        this.props.onFilter(value)
    }

    handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if (contacts) {
      this.setState({contacts})
    }
    
  }
  
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  render() {
    const { filter, contacts } = this.state;
    const wantedContacts = this.getWantedContacts();
  
    return (
      <div>
        <Section title="Phonebook" >     
          <ContactForm
            onSubmit={this.addContacts}
           />
        </Section>
        
        <Section title="Contact" >
          <Filter
            filterData={filter}  
            onFilter={this.handleNameChange}    
          />
          {contacts.length > 0 &&
            <ContactList
              contacts={wantedContacts}
              onDeleteContact={this.deleteContacts}
            />}
        </Section>
      </div>
    );
  }
};

export default App;