import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
export const Input = styled.input`
  font-size: 15px;
  padding: 10px;

  :hover {
    transition: box-shadow 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

    box-shadow: 1px 1px 10px 10px rgba(255, 162, 0, 0.5);
  }
`;
export const Btn = styled.button`
  padding: 10px;
  border-radius: 15px;
  border-color: transparent;
  background-color: orange;
  :hover {
    background-color: rgba(255, 162, 0, 0.5);
  }
`;
