import { Component } from 'react';
import {
  Form,
  Input,
  ContactFormButton,
  ContactFormTitle,
} from './ContactForm.styled';
const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value.trim() });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createContacts(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <>
        <ContactFormTitle>Phonebook</ContactFormTitle>
        <Form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            ></Input>
          </label>
          <label>
            Number
            <Input
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              placeholder="Enter phone number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            ></Input>
          </label>
          <ContactFormButton type="submit">Add contact</ContactFormButton>
        </Form>
      </>
    );
  }
}

export default ContactForm;
