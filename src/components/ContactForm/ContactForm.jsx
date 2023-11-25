import { useState } from 'react';
import {
  Form,
  Input,
  ContactFormButton,
  ContactFormTitle,
} from './ContactForm.styled';

 export const ContactForm = ({createContacts})=> {
  const[name,setName]= useState('');
  const[number,setNumber]= useState('');

  const handleInputChange = event => {
    if(event.target.name === 'name') setName(event.target.value.trim());
    if(event.target.name === 'number') setNumber(event.target.value.trim());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    createContacts({name: name, number: number});
    setName('');
    setNumber('');
  };

    return (
      <>
        <ContactFormTitle>Phonebook</ContactFormTitle>
        <Form onSubmit={handleFormSubmit}>
          <label>
            Name
            <Input
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            ></Input>
          </label>
          <label>
            Number
            <Input
              onChange={handleInputChange}
              type="tel"
              name="number"
              placeholder="Enter phone number"
              value={number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            ></Input>
          </label>
          <ContactFormButton type="submit">Add contact</ContactFormButton>
        </Form>
      </>
    );
  
}

export default ContactForm;
