import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorMessage = ({ message = "An unknown error occurred while loading data." }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-8">
      <div role="alert" className="alert alert-error max-w-lg shadow-2xl text-center">
        <FaExclamationTriangle className="w-8 h-8 mx-auto" />
        <div>
          <h3 className="font-bold text-xl">Error!</h3>
          <p className="text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;