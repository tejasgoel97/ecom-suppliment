"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";


function CartComponent() {
  const { cart, dispatch } = useCart();
  const router = useRouter()

  const totalPrice = cart.reduce(
    (total, item) => total + item.SP * item.quantity,
    0
  );
  const addToCart = (item) => {
    console.log("in Add card")
    dispatch({
      type: "ADD_TO_CART",
      payload: {...item, quantity:1}
    });
  };

  const removeFromCart = (item) => {
    console.log("remove");
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {...item}
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: {...item}
    });
  };

  const decrementQuantity = (item) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: {...item}
    });
  };

  console.log(cart);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  return (
    <>
      <div className="mx-auto max-w-5xl">
        {/* Steps */}
        <div className="flex justify-center items-center w-full h-24 ">
          {/* Step1 */}
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
          {/* Step2 */}
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
          {/* Step 3 */}
          <div>
            <div className="flex">
              <img src="https://static1.hkrtcdn.com/hknext/static/media/checkout/grey-payment.svg" />
            </div>
            <div className="w-1/4">Payment</div>
          </div>
        </div>

        <div className="bg-[#f4f4f4] px-0 p-5 md:p-5">
          <div className="grid md:grid-cols-5 md:gap-5 gap-1">
            <div className="md:col-span-3 md:order-1 order-2 rounded-lg bg-white md:p-5 p-4">
              <div className="flex justify-between mb-5">
                <h4 className="md:text-xl text-lg font-medium dark:text-white">
                  Shopping Cart
                </h4>
                <h4 className="md:text-xl text-[#00b5b7] md:hidden block font-medium dark:text-white">
                  My whishlist
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
                            onClick={()=>
                              quantity > 1 ? decrementQuantity(item) : removeFromCart(item)
                            }
                          >
                            <span>-</span>
                          </div>
                          <div className="flex items-center justify-center bg-[#d8d8d8] text-[#00b5b7] h-full px-3 w-2/4">
                            {quantity}
                          </div>
                          <div
                            className="flex items-center justify-center  rounded-r-md  bg-[#f7f7f7] h-full w-2/4"
                            onClick={()=>addToCart(item)}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gap-2 flex md:items-start items-end">
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/delete-cart.svg" />
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/wislist-cart.svg" />
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between border rounded-md border-gray-200 p-6 mb-5">
                <div className="flex gap-2">
                  <div className="items-center justify-center">
                    <img src="https://img8.hkrtcdn.com/28328/prd_2832797-GNC-Collagen-200-g-Orange_c_t.jpg" />
                  </div>
                  <div className="">
                    <div className="text-sm text-[#1c1c28]">
                      GNC Collagen, 200 g Orange{" "}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <div className="font-bold text-lg text-[#1c1c28]">
                        ₹999
                      </div>
                      <div className="text-[#00922e]  font-medium">50% OFF</div>
                    </div>
                    <div className="text-[#77777e] pt-1">
                      MRP: <span className="line-through">₹7,999</span>
                    </div>
                    <div className="flex gap-3 pt-3">
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/minus-new.svg" />
                      <span className="text-[#00922e] text-lg  font-medium items-center">
                        1
                      </span>
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/plus-new.svg" />
                    </div>
                  </div>
                </div>
                <div className="gap-2 flex md:items-start items-end">
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/delete-cart.svg" />
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/wislist-cart.svg" />
                </div>
              </div>
              <div className="flex justify-between border rounded-md  border-gray-200 p-6">
                <div className="flex gap-2">
                  <div className="items-center justify-center">
                    <img src="https://img8.hkrtcdn.com/28328/prd_2832797-GNC-Collagen-200-g-Orange_c_t.jpg" />
                  </div>
                  <div className="">
                    <div className="text-sm text-[#1c1c28]">
                      GNC Collagen, 200 g Orange{" "}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <div className="font-bold text-lg text-[#1c1c28]">
                        ₹999
                      </div>
                      <div className="text-[#00922e]  font-medium">50% OFF</div>
                    </div>
                    <div className="text-[#77777e] pt-1">
                      MRP: <span className="line-through">₹7,999</span>
                    </div>
                    <div className="flex gap-3 pt-3">
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/minus-new.svg" />
                      <span className="text-[#00922e] text-lg  font-medium items-center">
                        1
                      </span>
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/plus-new.svg" />
                    </div>
                  </div>
                </div>
                <div className="gap-2 flex md:items-start items-end">
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/delete-cart.svg" />
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/wislist-cart.svg" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 md:order-2 order-1 ">
              <div>
                <div className="flex items-center bg-white md:rounded-lg py-3 px-3">
                  <input
                    className=" border-none w-full text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="Enter Pincode"
                    aria-label="Pincode"
                  />
                  <button
                    className="border-transparent border-4 text-teal-600 hover:text-teal-800 text-sm"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
                <div className="flex items-center justify-center bg-white md:rounded-lg py-3 px-3 my-3">
                  <div className="flex gap-3 border-none w-full text-gray-700 focus:outline-none">
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/cart/discount-new.svg" />
                    <div className="md:text-[#1c1c28] md:text-lg font-semibold text-sm text-[#000]">
                      Apply Coupon
                    </div>
                  </div>
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/menu-right-arrow.svg" />
                </div>
                <div className="bg-[#00b5b7] py-3 px-3 text-center text-white text-lg rounded-lg mt-4 hidden md:block" onClick={()=> router.push("/cart/address")}>
                  Proceed to Pay ₹12,907
                </div>
                <div className="bg-white rounded-lg py-3 px-3 my-3">
                  <div className="flex justify-between">
                    <div className="text-[#1c1c28] text-xl font-bold p-2">
                      Order Summary
                    </div>
                    <img
                      className="md:hidden block"
                      src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/menu-right-arrow.svg"
                    />
                  </div>
                  <div className=" px-3">
                    <div className="flex justify-between my-3">
                      <div className="text-[#494953]">Total MRP</div>
                      <div>₹18,046</div>
                    </div>
                    <div className="flex justify-between my-3">
                      <div className="flex gap-2">
                        <div className="text-[#494953]">Total Discounts</div>
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/pop-icon.svg" />
                      </div>
                      <div className="text-[#00a856]">- ₹5,139</div>
                    </div>
                    <div className="flex justify-between mt-3">
                      <div className="flex gap-2">
                        <div className="text-[#494953]">Loyalty Savings</div>
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/pop-icon.svg" />
                      </div>
                      <div className="text-[#494953] opacity-40">(₹299)</div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <div className="text-[#ff8914] text-sm">
                        Save extra ₹342
                      </div>
                      <div className="text-[#00b5b7] text-sm">
                        Add Membership
                      </div>
                    </div>
                    <div className="flex justify-between my-3">
                      <div className="text-[#494953]">Shipping Charges</div>
                      <div className="text-[#00a856]">FREE</div>
                    </div>
                  </div>
                  <div className="border border-[#d6d6d6] px-0 mx-0"></div>
                  <div className="flex justify-between my-3  px-3">
                    <div className="text-[#000]">Payable Amount</div>
                    <div className="text-[#000]">₹{totalPrice}</div>
                  </div>
                  <div className="text-[#00a856] text-xs mb-3  px-3">
                    You will Save ₹5,139 & Earn ₹258 HK Cash on this order
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartComponent;
