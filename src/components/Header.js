// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Let's Begin..!</h1>
        <nav className="hidden md:flex">
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/courses" className="mr-4 hover:underline">Courses</Link>
          <Link to="/about" className="mr-4 hover:underline">About Us</Link>
          <Link to="/blog" className="mr-4 hover:underline">Blog</Link>
          <Link to="/faq" className="mr-4 hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
