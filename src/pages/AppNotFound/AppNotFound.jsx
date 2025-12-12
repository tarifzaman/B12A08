import React from 'react';
import { Link } from 'react-router-dom';

const AppNotFound = () => {
  return (
    <div className="container mx-auto p-12 text-center">
      <h2 className="text-4xl font-bold text-error mb-4">App Not Found (404)</h2>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  );
};

export default AppNotFound;