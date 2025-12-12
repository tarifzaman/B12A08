import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa'; // আইকনের জন্য

const ProductCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;

  // Note: Downloads will now show the raw number (e.g., 985000)

  return (
    // Link to App Details Page
    <Link to={`/product/${id}`} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <figure className="px-6 pt-6">
        {/* Placeholder Image - আপনার public/assets/images ফোল্ডারে অ্যাপের ছবি রাখতে হবে */}
        <img 
            src={image} 
            alt={title} 
            className="rounded-xl w-24 h-24 object-cover border-4 border-gray-100" 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/96/808080/FFFFFF?text=APP"; }} 
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 line-clamp-1">{title}</h2>
        <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
          
          {/* Downloads Count (এখন formatCount ছাড়া raw data দেখাবে) */}
          <div className="flex items-center space-x-1">
            <FaDownload className="text-info w-3 h-3" />
            {/* downloads.toLocaleString() ব্যবহার করলে কমা দেখাবে, যা দেখতে ভালো লাগবে */}
            <span>{downloads.toLocaleString()}</span> 
          </div>
          
          {/* Average Rating */}
          <div className="flex items-center space-x-1">
            <FaStar className="text-warning w-3 h-3" />
            <span>{ratingAvg.toFixed(1)}</span>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;