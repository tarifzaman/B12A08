// src/pages/Install/Install.jsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
// Check this relative path: '../../hooks/useProducts' is correct 
import useProducts from '../../hooks/useProducts'; 
import { useInstallContext } from '../../context/InstallContext';
// Check this relative path: '../../components/InstallationCard' is correct
import InstallationCard from './InstallationCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Install = () => { // Renamed the function component to Install for consistency
  const { products, loading, error } = useProducts();
  const { installedAppIds, sortOrder, setSort } = useInstallContext();

  // --- Data Filtering and Sorting Logic ---
  const installedApps = useMemo(() => {
    
    // 1. Filter: শুধু ইনস্টল করা অ্যাপগুলো বের করা
    let filtered = products.filter(app => installedAppIds.includes(app.id));

    // 2. Sort: সর্টিং করা
    if (sortOrder === 'downloads_desc') {
        filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === 'downloads_asc') {
        filtered.sort((a, b) => a.downloads - b.downloads);
    } 

    return filtered;
  }, [products, installedAppIds, sortOrder]);

  // --- Loading and Error Handling ---
  if (loading) return <LoadingSpinner />;
  
  if (error) return <ErrorMessage message={`Failed to load product data: ${error}`} />;
  
  const displayCount = installedApps.length;

  return (
    <div className="container mx-auto p-4 pt-8 min-h-[80vh]">

      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">My Installed Applications</h1>
        <p className="text-lg text-gray-600">
          You currently have <span className="font-bold text-violet-600">{displayCount}</span> apps installed.
        </p>
      </div>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-8">
        <div className="form-control">
            <label className="label">
                <span className="label-text font-semibold text-gray-700">Sort By Downloads:</span>
            </label>
            <select 
                className="select select-bordered w-full max-w-xs shadow-md"
                value={sortOrder}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="downloads_desc">Most Downloads (High to Low)</option>
                <option value="downloads_asc">Least Downloads (Low to High)</option>
            </select>
        </div>
      </div>


      {/* Installed Apps Grid */}
      {displayCount > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {installedApps.map(app => (
            <InstallationCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        // No Installed Apps Message
        <div className="text-center py-20 bg-white rounded-lg shadow-lg border border-dashed border-gray-300">
          <h3 className="text-3xl font-bold text-gray-700 mb-2">🚀 No Apps Installed Yet!</h3>
          <p className="text-lg text-gray-500">
            Go to the <Link to="/products" className="text-violet-600 font-semibold hover:underline">Apps Page</Link> to install your first app.
          </p>
        </div>
      )}

    </div>
  );
};

export default Install; // Export the Install component