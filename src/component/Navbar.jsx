import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Products" },
    { path: "/testimonial", label: "Testimonials" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="w-[90%] mx-auto h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer">
            <h2 className="text-2xl font-bold transition duration-300 hover:scale-105">
              <span className="text-emerald-500">AK</span>
              <span className="text-gray-800">Store</span>
            </h2>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300
                    ${
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

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button className="px-5 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 hover:scale-105 transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenu(true)}
            className="lg:hidden text-3xl text-gray-700"
          >
            <IoMenuOutline />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-[60]
        transition-transform duration-300 ease-in-out
        ${menu ? "translate-x-0" : "translate-x-full"}
        lg:hidden`}
      >
        {/* Header */}
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

        {/* Links */}
        <ul className="flex flex-col p-5 gap-6">
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

          <button className="mt-5 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
            Login
          </button>
        </ul>
      </div>

      {/* Overlay */}
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
