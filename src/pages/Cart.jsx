import React from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    removeCart,
    clearCart,
    cartCounter,
    cartTotalPrice,
  } = useCart();

  //console.log("thid id my Cart page: ", cart);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 mt-2">
            Review your selected products before checkout
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Cart Products */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Product Image */}
                  <div className="w-full md:w-36 h-36 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      Vegetables
                    </span>

                    <h2 className="text-xl font-semibold text-gray-800 mt-3">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-2xl font-bold text-emerald-600">
                        ₹{item.price}
                      </span>

                      <span className="text-gray-400 line-through">₹150</span>

                      <span className="text-green-600 text-sm font-medium">
                        20% OFF
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex md:flex-col items-center justify-between gap-4">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => removeCart(item.id)}
                        className="px-4 py-3 hover:bg-gray-100 transition"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="px-5 py-3 font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-3 hover:bg-gray-100 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button className="flex items-center gap-2 text-red-500 hover:text-red-600 transition">
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Order Summary */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Items </span>
                  <span>{cartCounter} </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-green-600"> ₹00</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹0</span>
                </div>

                <hr />

                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Subtotal</span>
                  <span>₹{cartTotalPrice}</span>
                </div>

                <div className="flex justify-between text-2xl font-bold text-emerald-600">
                  <span>Total</span>
                  <span>₹{cartTotalPrice}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                Proceed To Checkout
              </button>

              <button
              onClick={()=>(
                navigate('/product')
              )} 
               className="w-full mt-3 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                Continue Shopping
              </button>

              <div className="mt-5 p-4 rounded-xl bg-green-50 border border-green-100">
                <p className="text-sm text-green-700">
                  🎉 You saved ₹00 on this order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
