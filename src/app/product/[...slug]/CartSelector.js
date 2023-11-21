"use client";
import {useCartContext } from "@/context/CartContext";

const CartSelector = (props) => {
  const { id, variant, subVariant, name, SP, MRP, imgUrl } = props;
  const { cart, dispatch } = useCartContext();

  const cartItem = cart.find(
    (item) =>
      item.id === id &&
      item.variant === variant &&
      item.subVariant === subVariant
  );
  const quantity = cartItem?.quantity || 0;

  const addToCart = () => {
    console.log("in Add card")
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        name,
        variant,
        subVariant,
        SP, MRP,
        imgUrl,
        quantity: 1,
      },
    });
  };

  const removeFromCart = () => {
    console.log("remove");
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        variant,
        subVariant,
      },
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: {
        id,
        variant,
        subVariant,
      },
    });
  };

  const decrementQuantity = () => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: {
        id,
        variant,
        subVariant,
      },
    });
  };

  return (
    <>
      <div className="flex gap-4 mb-8">
        {quantity ===  0 ? (
          <div
            className="flex justify-center items-center gap-2 cursor-pointer bg-[#fff9f4] px-4 py-2 border border-[#ff8914] rounded-lg "
            onClick={addToCart}
          >
            <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Buy.svg" />
            <span className="font-semibold text-base text-[#ff8914]">
              Add To Cart
            </span>
          </div>
        ) : (
          <>
          <div className="flex items-center justify-center ">
            <div
              className="flex justify-center items-center gap-2 cursor-pointer  px-4 py-2 border bg-[#ff8914] rounded-lg"
              onClick={quantity > 1 ? decrementQuantity : removeFromCart}
            >
              <span>-</span>
            </div>
            <div className="flex items-center justify-center  text-primary h-full px-4 w-2/4">
              {quantity}
            </div>
            <div
              className="flex justify-center items-center gap-2 cursor-pointer  px-4 py-2 border bg-[#ff8914] rounded-lg"
              onClick={addToCart}
            >
              +
            </div>
            
          </div>
          <div
          className="flex justify-center items-center gap-2 cursor-pointer bg-[#fff9f4] px-4 py-2 border border-[#ff8914] rounded-lg "
          onClick={addToCart}
        >
          <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Buy.svg" />
          <span className="font-semibold text-base text-[#ff8914]">
            View Cart
          </span>
        </div>
        </>
        )}
        {/* <div className="flex justify-center items-center gap-2 cursor-pointer bg-[#ff8914] px-8 py-2 border border-[#ff8914] rounded-lg ">
          <span className="font-semibold text-base text-white">Quick Buy</span>
        </div> */}
      </div>
    </>
  );
};

export default CartSelector;
