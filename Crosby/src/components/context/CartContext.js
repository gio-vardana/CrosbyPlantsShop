import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    

    if (existingItem) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (itemId) => {
    const removedItem = cartItems.find(item => item.id === itemId);
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    setTotalPrice(totalPrice - removedItem.price * removedItem.quantity);
  };

  const incrementItem = (itemId) => {
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    const itemToIncrement = cartItems.find(item => item.id === itemId);
    setTotalPrice(totalPrice + itemToIncrement.price);
  };

  const DecrementItem = (itemId) => {
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
    const itemToDecrement = cartItems.find(item => item.id === itemId);
    setTotalPrice(totalPrice - itemToDecrement.price);
  };

  

  const cartData = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    incrementItem,
    DecrementItem,
  };

  return (
    <CartContext.Provider value={cartData}>
      {children}
    </CartContext.Provider>
  );
}
