import React, { useState } from 'react';
import './MenuHeading.css';
import Menu from './Menu';
import ShoppingCart from './ShoppingCart';

function MenuHeading() {
const [cartItems, setCartItems] = useState([]);

const addToCart = (item) => {
  setCartItems([...cartItems, item]);
};

const removeFromCart = (index) => {
  const newCartItems = cartItems.filter((_, i) => i !== index);
  setCartItems(newCartItems);
};

return (
  <div className="MenuHeading">
    <Menu addToCart={addToCart} />
    <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
  </div>
);
}

export default MenuHeading;