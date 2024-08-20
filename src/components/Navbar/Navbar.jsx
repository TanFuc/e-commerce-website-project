// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { FaCaretDown, FaMoon, FaSun } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import MiniCart from "../MiniCart/MiniCart";

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];
const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];
const Navbar = ({ handleOrderPopup, handleLoginPopup }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      className={`bg-white ${
        darkMode ? "dark:bg-gray-900 dark:text-white" : ""
      } duration-200 relative`}
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and links */}
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              FUHI
            </a>
            {/* Menu items */}

            <div className="hidden sm:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500
                  dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div>
                    <ul
                      className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 opacity-0 
                    group-hover:opacity-100 
                    transition-opacity duration-200"
                    >
                      {DropdownLinks.map((data) => (
                        <li
                          key={data.id}
                          className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:bg-primary/20
                          inline-block w-full p-2"
                        >
                          <a
                            href={data.link}
                            className="block text-gray-700 dark:text-gray-200"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar px-5 py-2 border rounded-full dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* <Link to="/"> */}
            <div>
              <button
                className="relative p-3"
                onClick={handleOrderPopup}
                href="#Cart"
                id="miniCart"
              >
                <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
                <div
                  className="w-4 h-4 bg-red-500 text-white rounded-full absolute
            top-0 right-0 flex items-center justify-center text-xs"
                >
                  0
                </div>
              </button>
            </div>
            {/* </Link> */}
            {/* Dark Mode */}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 duration-200"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-800 dark:text-gray-200" />
              )}
            </button>

            {/* Login */}
            <div>
              <button className="relative p-1" onClick={handleLoginPopup}>
                <IoLogIn className="text-xl text-gray-600 dark:text-gray-400" />
                <div
                  className="w-4 h-4 text-white rounded-full absolute
            top-0 right-0 flex items-center justify-center text-xs"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/shop" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default Navbar;
