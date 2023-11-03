import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = newContact => {
    const idContact = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, idContact],
    }));
    console.log(idContact);
  };

  render() {
    return (
      <div>
        <PhoneBook onAdd={this.addContact} />
        <Contacts contactList={this.state.contacts} />
      </div>
    );
  }
}
