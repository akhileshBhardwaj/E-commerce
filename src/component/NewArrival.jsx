import React from "react";
import arrival from "../images/arrival.png";

const NewArrival = () => {
  return (
    <section className="w-[95%] max-w-7xl mx-auto my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 rounded-3xl bg-green-50 px-6 py-10 lg:px-16 lg:py-16">
        
        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={arrival}
            alt="New Arrival"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            New Collection
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            New Arrival
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed text-base sm:text-lg">
            Discover our latest arrivals, carefully selected to bring you the
            newest trends and highest quality products. From everyday essentials
            to exclusive finds, explore fresh collections designed to match your
            style and needs.
          </p>

          <button className="mt-8 rounded-full bg-green-500 px-8 py-3 font-medium text-white transition hover:bg-green-600">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;