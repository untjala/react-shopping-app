import React from 'react'
import {socialItems} from '../data'
import styled from 'styled-components';
import SocialItems from './SocialItems';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Social () {
  return (
    <> 
      <Title> WE LOOK GOOD ON YOU</Title>
      <Description> use the hashtag <strong>#formedrightdaily</strong> and mention us at @formedright for a chance to be featured</Description>
    <Container >
       {socialItems.map((item) => (
        <SocialItems item={item} key={item.id}/>
      ))}
    </Container>
    </>
  )
}

export default Social