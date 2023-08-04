'use client'

import React from 'react';
import { useCart } from '@/context/CartContext';

const Item = ({ id, name, variant, subvariant, price }) => {
  const { cart, dispatch } = useCart();
  const cartItem = cart.find(
    (item) =>
      item.id === id && item.variant === variant && item.subvariant === subvariant
  );

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id,
        name,
        variant,
        subvariant,
        price,
        quantity: 1,
      },
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id,
        variant,
        subvariant,
      },
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload: {
        id,
        variant,
        subvariant,
      },
    });
  };

  const decrementQuantity = () => {
    dispatch({
      type: 'DECREMENT_QUANTITY',
      payload: {
        id,
        variant,
        subvariant,
      },
    });
  };

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      {cartItem ? (
        <>
          <button  className="bg-green-400 p-2 m-2" onClick={incrementQuantity}>+</button>
          <span>{cartItem.quantity}</span>
          <button className="bg-green-400 p-2 m-2" onClick={decrementQuantity}>-</button>
          <button onClick={removeFromCart}>Remove from Cart</button>
        </>
      ) : (
        <button  className="bg-red-400 p-2 m-2" onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default Item;
