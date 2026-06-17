import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white mt-20">
      {/* Top Section */}
      <div className="w-[90%] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-green-500 mb-4">FreshMart</h2>
          <p className="text-gray-400 leading-7">
            Bringing farm-fresh vegetables and fruits directly to your doorstep.
            Quality products, affordable prices, and fast delivery.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-500 transition">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-500 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-500 transition">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-green-500 transition">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Categories</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-green-500 transition cursor-pointer">
              Fresh Vegetables
            </li>

            <li className="hover:text-green-500 transition cursor-pointer">
              Organic Foods
            </li>

            <li className="hover:text-green-500 transition cursor-pointer">
              Leafy Greens
            </li>

            <li className="hover:text-green-500 transition cursor-pointer">
              Seasonal Products
            </li>

            <li className="hover:text-green-500 transition cursor-pointer">
              Exotic Vegetables
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Subscribe Newsletter</h3>

          <p className="text-gray-400 mb-5">
            Get updates about new products and special offers.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-gray-800 outline-none border border-gray-700 focus:border-green-500"
            />

            <button className="bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="w-[90%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm text-center">
            © 2026 FreshMart. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-400">
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-green-500">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-green-500">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
