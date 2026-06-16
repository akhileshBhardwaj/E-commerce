import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className=" h-16 flex items-center justify-between px-3 py-2 bg-gray-900 text-white fixed top-0 left-0 w-full z-50  ">
        <div>
          <h3 className="text-xl font-bold  ">
            <span className="text-emerald-400">AK</span>Store
          </h3>
        </div>

        <div className=" hidden lg:block">
          <ul className="flex items-center justify-center gap-x-5">
            <li>Home</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>About us</li>
          </ul>
        </div>

        <div className=" hidden lg:block">
          <button className="py-2 px-4 border border-emerald-500 rounded ">
            Log in
          </button>
        </div>

        {/* HamBurger Button */}
        <div className="  lg:hidden">
          <button
            onClick={() => setMenu(true)}
            className="py-2 px-4 border border-emerald-500 rounded text-white  "
          >
            <IoMenuOutline />
          </button>
        </div>

        {/* Mobile Menu start */}
        {menu && (
          <div className="  fixed inset-0 bg-gray-900 lg:hidden flex flex-col ">
            <div className="flex items-center justify-between px-3 py-2 ">
              <h3 className="text-xl font-bold  ">
                <span className="text-emerald-400">AK</span>Store
              </h3>

              <div className="  lg:hidden">
                <button
                  onClick={() => setMenu(false)}
                  className="py-2 px-4 border border-emerald-500 rounded text-white  "
                >
                  <RxCross2 />
                </button>
              </div>
            </div>

            <div className="items-start">
              <ul className="flex flex-col items-center justify-center gap-y-5">
                <li>Home</li>
                <li>Product</li>
                <li>Testimonial</li>
                <li>About us</li>
                <li>
                  <button className="py-2 px-4 border border-emerald-500 rounded ">
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
