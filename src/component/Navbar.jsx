import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="h-16 flex items-center justify-between px-3 py-2 bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-emerald-400">AK</span>Store
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/product">Product</NavLink>
            </li>

            <li>
              <NavLink to="/testimonial">Testimonial</NavLink>
            </li>

            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Login */}
        <div className="hidden lg:block">
          <button className="py-2 px-4 border border-emerald-500 rounded hover:bg-emerald-500 transition">
            Log in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenu(true)}
            className="py-2 px-4 border border-emerald-500 rounded text-white"
          >
            <IoMenuOutline size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="fixed inset-0 bg-gray-900 lg:hidden flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-3 py-4 border-b border-gray-700">
              <h3 className="text-xl font-bold">
                <span className="text-emerald-400">AK</span>Store
              </h3>

              <button
                onClick={() => setMenu(false)}
                className="py-2 px-4 border border-emerald-500 rounded text-white"
              >
                <RxCross2 size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-y-8 text-lg font-medium">
                <li>
                  <NavLink to="/" onClick={() => setMenu(false)}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/product" onClick={() => setMenu(false)}>
                    Product
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/testimonial" onClick={() => setMenu(false)}>
                    Testimonial
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" onClick={() => setMenu(false)}>
                    About Us
                  </NavLink>
                </li>

                <li>
                  <button className="py-2 px-6 border border-emerald-500 rounded hover:bg-emerald-500 transition">
                    Log in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;