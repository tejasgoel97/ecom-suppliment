'use client'

import React from 'react';
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  console.log(cart)

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={`${item.id}-${item.variant}-${item.subvariant}`}>
          <p>{item.name}</p>
          <p>
            Price: {item.price} x {item.quantity} = {item.price * item.quantity}
          </p>
        </div>
      ))}
      <p>Total: {totalPrice}</p>
    </div>
  );
};

export default Cart;
