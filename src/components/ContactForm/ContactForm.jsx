import React from 'react';
import { ReactComponent as IconTel } from '../../icons/telephone.svg';
import { ReactComponent as IconAdd } from '../../icons/add-user.svg';

import {
  Form,
  Input,
  Btn,
  Txt,
} from 'components/ContactForm/ContactForm.styled';
class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);

    this.resetForm();
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Txt>
          Name <IconAdd width="20px" height="20px" />
        </Txt>

        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Txt>
          Number <IconTel width="20px" height="20px" />
        </Txt>
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}

export { ContactForm };
