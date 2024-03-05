import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/sclice";
import { addToCart, removeFromCart } from "../store/sclices/cart-sclice";

function Product({ Product }) {
  const dispatch = useDispatch(store);
  const { cart } = useSelector((state) => state);

  const handelAddToCart = () => {
    dispatch(addToCart(Product));
  };
  const handelremove = () => {
    dispatch(removeFromCart(Product.id));
  };
  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px ] mt-10 ml-5 rounded-xl ">
      <div className="h-[180px]">
        <img
          src={Product?.image}
          alt={Product?.title}
          className="h-full object-cover w-full object-center"
        />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {Product?.title}
        </h1>
      </div>
      <div className=" flex w-full mt-5 items-center justify-center">
        <button
          onClick={
            cart.some((item) => item.id === Product.id)
              ? handelremove
              : handelAddToCart
          }
          className=" bg-red-500 text-white border-2 rounded-lg px-4 py-2 font-bold hover:bg-red-200 hover:text-black duration-2000  "
        >
          {cart.some((item) => item.id === Product.id)
            ? "Remove from cart"
            : " Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
