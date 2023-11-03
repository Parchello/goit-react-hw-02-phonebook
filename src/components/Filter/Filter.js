export const Filter = ({ filter, updateContact }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        placeholder="Find contact"
        onChange={evt => updateContact(evt.target.value)}
      />
    </div>
  );
};
