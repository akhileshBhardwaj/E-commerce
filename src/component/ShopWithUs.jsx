import React from "react";
import { FaTruck } from "react-icons/fa6";
import { SiInfinityfree } from "react-icons/si";
import { FaMedal } from "react-icons/fa6";

const ShopWithUs = () => {
  return (
    <section className="w-[90%] mx-auto py-14">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold underline underline-offset-8 mb-12">
        Why Shop With Us
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        
        {/* Card 1 */}
        <div className="w-full max-w-sm rounded-2xl bg-gray-900 px-8 py-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex justify-center">
            <FaTruck className="text-5xl text-green-400" />
          </div>

          <div className="mt-5 text-center">
            <h2 className="text-2xl font-semibold">Fast Delivery</h2>
            <p className="mt-3 text-gray-300">
              Get your orders delivered quickly and safely right to your
              doorstep.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-sm rounded-2xl bg-gray-900 px-8 py-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex justify-center">
            <SiInfinityfree className="text-5xl text-green-400" />
          </div>

          <div className="mt-5 text-center">
            <h2 className="text-2xl font-semibold">Free Shipping</h2>
            <p className="mt-3 text-gray-300">
              Enjoy free shipping on eligible orders with no hidden charges.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-sm rounded-2xl bg-gray-900 px-8 py-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex justify-center">
            <FaMedal className="text-5xl text-green-400" />
          </div>

          <div className="mt-5 text-center">
            <h2 className="text-2xl font-semibold">Best Quality</h2>
            <p className="mt-3 text-gray-300">
              We carefully select premium products to ensure the best quality
              for our customers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopWithUs;