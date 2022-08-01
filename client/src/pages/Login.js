import React from 'react'
import styled from 'styled-components'
import bg from '../images/jeansbg.jpeg'
import {mobile} from "../responsive";

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
  width: 25%;
  padding: 20px;
  background-color: #cfcfc4;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form `
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1 `
  font-size: 24px;
  font-weight: bold;
`;

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px
`;

const Button = styled.button `
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 10px
`;

const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title> WE'VE MISSED YOU. </Title>
        <Form>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          <Button> LOGIN</Button>
          <Link> FORGOT PASSWORD? </Link>
          <Link> CREATE A NEW ACCOUNT</Link>
          </Form> 
      </Wrapper>
    </Container>
  )
}

export default Login