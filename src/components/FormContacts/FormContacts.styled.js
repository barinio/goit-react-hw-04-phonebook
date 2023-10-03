import styled from 'styled-components';

import { Form, Field } from 'formik';
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Input = styled(Field)`
  font-size: 16px;
  font-weight: 500;
  padding: 7px;
  border: 3px solid #1035ac;
  border-radius: 5px;
`;
export const Label = styled.label`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 21px;
  color: #1035ac;
  gap: 5px;

  & p {
    color: red;
  }
`;
export const FormButton = styled.button`
  text-transform: uppercase;
  font-size: 15px;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #1035ac;
  color: white;
  font-weight: 600;
  box-shadow: rgba(0, 50, 255, 0.5) 0px 1px 8px;

  &:is(:focus, :hover) {
    background-color: #067038;
  }
`;
