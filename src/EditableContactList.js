import React, { useState } from 'react';

const EditableContacts = () => {
  const [contacts, setContacts] = useState([{ name: 'John Doe', email: 'john@example.com' }]);
  const [editing, setEditing] = useState(-1);
  const [currentContact, setCurrentContact] = useState({ name: '', email: '' });

  const handleEdit = (index) => {
    setEditing(index);
    setCurrentContact(contacts[index]);
  };

  const handleSave = () => {
    const updatedContacts = contacts.map((contact, index) =>
      index === editing ? currentContact : contact
    );
    setContacts(updatedContacts);
    setEditing(-1);
  };

  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email} 
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>

      {editing !== -1 && (
        <div>
          <input 
            type="text" 
            value={currentContact.name} 
            onChange={(e) => setCurrentContact({ ...currentContact, name: e.target.value })} 
          />
          <input 
            type="email" 
            value={currentContact.email} 
            onChange={(e) => setCurrentContact({ ...currentContact, email: e.target.value })} 
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default EditableContacts;
