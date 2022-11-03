import React from 'react';
import { Btn, List, Item } from 'components/ContactList/ContactList.styled';
class ContactList extends React.Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Btn type="button" onClick={() => onRemoveContact(contact.id)}>
              Delete
            </Btn>
          </Item>
        ))}
      </List>
    );
  }
}
export { ContactList };
