import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-error mb-4">Oops!</h1>
        <p className="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg text-gray-600">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;