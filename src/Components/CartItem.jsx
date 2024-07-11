import React, { useState } from "react";

export const CartItem = ({ name, img }) => {
  const [value, setValue] = useState(1);
  return (
    <div>
      {" "}
      <div className="border-b border-t flex mt-2">
        <div className="w-16 border">
          <img src={img} className="w-full h-full bg-cover" />
        </div>
        <div className="ml-4 ">
          <h1 className="font-semibold text-lg">{name}</h1>

          <div className="mt-5 ">
            <button
              className="bg-slate-50
         px-[10px] text-black border font-bold text-lg border-slate-300"
              onClick={() => {
                setValue(value - 1);
              }}
            >
              -
            </button>
            <input
              type="text"
              className="w-7 mx-1 pl-1 outline-none border-[2px]"
              placeholder={value}
            />
            <button
              className="bg-slate-50
         px-2 text-black border font-bold text-lg border-slate-300"
              onClick={() => {
                setValue(value + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
