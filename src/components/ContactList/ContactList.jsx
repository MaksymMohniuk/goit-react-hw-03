import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
