// src/components/ShoppingCart.js
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
