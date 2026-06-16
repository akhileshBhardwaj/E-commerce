import React from "react";
import banner1 from "../images/banner-ad-1.jpg";
import banner2 from "../images/banner-ad-2.jpg";
import banner3 from "../images/banner-ad-3.jpg";

const DiscountTwoPart = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Large Banner */}
        <div
          className="h-[500px] rounded-lg overflow-hidden bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="text-white px-8">
            <h2 className="text-5xl font-bold mb-3">Items on SALE</h2>

            <p className="text-xl mb-6">Discounts up to 30%</p>

            <button className="border-b-2 font-bold text-xl">SHOP NOW</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Top Banner */}
          <div
            className="h-[238px] rounded-lg overflow-hidden bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="text-white px-8">
              <h2 className="text-4xl font-bold mb-3">Combo offers</h2>

              <p className="text-lg mb-4">Discounts up to 50%</p>

              <button className="border-b-2 font-bold">SHOP NOW</button>
            </div>
          </div>

          {/* Bottom Banner */}
          <div
            className="h-[238px] rounded-lg overflow-hidden bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="text-white px-8">
              <h2 className="text-4xl font-bold mb-3">Discount Coupons</h2>

              <p className="text-lg mb-4">Discounts up to 40%</p>

              <button className="border-b-2 font-bold">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountTwoPart;
