import Contact from 'components/Contact/Contact';

const ContactsList = ({ contacts, filteredContacts, deleteContacts }) => {
  return (
    <div>
      {(filteredContacts ?? contacts).map(contact => (
        <Contact
          deleteContacts={deleteContacts}
          contact={contact}
          key={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactsList;
