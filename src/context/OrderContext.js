import React, { createContext, useReducer, useContext, useEffect } from 'react';

const OrderContext = createContext();
const orderReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ADDRESS':
        return {
          ...state,
          currentAddress: action.payload, // Assuming action.payload contains the new address information
        };
  
      case 'ADD_CART':
        // Assuming action.payload contains the item to be added to the cart
        return {
          ...state,
          ...action.payload,
        };
  
      case 'ADD_COUPON':
        // Assuming action.payload contains the coupon information
        return {
          ...state,
          couponCode:action.payload.couponCodeoka
        };
      
        
      case 'ADD_USER':
        // Assuming action.payload contains the coupon information
        return {
          ...state,
          user:action.payload
        };
      case 'RESET_ORDER':
        // Reset the order state to its initial values (emptyOrder)
        return emptyOrder;
  
      default:
        return state;
    }
  };
  
const emptyOrder = {
    cart:[],
    currentAddress:{},
    totalMRP:"",
    totalDiscount: "",
    shippingCharges:"",
    totalQuantity:"",
    netPaymentAmount:"",
    transactionId:"",
    orderId:"",
    PinCode:"",
    user:{}
}

const OrderProvider = ({ children }) => {
    const [currentOrder, dispatch] = useReducer(orderReducer, emptyOrder);

     
  return (
    <OrderContext.Provider value={{ currentOrder, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrderContext must be used within a OrderProvider');
  }
  return context;
};

export { OrderProvider, useOrderContext };