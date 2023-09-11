import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


const Box = styled.div`
background-color:hsla( 240,2.608695652173916%,22.54901960784314% ,1);
`;

const ShopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const ItemContainer = styled.div`
  width: 320px;
  margin: 20px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(50% - 20px); 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-radius:10px;
  }
  @media (max-width: 768px) {
    
   
  }

  @media (max-width: 480px) {
    width:400px;
    
  }
`;

const ItemName = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 18px;
    
   
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #fff;
  @media (max-width: 768px) {
    
   
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const BigText = styled.h1`
  text-align: center;
  font-size: 46px;
  font-weight: 300;
  padding-top: 60px;
  margin-bottom: 40px;
  color: #fff;
  @media (max-width: 768px) {
    font-size:25px;
  }

  @media (max-width: 480px) {
    font-size:20px;
  }
`;

const SmallText = styled.p`
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: 400;
  color: lightgray;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size:14px;
  }

  @media (max-width: 480px) {
    font-size:11px;
  }
`;

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box>
      <BigText>Our Plants</BigText>
      <SmallText>
        Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt
        arcu.<br></br> Morbi vestibulum, ligula ut efficitur mollis, mi massa
        accumsan justo.
      </SmallText>
      <ShopContainer>
        {items.map(item => (
          <ItemContainer key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <ItemImage src={item.imageUrl} alt={item.name} />
            </Link>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
          </ItemContainer>
        ))}
      </ShopContainer>
    </Box>
  );
};

export default Shop;
