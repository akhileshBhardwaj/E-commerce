import React from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 mt-2">
            Review your items before checkout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {/* Cart Item */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Product Image */}
                  <div className="w-full md:w-36 h-36 bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src="https://via.placeholder.com/200"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Fresh Organic Tomato
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      Fresh and healthy organic vegetables directly from farms.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl font-bold text-emerald-600">
                        ₹120
                      </span>

                      <span className="text-gray-400 line-through">₹150</span>
                    </div>
                  </div>

                  {/* Quantity + Remove */}
                  <div className="flex md:flex-col items-center justify-between gap-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button className="px-3 py-2 hover:bg-gray-100">
                        <Minus size={16} />
                      </button>

                      <span className="px-4 py-2 font-medium">1</span>

                      <button className="px-3 py-2 hover:bg-gray-100">
                        <Plus size={16} />
                      </button>
                    </div>

                    <button className="text-red-500 hover:text-red-600 transition">
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹360</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">₹20</span>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹380</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Proceed To Checkout
              </button>

              <button className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
