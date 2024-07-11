import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";

export const NavBar = () => {
  const [cartvisible, setIsVisible] = useState(false);

  const cartshow = () => {
    setIsVisible(!cartvisible);
  };

  return (
    <div className="shadow-md">
      <Cart cartvisible={cartvisible} cartshow={cartshow} />
      <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center h-[80px]">
        <h2 className="text-4xl cursor-pointer font-bold uppercase">T-Mart</h2>
        <div className="flex bg-slate-200 max-w-[350px] w-full items-center py-2 px-4 rounded-full">
          <input
            type="text"
            className="outline-none bg-transparent w-full font-semibold"
          />
          <FiSearch className="text-xl text-slate-600" />
        </div>
        <nav className="flex items-center justify-center">
          <ul className="flex items-center gap-6 font-semibold text-xl pr-16">
            <Link to="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-red-500 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="hover:text-red-500 transition-colors">
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </ul>
          <Link to="/login">
            <RiAccountCircleLine className="text-2xl hover:text-red-500 mr-5" />
          </Link>
          <MdOutlineShoppingCart
            className="text-2xl hover:text-red-500 cursor-pointer"
            onClick={cartshow}
          />
        </nav>
      </div>
    </div>
  );
};
