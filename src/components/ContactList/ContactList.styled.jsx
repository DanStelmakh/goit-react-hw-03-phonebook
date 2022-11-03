import styled from 'styled-components';
export const List = styled.ol`
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;

  padding: 10px;
  border-bottom: 2px dotted blue;
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
