import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-inner h-16 flex items-center justify-center">
      © {new Date().getFullYear()} Hero-App
    </footer>
  );
};

export default Footer;
