import React from "react";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

export const Cart = ({ cartvisible, cartshow }) => {
  return (
    <div
      id="cart"
      className={`fixed right-0 bg-white w-[300px] h-[100vh] p-5 shadow-2xl transition-transform duration-300 ${
        cartvisible ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className=" mb-4">
        <MdClose
          className="text-2xl cursor-pointer hover:text-red-500"
          onClick={cartshow}
        />
        <h1 className="text-xl text-center font-bold">Cart</h1>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartvisible: PropTypes.bool.isRequired,
  cartshow: PropTypes.func.isRequired,
};
