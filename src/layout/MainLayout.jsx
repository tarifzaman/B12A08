import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Layout Component for Sticky Footer
const MainLayout = () => {
  return (
    // min-h-screen: পুরো স্ক্রিন হাইট দখল করবে।
    // flex flex-col: ভেতরের উপাদানগুলিকে কলাম বরাবর সাজাবে।
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Header / Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      {/* flex-grow: এই অংশটি বাকি সমস্ত খালি জায়গা পূরণ করবে, 
         ফলে ফুটার নিচে চলে যাবে (Sticky Footer Effect)। */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;