// src/App.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Fixed */}
      <Navbar />

      {/* Page Content: pt-20 এবং pb-20 Navbar/Footer এর জন্য জায়গা তৈরি করছে */}
      <div className="flex-grow pt-20 pb-20">
        <Outlet /> 
      </div>

      {/* Footer Fixed */}
      <Footer />
    </div>
  );
};

export default App;