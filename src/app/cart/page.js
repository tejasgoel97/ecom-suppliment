"use client";

import React, { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { useOrderContext } from "@/context/OrderContext";
import Button from "@/components/Button/PrimaryButton";


function CartComponent() {
  const { cart, dispatch } = useCartContext();
  const { currentOrder, dispatch:dispatchOrder } = useOrderContext();
  const router = useRouter()
  const { user } = useAuthContext()
  const [pinCode, setPinCode] = useState({ value: '', isDeliverable: null })
  const [couponCode, setCouponCode] = useState({ coupon: 0, couponType: "", couponDiscount: "",isApplied:false  })

  React.useEffect(() => {
    console.log(user)
    if (user == null) router.push("/signin")
  }, [user])


  const totalPrice = cart.reduce(
    (total, item) => total + item.SP * item.quantity,
    0
  );
  const totalMRP = cart.reduce(
    (total, item) => total + item.MRP * item.quantity,
    0
  );
  const totalDiscount = +totalMRP- +totalPrice
  const shippingCharges = "0"

  const netPaymentAmount = +totalPrice + +shippingCharges - +couponCode.couponDiscount;

  const addToCart = (item) => {
    console.log("in Add card")
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 }
    });
  };

  const removeFromCart = (item) => {
    console.log("remove");
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { ...item }
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: { ...item }
    });
  };

  const decrementQuantity = (item) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: { ...item }
    });
  };

  function handleMoveToAddress(){
    dispatchOrder({type:'ADD_CART', payload:{cart, totalPrice, totalMRP, shippingCharges, netPaymentAmount,couponCode } })
    // dispatchOrder({type:'ADD_COUPON', payload:couponCode })
    const userObj = {email:user.email, userId:user.uid}
    dispatchOrder({type:"ADD_USER", payload:userObj})
    router.push("/cart/address")
  }


  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  return (
    <>
      <div className="mx-auto max-w-5xl">
        {/* Steps */}
        {/* <div className="flex justify-center items-center w-full h-24 ">
          <div>
            <div className="flex">
              <img src="https://static1.hkrtcdn.com/hknext/static/media/checkout/blue-cart.svg" />
              <div className="bg-gray-200 mt-5 w-44 h-1">
                <div
                  className="bg-gray-300 h-1"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="w-1/4 ">Cart</div>
          </div>
          <div>
            <div className="flex">
              <img src="https://static1.hkrtcdn.com/hknext/static/media/checkout/grey-address.svg" />
              <div className="bg-gray-200 mt-5 w-44 h-1">
                <div
                  className="bg-gray-300 h-1"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="w-1/4 ">Address</div>
          </div>
          <div>
            <div className="flex">
              <img src="https://static1.hkrtcdn.com/hknext/static/media/checkout/grey-payment.svg" />
            </div>
            <div className="w-1/4">Payment</div>
          </div>
        </div> */}

        <div className="bg-[#f4f4f4] px-0 p-5 md:p-5">
          <div className="grid md:grid-cols-5 md:gap-5 gap-1">
            <div className="md:col-span-3 md:order-1 order-2 rounded-lg bg-white md:p-5 p-4">
              <div className="flex justify-between mb-5">
                <h4 className="md:text-xl text-lg font-medium">
                  Shopping Cart
                </h4>
              </div>
              {/* CART ITEMS */}
              {cart.map((item) => {
                const itemDisplayName = `${item.name}, ${item.variant}, ${item.subVariant}`;
                const quantity = item?.quantity || 0;

                return (
                  <div className="flex justify-between border rounded-md border-gray-200 p-6 mb-5">
                    <div className="flex gap-2">
                      <div className="items-center justify-center w-20">
                        <img src={item.imgUrl} />
                      </div>
                      <div className="">
                        <div className="text-sm text-[#1c1c28]">
                          {itemDisplayName}
                        </div>
                        <div className="flex gap-2 pt-1">
                          <div className="font-bold text-lg text-[#1c1c28]">
                            ₹{item.SP}
                          </div>
                          <div className="text-[#00922e]  font-medium">
                            50% OFF
                          </div>
                        </div>
                        <div className="text-[#77777e] pt-1">
                          MRP: <span className="line-through">₹{item.MRP}</span>
                        </div>
                        <div className="flex items-center justify-center border border-[#d6d6d6] rounded-md w-24 cursor-pointer ">
                          <div
                            className="flex items-center justify-center rounded-l-md bg-[#f7f7f7] text-[#d8d8d8] h-full w-2/4"
                            onClick={() =>
                              quantity > 1 ? decrementQuantity(item) : removeFromCart(item)
                            }
                          >
                            <span>-</span>
                          </div>
                          <div className="flex items-center justify-center bg-[#d8d8d8] text-primary h-full px-3 w-2/4">
                            {quantity}
                          </div>
                          <div
                            className="flex items-center justify-center  rounded-r-md  bg-[#f7f7f7] h-full w-2/4"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                );
              })}
            </div>
            <div className="md:col-span-2 md:order-2 order-1 ">
              <div>
                <PinCodeText pinCode={pinCode} setPinCode={setPinCode} />
                <ApplyCoupon />
               
                <div className="bg-white rounded-lg py-3 px-3 my-3">
                  <div className="flex justify-between">
                    <div className="text-[#1c1c28] text-xl font-bold p-2">
                      Order Summary
                    </div>
                  </div>
                  <div className=" px-3">
                    <div className="flex justify-between my-3">
                      <div className="text-[#494953]">Total MRP</div>
                      <div>₹{totalMRP}</div>
                    </div>
                    <div className="flex justify-between my-3">
                        <div className="text-[#494953]">Total Discounts</div>
                      <div className="text-[#00a856]">- ₹{totalDiscount}</div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="text-[#494953]">Coupon Savings</div>
                      <div className="text-[#494953] opacity-40">(₹{couponCode.coupon})</div>
                    </div>
                    
                    <div className="flex justify-between my-3">
                      <div className="text-[#494953]">Shipping Charges</div>
                      <div className="text-[#00a856]">{shippingCharges ? `₹${shippingCharges}` : "FREE"}</div>
                    </div>
                  </div>
                  <div className="border border-[#d6d6d6] px-0 mx-0"></div>
                  <div className="flex justify-between my-3  px-3">
                    <div className="text-[#000]">Payable Amount</div>
                    <div className="text-[#000]">₹{totalPrice}</div>
                  </div>
                  <div className="text-[#00a856] text-xs mb-3  px-3">
                    You will Save ₹{totalDiscount+ +couponCode.discountValue}  on this order
                  </div>
                </div>
                <Button className="bg-primary w-full py-3 px-3 text-center text-white text-lg rounded-lg mt-4 " onClick={() =>handleMoveToAddress()}>
                  Proceed to Pay ₹{netPaymentAmount}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ApplyCoupon = () => {
  return (
    <div className="flex items-center justify-between bg-white md:rounded-lg py-3 px-3 my-3">
      <img src="https://static1.hkrtcdn.com/hknext/static/media/cart/discount-new.svg" />
      <div className="flex-1 ml-4">
        <div className="md:text-[#1c1c28] md:text-lg font-semibold text-sm text-[#000]">
          Apply Coupon
        </div>
        <input
          className=" border-none w-full text-gray-700 focus:outline-none"
          type="text"
          placeholder="Enter Coupon"
          aria-label="Pincode"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <button
        className="border-transparent border-4 text-teal-600 hover:text-teal-800 text-sm"
        type="button"
        onClick={() => checkDelivery()}
      >
        Check
      </button>
    </div>)
}


const PinCodeText = (props) => {

  const { pinCode, setPinCode } = props

  function handlePinChange(value) {
    setPinCode({ value: value, isDeliverable: null })
  }
  function checkDelivery() {
    setPinCode({ ...pinCode, isDeliverable: true })

  }
  return (
    <div className="flex items-center bg-white md:rounded-lg py-3 px-3">
      <input
        className=" border-none w-full text-gray-700 focus:outline-none"
        type="text"
        placeholder="Enter Pincode"
        aria-label="Pincode"
        onChange={(e) => handlePinChange(e.target.value)}
      />
      <button
        className="border-transparent border-4 text-teal-600 hover:text-teal-800 text-sm"
        type="button"
        onClick={() => checkDelivery()}
      >
        Check
      </button>
    </div>)
}
export default CartComponent;
