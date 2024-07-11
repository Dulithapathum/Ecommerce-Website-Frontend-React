import React from "react";

const categoryData = [
  { id: 1, name: "Ceylon Tea", imgSrc: "01.webp" },
  { id: 2, name: "Green Tea", imgSrc: "02.webp" },
  { id: 3, name: "Black Tea", imgSrc: "03.webp" },
  { id: 4, name: "Herbal Tea", imgSrc: "04.webp" },
];

export const Category = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <h1 className="text-center text-4xl font-bold mt-10">Top Category</h1>
      <div className="flex gap-5 my-10">
        {categoryData.map((item) => (
          <div
            key={item.id}
            className="w-1/4 flex flex-col items-center p-3 rounded shadow-lg"
          >
            <img
              src={item.imgSrc}
              className="w-60 h-80 rounded"
              alt={item.name}
            />
            <h1 className="font-bold text-lg mt-3">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
