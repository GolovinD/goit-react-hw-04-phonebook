import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import Section from './Section/Section'

  const CONTACTS_DATA = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

function App () {

  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

    function getContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if (contacts) {
      return contacts;
      }
      return CONTACTS_DATA;
  }
  
    useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
  function addContacts( name, number ) {
    // console.log(name, number);   

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);

      return false
    }
    
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
      
    setContacts(
      [...contacts, newContact]
    );
  }

  const getWantedContacts = () => {
    // console.log(filter);
    const standarValue = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(standarValue)
    );
  };

  function deleteContacts(contactId) {
    setContacts(
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  function handleNameChange (event) {
    setFilter(event.currentTarget.value);    
  }

  // const wantedContacts = getWantedContacts();
  
  return (
    <div>
      <Section title="Phonebook" >     
        <ContactForm
          onSubmit={addContacts}
         />
      </Section>
      
      <Section title="Contact" >
        <Filter
          filterData={filter}  
          onFilter={handleNameChange}    
        />
        {contacts.length > 0 &&
          <ContactList
            contacts={getWantedContacts()}
            onDeleteContact={deleteContacts}
          />}
      </Section>
    </div>
  );
};

export default App;