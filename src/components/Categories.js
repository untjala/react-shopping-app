import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import CatItems from './CatItems';

const Container = styled.div`
  display: flex; 
  padding: 20px;
  justify-content: space-between;
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CatItems item={item}/>
      ))}
    </Container>
  );
};

export default Categories