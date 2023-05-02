import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-base-300 text-white py-4">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p className=" text-sm">
          © 2023 Al-Faham. All rights reserved.
        </p>
        <ul className="flex space-x-4">
          <li>
            <Link
              className=" hover:text-orange-500 transition duration-150 ease-in-out"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
            to='/contact'
              className=" hover:text-orange-500 transition duration-150 ease-in-out"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className=" hover:text-orange-500 transition duration-150 ease-in-out"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
        </div>
    );
};

export default Footer;