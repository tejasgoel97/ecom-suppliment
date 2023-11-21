import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant &&
          item.subVariant === action.payload.subVariant
      );

      if (existingItemIndex !== -1) {
        const newState = [...state];
        newState[existingItemIndex].quantity += action.payload.quantity;
        return newState;
      } else {
        return [...state, action.payload];
      }

    case 'REMOVE_FROM_CART':
      return state.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.variant === action.payload.variant &&
            item.subVariant === action.payload.subVariant
          )
      );

    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id &&
        item.variant === action.payload.variant &&
        item.subVariant === action.payload.subVariant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id &&
        item.variant === action.payload.variant &&
        item.subVariant === action.payload.subVariant
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      );

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const storedCart = localStorage.getItem('cart');
        console.log({storedCart})
        return storedCart? JSON.parse(storedCart) : [];
      });

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCartContext };
