import React from 'react';
import styled from 'styled-components';
import { topProducts } from '../data';
import ProdItems from './ProdItems';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

function Products() {
  return (
    <> 
      <Title> SHOP OUR FAVORITES </Title>
    <Container >
    {topProducts.map((item) => (
        <ProdItems item={item} key={item.id}/>
      ))}
    </Container>
    </>
  )
}

export default Products