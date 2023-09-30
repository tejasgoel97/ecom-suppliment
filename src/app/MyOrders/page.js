'use client'

import React, { useEffect, useState } from "react";
import { getDocuments } from "@/firebase/getData";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      const { result, error } = await getDocuments("orders");
      if (error) return console.log(error);
      setOrders(result);
    }
    fetchOrders();
  }, []);

  const toggleOrderDetails = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl bg-gray-100 my-4 p-4">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>
      {orders.map((order, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Order ID: {order.orderId}</p>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => toggleOrderDetails(order.orderId)}
            >
              {expandedOrder === order.orderId ? "Hide Details" : "Show Details"}
            </button>
          </div>
          {expandedOrder === order.orderId ? (
            <div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Order Cart Items</h2>
                {order.cart.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center py-4">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="h-20 w-20 object-cover rounded"
                    />
                    <div className="ml-6">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p>
                        {item.variant} - {item.subVariant}
                      </p>
                      <p className="text-gray-600">Price: ${item.SP}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Address Details</h2>
                <p className="text-gray-600">
                  {order.currentAddress.addressLine1}, {order.currentAddress.addressLine2},<br />
                  {order.currentAddress.city}, {order.currentAddress.state} - {order.currentAddress.postalCode}<br />
                  Phone: {order.currentAddress.phoneNumber}
                </p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Coupon and Discount Details</h2>
                <p className="text-gray-600">
                  Coupon Code: {order.couponCode.couponType} - {order.couponCode.coupon}<br />
                  Coupon Discount: {order.couponCode.couponDiscount}<br />
                  Total MRP: {order.totalMRP}<br />
                  Total Discount: {order.totalDiscount}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Order Cart Items</h2>
              {order.cart.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center py-4">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-6">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p>
                      {item.variant} - {item.subVariant}
                    </p>
                    <p className="text-gray-600">Price: ${item.SP}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
