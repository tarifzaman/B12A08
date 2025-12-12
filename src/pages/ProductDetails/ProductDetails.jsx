import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FaDownload, FaStar, FaUserCheck } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast'; // Toast Notification
import useProducts from '../../hooks/useProducts';
import { useInstallContext } from '../../context/InstallContext';
import AppReviewChart from './ProductReviewChart';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const ProductDetails = () => {
    // 1. URL থেকে App ID নেওয়া
    const { id } = useParams();
    const appId = parseInt(id);

    // 2. Global State এবং Data Hooks
    const { products, loading, error } = useProducts();
    const { isInstalled, installApp } = useInstallContext();

    // 3. নির্দিষ্ট অ্যাপ খুঁজে বের করা
    const app = useMemo(() => {
        return products.find(p => p.id === appId);
    }, [products, appId]);

    // -- Loading and Error Handling --
    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    // App Not Found (Invalid ID or missing data)
    if (!app) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <ErrorMessage message={`App with ID ${id} not found.`} />
            </div>
        );
    }

    // 4. Install Button Handler
    const handleInstall = () => {
        if (!isInstalled(app.id)) {
            // Context ফাংশন কল করা
            installApp(app.id);
            // Success Toast দেখানো
            toast.success(`${app.title} installed successfully!`, { duration: 3000 });
        }
    };

    const installed = isInstalled(app.id);
    const downloadCount = app.downloads.toLocaleString();


    return (
        <div className="container mx-auto p-4 pt-8 min-h-[80vh]">
            <Toaster position="top-center" reverseOrder={false} />
            
            {/* Header / App Information */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* App Image (Left) */}
                    <div className="flex-shrink-0">
                        <img 
                            src={app.image} 
                            alt={app.title} 
                            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-xl border-4 border-gray-100" 
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/192/808080/FFFFFF?text=APP"; }}
                        />
                    </div>
                    
                    {/* App Details (Right) */}
                    <div className="flex-grow">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{app.title}</h1>
                        <p className="text-lg text-gray-600 mb-4">Developed by: <span className="font-semibold text-violet-600">{app.companyName}</span></p>

                        {/* Stats Row */}
                        <div className="flex items-center space-x-6 text-sm mb-6">
                            <div className="flex items-center space-x-1 text-yellow-500">
                                <FaStar />
                                <span className="font-bold">{app.ratingAvg.toFixed(1)} Rating</span>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-500">
                                <FaDownload />
                                <span>{downloadCount} Downloads</span>
                            </div>
                            <div className="text-gray-500">
                                <span>{app.reviews.toLocaleString()} Reviews</span>
                            </div>
                        </div>

                        {/* Install Button */}
                        <button
                            onClick={handleInstall}
                            disabled={installed}
                            className={`btn btn-lg ${installed ? 'btn-success' : 'bg-violet-600 text-white hover:bg-violet-700'} shadow-md transition-all duration-200`}
                        >
                            {installed ? (
                                <><FaUserCheck className="mr-2" /> Installed</>
                            ) : (
                                <><FaDownload className="mr-2" /> Install ({app.size.toFixed(1)} MB)</>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* App Review Chart Section */}
            <AppReviewChart ratings={app.ratings} />

            {/* App Description Section */}
            <div className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About the App</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{app.description}</p>
            </div>

        </div>
    );
};

export default ProductDetails;