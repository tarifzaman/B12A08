import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-8">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4 text-xl text-gray-600">Loading data, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;