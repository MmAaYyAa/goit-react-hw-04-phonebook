import { ContactItem, DeleteButton } from '../Contact/Contact.styled';
const Contact = ({ contact, deleteContacts }) => {
  return (
    <ContactItem>
      <li>
        {contact.name}: {contact.number}
      </li>
      <DeleteButton type="button" onClick={() => deleteContacts(contact.id)}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

export default Contact;
