import React from "react";
import { Product } from "../data/Product";

const Features = () => {
  return (
    <div className=" w-[90%] mx-auto my-10">
      <h1 className=" text-xl  md:text-3xl md:font-medium my-5 ">Featured Product</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 ">

        {Product.slice(0,6).map((item) => (
          <div
            className="flex flex-col p-3 gap-3 border rounded-2xl  "
            key={item.id}
          >
            <img src={item.image} alt={item.name} className="rounded" />
            <p className="text-center  md:text-md md:font-medium " >{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
