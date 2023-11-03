export const Contacts = ({ contactList }) => {
  return (
    <div>
      {
        <ul>
          {contactList.map(contact => (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Phone: {contact.number}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
