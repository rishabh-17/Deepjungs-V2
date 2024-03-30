import React, { useState } from "react";
import { Img } from "components"; // Assuming 'Img' is a custom component for images
import closeIcon from "../assets/closeIcon.png";
import searchIcon from "../assets/searchIcon.png"; // Updated to the correct import for SearchIcon
import userIcon from "../assets/userIcon.png"; // Updated to the correct import for UserIcon
import { logo } from "assets";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ blogPage, search, setsearch }) => {
  const [dropDown, setdropDown] = useState(false);
  const navigate = useNavigate();
  // Handles updating of the search input field
  const handleSearchChange = (event) => {
    setsearch(event.target.value);
  };

  // Clears the search input field
  const clearSearch = () => {
    setsearch("");
  };

  return (
    <header className="bg-white px-4 py-2 sm:px-6 lg:px-8 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        {/* Logo and Title */}
        <button
          className="flex items-center space-x-4"
          onClick={() => {
            navigate("/");
          }}
        >
          <Img src={logo} alt="DeepJung Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-gray-800">DeepJung</span>
        </button>

        {/* Navigation Links */}
        <nav className="flex space-x-10 sm:hidden">
          <button
            href="#"
            className="text-base font-medium text-gray-800 hover:text-indigo-600"
            onClick={() => {
              navigate("/blogs");
            }}
          >
            Blog
          </button>
          <button
            href="#"
            className="text-base font-medium text-gray-800 hover:text-indigo-600"
            onClick={() => {
              navigate("/chat");
            }}
          >
            Chat
          </button>
        </nav>

        {/* Search Input */}
        <div className="flex-1 max-w-lg sm:hidden">
          {blogPage && (
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-10 py-2 border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              />
              {search && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <img
                    src={closeIcon}
                    alt="Clear search"
                    className="h-5 w-5 text-gray-600"
                  />
                </button>
              )}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src={searchIcon}
                  alt="Search"
                  className="h-5 w-5 text-gray-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {!localStorage.getItem("token") && (
            <button
              className="px-5 py-2 text-sm font-medium text-[#ffffff] bg-[#B516D1] rounded-full hover:bg-[#F0DEF2] hover:text-white transition-colors duration-300 sm:hidden"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>
          )}
          {!localStorage.getItem("token") && (
            <button
              className="px-5 py-2 text-sm font-medium text-white bg-[#F0DEF2] rounded-full hover:bg-[#B516D1] transition-colors duration-300 sm:hidden"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </button>
          )}
          <img
            src={userIcon}
            alt="User profile"
            className="h-10 w-10 rounded-full sm:hidden"
            onClick={() => {
              console.log(dropDown);
              setdropDown(!dropDown);
            }}
          />
          <GiHamburgerMenu
            src={"userIcon"}
            alt="User profile"
            className="h-10 w-10 rounded-full hidden sm:inline"
            onClick={() => {
              console.log(dropDown);
              setdropDown(!dropDown);
            }}
          />
          {dropDown && (
            <>
              <div
                id="dropdown"
                className="absolute top-16 right-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                style={{ background: "#F0DEF2" }}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <button
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        if (!localStorage.getItem("token")) {
                          navigate("/login");
                        }
                        navigate("/chat");
                      }}
                    >
                      Chat with Morpheus
                    </button>
                  </li>
                  {!localStorage.getItem("token") && (
                    <>
                      <li>
                        <button
                          href="#"
                          className="hidden sm:block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button
                          href="#"
                          className="hidden sm:block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => {
                            navigate("/signup");
                          }}
                        >
                          Signup
                        </button>
                      </li>
                    </>
                  )}
                  <li>
                    <button
                      href="#"
                      className="hidden sm:block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        navigate("/blogs");
                      }}
                    >
                      Blogs
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="hidden sm:block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        navigate("/pricing");
                      }}
                    >
                      Pricing
                    </button>
                  </li>
                  {localStorage.getItem("token") && (
                    <li>
                      <button
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          localStorage.clear();
                          navigate("/login");
                        }}
                      >
                        Sign out
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
