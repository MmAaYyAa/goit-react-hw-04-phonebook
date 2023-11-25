import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(localStorage);
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContacts = dataForm => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === dataForm.name.toLowerCase()
    );
    if (existingContact) {
      return alert(`${dataForm.name} is already in contacts`);
    }

    const newContact = {
      ...dataForm,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <div>
          {/* <h1>Phonebook</h1> */}
          <ContactForm createContacts={this.createContacts}></ContactForm>

          {/* <h2>Contacts</h2> */}
          <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
          <ContactsList
            contacts={this.state.contacts}
            deleteContacts={this.deleteContacts}
            filteredContacts={filteredContacts}
          ></ContactsList>
        </div>
      </>
    );
  }
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
