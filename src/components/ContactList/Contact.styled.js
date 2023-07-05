import styled from 'styled-components';

export const CotactItem = styled.li`
  font-family: 'Harlow Solid Italic', cursive;
  font-size: 36px;
  
  display: flex;
  flex-wrap: nowrap;

  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 20px;
`;


export const ButtonDelete = styled.button`
  display: inline-block;
  background-color: rgb(99, 99, 255);
  border-radius: 4px;
  border: 2px solid black;
  padding: 10px;
  min-width: min-content;
  font-family: 'Harlow Solid Italic', cursive;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  /* height: 50px;
  width: 50px; */
  &:hover,
  :focus,
  :active {
    outline: 5px solid rgb(255, 255, 0);
    border: none;
    background-color: fuchsia;
  }
`


// export const P = styled.p`
// display: flex;
// flex-wrap: nowrap;
	     
// justify-content: space-between;
// align-items: stretch;
// `;