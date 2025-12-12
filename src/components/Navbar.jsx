import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // আগের রিকোয়ারমেন্ট অনুযায়ী Fixed Positioning
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Main Navigation Bar */}
      <div className="navbar bg-white h-16 sm:h-20 container mx-auto px-4">
        {/* Navbar Start (Logo & Mobile Menu Trigger) */}
        <div className="navbar-start">
          {/* Mobile Hamburger Trigger (using DaisyUI dropdown structure for better functionality) */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/install"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : ""
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost text-xl sm:text-2xl font-bold normal-case"
          >
            {/* Logo Image */}
            <img
              src="/public/images/logo.png"
              alt="Hero App Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
            />
            Hero App
          </Link>
        </div>

        {/* Navbar Center (Desktop Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {/* Path Fixed: Home, Apps, Installation */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost text-primary border-b-2 border-primary"
                    : "btn btn-ghost"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost text-primary border-b-2 border-primary"
                    : "btn btn-ghost"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/install"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-ghost text-primary border-b-2 border-primary"
                    : "btn btn-ghost"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End (Button) */}
        <div className="navbar-end">
          {/* Path Fixed: Contribute Button (পার্পল রঙ) */}
          <a
            href="#"
            className="btn btn-sm lg:btn-md bg-violet-600 border-violet-600 hover:bg-violet-700 hover:border-violet-700 text-white shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-1 6-2.2 6-5.5.08-1.7-.2-3.3-1-4.9-2-.9-3-.4-4.5.7l-2.4 2c-.6-.2-1.2-.2-1.8 0l-2.4-2c-1.5-1.1-2.5-1.6-4.5-.7-1 1.6-1.1 3.2-1 4.9 0 3.3 3 4.5 6 5.5-1 1-1 2.2-.9 3.5v4"></path>
            </svg>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
