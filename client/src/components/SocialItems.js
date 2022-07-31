import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 50%;
  width: 50%;
  object-fit: cover;
  margin-bottom: 30px;
`;
function SocialItems({item}) {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  )
}

export default SocialItems