import React, { useState } from "react";
import { CreditCard, MapPin, Phone, User, ShoppingBag } from "lucide-react";

const Checkout = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Success Screen
  if (orderSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-md w-full">
          <div className="text-7xl mb-4">🎉</div>

          <h1 className="text-3xl font-bold text-emerald-600">
            Order Successful!
          </h1>

          <p className="text-gray-600 mt-4">
            Thank you for your purchase. Your order has been placed successfully
            and will be delivered soon.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-8 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-[90%] max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>

          <p className="text-gray-500 mt-2">
            Complete your order by filling in the details below
          </p>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Customer Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>

              <div className="relative mt-2">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <div className="relative mt-2">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Shipping Address
          </h2>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Complete Address
              </label>

              <div className="relative mt-2">
                <MapPin
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <textarea
                  rows="4"
                  placeholder="Enter your complete address"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none resize-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Payment Method
          </h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-emerald-500 transition">
              <input type="radio" name="payment" />
              <CreditCard size={20} />
              Credit / Debit Card
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-emerald-500 transition">
              <input type="radio" name="payment" />
              UPI Payment
            </label>

            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-emerald-500 transition">
              <input type="radio" name="payment" />
              Cash On Delivery
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setOrderSuccess(true)}
            className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
