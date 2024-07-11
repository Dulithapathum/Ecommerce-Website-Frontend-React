import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import { CartItem } from "./CartItem";

export const Cart = ({ cartvisible, cartshow }) => {
  return (
    <div
      id="cart"
      className={`fixed right-0 bg-white w-[350px] h-[100vh] p-2 shadow-2xl transition-transform duration-300 ${
        cartvisible ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className=" mb-4">
        <MdClose
          className="text-2xl cursor-pointer hover:text-red-500"
          onClick={cartshow}
        />
        <h1 className="text-xl text-center font-bold uppercase">Cart</h1>
        <div className=" h-[73vh]">
          <CartItem name="sri lanka spices 50g pack" img="01.webp" />
          <CartItem name="sri lanka spices 100g pack" img="02.webp" />
          <CartItem name="sri lanka spices 1kg pack" img="05.webp" />
        </div>
        <div className="flex gap-5 flex-col px-10">
          <button className="bg-green-600 hover:bg-green-700 py-2 text-white text-lg">
            {" "}
            View Cart{" "}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 py-2 text-white text-lg">
            {" "}
            Place Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartvisible: PropTypes.bool.isRequired,
  cartshow: PropTypes.func.isRequired,
};
