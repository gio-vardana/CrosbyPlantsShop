import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ItemName = styled.h2`
  font-size: 1.2rem;
  margin: 5px 0;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
`;

const ShopItem = ({ item }) => {
  return (
    <ItemContainer>
      <Link to={`/shop/${item.id}`}><ItemImage src={item.imageUrl} alt={item.name} /></Link>
      
      <ItemName>{item.name}</ItemName>
      <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
      
    </ItemContainer>
  );
};

export default ShopItem;
