import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
              <div className="flex flex-col justify-center items-center h-screen">
        <img src='https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=740&t=st=1683029667~exp=1683030267~hmac=5ef55a17c55e1374ad04d9f89291960c37647a327b3abea4b83b0d678e8dd0bf' alt="404 not found" className="max-w-full h-auto mb-8" />
        <p className="text-white text-xl mb-4">Oops! Page not found.</p>
        <Link to="/">
           <button className='btn bg-lime-700 text-white'> Go back to homepage</button>
        </Link>
        </div>
        </div>
    );
};

export default ErrorPage;