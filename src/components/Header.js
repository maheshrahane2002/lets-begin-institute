// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Let's Begin..!</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <Link to="/" className="mt-2 md:mt-0 md:ml-6 hover:underline">Home</Link>
          <Link to="/courses" className="mt-2 md:mt-0 md:ml-6 hover:underline">Courses</Link>
          <Link to="/about" className="mt-2 md:mt-0 md:ml-6 hover:underline">About Us</Link>
          <Link to="/blog" className="mt-2 md:mt-0 md:ml-6 hover:underline">Blog</Link>
          <Link to="/faq" className="mt-2 md:mt-0 md:ml-6 hover:underline">FAQ</Link>
          <Link to="/contact" className="mt-2 md:mt-0 md:ml-6 hover:underline">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
