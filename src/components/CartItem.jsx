import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/sclices/cart-sclice";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const handelremove = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <div className="flex items-center p-5 justify-between bg-red-200 mt-2 mb-2 rounded-xl w-[400px]">
      <div className="flex flex-col p-3 ">
        <img
          src={cartItem?.image}
          className="h-28 w-28  rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-black font-bold">{cartItem?.tile}</h1>
          <p className="text-white font-extrabold">{cartItem?.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handelremove}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
