import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color:black ;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

function Broadcast() {
  return (
    <Container>FREE US/UK SHIPPING ON ORDERS $100 OR MORE</Container>
  )
}

export default Broadcast