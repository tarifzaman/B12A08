// src/components/InstallationCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaStar, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast'; 
import { useInstallContext } from '../../context/InstallContext'; 

const InstallationCard = ({ app }) => {
  const { uninstallApp } = useInstallContext();
  const { id, title, image, downloads, ratingAvg } = app;

  const handleUninstall = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    uninstallApp(id);
    
    toast.error(`${title} uninstalled.`, { duration: 3000, icon: '🗑️' });
  };

  return (
    <Link to={`/product/${id}`} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <figure className="px-6 pt-6 relative">
        <img 
            src={image} 
            alt={title} 
            className="rounded-xl w-24 h-24 object-cover border-4 border-violet-500" 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/96/808080/FFFFFF?text=APP"; }} 
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 line-clamp-1">{title}</h2>
        <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <FaDownload className="text-info w-3 h-3" />
            <span>{downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-warning w-3 h-3" />
            <span>{ratingAvg.toFixed(1)}</span>
          </div>
        </div>
        <button 
            onClick={handleUninstall}
            className="btn btn-error btn-sm mt-4 w-full text-white hover:bg-red-700"
        >
            <FaTrash /> Uninstall
        </button>
      </div>
    </Link>
  );
};

export default InstallationCard;