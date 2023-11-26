import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
//import {useMemo} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App =  () => {
const[contacts,setContacts]= useState(()=>{
  return JSON.parse(window.localStorage.getItem('contacts'))?? [];
});

const[filter,setFilter]= useState('');

  const createContacts = dataForm => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === dataForm.name.toLowerCase()
    );
    if (existingContact) {
      return alert(`${dataForm.name} is already in contacts`);
    }

    const newContact = {
      ...dataForm,
      id: nanoid(),
    };

    setContacts( prev =>[newContact, ...prev],
    );
  };

  useEffect(()=>{
    window.localStorage.setItem('contacts',JSON.stringify(contacts));
  },[contacts]);

  const deleteContacts = id => {
    setContacts(prev => prev.filter(el => el.id !== id),
    );
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  // const filteredContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [contacts,filter]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <>
        <div>
          {/* <h1>Phonebook</h1> */}
          <ContactForm createContacts={createContacts}></ContactForm>

          {/* <h2>Contacts</h2> */}
          <Filter handleFilter={handleFilter} filter={filter} />
          <ContactsList
            contacts={contacts}
            deleteContacts={deleteContacts}
            filteredContacts={filteredContacts}
          ></ContactsList>
        </div>
      </>
    );
}

export default App;

//   this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

// handleCheckUniqueContact = name => {
//   const { contacts } = this.state;
//   const isExistContact = !!contacts.find(contact => contact.name === name);
//   isExistContact && alert('Contact is already exist');
//   return !isExistContact;
// };

// handleRemoveContact = id => {
//   this.setState(({ contacts }) => ({
//     contacts: contacts.filter(contact => contact.id !== id),
//   }));
// };
