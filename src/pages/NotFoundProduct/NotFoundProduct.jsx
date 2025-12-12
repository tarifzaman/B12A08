import React from 'react';

const NotFoundProduct = () => {
  return (
    <div className="container mx-auto p-12 text-center">
      <h2 className="text-4xl font-bold text-warning mb-4">Product Not Found!</h2>
      <p className="text-lg">We couldn't find any product matching your search criteria.</p>
    </div>
  );
};

export default NotFoundProduct;