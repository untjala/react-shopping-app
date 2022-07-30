import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, {useState} from "react";
import styled from "styled-components";
import { carouselItems } from "../data";
const Container = styled.div`
  height: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative; 
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cfcfc4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.carouselIndex * -100}vw);
`;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 65px;
`;

const InfoContainer = styled.div`
 padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20pz;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
`;
function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleclick = (direction) => {
    if(direction === "left"){
      setCarouselIndex(carouselIndex > 0 ? carouselIndex - 1 : 2)
    } else {
      setCarouselIndex(carouselIndex < 2 ? carouselIndex +1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={ ()=>handleclick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper carouselIndex={carouselIndex}>
        {carouselItems.map((item)=> (
          <CarouselContainer>
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
          <InfoContainer>
            <Title> {item.title}</Title>
            <Description>{item.description} </Description>
            <Button> SHOP NOW</Button>
          </InfoContainer>
        </CarouselContainer>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={ ()=>handleclick("left")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Carousel;
