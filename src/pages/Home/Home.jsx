import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

// --- Stat Display Component (Purple Section-এর জন্য) ---
const StatDisplay = ({ title, value, subtitle }) => (
    <div className="text-center p-4">
        <div className="text-white text-base font-semibold opacity-80 mb-1">{title}</div>
        <div className="text-white text-5xl font-extrabold mb-1">{value}</div>
        <div className="text-white text-sm opacity-70">{subtitle}</div>
    </div>
);
// ----------------------------------------------------


const Home = () => {
  const { products, loading, error } = useProducts();
  
  // -- Loading and Error Handling --
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  // -- Top 8 Apps Display (Matching the image layout) --
  const topEightApps = products.slice(0, 8);


  return (
    <div className="mx-auto min-h-[80vh]">
      
      {/* 1. Top Banner Section (White/Gray part) */}
      <div className="text-center py-16 bg-white relative overflow-hidden shadow-md">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                We Build <span className="text-violet-600">Productive Apps</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex justify-center space-x-4 mb-16">
                {/* App Store / Play Store Buttons */}
                <a href="#" className="btn btn-outline border-gray-300 hover:border-gray-500 hover:bg-white text-gray-700 text-lg">
                    <FaGooglePlay className="text-xl" /> Google Play
                </a>
                <a href="#" className="btn btn-outline border-gray-300 hover:border-gray-500 hover:bg-white text-gray-700 text-lg">
                    <FaApple className="text-xl" /> App Store
                </a>
            </div>
            {/* Phone Mockup Image Placeholder */}
            <div className="flex justify-center -mb-20">
                {/* Note: Ensure /assets/images/phone_mockup.png exists */}
                <img 
                    src="/assets/images/phone_mockup.png"
                    alt="Mobile App Interface" 
                    className="w-1/2 max-w-sm rounded-3xl shadow-2xl" 
                />
            </div>
        </div>
      </div>
      
      {/* 2. States Section (Bottom Purple part - Static Data, as per Image) */}
      <div className="bg-violet-600 py-24 pt-48 relative z-10">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-4xl sm:text-5xl font-extrabold mb-12">
                Trusted By Millions, Built For You
            </h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                {/* Static Data from the Image */}
                <StatDisplay title="Total Downloads" value="29.6M" subtitle="21% More Than Last Month" />
                <StatDisplay title="Total Reviews" value="906K" subtitle="46% More Than Last Month" />
                <StatDisplay title="Active Apps" value="132+" subtitle="31 More Will Launch" />
            </div>
        </div>
      </div>

      {/* 3. Top Apps Section (Trending Apps) */}
      <div className="container mx-auto p-4 pt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Trending Apps</h2>
        <p className="text-gray-600 mb-10">Explore All Trending Apps on the Market developed by us</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Renders the top 8 apps using dynamic data */}
            {topEightApps.map(app => (
            <ProductCard key={app.id} app={app} />
            ))}
        </div>
        
        {/* Show All Button (Matching the image) */}
        <div className="text-center mt-10">
            <Link to="/products" className="btn btn-lg bg-violet-600 hover:bg-violet-700 text-white shadow-lg">
            Show All
            </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;