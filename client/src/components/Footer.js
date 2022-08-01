import { Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import payment from '../images/payment.png'
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;
const Socials = styled.div`
  display: flex;
`;
const SocIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`
function Footer() {
  return (
    <Container>
      <Left>
        <Logo> formedright. </Logo>
        <Description> we only source brands that make quality clothing, formed to last. our mission is sustainable, slow fashion.
        </Description>
        <Socials>
          <SocIcon color="c4aead">
            <Instagram />
          </SocIcon>
          <SocIcon color="c4aead">
            <Twitter />
          </SocIcon>
          <SocIcon color="c4aead">
            <Pinterest />
          </SocIcon>
        </Socials>
      </Left>
      <Center>
        <Title> SHOP </Title>
        <List>
          <ListItem>HOME</ListItem>
          <ListItem>CART </ListItem>
          <ListItem>WOMENS</ListItem>
          <ListItem>ACCESSORIES</ListItem>
          <ListItem>MENS</ListItem>
          <ListItem>MY ACCOUNT</ListItem>
          <ListItem>ORDERS</ListItem>
          <ListItem>TERMS</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact </Title>
        <ContactItem> <Room style={{marginRight: "10px"}} /> 1111 NY, NY </ContactItem>
        <ContactItem> <Phone style={{marginRight: "10px"}} /> 555-055-0254 </ContactItem>
        <ContactItem> <MailOutline style={{marginRight: "10px"}} /> contact@formedwell.mail </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  )
}

export default Footer