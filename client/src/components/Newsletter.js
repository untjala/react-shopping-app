import React, {useState} from 'react'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { validateEmail } from '../utils/helpers';
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #cfcfc4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
;

`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  ${mobile({ width: "80%" })}
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
`

function Newsletter() {
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setErrorMessage('');

    if (inputType === 'email') {
      setEmail(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('valid email required.')
    } else {
      setErrorMessage('thanks, talk soon! ')
      return;
    }
    setEmail('');
  };

  return (
    <Container>
      <Title> LET'S BE BESTIES </Title>
      <Description> friends keep friends up to date on the latest styles. </Description>
      <InputContainer>
        <Input 
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="email"
        />
        <Button 
        type="button" 
        onClick={handleFormSubmit}
        >
          <Send/>
        </Button>
      </InputContainer>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
         )}
    </Container>
  )
}

export default Newsletter