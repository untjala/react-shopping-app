import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import CatItems from './CatItems';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex; 
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CatItems item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Categories