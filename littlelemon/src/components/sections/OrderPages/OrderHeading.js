import React, { useState } from 'react';
import './OrderHeading.css';
import Menu from './Menu';
import ShoppingCart from './ShoppingCart';

function OrderHeading() {
const [cartItems, setCartItems] = useState([]);

const addToCart = (item) => {
  setCartItems([...cartItems, item]);
};

const removeFromCart = (index) => {
  const newCartItems = cartItems.filter((_, i) => i !== index);
  setCartItems(newCartItems);
};

return (
  <div className="OrderHeading">
    <Menu addToCart={addToCart} />
    <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
  </div>
);
}

export default OrderHeading;