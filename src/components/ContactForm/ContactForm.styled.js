import styled from 'styled-components';

export const ContactFormStyle = styled.form`
  
  max-width: 700px;
  /* display: flex;
  flex-direction: column; */
  /* max-width: 100%; */
  margin: 0 auto;
  padding: 10px;
  margin-bottom:50px;
`;
export const DivForInput = styled.div`
margin-bottom: 1rem;`


export const Label = styled.label`
  display: block;
  
  margin-bottom: 2rem;
  font-weight: bold;
`;
export const Input = styled.input`
  display: block;
  width: 97%;
  margin-top: 10px;
  margin-bottom: 32px;
  padding: 0.5rem;
  font-size: 2rem;
  border: 1px solid black;
  outline: transparent;
  border-radius: 4px;
  /* transition: box-shadow 0.3s ease; */
  background-color: rgb(99, 99, 255);
  &:hover {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    /* box-shadow: 0 0 5px rgba(0, 123, 255, 0.3); */
  }
`;
export const ButtonAddContacts = styled.button`
  display: inline-block;
  background-color: rgb(99, 99, 255);
  border-radius: 4px;
  border: 2px solid black;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 32px;
  padding-left: 32px;
  min-width: 100%;

  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  &:hover,
  :focus,
  :active {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    background-color: fuchsia;
  }
`;