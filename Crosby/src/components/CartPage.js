import React from 'react';
import styled from 'styled-components';
import { useCart } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = styled.div`
  padding-top:40px;
  background-color:hsla( 240,2.608695652173916%,22.54901960784314% ,1);
  height:960px;
  @media (max-width: 768px) {
    margin:0px;
    padding:0px;
  }

  @media (max-width: 480px) {
   
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding: 10px 0;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 220px;
  margin-right: 20px;
  margin-left:70px;
  @media (max-width: 768px) {
    height:150px;
    margin-left:10px;
    margin-right:20px;
  }

  @media (max-width: 480px) {
    height:120px;
    margin-left:0px;
    margin-right:0px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const ItemName = styled.h3`
  color:#fff;
  margin-bottom:20px;
  margin-left:30px;
  font-size:18px;
  @media (max-width: 768px) {
    font-size:12px;
    margin-left:10px;
  }

  @media (max-width: 480px) {
    
  }
`;

const ItemPrice = styled.p`
  margin: 0;
  color:#fff;

  @media (max-width: 768px) {
    font-size:12px;
    margin-left:10px;
  }

  @media (max-width: 480px) {
    
  }
`;

const TotalPrice = styled.p`
  text-align: right;
  margin-top: 20px;
  color:#fff;
  font-size:20px;
  margin-right:15px;
  @media (max-width: 768px) {
    font-size:14px;
    
  }

  @media (max-width: 480px) {
    
  }
`;

const CheckoutButton = styled.button`
  background-color:grey;
  color: white;
  border: none;
  padding: 10px 45px;
  cursor: pointer;
  float:right;
  margin-right:10px;
  margin-top:15px;
  @media (max-width: 768px) {
    font-size:12px;
    padding: 8px 25px;
  }

  @media (max-width: 480px) {
    
  }
  

`;

const RemoveButton = styled.button`
  color: white;
  cursor: pointer;
  margin-left:10px;
  
`;
const IncrementButton = styled.button`
  padding: 4px 8px;
  color: #fff;
  font-size: 25px;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size:18px;
  }

  @media (max-width: 480px) {
   
  }
`;
const RightAlignedContent = styled.div`
  display: flex;
  align-items: right;
  gap: 20px;
  margin-left:396px;
  @media (max-width: 768px) {
    align-items:center;
    gap:0px;
    margin-left:10px;
  }

  @media (max-width: 480px) {
    
  }
`;

const CenterAlignedContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left:60px;
  margin-left:350px;
  @media (max-width: 768px) {
    padding-left:10px;
  }

  @media (max-width: 480px) {
    
  }
`;

const PriceP = styled.p`
color: #fff;
text-align:center;
padding-left:40px;
@media (max-width: 768px) {
    font-size:15px;
    padding-left:10px;
    
  }

  @media (max-width: 480px) {
    
  }
`;

const CartPage = () => {
  const { cartItems, totalPrice, removeFromCart, incrementItem, DecrementItem} = useCart();
  

  const handleRemove = (itemId) => {
    removeFromCart(itemId); 
  };
  const handleIncrement = (itemId) => {
    incrementItem(itemId);
  };

  const handleDecrement = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item.quantity > 0) {
      DecrementItem(itemId);
    }
  };
  
  return (
    <CartContainer>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <div>
          <ItemName className='text-center' >{item.name}</ItemName>
          <ItemImage src={item.imageUrl} alt={item.name} />
          <PriceP className='text-center'>${item.price}</PriceP>
          </div>
          
          <ItemInfo>
           <CenterAlignedContent>
           <IncrementButton onClick={() => handleIncrement(item.id)}>+</IncrementButton>
           <span className='px-2 py-1 text-[white]'>{item.quantity}</span>
             <IncrementButton onClick={() => handleDecrement(item.id)}>-</IncrementButton>
           </CenterAlignedContent>
           <RightAlignedContent>
            <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
            <RemoveButton className='text-center' onClick={() => handleRemove(item.id)}>x</RemoveButton>
           </RightAlignedContent>
         </ItemInfo>
        </CartItem>
      ))}
      <TotalPrice>Subtotal: ${totalPrice.toFixed(2)}</TotalPrice>
      <Link to={"/cart/Payment"}><CheckoutButton>Checkout</CheckoutButton></Link>
      
    </CartContainer>
  );
};

export default CartPage;