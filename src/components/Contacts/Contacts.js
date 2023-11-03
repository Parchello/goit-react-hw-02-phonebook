export const Contacts = ({ contactList, onDelete }) => {
  return (
    <div>
      {
        <ul>
          {contactList.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button type="button" onClick={() => onDelete(contact.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
