import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#0e172a] text-white shadow-2xl z-50">
      
    {/* Container for content */}
    <div className="flex justify-between items-center h-16 px-4 sm:px-8 lg:px-16">
      
      {/* Left Side: Logo/Brand Name */}
      <div className="flex items-center space-x-2">
        {/* Logo Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#00bfff]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 22v-20l18 10-18 10z"/>
        </svg>
        <span className="text-lg font-bold">HERO.IO</span>
      </div>

      {/* Center: Copyright */}
      <div className="text-gray-400 text-sm hidden md:block">
        © {new Date().getFullYear()} - All rights reserved
      </div>

      {/* Right Side: Social Links */}
      <div className="flex items-center space-x-3">
        <a title="X/Twitter" className="bg-white rounded-full p-1.5 h-6 w-6 flex items-center justify-center text-gray-900 hover:opacity-80 transition-opacity">
          {/* SVG Placeholder for X */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
        <a title="LinkedIn" className="bg-white rounded-full p-1.5 h-6 w-6 flex items-center justify-center text-gray-900 hover:opacity-80 transition-opacity">
          {/* SVG Placeholder for LinkedIn */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
        </a>
      </div>
    </div>
    
  </footer>
  );
};

export default Footer;
