const Contact = ({ contact }) => {
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button type="button">Delete</button>
    </div>
  );
};

export default Contact;
