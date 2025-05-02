"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-800 cursor-pointer hover:text-blue-600 transition">
          <a href="/">ShopLogo</a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              className="text-gray-800 hover:text-blue-600 focus:outline-none transition"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Categories
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-visible z-50">
                <ul className="space-y-2 p-2">
                  <li>
                    <a
                      href="/category/men"
                      className="text-gray-700 hover:text-blue-600 block p-2 transition"
                    >
                      Men's Clothing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/women"
                      className="text-gray-700 hover:text-blue-600 block p-2 transition"
                    >
                      Women's Clothing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/jewelry"
                      className="text-gray-700 hover:text-blue-600 block p-2 transition"
                    >
                      Jewelry
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/electronics"
                      className="text-gray-700 hover:text-blue-600 block p-2 transition"
                    >
                      Electronics
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="border-2 border-gray-300 rounded-full p-2 pl-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Cart Icon with Badge */}
          <div className="relative cursor-pointer">
            <a
              href="/cart"
              className="relative text-xl text-gray-800 hover:text-blue-600 transition"
            >
              🛒
              {state.cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {state.cartItems.length}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
