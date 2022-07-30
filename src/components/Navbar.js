import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
 height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Location = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightpink;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
font-style: italic;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinkItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Location> US </Location>
          <SearchContainer>
            <Input />
            <Search style={{color: 'pink', fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center> <Logo> formedright. </Logo> </Center>
        <Right>
          <LinkItem> create account </LinkItem>
          <LinkItem> sign-in </LinkItem>
          <LinkItem> 
          <Badge badgeContent={4} color="secondary">
          <ShoppingCartOutlined />
          </Badge>
          </LinkItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar