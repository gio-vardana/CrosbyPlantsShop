import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useCart } from "./context/CartContext";

const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color:hsla( 240,2.608695652173916%,22.54901960784314% ,1);
  padding-top:50px;
  
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: 550px;
  margin-left:80px;
  padding-top:30px;
  @media (max-width: 768px) {
    height: 450px;
    margin-left:10px;
    margin-right:5px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    height: 250px;
  }
`;

const ItemInfo = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  padding-left: 300px;
  @media (max-width: 768px) {
    padding-left:0px;
    
  }

  @media (max-width: 480px) {
    
  }
  
`;

const ItemName = styled.h2`
  font-size: 50px;
  font-weight:300;
  margin-bottom:30px;
  color:#fff;
  margin-top:80px;
  @media (max-width: 768px) {
    font-size:18px;
    padding-top:40px;
    font-weight:600;
         }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-top:0px;
    
  }
`;

const ItemDetails = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  text-align:center;
  color:#fff;
  @media (max-width: 768px) {
    font-size:14px;
         }

  @media (max-width: 480px) {
    font-size: 9.5px;
    
  }
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size:18px;
         }

  @media (max-width: 480px) {
    font-size: 10px;
    
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddToCartButton = styled.button`
  background-color: grey;
  color: white;
  border: 1px;
  padding: 14px 36px;
  font-size: 1rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    
  }
  @media (max-width: 768px) {
    font-size:12px;
    padding: 10px 14px;

         }

  @media (max-width: 480px) {
  
    
  }
`;



const ItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity] = useState(1);
  const { addToCart } = useCart();
  

  useEffect(() => {
    axios
      .get(`http://localhost:3001/items/${id}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error('Error fetching item details:', error);
      });
  }, [id]);

    const handleAddToCart = () => {
    if (item) {
      const cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: quantity,
      };
      addToCart(cartItem);
      console.log('Added to cart:', cartItem);
    }

    
  };
  
  if (!item) {
    return <div>Loading...</div>;
  }

 
  return (
    <DetailsContainer>
      <ItemImage src={item.imageUrl} alt={item.name} />
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <Price>${item.price.toFixed(2)}</Price>
        <ItemDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do<br></br>s eiusmod tempor incididunt ut labore et dolore magna aliqua.</ItemDetails>

        <ButtonContainer>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ButtonContainer>
      </ItemInfo>
    </DetailsContainer>
  );
};

export default ItemDetailsPage;
