import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { cartCounter } = useCart();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Products" },
    { path: "/testimonial", label: "Testimonials" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="w-[90%] mx-auto h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="cursor-pointer">
            <h2 className="text-2xl font-bold transition duration-300 hover:scale-105">
              <span className="text-emerald-500">AK</span>
              <span className="text-gray-800">Store</span>
            </h2>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300 ${
                      isActive
                        ? "text-emerald-500"
                        : "text-gray-700 hover:text-emerald-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Cart UI */}
            <NavLink
              to="/cart"
              className="relative p-3 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all duration-300"
            >
              <ShoppingCart size={22} />

              {/* Dummy Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium min-w-[20px] h-5 flex items-center justify-center rounded-full">
                {cartCounter}
              </span>
            </NavLink>

            {/* Login Button */}
            <button className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 hover:scale-105 transition-all duration-300">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(true)}
            className="lg:hidden text-3xl text-gray-700"
          >
            <IoMenuOutline />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenu(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          menu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">
            <span className="text-emerald-500">AK</span>Store
          </h2>

          <button
            onClick={() => setMenu(false)}
            className="text-2xl text-gray-700"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMenu(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium transition duration-300 ${
                    isActive
                      ? "text-emerald-500"
                      : "text-gray-700 hover:text-emerald-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Mobile Cart UI */}
          <NavLink
            to="/cart"
            onClick={() => setMenu(false)}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} />
              <span className="font-medium">Cart</span>
            </div>

            <span className="bg-red-500 text-white text-xs font-medium min-w-[22px] h-[22px] flex items-center justify-center rounded-full">
              {cartCounter}
            </span>
          </NavLink>

          {/* Login Button */}
          <button className="mt-2 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all duration-300">
            Login
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
