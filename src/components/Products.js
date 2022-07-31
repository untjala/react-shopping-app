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
function Products() {
  return (
    <Container >
    {topProducts.map((item) => (
        <ProdItems item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products