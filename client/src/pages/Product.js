import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Broadcast from '../components/Broadcast'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import set1 from '../images/womens/set1.jpeg'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../responsive";

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}

`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 600;
`;
const Description = styled.p`
  margin: 20px 0px;
  font-size: 30px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 20px;
  padding: 5px;
`

const FilterSizeOptions = styled.option`
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #cfcfc4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  margin-left: 50px;
  border: 2px solid #cfcfc4;
  background-color: white;
  cursor: pointer;

&:hover{
  background-color: #e0e2e6;
}
`;
function Product() {
  return (
    <Container>
      <Navbar />
      <Broadcast />
      <Wrapper>
        <ImageContainer>
          <Image src={set1} />
        </ImageContainer>
        <Info>
          <Title> LINEN PANTSUIT </Title>
          <Description>  hand-dyed imported organic linen
          </Description>
          <Price> $300 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color</FilterTitle>
              <FilterColor color="aeac9f"> </FilterColor>
              <FilterColor color="eacace"> </FilterColor>
            </Filter>
            <Filter>
              <FilterTitle> Size </FilterTitle>
              <FilterSize>
                <FilterSizeOptions>XS</FilterSizeOptions>
                <FilterSizeOptions>S</FilterSizeOptions>
                <FilterSizeOptions>M</FilterSizeOptions>
                <FilterSizeOptions>L</FilterSizeOptions>
                <FilterSizeOptions>XL</FilterSizeOptions>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount> 1 </Amount>
              <Add />
            </AmountContainer>
            <Button> ADD TO CART</Button>
          </AddContainer>
        </Info>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product