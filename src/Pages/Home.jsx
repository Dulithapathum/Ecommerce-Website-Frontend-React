import React from "react";
import { NavBar } from "../Components/NavBar";
import { Link } from "react-router-dom";
import { Category } from "../Components/Category";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex w-full w-[1200px] gap-4  items-center mx-auto">
        <div>
          <img src="02.webp" alt="" className="w-[600px]" />
        </div>
        <div>
          <h1 className="text-[60px] font-bold">
            Discover Our latest Products
          </h1>
          <Link to="/shop">
            <button className="bg-red-500 text-white text-3xl pb-2 pt-1 px-3 rounded-full mt-5">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <Category />
    </div>
  );
};
