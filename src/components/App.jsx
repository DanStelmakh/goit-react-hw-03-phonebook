import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import shortid from 'shortid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App.styled';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  addContact = (name, number) => {
    const newContact = {
      name,
      id: shortid.generate(),
      number,
    };
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      return alert("Can't add already existing contact");
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem(`contacts`); //get contacts from localStorage
    try {
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts }); // update state with contacts from localStorage, check parsedContacts( null or not)
      }
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //add to local storage
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter, contacts } = this.state;
    const { addContact, state, changeFilter, removeContact } = this;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} state={state}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter}></Filter>
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={removeContact}
        ></ContactList>
        <div>
          <span>Total number of contacts: {contacts.length}</span>
        </div>
      </Container>
    );
  }
}
export { App };
