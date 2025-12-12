import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4">
      <Link to="/" className="font-bold text-lg">Hero-App</Link>
      <div className="ml-auto space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
