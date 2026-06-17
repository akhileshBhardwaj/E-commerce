import React from "react";
import { Product } from "../data/Product";

const Features = () => {
  return (
    <section className="w-[90%] mx-auto py-12">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Fresh vegetables delivered directly from farms
          </p>
        </div>

        <button className="hidden md:block border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {Product.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
                {item.category}
              </span>

              <h3 className="mt-3 font-semibold text-gray-800 text-sm md:text-base line-clamp-2 min-h-[48px]">
                {item.name}
              </h3>

              <div className="flex items-center justify-between mt-3">
                <p className="text-lg font-bold text-green-600">
                  ₹{item.price}
                </p>
              </div>

              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="mt-8 text-center md:hidden">
        <button className="border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Features;
