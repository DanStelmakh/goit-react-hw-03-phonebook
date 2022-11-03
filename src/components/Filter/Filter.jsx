import React from 'react';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterTitle } from 'components/Filter/Filter.styled';
export const Filter = ({ value, onChange }) => (
  <label>
    <FilterTitle>Find contacts by name:</FilterTitle>
    <Input
      type="text"
      name="filter"
      placeholder="Enter name"
      value={value}
      onChange={onChange}
    ></Input>
  </label>
);
