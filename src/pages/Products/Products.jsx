import React, { useState, useMemo } from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { FaSearch } from 'react-icons/fa';


const Products = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Live Search এবং Filtering Logic (Case-Insensitive)
  const filteredApps = useMemo(() => {
    if (!searchTerm) {
      return products; // সার্চ টার্ম না থাকলে সব অ্যাপ দেখাও
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // অ্যাপ টাইটেল দিয়ে ফিল্টার করা
    return products.filter(app => 
        app.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [products, searchTerm]);
  
  // -- Loading and Error Handling --
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  const totalAppsCount = products.length;
  const displayCount = filteredApps.length;


  return (
    <div className="container mx-auto p-4 pt-8 min-h-[80vh]">
      
      {/* Title Section (Matching Figma Design) */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Explore All Apps</h1>
        <p className="text-lg text-gray-600">Discover hundreds of productivity tools and digital experiences.</p>
      </div>

      {/* Search and States Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-base-200 rounded-lg shadow-inner">
        
        {/* Total Apps Count */}
        <div className="text-xl font-semibold text-gray-700 mb-4 md:mb-0">
          Showing <span className="text-primary">{displayCount}</span> of {totalAppsCount} Apps
        </div>
        
        {/* Search Bar */}
        <div className="form-control w-full md:w-1/3">
          <label className="input input-bordered flex items-center gap-2 bg-white shadow-md">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              className="grow"
              placeholder="Search apps by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* App Section */}
      {displayCount > 0 ? (
        // Apps Grid
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <ProductCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        // No App Found Message
        <div className="text-center py-20 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-700 mb-2">😔 No App Found</h3>
          <p className="text-lg text-gray-500">
            We couldn't find any app matching "{searchTerm}". Please try a different search term.
          </p>
        </div>
      )}

    </div>
  );
};

export default Products;