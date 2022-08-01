import React from 'react'
import styled from 'styled-components'
import bg from '../images/jeansbg.jpeg'
import { mobile } from "../responsive";

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f3f5f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div `
  width: 40%;
  padding: 20px;
  background-color: #cfcfc4;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form `
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1 `
  font-size: 24px;
  font-weight: bold;
`;

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 10px 10px 0px 0px;
  padding: 10px
`;

const Conditions = styled.span `
  font-size: 15px;
  margin: 20px 20px;
`;

const Button = styled.button `
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  cursor: pointer;
`;

function Signup () {
  return (
    <Container>
      <Wrapper>
        <Title> JOIN THE CLUB. </Title>
        <Form>
          <Input placeholder="first name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Conditions> 
            By creating an account, I state that I have read and understood the <b>terms and conditions</b>.
          </Conditions>
          <Button> CREATE ACCOUNT</Button>
          </Form> 
      </Wrapper>
    </Container>
  )
}

export default Signup